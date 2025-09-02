import { NextResponse } from 'next/server'
import OpenAI, { toFile } from 'openai'

export async function GET() {
  console.log('\n=== DIRECT WHISPER TEST ===')
  
  try {
    const apiKey = process.env.OPENAI_API_KEY
    console.log('API Key exists:', !!apiKey)
    console.log('API Key length:', apiKey?.length)
    
    // Create a tiny test audio buffer (silence)
    console.log('Creating test audio buffer...')
    // This is a minimal valid MP3 file (silence)
    const testAudioHex = 'fff3440c00000000000000494e464f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    const testBuffer = Buffer.from(testAudioHex, 'hex')
    
    console.log('Test buffer size:', testBuffer.length, 'bytes')
    
    const openai = new OpenAI({
      apiKey: apiKey,
      timeout: 30000, // 30 seconds
      maxRetries: 0
    })
    
    console.log('OpenAI client created')
    
    // Method 1: Using toFile
    console.log('\nMethod 1: Testing with toFile helper...')
    try {
      const audioFile = await toFile(testBuffer, 'test.mp3')
      console.log('toFile successful, file created')
      
      console.log('Calling Whisper API...')
      const startTime = Date.now()
      
      const transcription = await openai.audio.transcriptions.create({
        file: audioFile,
        model: 'whisper-1',
      })
      
      const duration = Date.now() - startTime
      console.log(`Whisper API call completed in ${duration}ms`)
      console.log('Transcription result:', transcription)
      
      return NextResponse.json({
        success: true,
        method: 'toFile',
        duration: duration,
        text: transcription.text || transcription,
        message: 'Whisper API is working!'
      })
      
    } catch (whisperError: any) {
      console.error('Whisper API Error:', whisperError)
      console.error('Error type:', whisperError?.constructor?.name)
      console.error('Error message:', whisperError?.message)
      console.error('Error code:', whisperError?.code)
      console.error('Error status:', whisperError?.status)
      
      // Try to parse the error
      if (whisperError?.code === 'insufficient_quota') {
        return NextResponse.json({
          error: 'QUOTA EXCEEDED',
          code: 'insufficient_quota',
          message: whisperError?.message,
          solution: 'Your OpenAI account has no credits. Please add credits at https://platform.openai.com/usage',
          apiKeyWorks: 'Yes, but no credits available'
        }, { status: 429 })
      }
      
      return NextResponse.json({
        error: 'Whisper API failed',
        details: whisperError?.message,
        code: whisperError?.code,
        status: whisperError?.status
      }, { status: 500 })
    }
    
  } catch (error: any) {
    console.error('Test error:', error)
    return NextResponse.json({ 
      error: 'Test failed',
      details: error?.message || 'Unknown error'
    }, { status: 500 })
  }
}