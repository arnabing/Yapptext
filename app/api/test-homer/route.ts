import { NextRequest, NextResponse } from 'next/server'
import { transcribeWithAssemblyAI } from '@/lib/assemblyai'
import { transcribeAudioWithGemini } from '@/lib/gemini'
import { transcribeWithOpenAI } from '@/lib/openai-transcribe'
import { simpleReconcile, TranscriptSource } from '@/lib/reconcile'
import { votingReconcile } from '@/lib/reconcile-voting'
import {
  simpleWordVoting,
  phraseVoting,
  weightedVoting,
  contextAwareReconcile,
  advancedAlignmentVoting,
  selectiveGptReconcile,
  confidenceWeightedVoting,
  baselineContextAware
} from '@/lib/reconcile-strategies'
import { readFile } from 'fs/promises'
import path from 'path'
import { createLogger } from '@/lib/logger'
import { calculateWER, getWERGrade } from '@/lib/wer-calculator'

export const maxDuration = 60

export async function GET(request: NextRequest) {
  const runId = Math.random().toString(36).slice(2, 8)
  const logger = createLogger(runId)
  logger.log('start', { ts: new Date().toISOString() })

  try {
    // Read query params for experiments
    const search = request.nextUrl.searchParams
    const contextWindow = search.get('contextWindow') !== '0'
    const confThreshold = parseFloat(search.get('confThreshold') || '0.6')
    const glossary = search.get('glossary') === '1' || search.get('glossary') === 'true'
    const expLabel = search.get('expLabel') || ''
    logger.log('params', { contextWindow, confThreshold, glossary, expLabel })

    // Load Homer audio (long vs short clip)
    const useShort = search.get('short') === '1'
    const audioPath = useShort
      ? path.join(process.cwd(), 'public/samples/homer short.mp3')
      : path.join(process.cwd(), 'public/samples/Homer Simpson Best Moments.mp3')
    const audioBuffer = await readFile(audioPath)
    const audioBase64 = audioBuffer.toString('base64')

    logger.log('audio_loaded', { sizeMB: (audioBuffer.length / 1024 / 1024).toFixed(2), path: audioPath, short: useShort })

    // Load reference transcript for WER calculation (if available)
    let referenceDraft: { utterances: Array<{ speaker: string; text: string; start: number; end: number }> } | null = null
    let referenceText = ''
    if (useShort) {
      try {
        const refPath = path.join(process.cwd(), 'public/samples/homer_short.draft.json')
        const refContent = await readFile(refPath, 'utf-8')
        referenceDraft = JSON.parse(refContent)
        referenceText = referenceDraft!.utterances.map(u => u.text).join(' ')
        logger.log('reference_loaded', { utterances: referenceDraft!.utterances.length, chars: referenceText.length })
      } catch (e) {
        logger.log('reference_not_found', { error: (e as Error).message }, 'warn')
      }
    }

    // Option: context-first: run Gemini context to build a tiny glossary
    let geminiContext: string | undefined
    try {
      if (process.env.GEMINI_API_KEY) {
        logger.log('model_start', { model: 'Gemini_ctx_first' })
        const g = await transcribeAudioWithGemini(audioBase64, 'audio/mpeg')
        geminiContext = g.context || ''
        logger.log('context_extracted', { length: (geminiContext || '').length, preview: (geminiContext || '').slice(0, 200) })
      }
    } catch (e) {
      logger.log('context_error', { error: (e as Error).message }, 'warn')
    }

    // Build a small glossary from context
    const glossaryTerms: string[] = []
    const customSpelling: Record<string, string> = {}
    if (geminiContext) {
      const lower = geminiContext.toLowerCase()
      if (lower.includes('simpson') || lower.includes('homer')) {
        glossaryTerms.push("D'oh", 'Woo-hoo', 'Mmm')
        customSpelling['doh'] = "D'oh!"
        customSpelling["d'oh"] = "D'oh!"
        customSpelling['dough'] = "D'oh!"
        customSpelling['woo hoo'] = 'Woo-hoo!'
      }
    }

    // Run all three models (AAI uses context-derived boosts if available)
    const transcriptionTasks: Promise<any>[] = []
    const taskLabels: string[] = []

    // AssemblyAI
    if (process.env.ASSEMBLYAI_API_KEY) {
      logger.log('model_start', { model: 'AssemblyAI' })
      // Use a Uint8Array view which is valid as a BlobPart
      const u8 = new Uint8Array(audioBuffer)
      const file = new File([u8], 'homer_simpson.mp3', { type: 'audio/mpeg' })
      // Use context-derived terms if present, else small fallback
      const boostList = (glossaryTerms.length > 0 ? glossaryTerms : ["D'oh", 'Woo-hoo', 'Mmm'])
      const spellingMap = Object.keys(customSpelling).length > 0 ? customSpelling : ({
        'doh': "D'oh!",
        "d'oh": "D'oh!",
        'dough': "D'oh!",
        'woo hoo': 'Woo-hoo!'
      } as Record<string, string>)
      const prompt = geminiContext ? `Context: ${geminiContext}\nVoice: Homer Simpson; comedic quotes and interjections like D'oh! Preserve interjections.` : ''

      transcriptionTasks.push(
        transcribeWithAssemblyAI(file, {
          model: "universal",
          enableSentiment: false,
          enableKeyPhrases: false
        })
      )
      taskLabels.push('AssemblyAI')
    }

    // Gemini full transcription (optional; keep for comparison if desired)
    if (process.env.GEMINI_API_KEY) {
      logger.log('model_start', { model: 'Gemini' })
      transcriptionTasks.push(
        transcribeAudioWithGemini(audioBase64, 'audio/mpeg')
      )
      taskLabels.push('Gemini')
    }

    // OpenAI GPT-4o
    if (process.env.OPENAI_API_KEY) {
      logger.log('model_start', { model: 'OpenAI-GPT4o' })
      transcriptionTasks.push(
        transcribeWithOpenAI(audioBuffer, {
          model: 'gpt-4o-transcribe',
          responseFormat: 'json',
          temperature: 0.0
        })
      )
      taskLabels.push('OpenAI-GPT4o')
    }

    logger.log('models_parallel', { total: transcriptionTasks.length })
    const startTime = Date.now()
    const results = await Promise.allSettled(transcriptionTasks)
    const transcriptionTime = Date.now() - startTime
    logger.log('models_complete', { transcriptionTime })

    // Process results
    const successfulTranscripts: TranscriptSource[] = []
    const modelResults: any[] = []
    let assemblyUtterances: Array<{ speaker: string; text: string; start: number; end: number; words?: any[] }> | undefined

    results.forEach((result, index) => {
      const label = taskLabels[index]

      if (result.status === 'fulfilled') {
        const value = result.value as any
        const text = value.text || ''
        const wordCount = text.split(/\s+/).length

        // Check for "D'oh!" and variations
        const hasDoh = text.toLowerCase().includes('doh') || text.toLowerCase().includes("d'oh")
        const dohCount = (text.toLowerCase().match(/d'?oh/g) || []).length

        logger.log('model_success', { model: label, wordCount, charCount: text.length, hasDoh, dohCount, processingTime: value.processingTime || null })

        // Capture Gemini's context
        if (label === 'Gemini' && value.context) {
          geminiContext = value.context
          const ctxPreview = (geminiContext || '').slice(0, 200)
          logger.log('context_extracted', { length: (geminiContext || '').length, preview: ctxPreview })
        }

        // Capture AssemblyAI utterances for selective reconciliation
        if (label === 'AssemblyAI' && value.utterances) {
          logger.log('aai_utterances', { count: value.utterances.length })
          assemblyUtterances = value.utterances
        }

        modelResults.push({
          model: label,
          status: 'success',
          wordCount,
          characterCount: text.length,
          hasDoh,
          dohCount,
          processingTime: value.processingTime || null,
          text: text,
          first500Chars: text.substring(0, 500),
          first300Chars: text.substring(0, 300),
          fullText: text
        })

        // Add to successful transcripts for reconciliation
        if (text) {
          successfulTranscripts.push({
            name: label,
            text,
            words: value.words || value.allWords,
            context: value.context
          })
        }
      } else {
        const error = result.reason as Error
        logger.log('model_error', { model: label, error: error.message }, 'error')

        modelResults.push({
          model: label,
          status: 'error',
          error: error.message
        })
      }
    })

    // Run ALL reconciliation methods if we have multiple transcripts
    const reconciliationResults: any[] = []

    if (successfulTranscripts.length > 1) {
      logger.log('reconcile_start', { sources: successfulTranscripts.map(s => s.name), contextAvailable: !!geminiContext })

      // Strategy 1: Original GPT-4o-mini reconciliation
      try {
        logger.log('reconcile_method_start', { method: 'GPT-4o-mini' })
        const start = Date.now()
        const result = await simpleReconcile(successfulTranscripts, {
          preserveSpeakers: false
        })
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'GPT-4o-mini',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'GPT-4o-mini', time, dohCount })
      } catch (error) {
        console.error('GPT-4o-mini failed:', error)
      }

      // Strategy 2: Original voting reconciliation
      try {
        logger.log('reconcile_method_start', { method: 'Original Voting' })
        const start = Date.now()
        const result = await votingReconcile(successfulTranscripts)
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'Original Voting',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'Original Voting', time, dohCount })
      } catch (error) {
        console.error('Original voting failed:', error)
      }

      // Strategy 2b: Confidence-weighted voting (AAI anchored)
      try {
        logger.log('reconcile_method_start', { method: 'Confidence-Weighted Voting' })
        const start = Date.now()
        const result = await confidenceWeightedVoting(successfulTranscripts, {
          confidenceThreshold: confThreshold,
          context: geminiContext
        })
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'Confidence-Weighted Voting',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'Confidence-Weighted Voting', time, dohCount })
      } catch (error) {
        console.error('Confidence-weighted voting failed:', error)
      }

      // Strategy 3: Simple word voting
      try {
        logger.log('reconcile_method_start', { method: 'Simple Word Voting' })
        const start = Date.now()
        const result = await simpleWordVoting(successfulTranscripts, {
          context: geminiContext
        })
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'Simple Word Voting',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'Simple Word Voting', time, dohCount })
      } catch (error) {
        console.error('Simple word voting failed:', error)
      }

      // Strategy 4: Phrase voting
      try {
        logger.log('reconcile_method_start', { method: 'Phrase Voting (3 words)' })
        const start = Date.now()
        const result = await phraseVoting(successfulTranscripts, {
          context: geminiContext,
          phraseSize: 3
        })
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'Phrase Voting (3 words)',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'Phrase Voting (3 words)', time, dohCount })
      } catch (error) {
        console.error('Phrase voting failed:', error)
      }

      // Strategy 4b: Phrase voting (5 words)
      try {
        logger.log('reconcile_method_start', { method: 'Phrase Voting (5 words)' })
        const start = Date.now()
        const result = await phraseVoting(successfulTranscripts, {
          context: geminiContext,
          phraseSize: 5
        })
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'Phrase Voting (5 words)',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'Phrase Voting (5 words)', time, dohCount })
      } catch (error) {
        console.error('Phrase voting (5) failed:', error)
      }

      // Strategy 5: Weighted voting
      try {
        logger.log('reconcile_method_start', { method: 'Weighted Voting' })
        const start = Date.now()
        const result = await weightedVoting(successfulTranscripts, {
          context: geminiContext
        })
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'Weighted Voting',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'Weighted Voting', time, dohCount })
      } catch (error) {
        console.error('Weighted voting failed:', error)
      }

      // Strategy 6: Context-aware (Baseline control)
      try {
        logger.log('reconcile_method_start', { method: 'Context-Aware (Baseline)' })
        const start = Date.now()
        const result = await baselineContextAware(successfulTranscripts)
        const time = Date.now() - start

        const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
        const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

        // Calculate WER if reference is available
        const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
        const werGrade = werResult ? getWERGrade(werResult.wer) : null

        reconciliationResults.push({
          method: 'Context-Aware (Baseline)',
          time,
          text: result.text,
          wordCount: result.text.split(/\s+/).length,
          characterCount: result.text.length,
          hasDoh,
          dohCount,
          improvementMetrics: result.improvementMetrics,
          first500Chars: result.text.substring(0, 500),
          wer: werResult,
          werGrade
        })

        logger.log('reconcile_method_done', { method: 'Context-Aware (Baseline)', time, dohCount })
      } catch (error) {
        console.error('Context-aware failed:', error)
      }

      // Strategy 7: Selective GPT on low-confidence / high-disagreement AssemblyAI utterances
      try {
        if (assemblyUtterances && assemblyUtterances.length > 0) {
          logger.log('reconcile_method_start', { method: 'Selective GPT' })
          const start = Date.now()
          const result = await selectiveGptReconcile(successfulTranscripts, {
            assemblyUtterances,
            confThreshold,
            disagreeThreshold: 0.6,
            useContextWindow: contextWindow,
            glossaryNormalization: glossary,
            context: geminiContext,
            model: 'gpt-4o'
          })
          const time = Date.now() - start

          const hasDoh = result.text.toLowerCase().includes('doh') || result.text.toLowerCase().includes("d'oh")
          const dohCount = (result.text.toLowerCase().match(/d'?oh/g) || []).length

          // Calculate WER if reference is available
          const werResult = referenceText ? calculateWER(referenceText, result.text, { checkInterjections: true }) : null
          const werGrade = werResult ? getWERGrade(werResult.wer) : null

          reconciliationResults.push({
            method: 'Selective GPT',
            time,
            text: result.text,
            wordCount: result.text.split(/\s+/).length,
            characterCount: result.text.length,
            hasDoh,
            dohCount,
            improvementMetrics: result.improvementMetrics,
            first500Chars: result.text.substring(0, 500),
            wer: werResult,
            werGrade
          })

          logger.log('reconcile_method_done', { method: 'Selective GPT', time, dohCount })
        } else {
          logger.log('reconcile_skip', { method: 'Selective GPT', reason: 'no_utterances' }, 'warn')
        }
      } catch (error) {
        logger.log('reconcile_method_error', { method: 'Selective GPT', error: (error as Error).message }, 'error')
      }
    }

    // Summary
    logger.log('complete', { transcriptionTime, models: modelResults.length, strategies: reconciliationResults.length })

    // Find best performing strategy
    const bestByDoh = reconciliationResults.reduce((best, current) =>
      current.dohCount > (best?.dohCount || 0) ? current : best
    , null)

    const fastestStrategy = reconciliationResults.reduce((fastest, current) =>
      current.time < (fastest?.time || Infinity) ? current : fastest
    , null)

    // Find best by WER (lowest = best)
    const bestByWER = reconciliationResults
      .filter(r => r.wer !== null && r.wer !== undefined)
      .reduce((best: any, current: any) =>
        !best || (current.wer && current.wer.wer < best.wer.wer) ? current : best
      , null)

    logger.log('winners', {
      bestForDoh: bestByDoh?.method,
      bestDohCount: bestByDoh?.dohCount,
      fastest: fastestStrategy?.method,
      fastestTime: fastestStrategy?.time,
      bestByWER: bestByWER?.method,
      bestWERScore: bestByWER?.wer?.werPercent
    })

    const debug = request.nextUrl.searchParams.get('debug') === '1'
    return NextResponse.json({
      summary: {
        audioFile: useShort ? 'homer short.mp3' : 'Homer Simpson Best Moments.mp3',
        transcriptionTime,
        modelsRun: modelResults.length,
        strategiesTested: reconciliationResults.length,
        context: geminiContext,
        bestForDoh: bestByDoh?.method,
        fastestStrategy: fastestStrategy?.method,
        bestByWER: bestByWER?.method,
        bestWERScore: bestByWER?.wer?.werPercent,
        hasReference: !!referenceText,
        expLabel
      },
      models: modelResults,
      reconciliations: reconciliationResults,
      timestamp: new Date().toISOString(),
      logs: debug ? logger.getLogs() : undefined
    })

  } catch (error) {
    console.error('=== HOMER TEST ERROR ===')
    console.error(error)

    return NextResponse.json(
      { error: 'Test failed', details: (error as Error).message },
      { status: 500 }
    )
  }
}