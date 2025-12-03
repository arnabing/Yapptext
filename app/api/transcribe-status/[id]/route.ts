import { NextRequest, NextResponse } from 'next/server'
import { getTranscriptionStatus } from '@/lib/assemblyai'
import { getCurrentUserEmail } from '@/lib/auth'
import { logUsage, ensureUserExists } from '@/lib/usage'
import { incrementGuestUsage } from '@/lib/guest-usage'
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
    // This is done in a non-blocking way to avoid connection pool issues
    if (result.status === 'completed' && result.transcript) {
      // Get metadata from query params (passed from frontend)
      const searchParams = request.nextUrl.searchParams
      const userId = searchParams.get('userId')
      const isSample = searchParams.get('isSample') === 'true'
      const audioUrl = searchParams.get('audioUrl')
      const model = searchParams.get('model') || 'universal'

      // Log usage for authenticated users (but not for sample files)
      // Wrap everything in try-catch to ensure the response is never blocked
      if (userId && result.transcript.duration > 0 && !isSample) {
        // Fire and forget - don't await, don't block response
        (async () => {
          try {
            // Quick timeout for database check to avoid blocking
            const timeoutPromise = new Promise((_, reject) =>
              setTimeout(() => reject(new Error('DB timeout')), 3000)
            )

            const checkPromise = db.usageLog.findUnique({
              where: { transcriptId: transcriptId },
              select: { id: true } // Only select id for faster query
            })

            const existingLog = await Promise.race([checkPromise, timeoutPromise]).catch(() => null)

            if (!existingLog) {
              console.log('Logging usage:', { userId, model, transcriptId })
              const email = await getCurrentUserEmail()
              if (email) {
                await ensureUserExists(userId, email)
                await logUsage(userId, result.transcript!.duration, model as any, transcriptId)
                console.log(`Logged ${result.transcript!.duration} minutes for user ${userId}`)
              }
            } else {
              console.log(`Usage already logged for transcript ${transcriptId}`)
            }
          } catch (error) {
            console.error('Non-blocking usage logging error:', error)
            // This is non-blocking, so we just log and continue
          }
        })()
      } else if (isSample) {
        console.log(`Skipping usage logging for sample file: ${audioUrl}`)
      } else if (!userId && result.transcript.duration > 0 && !isSample) {
        // Log usage for guest/anonymous users
        const guestId = request.cookies.get('yapp_guest_id')?.value
        if (guestId) {
          // Fire and forget - don't await, don't block response
          (async () => {
            try {
              const newUsage = await incrementGuestUsage(guestId, result.transcript!.duration)
              console.log(`Logged ${result.transcript!.duration} minutes for guest ${guestId} (total: ${newUsage})`)
            } catch (error) {
              console.error('Non-blocking guest usage logging error:', error)
            }
          })()
        } else {
          console.log('No guest ID cookie found, skipping guest usage logging')
        }
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
