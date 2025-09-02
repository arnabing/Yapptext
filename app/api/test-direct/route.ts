import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, createReadStream, unlinkSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'
import FormData from 'form-data'

export async function POST(request: NextRequest) {
  const tempPath = join(tmpdir(), `${Date.now()}-audio.mp3`)
  
  try {
    console.log('Test direct API call to OpenAI')
    
    // Get the form data
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    
    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
    }
    
    console.log('File received:', audioFile.name, 'size:', audioFile.size, 'type:', audioFile.type)
    
    // Save file temporarily
    const bytes = await audioFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    writeFileSync(tempPath, buffer)
    console.log('Saved to:', tempPath)
    
    // Create form data for OpenAI
    const form = new FormData()
    form.append('file', createReadStream(tempPath), audioFile.name)
    form.append('model', 'whisper-1')
    form.append('language', 'en')
    
    console.log('Making direct API call to OpenAI...')
    
    // Direct API call with extended timeout
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        ...form.getHeaders()
      },
      body: form as any,
      signal: AbortSignal.timeout(120000) // 2 minute timeout
    })
    
    console.log('Response status:', response.status)
    
    if (!response.ok) {
      const error = await response.text()
      console.error('OpenAI API error:', error)
      throw new Error(`OpenAI API error: ${response.status}`)
    }
    
    const data = await response.json()
    console.log('Transcription successful!')
    
    return NextResponse.json({ 
      success: true,
      text: data.text,
      filename: audioFile.name,
      size: audioFile.size
    })
  } catch (error) {
    console.error('Direct API error:', error)
    return NextResponse.json({ 
      error: 'Transcription failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  } finally {
    try {
      unlinkSync(tempPath)
      console.log('Cleaned up temp file')
    } catch (e) {
      console.warn('Failed to clean up temp file:', e)
    }
  }
}