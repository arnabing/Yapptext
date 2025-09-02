import { AssemblyAI } from 'assemblyai'

console.log('AssemblyAI lib loading, API key exists:', !!process.env.ASSEMBLYAI_API_KEY)
console.log('AssemblyAI API key length:', process.env.ASSEMBLYAI_API_KEY?.length)

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY!
})

export interface TranscriptSegment {
  speaker: string
  text: string
  start: number
  end: number
}

export interface Chapter {
  headline: string
  summary: string
  start: number
  end: number
}

export interface TranscriptionResult {
  text: string
  words: number
  utterances: TranscriptSegment[]
  chapters: Chapter[]
  duration: number
  minutesUsed: number
  remainingMinutes: number
}

export async function transcribeWithAssemblyAI(audioFile: File): Promise<{
  text: string
  utterances: TranscriptSegment[]
  chapters: Chapter[]
  duration: number
}> {
  console.log('transcribeWithAssemblyAI called')
  console.log('API Key in function:', !!process.env.ASSEMBLYAI_API_KEY)
  
  if (!process.env.ASSEMBLYAI_API_KEY) {
    throw new Error('ASSEMBLYAI_API_KEY is not configured')
  }

  try {
    // Convert File to buffer
    console.log('Converting file to buffer...')
    const buffer = await audioFile.arrayBuffer()
    const base64 = Buffer.from(buffer).toString('base64')
    const dataUrl = `data:${audioFile.type};base64,${base64}`

    console.log('Calling AssemblyAI API...')
    // Upload and transcribe with speaker diarization
    const transcript = await client.transcripts.transcribe({
      audio: dataUrl,
      speaker_labels: true,
      auto_chapters: true,
      language_detection: true,
      format_text: true,
      punctuate: true
      // Don't specify language_code when using language_detection
    })
    
    console.log('AssemblyAI response status:', transcript.status)

  // Wait for transcription to complete
  if (transcript.status === 'error') {
    throw new Error(transcript.error || 'Transcription failed')
  }

  // Map utterances to our format
  const utterances: TranscriptSegment[] = transcript.utterances?.map(utt => ({
    speaker: `Speaker ${utt.speaker}`,
    text: utt.text,
    start: utt.start,
    end: utt.end
  })) || []

  // Map chapters to our format
  const chapters: Chapter[] = transcript.chapters?.map(chapter => ({
    headline: chapter.headline,
    summary: chapter.summary,
    start: chapter.start,
    end: chapter.end
  })) || []

    // Calculate duration in minutes
    const durationMs = transcript.audio_duration || 0
    const duration = Math.ceil(durationMs / 60000)

    console.log('Transcription successful, returning results')
    return {
      text: transcript.text || '',
      utterances,
      chapters,
      duration
    }
  } catch (error) {
    console.error('AssemblyAI transcription error:', error)
    throw error
  }
}

export function estimateAudioDuration(fileSize: number): number {
  // Estimate based on typical bitrate (128 kbps)
  // 128 kbps = 16 KB/s = 960 KB/min
  const estimatedMinutes = Math.ceil(fileSize / (960 * 1024))
  return Math.max(1, estimatedMinutes)
}