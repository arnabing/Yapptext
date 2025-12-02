import { NextRequest, NextResponse } from 'next/server'
import { transcribeWithAssemblyAI } from '@/lib/assemblyai'
import { transcribeAudioWithGemini } from '@/lib/gemini'
import { transcribeWithOpenAI, fileToBuffer } from '@/lib/openai-transcribe'
import { simpleReconcile, TranscriptSource } from '@/lib/reconcile'

export const maxDuration = 60

export async function POST(request: NextRequest) {
  console.log('\n=== TEST TRANSCRIBE ENDPOINT START ===')
  console.log('Timestamp:', new Date().toISOString())
  
  try {
    // Parse form data
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    const audioUrl = formData.get('audioUrl') as string
    
    if (!audioFile && !audioUrl) {
      return NextResponse.json(
        { error: 'No audio provided' },
        { status: 400 }
      )
    }
    
    // Prepare audio in different formats for different APIs
    let audioBase64: string | null = null
    let audioBuffer: Buffer | null = null
    let mimeType = 'audio/mp3'
    
    if (audioFile) {
      console.log('Processing audio file:', {
        name: audioFile.name,
        size: audioFile.size,
        type: audioFile.type,
        sizeInMB: (audioFile.size / 1024 / 1024).toFixed(2)
      })
      
      // Convert to base64 for Gemini
      const arrayBuffer = await audioFile.arrayBuffer()
      audioBuffer = Buffer.from(arrayBuffer)
      audioBase64 = audioBuffer.toString('base64')
      // Fix MIME type - if it's octet-stream, detect from filename
      if (audioFile.type === 'application/octet-stream' || !audioFile.type) {
        const ext = audioFile.name.split('.').pop()?.toLowerCase()
        mimeType = ext === 'mp3' ? 'audio/mpeg' : 
                   ext === 'wav' ? 'audio/wav' :
                   ext === 'm4a' ? 'audio/m4a' :
                   ext === 'webm' ? 'audio/webm' : 'audio/mpeg'
      } else {
        mimeType = audioFile.type
      }
    } else if (audioUrl) {
      console.log('Fetching audio from URL:', audioUrl)
      const response = await fetch(audioUrl)
      const arrayBuffer = await response.arrayBuffer()
      audioBuffer = Buffer.from(arrayBuffer)
      audioBase64 = audioBuffer.toString('base64')
      mimeType = response.headers.get('content-type') || 'audio/mp3'
    }
    
    console.log('Audio prepared:')
    console.log('- Base64 length:', audioBase64?.length || 0)
    console.log('- Buffer length:', audioBuffer?.length || 0)
    console.log('- MIME type:', mimeType)
    
    // Prepare all transcription tasks
    const transcriptionTasks: Promise<any>[] = []
    const taskLabels: string[] = []
    
    // AssemblyAI - Best Model (highest quality)
    if (process.env.ASSEMBLYAI_API_KEY) {
      transcriptionTasks.push(
        transcribeWithAssemblyAI(audioUrl || audioFile, {
          model: 'universal',  // Maps to 'best' model
          enableSentiment: false,
          enableKeyPhrases: false,
          isUrl: !!audioUrl
        })
      )
      taskLabels.push('AssemblyAI-Best')
    }
    
    // Gemini
    if (process.env.GEMINI_API_KEY && audioBase64) {
      transcriptionTasks.push(
        transcribeAudioWithGemini(audioBase64, mimeType)
      )
      taskLabels.push('Gemini')
    }
    
    // OpenAI gpt-4o-transcribe (latest and best)
    if (process.env.OPENAI_API_KEY && audioBuffer) {
      transcriptionTasks.push(
        transcribeWithOpenAI(audioBuffer, {
          model: 'gpt-4o-transcribe',
          responseFormat: 'json',
          temperature: 0.0
        })
      )
      taskLabels.push('OpenAI-GPT4o')
    }
    
    console.log(`\nRunning ${transcriptionTasks.length} transcription models in parallel:`)
    console.log('Models:', taskLabels)
    
    // Run all transcriptions in parallel
    const startTime = Date.now()
    const results = await Promise.allSettled(transcriptionTasks)
    const totalTime = Date.now() - startTime
    
    // Process results
    const transcriptionResults: any[] = []
    const successfulTranscripts: TranscriptSource[] = []
    
    results.forEach((result, index) => {
      const label = taskLabels[index]
      
      if (result.status === 'fulfilled') {
        const value = result.value as any
        const wordCount = value.text ? value.text.split(/\s+/).length : 0
        
        transcriptionResults.push({
          model: label,
          status: 'success',
          text: value.text,
          textLength: value.text?.length || 0,
          wordCount: wordCount,
          processingTime: value.processingTime || null,
          hasWordTimestamps: !!(value.words || value.allWords),
          hasSpeakers: !!value.utterances,
          speakerCount: value.utterances ? new Set(value.utterances.map((u: any) => u.speaker)).size : 0
        })
        
        // Add to successful transcripts for reconciliation
        if (value.text) {
          successfulTranscripts.push({
            name: label,
            text: value.text,
            words: value.words || value.allWords
          })
        }
        
        console.log(`✓ ${label}: ${wordCount} words in ${value.processingTime || 'N/A'}ms`)
      } else {
        const error = result.reason as Error
        transcriptionResults.push({
          model: label,
          status: 'error',
          error: error.message,
          errorDetails: error.stack
        })
        
        console.log(`✗ ${label}: ${error.message}`)
      }
    })
    
    // Run reconciliation if we have multiple successful transcripts
    let reconciliationResult = null
    if (successfulTranscripts.length > 1) {
      console.log(`\nRunning reconciliation on ${successfulTranscripts.length} transcripts...`)
      try {
        reconciliationResult = await simpleReconcile(successfulTranscripts)
        console.log('Reconciliation successful')
        console.log('- Method:', reconciliationResult.method)
        console.log('- Sources used:', reconciliationResult.sourcesUsed)
        console.log('- Text length:', reconciliationResult.text.length)
        console.log('- Word count:', reconciliationResult.text.split(/\s+/).length)
      } catch (error) {
        console.error('Reconciliation failed:', error)
      }
    }
    
    // Calculate comparison metrics
    const comparison = calculateComparisonMetrics(transcriptionResults)
    
    // Response
    const response = {
      summary: {
        totalModels: taskLabels.length,
        successfulModels: transcriptionResults.filter(r => r.status === 'success').length,
        failedModels: transcriptionResults.filter(r => r.status === 'error').length,
        totalProcessingTime: totalTime,
        averageProcessingTime: Math.round(totalTime / taskLabels.length)
      },
      models: transcriptionResults,
      reconciliation: reconciliationResult ? {
        text: reconciliationResult.text,
        textLength: reconciliationResult.text.length,
        wordCount: reconciliationResult.text.split(/\s+/).length,
        method: reconciliationResult.method,
        sourcesUsed: reconciliationResult.sourcesUsed,
        metrics: reconciliationResult.improvementMetrics
      } : null,
      comparison: comparison
    }
    
    return NextResponse.json(response)
    
  } catch (error) {
    console.error('=== TEST TRANSCRIBE ERROR ===')
    console.error(error)
    
    return NextResponse.json(
      { error: 'Test transcription failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  } finally {
    console.log('=== TEST TRANSCRIBE ENDPOINT END ===\n')
  }
}

function calculateComparisonMetrics(results: any[]) {
  const successfulResults = results.filter(r => r.status === 'success' && r.text)
  
  if (successfulResults.length < 2) {
    return null
  }
  
  // Find common words and differences
  const texts = successfulResults.map(r => r.text.toLowerCase())
  const wordSets = texts.map(t => new Set(t.split(/\s+/)))
  
  // Calculate similarity between each pair
  const similarities: any[] = []
  for (let i = 0; i < successfulResults.length; i++) {
    for (let j = i + 1; j < successfulResults.length; j++) {
      const set1 = wordSets[i]
      const set2 = wordSets[j]
      const intersection = new Set([...set1].filter(x => set2.has(x)))
      const union = new Set([...set1, ...set2])
      const jaccard = intersection.size / union.size
      
      similarities.push({
        model1: successfulResults[i].model,
        model2: successfulResults[j].model,
        jaccardSimilarity: Math.round(jaccard * 100),
        commonWords: intersection.size,
        totalUniqueWords: union.size
      })
    }
  }
  
  // Find the fastest and most accurate (by consensus)
  const fastest = successfulResults.reduce((prev, current) => 
    (current.processingTime && current.processingTime < (prev.processingTime || Infinity)) ? current : prev
  )
  
  return {
    similarities,
    fastest: fastest.model,
    averageWordCount: Math.round(
      successfulResults.reduce((sum, r) => sum + r.wordCount, 0) / successfulResults.length
    ),
    wordCountVariance: Math.max(...successfulResults.map(r => r.wordCount)) - 
                       Math.min(...successfulResults.map(r => r.wordCount))
  }
}