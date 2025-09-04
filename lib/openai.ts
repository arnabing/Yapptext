import OpenAI, { toFile, fileFromPath } from 'openai'
import { writeFileSync, unlinkSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

let openaiClient: OpenAI | null = null

function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY
    
    console.log('=== OpenAI Client Debug ===')
    console.log('API Key exists:', !!apiKey)
    console.log('API Key length:', apiKey?.length)
    console.log('API Key prefix:', apiKey?.substring(0, 10))
    console.log('API Key suffix:', apiKey?.substring(apiKey.length - 4))
    console.log('Full API Key:', apiKey) // Temporary for debugging
    console.log('=========================')
    
    if (!apiKey) {
      throw new Error('Missing OPENAI_API_KEY environment variable')
    }
    
    openaiClient = new OpenAI({
      apiKey: apiKey,
      timeout: 120 * 1000, // 120 seconds timeout for uploads
      maxRetries: 0, // Disable retries to see the actual error faster
    })
    
    console.log('OpenAI client created successfully')
  }
  return openaiClient
}

export async function transcribeAudio(file: File): Promise<string> {
  console.log('\n=== TRANSCRIBE AUDIO FUNCTION START ===')
  console.log('File object type:', typeof file)
  console.log('File constructor name:', file.constructor.name)
  console.log('File properties:', {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: (file as any).lastModified
  })
  
  try {
    console.log('Getting OpenAI client...')
    const openai = getOpenAIClient()
    console.log('OpenAI client obtained successfully')
    
    console.log('Starting transcription for file:', file.name, 'size:', file.size, 'type:', file.type)
    
    // Try the simple approach - pass the File directly
    // The OpenAI SDK should handle File objects in Node.js environments
    console.log('Attempting direct file upload to OpenAI...')
    console.log('Creating transcription request...')
    
    const requestPayload = {
      file: file as any,  // Cast to any to bypass TypeScript checks
      model: 'whisper-1',
      language: 'en',
      response_format: 'text'
    }
    console.log('Request payload prepared (file object included)')
    
    console.log('Calling openai.audio.transcriptions.create()...')
    const transcriptionStartTime = Date.now()
    
    const transcription = await openai.audio.transcriptions.create(requestPayload as any)
    
    const transcriptionDuration = Date.now() - transcriptionStartTime
    console.log(`OpenAI API call completed in ${transcriptionDuration}ms`)
    console.log('Transcription response type:', typeof transcription)
    console.log('Transcription successful!')
    
    return (transcription as any).text || transcription as any
  } catch (error: any) {
    console.error('\n=== OPENAI TRANSCRIPTION ERROR ===')
    console.error('Error caught at:', new Date().toISOString())
    console.error('Error type:', typeof error)
    console.error('Error constructor:', error?.constructor?.name)
    console.error('Full error object:', JSON.stringify(error, null, 2))
    
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      console.error('Error name:', error.name)
    }
    
    // Log specific error properties
    if (error?.status) console.error('Error status:', error.status)
    if (error?.code) console.error('Error code:', error.code)
    if (error?.type) console.error('Error type:', error.type)
    if (error?.param) console.error('Error param:', error.param)
    if (error?.error) console.error('Error details:', error.error)
    if (error?.cause) console.error('Error cause:', error.cause)
    
    // If it's a connection error, try with toFile helper
    if (error.message && (error.message.includes('Connection') || error.message.includes('ECONNRESET'))) {
      console.log('\n=== RETRYING WITH toFile HELPER ===')
      try {
        const openai = getOpenAIClient()
        console.log('Converting file to buffer...')
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        console.log('Buffer created, size:', buffer.length)
        
        console.log('Using toFile helper...')
        const audioFile = await toFile(buffer, file.name || 'audio.mp3')
        console.log('toFile conversion complete')
        
        console.log('Retrying transcription with toFile result...')
        const transcription = await openai.audio.transcriptions.create({
          file: audioFile,
          model: 'whisper-1',
          language: 'en',
          response_format: 'text'
        })
        
        console.log('Retry successful!')
        return (transcription as any).text || transcription as any
      } catch (retryError: any) {
        console.error('=== RETRY FAILED ===')
        console.error('Retry error:', retryError)
        console.error('Retry error message:', retryError?.message)
        console.error('Retry error code:', retryError?.code)
      }
    }
    
    // Check for quota errors
    if (error?.code === 'insufficient_quota' || error?.message?.includes('quota')) {
      console.error('\n=== QUOTA ERROR DETECTED ===')
      console.error('The API key has exceeded its quota.')
      console.error('Please check: https://platform.openai.com/usage')
      throw new Error('OpenAI API quota exceeded. Please check your billing at https://platform.openai.com/usage')
    }
    
    throw new Error('Failed to transcribe audio')
  } finally {
    console.log('=== TRANSCRIBE AUDIO FUNCTION END ===\n')
  }
}

export function estimateAudioDuration(sizeInBytes: number): number {
  // Rough estimate: 1MB of MP3 ≈ 1 minute of audio
  // This is a very rough approximation
  const minutes = sizeInBytes / (1024 * 1024)
  return Math.ceil(minutes)
}