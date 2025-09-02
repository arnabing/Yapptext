import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function GET() {
  try {
    console.log('Testing minimal OpenAI Whisper transcription')
    
    // Download a small sample audio file (3 seconds of "Hello World")
    const sampleUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    console.log('Downloading sample audio...')
    
    const response = await fetch(sampleUrl, {
      signal: AbortSignal.timeout(10000) // 10 second timeout for download
    })
    
    if (!response.ok) {
      throw new Error('Failed to download sample audio')
    }
    
    const arrayBuffer = await response.arrayBuffer()
    // Take only first 500KB to ensure it's small
    const smallBuffer = arrayBuffer.slice(0, 500 * 1024)
    
    console.log('Sample size:', smallBuffer.byteLength, 'bytes')
    
    // Create OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      timeout: 60000, // 60 seconds
      maxRetries: 0
    })
    
    // Create a Blob from the buffer
    const blob = new Blob([smallBuffer], { type: 'audio/mpeg' })
    const file = new File([blob], 'sample.mp3', { 
      type: 'audio/mpeg',
      lastModified: Date.now()
    })
    
    console.log('Calling OpenAI Whisper API with small sample...')
    const startTime = Date.now()
    
    try {
      const transcription = await openai.audio.transcriptions.create({
        file: file as any,
        model: 'whisper-1',
      })
      
      const duration = Date.now() - startTime
      console.log(`Transcription completed in ${duration}ms`)
      
      return NextResponse.json({ 
        success: true,
        text: transcription.text,
        duration: duration,
        size: smallBuffer.byteLength
      })
    } catch (apiError: any) {
      const duration = Date.now() - startTime
      console.error(`API call failed after ${duration}ms:`, apiError)
      
      return NextResponse.json({ 
        error: 'OpenAI API call failed',
        duration: duration,
        details: apiError.message || 'Unknown error',
        cause: apiError.cause?.message || null
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error('Test error:', error)
    return NextResponse.json({ 
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}