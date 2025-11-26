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
  model?: 'nano' | 'universal'  // Default: 'universal' (standard quality)
  enableSentiment?: boolean
  enableKeyPhrases?: boolean
  isUrl?: boolean
  speakersExpected?: number
}): Promise<{
  text: string
  utterances: TranscriptSegment[]
  chapters: Chapter[]
  duration: number
  allWords: Word[]
  sentimentAnalysis?: any
  keyPhrases?: string[]
  confidenceMetrics?: {
    averageConfidence: number
    lowConfidenceWords: Array<{word: string, confidence: number, timestamp: number}>
  }
}> {
  console.log('=== ASSEMBLYAI TRANSCRIPTION START ===')
  console.log('- Input type:', typeof audioInput)
  console.log('- Is URL:', options?.isUrl || false)
  console.log('- Model:', options?.model || 'universal')
  console.log('- API key exists:', !!process.env.ASSEMBLYAI_API_KEY)
  console.log('- API key length:', process.env.ASSEMBLYAI_API_KEY?.length)
  console.log('- API key first chars:', process.env.ASSEMBLYAI_API_KEY?.substring(0, 8) + '...')

  if (!process.env.ASSEMBLYAI_API_KEY) {
    throw new Error('ASSEMBLYAI_API_KEY is not configured')
  }

  try {
    const startTime = Date.now()

    // Select model: universal (standard) or nano (fastest/cheapest)
    // Both support speaker labels and multi-speaker detection
    const selectedModel = options?.model || 'universal'

    // Prepare transcription options
    let transcriptOptions: any = {
      speaker_labels: true,  // Both models support speaker detection
      speech_model: selectedModel,  // Correct parameter: singular string, not array
      language_code: 'en',
      format_text: true,
      punctuate: true,
    }
    
    // Handle URL vs File input - SDK expects 'audio' for BOTH URLs and buffers
    if (options?.isUrl && typeof audioInput === 'string') {
      console.log('Using audio URL:', audioInput)
      transcriptOptions.audio = audioInput // Use 'audio' for URLs (SDK handles it)
    } else if (audioInput instanceof File) {
      console.log('Converting file to buffer...')
      const buffer = await audioInput.arrayBuffer()
      console.log('- File size:', (buffer.byteLength / 1024 / 1024).toFixed(2), 'MB')
      transcriptOptions.audio = Buffer.from(buffer) // Use 'audio' for buffers
    } else {
      throw new Error('Invalid audio input: must be a URL string or File object')
    }
    
    console.log('Starting AssemblyAI transcription with options:')
    console.log(`- Model: ${selectedModel}${selectedModel === 'universal' ? ' (Standard quality, multi-language)' : ' (Fast & cheap)'}`)
    console.log('- speaker_labels: true')
    console.log('- language_code: en')
    console.log('- sentiment_analysis:', options?.enableSentiment || false)
    console.log('- auto_highlights:', options?.enableKeyPhrases || false)
    if (options?.speakersExpected) {
      console.log('- speakers_expected:', options.speakersExpected)
    }

    // Add optional features if requested
    if (options?.enableSentiment) {
      transcriptOptions.sentiment_analysis = true
    }

    if (options?.enableKeyPhrases) {
      transcriptOptions.auto_highlights = true
    }

    // Hint expected number of speakers if provided (diarization hint)
    if (options?.speakersExpected && Number.isFinite(options.speakersExpected)) {
      transcriptOptions.speakers_expected = options.speakersExpected
    }

    const client = getClient()
    // transcribe() already polls until completed - no need for waitUntilReady
    const completedTranscript = await client.transcripts.transcribe(transcriptOptions)
    
    const uploadTime = Date.now() - startTime
    console.log('=== ASSEMBLYAI TRANSCRIPTION SUCCESS ===')
    console.log('- Status:', completedTranscript.status)
    console.log(`- Total processing time: ${uploadTime}ms`)

  // Check for errors
  if (completedTranscript.status === 'error') {
    throw new Error(completedTranscript.error || 'Transcription failed')
  }

  // Debug logging to understand the response structure
  console.log('Transcript response keys:', Object.keys(completedTranscript))
  console.log('Has utterances?', !!completedTranscript.utterances)
  console.log('Utterances count:', completedTranscript.utterances?.length || 0)
  console.log('Has words?', !!completedTranscript.words)
  console.log('Words count:', completedTranscript.words?.length || 0)
  
  // Map utterances to our format, including word-level data
  console.log('Processing utterances:', completedTranscript.utterances?.length || 0)
  if (completedTranscript.utterances && completedTranscript.utterances.length > 0) {
    console.log('First utterance:', {
      speaker: completedTranscript.utterances[0].speaker,
      text: completedTranscript.utterances[0].text?.substring(0, 50) + '...',
      hasWords: !!completedTranscript.utterances[0].words,
      wordsCount: completedTranscript.utterances[0].words?.length || 0
    })
    // Check for multiple speakers
    const speakers = new Set(completedTranscript.utterances.map((u: any) => u.speaker))
    console.log('Unique speakers found:', Array.from(speakers))
  }
  
  // Both Universal and Slam-1 support multi-speaker detection
  // Map utterances to our format with proper speaker labels
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
    
    // Calculate confidence metrics
    let confidenceMetrics = undefined
    if (allWords.length > 0) {
      const confidences = allWords.map(w => w.confidence).filter(c => c !== undefined)
      const averageConfidence = confidences.length > 0 
        ? confidences.reduce((a, b) => a + b, 0) / confidences.length 
        : 0
      
      const lowConfidenceWords = allWords
        .filter(w => w.confidence < 0.8)
        .map(w => ({
          word: w.text,
          confidence: w.confidence,
          timestamp: w.start
        }))
        .slice(0, 50) // Limit to first 50 for performance
      
      confidenceMetrics = {
        averageConfidence,
        lowConfidenceWords
      }
      
      console.log('- Average confidence:', averageConfidence.toFixed(3))
      console.log('- Low confidence words:', lowConfidenceWords.length)
    }
    
    return {
      text: completedTranscript.text || '',
      utterances,
      chapters,
      duration,
      allWords,
      sentimentAnalysis,
      keyPhrases,
      confidenceMetrics
    }
  } catch (error: any) {
    console.error('=== ASSEMBLYAI TRANSCRIPTION ERROR ===')
    console.error('- Error type:', error?.constructor?.name)
    console.error('- Error message:', error?.message)
    console.error('- Error details:', error)
    
    // Check for common issues
    if (error?.message?.includes('Invalid API key')) {
      console.error('⚠️  API Key Issue: Check that your ASSEMBLYAI_API_KEY is correct')
      console.error('   - No quotes around the key')
      console.error('   - No extra spaces')
      console.error('   - Key should be about 32 characters')
    }
    
    throw error
  }
}

/**
 * Submit a transcription job to AssemblyAI without waiting for completion
 * Returns the transcript ID immediately for frontend polling
 */
export async function submitTranscriptionJob(audioInput: File | string, options?: {
  model?: 'nano' | 'universal'
  enableSentiment?: boolean
  enableKeyPhrases?: boolean
  isUrl?: boolean
  speakersExpected?: number
}): Promise<string> {
  console.log('=== SUBMITTING ASSEMBLYAI TRANSCRIPTION JOB ===')
  console.log('- Input type:', typeof audioInput)
  console.log('- Is URL:', options?.isUrl || false)
  console.log('- Model:', options?.model || 'universal')

  if (!process.env.ASSEMBLYAI_API_KEY) {
    throw new Error('ASSEMBLYAI_API_KEY is not configured')
  }

  try {
    const selectedModel = options?.model || 'universal'

    // Prepare transcription options
    let transcriptOptions: any = {
      speaker_labels: true,
      speech_model: selectedModel,
      language_code: 'en',
      format_text: true,
      punctuate: true,
    }

    // Handle URL vs File input
    if (options?.isUrl && typeof audioInput === 'string') {
      console.log('Using audio URL:', audioInput)
      transcriptOptions.audio = audioInput
    } else if (audioInput instanceof File) {
      console.log('Converting file to buffer...')
      const buffer = await audioInput.arrayBuffer()
      console.log('- File size:', (buffer.byteLength / 1024 / 1024).toFixed(2), 'MB')
      transcriptOptions.audio = Buffer.from(buffer)
    } else {
      throw new Error('Invalid audio input: must be a URL string or File object')
    }

    // Add optional features
    if (options?.enableSentiment) {
      transcriptOptions.sentiment_analysis = true
    }

    if (options?.enableKeyPhrases) {
      transcriptOptions.auto_highlights = true
    }

    if (options?.speakersExpected && Number.isFinite(options.speakersExpected)) {
      transcriptOptions.speakers_expected = options.speakersExpected
    }

    const client = getClient()

    // Submit job without waiting - returns immediately with transcript object containing id
    console.log('Submitting transcription job...')
    const transcript = await client.transcripts.submit(transcriptOptions)

    console.log('=== JOB SUBMITTED SUCCESSFULLY ===')
    console.log('- Transcript ID:', transcript.id)
    console.log('- Status:', transcript.status)

    return transcript.id
  } catch (error: any) {
    console.error('=== JOB SUBMISSION ERROR ===')
    console.error('- Error:', error?.message)
    throw error
  }
}

/**
 * Get the current status and result of a transcription job
 */
export async function getTranscriptionStatus(transcriptId: string): Promise<{
  status: 'queued' | 'processing' | 'completed' | 'error'
  transcript?: {
    text: string
    utterances: TranscriptSegment[]
    chapters: Chapter[]
    duration: number
    allWords: Word[]
    sentimentAnalysis?: any
    keyPhrases?: string[]
    confidenceMetrics?: {
      averageConfidence: number
      lowConfidenceWords: Array<{word: string, confidence: number, timestamp: number}>
    }
  }
  error?: string
}> {
  console.log('=== CHECKING TRANSCRIPTION STATUS ===')
  console.log('- Transcript ID:', transcriptId)

  if (!process.env.ASSEMBLYAI_API_KEY) {
    throw new Error('ASSEMBLYAI_API_KEY is not configured')
  }

  try {
    const client = getClient()
    const result = await client.transcripts.get(transcriptId)

    console.log('- Current status:', result.status)

    // If still processing, return status only
    if (result.status === 'queued' || result.status === 'processing') {
      return { status: result.status }
    }

    // If error, return error info
    if (result.status === 'error') {
      console.error('- Transcription error:', result.error)
      return {
        status: 'error',
        error: result.error || 'Transcription failed'
      }
    }

    // If completed, process and return full transcript
    console.log('=== TRANSCRIPTION COMPLETED ===')

    // Map utterances to our format
    const utterances: TranscriptSegment[] = result.utterances?.map((utt: any) => ({
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
    const allWords: Word[] = result.words?.map((w: any) => ({
      text: w.text,
      start: w.start,
      end: w.end,
      confidence: w.confidence,
      speaker: w.speaker !== undefined ? `Speaker ${w.speaker}` : undefined
    })) || []

    const chapters: Chapter[] = []

    // Calculate duration in minutes
    const durationMs = result.audio_duration || 0
    const duration = Math.ceil(durationMs / 60000)

    // Extract sentiment analysis and key phrases
    const sentimentAnalysis = result.sentiment_analysis_results || null
    const keyPhrases = result.auto_highlights_result?.results?.map(
      (highlight: any) => highlight.text
    ) || []

    // Calculate confidence metrics
    let confidenceMetrics = undefined
    if (allWords.length > 0) {
      const confidences = allWords.map(w => w.confidence).filter(c => c !== undefined)
      const averageConfidence = confidences.length > 0
        ? confidences.reduce((a, b) => a + b, 0) / confidences.length
        : 0

      const lowConfidenceWords = allWords
        .filter(w => w.confidence < 0.8)
        .map(w => ({
          word: w.text,
          confidence: w.confidence,
          timestamp: w.start
        }))
        .slice(0, 50)

      confidenceMetrics = {
        averageConfidence,
        lowConfidenceWords
      }
    }

    console.log('- Text length:', result.text?.length || 0, 'characters')
    console.log('- Utterances:', utterances.length)
    console.log('- Words:', allWords.length)
    console.log('- Duration:', duration, 'minutes')

    return {
      status: 'completed',
      transcript: {
        text: result.text || '',
        utterances,
        chapters,
        duration,
        allWords,
        sentimentAnalysis,
        keyPhrases,
        confidenceMetrics
      }
    }
  } catch (error: any) {
    console.error('=== STATUS CHECK ERROR ===')
    console.error('- Error:', error?.message)
    throw error
  }
}

export function estimateAudioDuration(fileSize: number): number {
  // Estimate based on typical bitrate (128 kbps)
  // 128 kbps = 16 KB/s = 960 KB/min
  const estimatedMinutes = Math.ceil(fileSize / (960 * 1024))
  return Math.max(1, estimatedMinutes)
}