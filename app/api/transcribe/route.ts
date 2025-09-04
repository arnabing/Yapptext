import { NextRequest, NextResponse } from 'next/server'
import { transcribeWithAssemblyAI, estimateAudioDuration } from '@/lib/assemblyai'
import { checkRateLimit, updateUsage } from '@/lib/rate-limit'

export const maxDuration = 60 // Maximum function duration: 60 seconds

export async function POST(request: NextRequest) {
  console.log('\n=== TRANSCRIBE ENDPOINT START ===')
  console.log('Timestamp:', new Date().toISOString())
  console.log('Headers:', Object.fromEntries(request.headers.entries()))
  
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'
    console.log('Client IP:', ip)

    // Check rate limit
    console.log('Checking rate limit...')
    const { allowed, remaining, minutesUsed } = await checkRateLimit(ip)
    console.log('Rate limit result:', { allowed, remaining, minutesUsed })
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Daily transcription limit reached. Please try again tomorrow.' },
        { status: 429 }
      )
    }

    // Parse form data
    console.log('Parsing form data...')
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    const useNanoModel = true // Always use nano model (3x faster)
    const enableSentiment = formData.get('enableSentiment') === 'true'
    const enableKeyPhrases = formData.get('enableKeyPhrases') === 'true'
    
    console.log('Form data parsed, audio file:', audioFile ? 'present' : 'missing')
    console.log('Options:', { useNanoModel, enableSentiment, enableKeyPhrases })
    
    if (!audioFile) {
      console.error('No audio file in form data')
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      )
    }

    console.log('Audio file details:', {
      name: audioFile.name,
      size: audioFile.size,
      type: audioFile.type,
      sizeInMB: (audioFile.size / 1024 / 1024).toFixed(2)
    })

    // Validate file size (20MB limit - well under OpenAI's 25MB limit)
    if (audioFile.size > 20 * 1024 * 1024) {
      console.error('File too large:', audioFile.size)
      return NextResponse.json(
        { error: 'File size must be less than 20MB' },
        { status: 400 }
      )
    }

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

    // Estimate duration for rate limiting
    const estimatedMinutes = estimateAudioDuration(audioFile.size)
    
    // Check if this would exceed the limit
    if (minutesUsed + estimatedMinutes > 20) {
      return NextResponse.json(
        { error: `This file would exceed your daily limit. You have ${remaining} minutes remaining.` },
        { status: 429 }
      )
    }

    console.log(`Processing audio file: ${audioFile.name}, size: ${(audioFile.size / 1024 / 1024).toFixed(2)}MB`)
    console.log('Environment check:')
    console.log('- ASSEMBLYAI_API_KEY exists:', !!process.env.ASSEMBLYAI_API_KEY)
    console.log('- ASSEMBLYAI_API_KEY length:', process.env.ASSEMBLYAI_API_KEY?.length)
    console.log('- ASSEMBLYAI_API_KEY prefix:', process.env.ASSEMBLYAI_API_KEY?.substring(0, 10))

    // Transcribe the audio with AssemblyAI
    console.log('Starting transcription with AssemblyAI...')
    const startTime = Date.now()
    const { text, utterances, chapters, duration, allWords, sentimentAnalysis, keyPhrases } = await transcribeWithAssemblyAI(audioFile, {
      useNanoModel,
      enableSentiment,
      enableKeyPhrases
    })
    const transcriptionTime = Date.now() - startTime
    console.log(`Transcription completed in ${transcriptionTime}ms`)
    
    // Update usage
    const newUsage = await updateUsage(ip, duration)
    
    // Calculate word count
    const words = text.trim().split(/\s+/).length

    return NextResponse.json({
      text,
      words,
      utterances,
      chapters,
      duration,
      allWords,
      sentimentAnalysis,
      keyPhrases,
      minutesUsed: newUsage,
      remainingMinutes: Math.max(0, 20 - newUsage)
    })
    
  } catch (error) {
    console.error('=== TRANSCRIPTION ERROR ===')
    console.error('Error type:', typeof error)
    console.error('Error instance:', error instanceof Error)
    console.error('Full error:', error)
    
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      console.error('Error name:', error.name)
    }
    
    // Check if it's an AssemblyAI API error
    if (error instanceof Error && error.message.includes('AssemblyAI')) {
      return NextResponse.json(
        { error: 'Transcription service temporarily unavailable. Please try again.' },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to transcribe audio. Please try again.' },
      { status: 500 }
    )
  } finally {
    console.log('=== TRANSCRIBE ENDPOINT END ===\n')
  }
}