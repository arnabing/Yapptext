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
  turboMode?: boolean
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
    
    // Turbo mode uses nano (3x faster) but no speaker detection
    // Default is universal model with speaker detection
    const turboMode = options?.turboMode || false
    const speechModel = turboMode ? 'nano' : 'universal'
    const speakerLabels = !turboMode // Speaker labels only work with universal/slam-1
    
    // Prepare transcription options
    let transcriptOptions: any = {
      speaker_labels: speakerLabels,
      speech_model: speechModel,
      language_code: 'en', // Specify English for better speaker separation
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
    console.log(`- Model: ${speechModel}${turboMode ? ' (Turbo: 3x faster, single speaker)' : ' (Standard: multi-speaker detection)'}`)
    console.log(`- speaker_labels: ${speakerLabels}`)
    console.log('- language_code: en')
    console.log('- sentiment_analysis:', options?.enableSentiment || false)
    console.log('- auto_highlights:', options?.enableKeyPhrases || false)
    
    // Add optional features if requested
    if (options?.enableSentiment) {
      transcriptOptions.sentiment_analysis = true
    }
    
    if (options?.enableKeyPhrases) {
      transcriptOptions.auto_highlights = true
    }
    
    const client = getClient()
    // transcribe() already polls until completed - no need for waitUntilReady
    const completedTranscript = await client.transcripts.transcribe(transcriptOptions)
    
    const uploadTime = Date.now() - startTime
    console.log('AssemblyAI response status:', completedTranscript.status)
    console.log(`Transcription completed in ${uploadTime}ms`)

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
  
  // In Turbo mode (single speaker), combine all utterances into one
  let utterances: TranscriptSegment[] = []
  
  if (turboMode && completedTranscript.utterances && completedTranscript.utterances.length > 0) {
    // Combine all utterances into a single segment for single speaker mode
    const allText = completedTranscript.utterances.map((utt: any) => utt.text).join(' ')
    const allWords: any[] = []
    
    // Collect all words from all utterances
    completedTranscript.utterances.forEach((utt: any) => {
      if (utt.words) {
        utt.words.forEach((w: any) => {
          allWords.push({
            text: w.text,
            start: w.start,
            end: w.end,
            confidence: w.confidence,
            speaker: 'Speaker'
          })
        })
      }
    })
    
    utterances = [{
      speaker: 'Speaker',
      text: allText,
      start: completedTranscript.utterances[0].start,
      end: completedTranscript.utterances[completedTranscript.utterances.length - 1].end,
      words: allWords
    }]
  } else {
    // Multi-speaker mode - keep utterances separate
    utterances = completedTranscript.utterances?.map((utt: any) => ({
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
  }
  
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