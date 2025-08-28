import { NextRequest, NextResponse } from 'next/server'
import { transcribeAudio, estimateAudioDuration } from '@/lib/openai'
import { checkRateLimit, updateUsage } from '@/lib/rate-limit'

export const maxDuration = 60 // Maximum function duration: 60 seconds

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Check rate limit
    const { allowed, remaining, minutesUsed } = await checkRateLimit(ip)
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Daily transcription limit reached. Please try again tomorrow.' },
        { status: 429 }
      )
    }

    // Parse form data
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    
    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      )
    }

    // Validate file size
    if (audioFile.size > 25 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 25MB' },
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

    // Transcribe the audio
    const text = await transcribeAudio(audioFile)
    
    // Update usage
    const newUsage = await updateUsage(ip, estimatedMinutes)
    
    // Calculate word count
    const words = text.trim().split(/\s+/).length

    return NextResponse.json({
      text,
      words,
      duration: estimatedMinutes,
      minutesUsed: newUsage,
      remainingMinutes: Math.max(0, 20 - newUsage)
    })
    
  } catch (error) {
    console.error('Transcription error:', error)
    
    // Check if it's an OpenAI API error
    if (error instanceof Error && error.message.includes('OpenAI')) {
      return NextResponse.json(
        { error: 'Transcription service temporarily unavailable. Please try again.' },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to transcribe audio. Please try again.' },
      { status: 500 }
    )
  }
}