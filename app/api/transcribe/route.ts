import { NextRequest, NextResponse } from 'next/server'
import { submitTranscriptionJob, estimateAudioDuration } from '@/lib/assemblyai'
import { getCurrentUserId, getCurrentUserEmail, getClientIP } from '@/lib/auth'
import {
  canUserTranscribe,
  logUsage,
  ensureUserExists
} from '@/lib/usage'
import { TRANSCRIPTION_MODELS, isSampleFile } from '@/lib/constants'

export const maxDuration = 10 // Maximum function duration: 10 seconds (just for job submission)

export async function POST(request: NextRequest) {
  console.log('\n=== TRANSCRIBE ENDPOINT START ===')
  console.log('Timestamp:', new Date().toISOString())

  try {
    // Get user ID
    const userId = await getCurrentUserId()

    console.log('User ID:', userId || 'anonymous')

    // Parse form data
    console.log('Parsing form data...')
    const formData = await request.formData()

    // Get either the audio URL (from blob) or file (fallback)
    const audioUrl = formData.get('audioUrl') as string
    const audioFile = formData.get('audio') as File

    // Always use universal (maps to 'best' model in AssemblyAI)
    const enableSentiment = formData.get('enableSentiment') === 'true'
    const enableKeyPhrases = formData.get('enableKeyPhrases') === 'true'

    console.log('Form data parsed')
    console.log('Audio URL:', audioUrl ? 'present' : 'missing')
    console.log('Audio file:', audioFile ? 'present' : 'missing')
    console.log('Model: best (highest quality)')
    console.log('Options:', { enableSentiment, enableKeyPhrases })

    if (!audioUrl && !audioFile) {
      console.error('No audio URL or file in form data')
      return NextResponse.json(
        { error: 'No audio provided' },
        { status: 400 }
      )
    }

    // If using URL, we don't need to validate size (already done during blob upload)
    if (audioFile && !audioUrl) {
      console.log('Using direct file upload (fallback)')
      console.log('Audio file details:', {
        name: audioFile.name,
        size: audioFile.size,
        type: audioFile.type,
        sizeInMB: (audioFile.size / 1024 / 1024).toFixed(2)
      })

      // Validate file size for direct upload (4.5MB Vercel limit)
      if (audioFile.size > 4.5 * 1024 * 1024) {
        console.error('File too large for direct upload:', audioFile.size)
        return NextResponse.json(
          { error: 'File too large. Please use a file smaller than 4.5MB or upgrade for larger files.' },
          { status: 400 }
        )
      }
    }

    // Validate file type and check usage limits
    if (audioFile) {
      // Validate file type
      const validTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/wave', 'audio/x-wav',
                         'audio/m4a', 'audio/x-m4a', 'audio/webm', 'audio/mp4']

      if (!validTypes.includes(audioFile.type) &&
          !audioFile.name.match(/\.(mp3|wav|m4a|webm|mp4)$/i)) {
        return NextResponse.json(
          { error: 'Invalid file type. Please upload an audio file.' },
          { status: 400 }
        )
      }

      // Estimate duration for usage checking
      const estimatedMinutes = estimateAudioDuration(audioFile.size)

      // Check if user can transcribe this file
      const usageCheck = await canUserTranscribe(userId, estimatedMinutes, audioFile.name)

      if (!usageCheck.allowed) {
        return NextResponse.json(
          {
            error: usageCheck.reason,
            tier: usageCheck.tier,
            requiresUpgrade: true
          },
          { status: 429 }
        )
      }

      console.log(`Processing audio file: ${audioFile.name}, size: ${(audioFile.size / 1024 / 1024).toFixed(2)}MB`)
      console.log(`User tier: ${usageCheck.tier}, minutes remaining: ${usageCheck.minutesRemaining}`)
    } else if (audioUrl) {
      console.log(`Processing audio from URL: ${audioUrl}`)
    }

    const startTime = Date.now()

    // Submit transcription job asynchronously - returns immediately with transcript ID
    console.log('Submitting transcription job (best model)...')
    const transcriptId = await submitTranscriptionJob(audioUrl || audioFile, {
      model: 'universal',  // Always use best quality
      enableSentiment,
      enableKeyPhrases,
      isUrl: !!audioUrl
    })

    const submissionTime = Date.now() - startTime
    console.log(`Job submitted in ${submissionTime}ms with ID: ${transcriptId}`)

    // Store metadata for usage tracking (will log when job completes)
    // We'll handle usage logging in the status check endpoint when job completes
    const isSample = audioUrl ? isSampleFile(audioUrl) : false

    // Return transcript ID immediately for frontend polling
    return NextResponse.json({
      transcriptId,
      status: 'queued',
      submissionTime,
      model: 'universal',
      // Include metadata for status endpoint
      metadata: {
        userId: userId || null,
        isSample,
        audioUrl: audioUrl || null,
        fileName: audioFile?.name || null
      }
    })
  } catch (error: any) {
    console.error('=== TRANSCRIPTION ERROR ===')
    console.error('Error:', error)
    console.error('Stack:', error?.stack)

    return NextResponse.json(
      {
        error: error?.message || 'Transcription failed',
        details: process.env.NODE_ENV === 'development' ? error?.stack : undefined
      },
      { status: 500 }
    )
  }
}
