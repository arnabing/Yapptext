import { AssemblyAI } from 'assemblyai'

console.log('AssemblyAI lib loading, API key exists:', !!process.env.ASSEMBLYAI_API_KEY)
console.log('AssemblyAI API key length:', process.env.ASSEMBLYAI_API_KEY?.length)

let client: AssemblyAI | null = null

function getClient(): AssemblyAI {
  if (!client) {
    if (!process.env.ASSEMBLYAI_API_KEY) {
      throw new Error('ASSEMBLYAI_API_KEY is not configured')
    }
    client = new AssemblyAI({
      apiKey: process.env.ASSEMBLYAI_API_KEY
    })
  }
  return client
}

export interface Word {
  text: string
  start: number
  end: number
  confidence: number
  speaker?: string
}

export interface TranscriptSegment {
  speaker: string
  text: string
  start: number
  end: number
  words?: Word[]
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
  allWords?: Word[]
}

export async function transcribeWithAssemblyAI(audioInput: File | string, options?: {
  useNanoModel?: boolean
  enableSentiment?: boolean
  enableKeyPhrases?: boolean
  isUrl?: boolean
}): Promise<{
  text: string
  utterances: TranscriptSegment[]
  chapters: Chapter[]
  duration: number
  allWords: Word[]
  sentimentAnalysis?: any
  keyPhrases?: string[]
}> {
  console.log('transcribeWithAssemblyAI called')
  console.log('API Key in function:', !!process.env.ASSEMBLYAI_API_KEY)
  
  if (!process.env.ASSEMBLYAI_API_KEY) {
    throw new Error('ASSEMBLYAI_API_KEY is not configured')
  }

  try {
    const startTime = Date.now()
    
    // Prepare transcription options - optimized for speed
    let transcriptOptions: any = {
      speaker_labels: true, // Keep for speaker identification
      auto_chapters: false, // Disabled for speed
      language_detection: false, // Disabled for speed - assume English
      language_code: 'en', // Specify language to avoid detection overhead
      format_text: true,
      punctuate: true,
    }
    
    // Handle URL vs File input
    if (options?.isUrl && typeof audioInput === 'string') {
      console.log('Using audio URL:', audioInput)
      transcriptOptions.audio_url = audioInput
    } else if (audioInput instanceof File) {
      console.log('Converting file to buffer...')
      const buffer = await audioInput.arrayBuffer()
      console.log('- File size:', (buffer.byteLength / 1024 / 1024).toFixed(2), 'MB')
      transcriptOptions.audio = Buffer.from(buffer)
    } else {
      throw new Error('Invalid audio input: must be a URL string or File object')
    }
    
    console.log('Starting AssemblyAI transcription with options:')
    console.log('- Model:', options?.useNanoModel ? 'nano (fast)' : 'best (accurate)')
    console.log('- speaker_labels: true')
    console.log('- sentiment_analysis:', options?.enableSentiment || false)
    console.log('- auto_highlights:', options?.enableKeyPhrases || false)
    
    // Always use nano model (3x faster)
    transcriptOptions.speech_model = 'nano'
    
    // Add sentiment analysis if requested
    if (options?.enableSentiment) {
      transcriptOptions.sentiment_analysis = true
    }
    
    // Add key phrases extraction if requested
    if (options?.enableKeyPhrases) {
      transcriptOptions.auto_highlights = true
    }
    
    const client = getClient()
    // transcribe() already waits for completion, no need to call waitForCompletion
    const completedTranscript = await client.transcripts.transcribe(transcriptOptions)
    
    const uploadTime = Date.now() - startTime
    console.log('AssemblyAI response status:', completedTranscript.status)
    console.log(`Transcription completed in ${uploadTime}ms`)

  // Check for errors
  if (completedTranscript.status === 'error') {
    throw new Error(completedTranscript.error || 'Transcription failed')
  }

  // Map utterances to our format, including word-level data
  console.log('Processing utterances:', completedTranscript.utterances?.length || 0)
  const utterances: TranscriptSegment[] = completedTranscript.utterances?.map((utt: any) => ({
    speaker: `Speaker ${utt.speaker}`,
    text: utt.text,
    start: utt.start,
    end: utt.end,
    words: utt.words?.map((w: any) => ({
      text: w.text,
      start: w.start,
      end: w.end,
      confidence: w.confidence,
      speaker: `Speaker ${utt.speaker}`
    }))
  })) || []
  
  // Collect all words for word-level highlighting
  console.log('Total words in transcript:', completedTranscript.words?.length || 0)
  const allWords: Word[] = completedTranscript.words?.map((w: any) => ({
    text: w.text,
    start: w.start,
    end: w.end,
    confidence: w.confidence,
    speaker: w.speaker !== undefined ? `Speaker ${w.speaker}` : undefined
  })) || []

  // Map chapters to our format (empty since we disabled auto_chapters)
  const chapters: Chapter[] = [] // Disabled for better performance

    // Calculate duration in minutes
    const durationMs = completedTranscript.audio_duration || 0
    const duration = Math.ceil(durationMs / 60000)

    // Extract sentiment analysis results if available
    const sentimentAnalysis = completedTranscript.sentiment_analysis_results || null
    
    // Extract key phrases if available
    const keyPhrases = completedTranscript.auto_highlights_result?.results?.map(
      (highlight: any) => highlight.text
    ) || []
    
    console.log('Transcription successful!')
    console.log('- Text length:', completedTranscript.text?.length || 0, 'characters')
    console.log('- Utterances:', utterances.length)
    console.log('- Speakers detected:', new Set(utterances.map(u => u.speaker)).size)
    console.log('- Duration:', duration, 'minutes')
    console.log('- Sentiment analysis segments:', sentimentAnalysis?.length || 0)
    console.log('- Key phrases found:', keyPhrases.length)
    console.log(`- Processing took: ${uploadTime}ms`)
    
    return {
      text: completedTranscript.text || '',
      utterances,
      chapters,
      duration,
      allWords,
      sentimentAnalysis,
      keyPhrases
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