import OpenAI from 'openai'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable')
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function transcribeAudio(file: File): Promise<string> {
  try {
    const transcription = await openai.audio.transcriptions.create({
      file: file,
      model: 'whisper-1',
      language: 'en',
    })
    
    return transcription.text
  } catch (error) {
    console.error('OpenAI transcription error:', error)
    throw new Error('Failed to transcribe audio')
  }
}

export function estimateAudioDuration(sizeInBytes: number): number {
  // Rough estimate: 1MB of MP3 ≈ 1 minute of audio
  // This is a very rough approximation
  const minutes = sizeInBytes / (1024 * 1024)
  return Math.ceil(minutes)
}