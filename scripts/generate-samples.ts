import { AssemblyAI } from 'assemblyai'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

if (!process.env.ASSEMBLYAI_API_KEY) {
  console.error('ASSEMBLYAI_API_KEY is required')
  process.exit(1)
}

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY,
})

interface SampleFile {
  name: string
  displayName: string
  path: string
  description: string
  duration: string
}

const samples: SampleFile[] = [
  {
    name: 'i_have_a_dream',
    displayName: 'I Have a Dream',
    path: './public/samples/I Have a Dream.mp3',
    description: 'MLK\'s historic speech',
    duration: '17 min'
  },
  {
    name: 'pulp_fiction',
    displayName: 'Pulp Fiction',
    path: './public/samples/pulp_fiction.mp3',
    description: 'Royale with Cheese scene',
    duration: '4 min'
  },
  {
    name: 'lil_wayne_deposition',
    displayName: 'Lil Wayne Deposition',
    path: './public/samples/lil_wayne_deposition.mp3',
    description: 'Legal deposition excerpt',
    duration: '5 min'
  }
]

async function generateTranscript(sample: SampleFile) {
  console.log(`\n📝 Processing ${sample.displayName}...`)
  
  try {
    // Check if file exists
    if (!fs.existsSync(sample.path)) {
      console.error(`❌ File not found: ${sample.path}`)
      return null
    }

    // Read the file
    const fileBuffer = fs.readFileSync(sample.path)
    console.log(`📁 File size: ${(fileBuffer.length / 1024 / 1024).toFixed(2)}MB`)

    // Upload and transcribe with all features enabled
    console.log('🚀 Uploading to AssemblyAI...')
    const startTime = Date.now()
    
    const transcript = await client.transcripts.transcribe({
      audio: fileBuffer,
      speech_model: 'nano', // Using nano as it will be default
      speaker_labels: true,
      language_detection: true,
      punctuate: true,
      format_text: true,
      disfluencies: false,
      sentiment_analysis: true,
      auto_highlights: true, // Key phrases
      auto_chapters: true,
    })

    const processingTime = ((Date.now() - startTime) / 1000).toFixed(1)
    console.log(`✅ Transcription completed in ${processingTime}s`)

    if (transcript.status === 'error') {
      console.error(`❌ Transcription failed: ${transcript.error}`)
      return null
    }

    // Extract all the data we need for the preloaded transcript
    const transcriptData = {
      name: sample.name,
      displayName: sample.displayName,
      fileName: path.basename(sample.path),
      description: sample.description,
      duration: sample.duration,
      transcript: {
        text: transcript.text || '',
        words: transcript.words?.length || 0,
        utterances: transcript.utterances?.map(utt => ({
          speaker: `Speaker ${utt.speaker}`,
          text: utt.text,
          start: utt.start,
          end: utt.end,
          confidence: utt.confidence,
          words: utt.words?.map(w => ({
            text: w.text,
            start: w.start,
            end: w.end,
            confidence: w.confidence,
            speaker: `Speaker ${utt.speaker}`
          }))
        })) || [],
        chapters: transcript.chapters?.map(ch => ({
          headline: ch.headline,
          summary: ch.summary,
          start: ch.start,
          end: ch.end,
          gist: ch.gist
        })) || [],
        allWords: transcript.words?.map(w => {
          // Find which utterance this word belongs to
          const utterance = transcript.utterances?.find(
            utt => utt.words?.some(uw => uw.start === w.start && uw.end === w.end)
          )
          return {
            text: w.text,
            start: w.start,
            end: w.end,
            confidence: w.confidence,
            speaker: utterance ? `Speaker ${utterance.speaker}` : 'Speaker A'
          }
        }) || [],
        sentimentAnalysis: transcript.sentiment_analysis_results?.map(s => ({
          text: s.text,
          sentiment: s.sentiment,
          confidence: s.confidence,
          start: s.start,
          end: s.end
        })) || [],
        keyPhrases: transcript.auto_highlights_result?.results?.map(h => h.text) || [],
        duration: Math.round((transcript.audio_duration || 0) / 1000), // Convert to seconds
        language: transcript.language_code,
        confidence: transcript.confidence
      }
    }

    console.log(`📊 Stats:`)
    console.log(`  - Words: ${transcriptData.transcript.words}`)
    console.log(`  - Utterances: ${transcriptData.transcript.utterances.length}`)
    console.log(`  - Chapters: ${transcriptData.transcript.chapters.length}`)
    console.log(`  - Key phrases: ${transcriptData.transcript.keyPhrases.length}`)
    console.log(`  - Language: ${transcriptData.transcript.language}`)

    return transcriptData
  } catch (error) {
    console.error(`❌ Error processing ${sample.displayName}:`, error)
    return null
  }
}

async function main() {
  console.log('🎵 YappText Sample Transcript Generator')
  console.log('========================================')

  const results = []
  
  for (const sample of samples) {
    const result = await generateTranscript(sample)
    if (result) {
      results.push(result)
    }
  }

  if (results.length === 0) {
    console.log('\n❌ No transcripts were generated')
    return
  }

  // Generate TypeScript file with all the transcript data
  const outputPath = './lib/sample-transcripts.ts'
  const fileContent = `// Auto-generated sample transcript data
// Generated on: ${new Date().toISOString()}

export interface SampleTranscript {
  name: string
  displayName: string
  fileName: string
  description: string
  duration: string
  transcript: {
    text: string
    words: number
    utterances: Array<{
      speaker: string
      text: string
      start: number
      end: number
      confidence: number
      words?: Array<{
        text: string
        start: number
        end: number
        confidence: number
        speaker: string
      }>
    }>
    chapters: Array<{
      headline: string
      summary: string
      start: number
      end: number
      gist: string
    }>
    allWords: Array<{
      text: string
      start: number
      end: number
      confidence: number
      speaker: string
    }>
    sentimentAnalysis: Array<{
      text: string
      sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
      confidence: number
      start: number
      end: number
    }>
    keyPhrases: string[]
    duration: number
    language: string
    confidence: number
  }
}

export const SAMPLE_TRANSCRIPTS: Record<string, SampleTranscript> = ${JSON.stringify(
    results.reduce((acc, r) => ({ ...acc, [r.name]: r }), {}),
    null,
    2
  )}

export const getSampleTranscript = (name: string): SampleTranscript | null => {
  return SAMPLE_TRANSCRIPTS[name] || null
}
`

  fs.writeFileSync(outputPath, fileContent)
  console.log(`\n✅ Generated ${outputPath} with ${results.length} transcript(s)`)
  console.log('\n🎉 Done! Sample transcripts have been generated.')
}

// Run the script
main().catch(console.error)