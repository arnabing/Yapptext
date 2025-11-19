import { NextRequest, NextResponse } from 'next/server'
import { transcribeWithAssemblyAI, estimateAudioDuration } from '@/lib/assemblyai'
import { getCurrentUserId, getCurrentUserEmail, getClientIP, hashIP } from '@/lib/auth'
import {
  canUserTranscribe,
  logUsage,
  ensureUserExists,
  hasAnonymousIPUsedFreeTier,
  markAnonymousIPUsed
} from '@/lib/usage'
import { TRANSCRIPTION_MODELS } from '@/lib/constants'

export const maxDuration = 60 // Maximum function duration: 60 seconds

export async function POST(request: NextRequest) {
  console.log('\n=== TRANSCRIBE ENDPOINT START ===')
  console.log('Timestamp:', new Date().toISOString())

  try {
    // Get user ID and IP address
    const userId = await getCurrentUserId()
    const ip = getClientIP(request)
    const hashedIP = await hashIP(ip)

    console.log('User ID:', userId || 'anonymous')

    // Check if anonymous user has already used their free transcript
    if (!userId && hasAnonymousIPUsedFreeTier(hashedIP)) {
      return NextResponse.json(
        {
          error: 'You\'ve used your free transcript. Sign up to get 60 minutes per month!',
          requiresAuth: true
        },
        { status: 429 }
      )
    }

    // Parse form data
    console.log('Parsing form data...')
    const formData = await request.formData()

    // Get either the audio URL (from blob) or file (fallback)
    const audioUrl = formData.get('audioUrl') as string
    const audioFile = formData.get('audio') as File

    // Get model selection
    const selectedModel = (formData.get('model') as string) || TRANSCRIPTION_MODELS.UNIVERSAL
    const enableSentiment = formData.get('enableSentiment') === 'true'
    const enableKeyPhrases = formData.get('enableKeyPhrases') === 'true'

    console.log('Form data parsed')
    console.log('Audio URL:', audioUrl ? 'present' : 'missing')
    console.log('Audio file:', audioFile ? 'present' : 'missing')
    console.log('Model:', selectedModel)
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

    // Single model transcription - no reconciliation
    console.log(`Starting ${selectedModel} transcription...`)
    const result = await transcribeWithAssemblyAI(audioUrl || audioFile, {
      model: selectedModel as 'nano' | 'universal',
      enableSentiment,
      enableKeyPhrases,
      isUrl: !!audioUrl
    })

    const processingTime = Date.now() - startTime
    console.log(`Transcription completed in ${processingTime}ms`)

    // Log usage for authenticated users
    if (userId && result.duration > 0) {
      try {
        const email = await getCurrentUserEmail()
        if (email) {
          await ensureUserExists(userId, email)
          await logUsage(userId, result.duration, selectedModel as any)
          console.log(`Logged ${result.duration} minutes for user ${userId}`)
        }
      } catch (error) {
        console.error('Error logging usage:', error)
        // Don't fail the request if usage logging fails
      }
    }

    // Mark anonymous IP as used
    if (!userId) {
      markAnonymousIPUsed(hashedIP)
      console.log('Marked anonymous IP as used')
    }

    // Return successful response
    return NextResponse.json({
      text: result.text,
      utterances: result.utterances,
      chapters: result.chapters,
      duration: result.duration,
      allWords: result.allWords,
      sentimentAnalysis: result.sentimentAnalysis,
      keyPhrases: result.keyPhrases,
      confidenceMetrics: result.confidenceMetrics,
      processingTime,
      model: selectedModel
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
