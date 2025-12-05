import { NextRequest, NextResponse } from 'next/server'
import { getTranscriptionStatus } from '@/lib/assemblyai'
import { getCurrentUserId, getCurrentUserEmail } from '@/lib/auth'
import { logUsage, ensureUserExists } from '@/lib/usage'
import { isSampleFile } from '@/lib/constants'
import { db } from '@/lib/db'

export const maxDuration = 10 // Maximum function duration: 10 seconds

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: transcriptId } = await params

  console.log('\n=== TRANSCRIBE STATUS CHECK ===')
  console.log('Timestamp:', new Date().toISOString())
  console.log('Transcript ID:', transcriptId)

  try {
    // Require authentication
    const userId = await getCurrentUserId()

    if (!userId) {
      console.log('Unauthorized: No user ID')
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    if (!transcriptId) {
      return NextResponse.json(
        { error: 'Transcript ID is required' },
        { status: 400 }
      )
    }

    // Get current status from AssemblyAI
    const result = await getTranscriptionStatus(transcriptId)

    console.log('Current status:', result.status)

    // If completed, log usage synchronously (required for accurate tracking)
    if (result.status === 'completed' && result.transcript) {
      // Get metadata from query params (passed from frontend)
      const searchParams = request.nextUrl.searchParams
      const audioUrl = searchParams.get('audioUrl')
      const model = searchParams.get('model') || 'universal'

      // Server-side sample validation - don't trust query param
      const isSample = audioUrl ? isSampleFile(audioUrl) : false

      // Log usage for authenticated users (but not for sample files)
      if (result.transcript.duration > 0 && !isSample) {
        try {
          // Check if already logged (deduplication for serverless environments)
          const existingLog = await db.usageLog.findUnique({
            where: { transcriptId: transcriptId },
            select: { id: true }
          })

          if (!existingLog) {
            console.log('Logging usage:', { userId, model, transcriptId })
            const email = await getCurrentUserEmail()
            if (email) {
              await ensureUserExists(userId, email)
              await logUsage(userId, result.transcript.duration, model as any, transcriptId)
              console.log(`Logged ${result.transcript.duration} minutes for user ${userId}`)
            }
          } else {
            console.log(`Usage already logged for transcript ${transcriptId}`)
          }
        } catch (error) {
          console.error('Usage logging error:', error)
          // Log the error but still return the transcript
        }
      } else if (isSample) {
        console.log(`Skipping usage logging for sample file: ${audioUrl}`)
      }
    }

    // Return status and transcript data
    if (result.status === 'completed' && result.transcript) {
      return NextResponse.json({
        status: 'completed',
        text: result.transcript.text,
        utterances: result.transcript.utterances,
        chapters: result.transcript.chapters,
        duration: result.transcript.duration,
        allWords: result.transcript.allWords,
        sentimentAnalysis: result.transcript.sentimentAnalysis,
        keyPhrases: result.transcript.keyPhrases,
        confidenceMetrics: result.transcript.confidenceMetrics,
      })
    } else if (result.status === 'error') {
      return NextResponse.json({
        status: 'error',
        error: result.error || 'Transcription failed'
      }, { status: 500 })
    } else {
      // Still queued or processing - include percent complete for accurate progress bar
      return NextResponse.json({
        status: result.status,
        percentComplete: result.percentComplete || 0
      })
    }
  } catch (error: any) {
    console.error('=== STATUS CHECK ERROR ===')
    console.error('Error:', error)
    console.error('Stack:', error?.stack)

    return NextResponse.json(
      {
        error: error?.message || 'Failed to check transcription status',
        details: process.env.NODE_ENV === 'development' ? error?.stack : undefined
      },
      { status: 500 }
    )
  }
}
