import { NextRequest, NextResponse } from 'next/server'
import OpenAI, { toFile } from 'openai'

export async function POST(request: NextRequest) {
  try {
    console.log('Test transcribe endpoint called')
    
    // Get the form data
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    
    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
    }
    
    console.log('File received:', audioFile.name, 'size:', audioFile.size, 'type:', audioFile.type)
    
    // Test direct OpenAI call with toFile helper
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      timeout: 60 * 1000,
    })
    
    // Convert to buffer
    const bytes = await audioFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    // Use toFile with explicit filename
    const file = await toFile(buffer, audioFile.name || 'audio.mp3')
    
    console.log('Calling OpenAI Whisper API...')
    
    const transcription = await openai.audio.transcriptions.create({
      file: file,
      model: 'whisper-1',
      language: 'en',
    })
    
    console.log('Transcription successful!')
    
    return NextResponse.json({ 
      success: true,
      text: transcription.text,
      filename: audioFile.name,
      size: audioFile.size
    })
  } catch (error) {
    console.error('Test transcribe error:', error)
    return NextResponse.json({ 
      error: 'Transcription failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}