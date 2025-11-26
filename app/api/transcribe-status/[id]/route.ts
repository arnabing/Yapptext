import { NextRequest, NextResponse } from 'next/server'
import { getTranscriptionStatus } from '@/lib/assemblyai'
import { getCurrentUserId, getCurrentUserEmail } from '@/lib/auth'
import { logUsage, ensureUserExists } from '@/lib/usage'
import { isSampleFile } from '@/lib/constants'

export const maxDuration = 10 // Maximum function duration: 10 seconds

// In-memory storage for tracking which jobs have had usage logged
// In production, you'd use a database or cache like Redis
const usageLoggedJobs = new Set<string>()

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: transcriptId } = await params

  console.log('\n=== TRANSCRIBE STATUS CHECK ===')
  console.log('Timestamp:', new Date().toISOString())
  console.log('Transcript ID:', transcriptId)

  try {

    if (!transcriptId) {
      return NextResponse.json(
        { error: 'Transcript ID is required' },
        { status: 400 }
      )
    }

    // Get current status from AssemblyAI
    const result = await getTranscriptionStatus(transcriptId)

    console.log('Current status:', result.status)

    // If completed and we haven't logged usage yet, log it now
    if (result.status === 'completed' && result.transcript && !usageLoggedJobs.has(transcriptId)) {
      // Get metadata from query params (passed from frontend)
      const searchParams = request.nextUrl.searchParams
      const userId = searchParams.get('userId')
      const isSample = searchParams.get('isSample') === 'true'
      const audioUrl = searchParams.get('audioUrl')
      const model = searchParams.get('model') || 'universal'

      console.log('Logging usage:', { userId, isSample, audioUrl, model })

      // Log usage for authenticated users (but not for sample files)
      if (userId && result.transcript.duration > 0 && !isSample) {
        try {
          const email = await getCurrentUserEmail()
          if (email) {
            await ensureUserExists(userId, email)
            await logUsage(userId, result.transcript.duration, model as any)
            console.log(`Logged ${result.transcript.duration} minutes for user ${userId}`)

            // Mark this job as logged
            usageLoggedJobs.add(transcriptId)
          }
        } catch (error) {
          console.error('Error logging usage:', error)
          // Don't fail the request if usage logging fails
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
      // Still queued or processing
      return NextResponse.json({
        status: result.status
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
