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

async function generateIHaveADream() {
  console.log('🎵 Generating "I Have a Dream" transcript with single speaker...')
  console.log('========================================')
  
  const sample = {
    name: 'i_have_a_dream',
    displayName: 'I Have a Dream',
    path: './public/samples/I Have a Dream.mp3',
    description: 'MLK\'s historic speech',
    duration: '17 min'
  }
  
  try {
    // Check if file exists
    if (!fs.existsSync(sample.path)) {
      console.error(`❌ File not found: ${sample.path}`)
      return
    }

    // Read the file
    const fileBuffer = fs.readFileSync(sample.path)
    console.log(`📁 File size: ${(fileBuffer.length / 1024 / 1024).toFixed(2)}MB`)

    // Upload and transcribe with nano model (no speaker labels for single speaker)
    console.log('🚀 Uploading to AssemblyAI with universal model (single speaker)...')
    const startTime = Date.now()

    const transcript = await client.transcripts.transcribe({
      audio: fileBuffer,
      speech_model: 'universal', // Using universal as default model
      speaker_labels: false, // Single speaker - no diarization needed
      language_code: 'en',
      punctuate: true,
      format_text: true,
      disfluencies: false,
      sentiment_analysis: false, // Skip for speed
      auto_highlights: false, // Skip for speed
      auto_chapters: false, // Skip for speed
    })

    const processingTime = ((Date.now() - startTime) / 1000).toFixed(1)
    console.log(`✅ Transcription completed in ${processingTime}s`)

    if (transcript.status === 'error') {
      console.error(`❌ Transcription failed: ${transcript.error}`)
      return
    }

    // Get the actual end time from the last word
    const lastWordEnd = transcript.words && transcript.words.length > 0 
      ? transcript.words[transcript.words.length - 1].end 
      : transcript.audio_duration || 0
    
    // Create single speaker format
    const transcriptData = {
      name: sample.name,
      displayName: sample.displayName,
      fileName: path.basename(sample.path),
      description: sample.description,
      duration: sample.duration,
      transcript: {
        text: transcript.text || '',
        words: transcript.words?.length || 0,
        // Single utterance for entire speech
        utterances: [{
          speaker: 'MLK',
          text: transcript.text || '',
          start: 0,
          end: lastWordEnd, // Use the last word's end time
          confidence: transcript.confidence || 0.95,
          words: transcript.words?.map(w => ({
            text: w.text,
            start: w.start,
            end: w.end,
            confidence: w.confidence,
            speaker: 'MLK'
          })) || []
        }],
        chapters: [], // No chapters for simplicity
        allWords: transcript.words?.map(w => ({
          text: w.text,
          start: w.start,
          end: w.end,
          confidence: w.confidence,
          speaker: 'MLK'
        })) || [],
        sentimentAnalysis: [],
        keyPhrases: [],
        duration: Math.round((transcript.audio_duration || 0) / 1000), // Convert to seconds
        language: transcript.language_code || 'en',
        confidence: transcript.confidence || 0.95
      }
    }

    console.log(`📊 Stats:`)
    console.log(`  - Words: ${transcriptData.transcript.words}`)
    console.log(`  - Single speaker: MLK`)
    console.log(`  - Duration: ${transcriptData.transcript.duration}s`)
    console.log(`  - Language: ${transcriptData.transcript.language}`)

    // Read existing sample-transcripts.ts
    const existingPath = './lib/sample-transcripts.ts'
    const existingContent = fs.readFileSync(existingPath, 'utf-8')
    
    // Parse existing SAMPLE_TRANSCRIPTS
    const samplesMatch = existingContent.match(/export const SAMPLE_TRANSCRIPTS: Record<string, SampleTranscript> = ({[\s\S]*?})\n\nexport const getSampleTranscript/)
    
    if (!samplesMatch) {
      console.error('❌ Could not parse existing sample-transcripts.ts')
      return
    }
    
    // Parse the JSON
    const existingDataStr = samplesMatch[1]
    // This is a bit hacky but works for our case
    const existingData = eval(`(${existingDataStr})`)
    
    // Update just the i_have_a_dream entry
    existingData.i_have_a_dream = transcriptData
    
    // Regenerate the file with updated data
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
      existingData,
      null,
      2
    )}

export const getSampleTranscript = (name: string): SampleTranscript | null => {
  return SAMPLE_TRANSCRIPTS[name] || null
}
`

    fs.writeFileSync(existingPath, fileContent)
    console.log(`\n✅ Updated ${existingPath} with single-speaker "I Have a Dream" transcript`)
    console.log('\n🎉 Done! "I Have a Dream" now has proper single-speaker format.')
    
  } catch (error) {
    console.error(`❌ Error processing:`, error)
  }
}

// Run the script
generateIHaveADream().catch(console.error)