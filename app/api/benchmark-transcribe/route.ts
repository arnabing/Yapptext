import { NextRequest, NextResponse } from 'next/server'
import { transcribeWithAssemblyAI } from '@/lib/assemblyai'
import { transcribeAudioWithGemini } from '@/lib/gemini'
import { transcribeWithOpenAI } from '@/lib/openai-transcribe'
import { simpleReconcile, TranscriptSource } from '@/lib/reconcile'
import { votingReconcile } from '@/lib/reconcile-voting'
import { readFile } from 'fs/promises'
import path from 'path'

export const maxDuration = 60

export async function GET(request: NextRequest) {
  console.log('\n=== BENCHMARK TRANSCRIPTION START ===')
  console.log('Timestamp:', new Date().toISOString())
  console.log('Test file: pulp_fiction.mp3 (7.5MB - testing size limits)')
  
  try {
    // Read the test audio file - using larger file to test size limits
    const audioPath = path.join(process.cwd(), 'public/samples/pulp_fiction.mp3')
    const audioBuffer = await readFile(audioPath)
    const audioBase64 = audioBuffer.toString('base64')
    
    console.log('Audio file loaded:')
    console.log('- File:', 'pulp_fiction.mp3')
    console.log('- Size:', (audioBuffer.length / 1024 / 1024).toFixed(2), 'MB')
    console.log('- Base64 length:', audioBase64.length)
    console.log('- Testing Vercel size limit with file >4.5MB')
    
    // Prepare all transcription tasks
    const transcriptionTasks: Promise<any>[] = []
    const taskLabels: string[] = []
    
    // AssemblyAI - Universal Model (best quality)
    if (process.env.ASSEMBLYAI_API_KEY) {
      console.log('\n📍 Starting AssemblyAI Universal...')
      const file = new File([audioBuffer as BlobPart], 'lil_wayne_deposition.mp3', { type: 'audio/mpeg' })
      transcriptionTasks.push(
        transcribeWithAssemblyAI(file, {
          turboMode: false,
          enableSentiment: false,
          enableKeyPhrases: false
        })
      )
      taskLabels.push('AssemblyAI-Universal')
    }
    
    // Gemini 2.5 Flash
    if (process.env.GEMINI_API_KEY) {
      console.log('\n📍 Starting Gemini 2.5 Flash...')
      transcriptionTasks.push(
        transcribeAudioWithGemini(audioBase64, 'audio/mpeg')
      )
      taskLabels.push('Gemini-2.5-Flash')
    }
    
    // OpenAI GPT-4o Transcribe
    if (process.env.OPENAI_API_KEY) {
      console.log('\n📍 Starting OpenAI GPT-4o Transcribe...')
      transcriptionTasks.push(
        transcribeWithOpenAI(audioBuffer, {
          model: 'gpt-4o-transcribe',
          responseFormat: 'json',
          temperature: 0.0
        })
      )
      taskLabels.push('OpenAI-GPT4o')
    }
    
    console.log(`\n🚀 Running ${transcriptionTasks.length} models in parallel...`)
    console.log('Models:', taskLabels)
    
    const startTime = Date.now()
    const results = await Promise.allSettled(transcriptionTasks)
    const totalTime = Date.now() - startTime
    
    // Process results
    const modelResults: any[] = []
    const successfulTranscripts: TranscriptSource[] = []
    
    results.forEach((result, index) => {
      const label = taskLabels[index]
      
      if (result.status === 'fulfilled') {
        const value = result.value as any
        const text = value.text || ''
        const wordCount = text.split(/\s+/).length
        const first300Chars = text.substring(0, 300)
        
        console.log(`\n✅ ${label} SUCCESS`)
        console.log(`- Words: ${wordCount}`)
        console.log(`- Processing time: ${value.processingTime || 'N/A'}ms`)
        console.log(`- First 500 chars:`)
        console.log(text.substring(0, 500))
        console.log('...')
        
        modelResults.push({
          model: label,
          status: 'success',
          wordCount,
          processingTime: value.processingTime || null,
          first300Chars,
          fullText: text,
          hasWordTimestamps: !!(value.words || value.allWords),
          hasSpeakers: !!value.utterances,
          speakerCount: value.utterances ? new Set(value.utterances.map((u: any) => u.speaker)).size : 0
        })
        
        // Add to successful transcripts for reconciliation
        if (text) {
          successfulTranscripts.push({
            name: label,
            text,
            words: value.words || value.allWords,
            context: value.context // Pass context from Gemini
          })
        }
      } else {
        const error = result.reason as Error
        console.log(`\n❌ ${label} FAILED`)
        console.log(`- Error: ${error.message}`)
        
        modelResults.push({
          model: label,
          status: 'error',
          error: error.message,
          errorDetails: error.stack?.substring(0, 500)
        })
      }
    })
    
    // Run BOTH reconciliation methods if we have multiple successful transcripts
    let gptReconciliationResult = null
    let votingReconciliationResult = null
    
    if (successfulTranscripts.length > 1) {
      // Test GPT-based reconciliation
      console.log(`\n🔄 Running GPT reconciliation on ${successfulTranscripts.length} transcripts...`)
      try {
        const gptStart = Date.now()
        gptReconciliationResult = await simpleReconcile(successfulTranscripts)
        const gptTime = Date.now() - gptStart
        const gptWordCount = gptReconciliationResult.text.split(/\s+/).length
        
        console.log('✅ GPT Reconciliation complete')
        console.log('- Method:', gptReconciliationResult.method)
        console.log('- Time:', gptTime, 'ms')
        console.log('- Word count:', gptWordCount)
        console.log('- Character count:', gptReconciliationResult.text.length)
        
        gptReconciliationResult.wordCount = gptWordCount
        gptReconciliationResult.first300Chars = gptReconciliationResult.text.substring(0, 300)
        gptReconciliationResult.processingTime = gptTime
      } catch (error) {
        console.error('❌ GPT Reconciliation failed:', error)
      }
      
      // Test voting-based reconciliation
      console.log(`\n🗳️ Running voting reconciliation on ${successfulTranscripts.length} transcripts...`)
      try {
        const votingStart = Date.now()
        votingReconciliationResult = await votingReconcile(successfulTranscripts)
        const votingTime = Date.now() - votingStart
        const votingWordCount = votingReconciliationResult.text.split(/\s+/).length
        
        console.log('✅ Voting Reconciliation complete')
        console.log('- Method:', votingReconciliationResult.method)
        console.log('- Time:', votingTime, 'ms')
        console.log('- Word count:', votingWordCount)
        console.log('- Character count:', votingReconciliationResult.text.length)
        
        votingReconciliationResult.wordCount = votingWordCount
        votingReconciliationResult.first300Chars = votingReconciliationResult.text.substring(0, 300)
        votingReconciliationResult.processingTime = votingTime
      } catch (error) {
        console.error('❌ Voting Reconciliation failed:', error)
      }
      
      // Compare the two methods
      if (gptReconciliationResult && votingReconciliationResult) {
        console.log('\n📊 RECONCILIATION COMPARISON:')
        console.log('GPT-4o-mini:')
        console.log('  - Time:', gptReconciliationResult.processingTime, 'ms')
        console.log('  - Chars:', gptReconciliationResult.text.length)
        console.log('  - Improvements:', gptReconciliationResult.improvementMetrics)
        console.log('Voting:')
        console.log('  - Time:', votingReconciliationResult.processingTime, 'ms (', 
          Math.round(votingReconciliationResult.processingTime * 100 / gptReconciliationResult.processingTime), '% of GPT time)')
        console.log('  - Chars:', votingReconciliationResult.text.length)
        console.log('  - Improvements:', votingReconciliationResult.improvementMetrics)
      }
    }
    
    // Calculate summary statistics
    const successCount = modelResults.filter(r => r.status === 'success').length
    const avgProcessingTime = modelResults
      .filter(r => r.status === 'success' && r.processingTime)
      .reduce((sum, r) => sum + r.processingTime, 0) / successCount || 0
    
    console.log('\n=== BENCHMARK COMPLETE ===')
    console.log(`- Total time: ${totalTime}ms`)
    console.log(`- Success rate: ${successCount}/${modelResults.length}`)
    console.log(`- Avg processing time: ${avgProcessingTime.toFixed(0)}ms`)
    
    return NextResponse.json({
      summary: {
        totalModels: modelResults.length,
        successfulModels: successCount,
        failedModels: modelResults.length - successCount,
        totalProcessingTime: totalTime,
        averageProcessingTime: Math.round(avgProcessingTime)
      },
      models: modelResults,
      reconciliation: {
        gpt: gptReconciliationResult,
        voting: votingReconciliationResult
      },
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('=== BENCHMARK ERROR ===')
    console.error(error)
    
    return NextResponse.json(
      { error: 'Benchmark failed', details: (error as Error).message },
      { status: 500 }
    )
  }
}