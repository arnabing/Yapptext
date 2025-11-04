import { NextRequest, NextResponse } from 'next/server'
import { transcribeWithAssemblyAI, estimateAudioDuration } from '@/lib/assemblyai'
import { checkRateLimit, updateUsage } from '@/lib/rate-limit'
import { transcribeAudioWithGemini, transcribeAudioWithGeminiFromUrl, reconcileTranscriptsWithSpeakers } from '@/lib/gemini'
import { transcribeWithOpenAI, transcribeWithOpenAIFromUrl, fileToBuffer } from '@/lib/openai-transcribe'
import { simpleReconcile, TranscriptSource } from '@/lib/reconcile'

export const maxDuration = 60 // Maximum function duration: 60 seconds

export async function POST(request: NextRequest) {
  console.log('\n=== TRANSCRIBE ENDPOINT START ===')
  console.log('Timestamp:', new Date().toISOString())
  console.log('Headers:', Object.fromEntries(request.headers.entries()))
  
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'
    console.log('Client IP:', ip)

    // Check rate limit
    console.log('Checking rate limit...')
    const { allowed, remaining, minutesUsed } = await checkRateLimit(ip)
    console.log('Rate limit result:', { allowed, remaining, minutesUsed })
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Daily transcription limit reached. Please try again tomorrow.' },
        { status: 429 }
      )
    }

    // Parse form data
    console.log('Parsing form data...')
    const formData = await request.formData()
    
    // Get either the audio URL (from blob) or file (fallback)
    const audioUrl = formData.get('audioUrl') as string
    const audioFile = formData.get('audio') as File
    
    const transcriptionMode = formData.get('transcriptionMode') as string || 'standard'
    const turboMode = transcriptionMode === 'turbo' // For backward compatibility
    const enableSentiment = formData.get('enableSentiment') === 'true'
    const enableKeyPhrases = formData.get('enableKeyPhrases') === 'true'
    
    console.log('Form data parsed')
    console.log('Audio URL:', audioUrl ? 'present' : 'missing')
    console.log('Audio file:', audioFile ? 'present' : 'missing')
    console.log('Transcription mode:', transcriptionMode)
    console.log('Options:', { turboMode, enableSentiment, enableKeyPhrases })
    
    if (!audioUrl && !audioFile) {
      console.error('No audio URL or file in form data')
      return NextResponse.json(
        { error: 'No audio provided' },
        { status: 400 }
      )
    }

    // If using URL, we don't need to validate size (already done during blob upload)
    if (audioFile && !audioUrl) {
      console.log('Using direct file upload (fallback)')
      console.log('Audio file details:', {
        name: audioFile.name,
        size: audioFile.size,
        type: audioFile.type,
        sizeInMB: (audioFile.size / 1024 / 1024).toFixed(2)
      })

        // Validate file size for direct upload (4.5MB Vercel limit)
        if (audioFile.size > 4.5 * 1024 * 1024) {
          console.error('File too large for direct upload:', audioFile.size)
          return NextResponse.json(
            { error: 'File too large. Please use a file smaller than 4.5MB or upgrade for larger files.' },
            { status: 400 }
          )
        }
      }

    // Only validate file type and size for direct file uploads (not blob URLs)
    if (audioFile) {
      // Validate file type
      const validTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/wave', 'audio/x-wav', 
                         'audio/m4a', 'audio/x-m4a', 'audio/webm', 'audio/mp4']
      
      if (!validTypes.includes(audioFile.type) && 
          !audioFile.name.match(/\.(mp3|wav|m4a|webm|mp4)$/i)) {
        return NextResponse.json(
          { error: 'Invalid file type. Please upload an audio file.' },
          { status: 400 }
        )
      }

      // Estimate duration for rate limiting
      const estimatedMinutes = estimateAudioDuration(audioFile.size)
      
      // Check if this would exceed the limit
      if (minutesUsed + estimatedMinutes > 20) {
        return NextResponse.json(
          { error: `This file would exceed your daily limit. You have ${remaining} minutes remaining.` },
          { status: 429 }
        )
      }

      console.log(`Processing audio file: ${audioFile.name}, size: ${(audioFile.size / 1024 / 1024).toFixed(2)}MB`)
    } else if (audioUrl) {
      console.log(`Processing audio from URL: ${audioUrl}`)
    }
    console.log('Environment check:')
    console.log('- ASSEMBLYAI_API_KEY exists:', !!process.env.ASSEMBLYAI_API_KEY)
    console.log('- ASSEMBLYAI_API_KEY length:', process.env.ASSEMBLYAI_API_KEY?.length)
    console.log('- ASSEMBLYAI_API_KEY prefix:', process.env.ASSEMBLYAI_API_KEY?.substring(0, 10))
    console.log('- GEMINI_API_KEY exists:', !!process.env.GEMINI_API_KEY)
    console.log('- GEMINI_API_KEY length:', process.env.GEMINI_API_KEY?.length)
    console.log('- GEMINI_API_KEY prefix:', process.env.GEMINI_API_KEY?.substring(0, 10))

    // Determine MIME type for reasoning mode
    let mimeType = 'audio/mp3'
    if (audioFile) {
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
    }
    
    const startTime = Date.now()
    let assemblyResult
    let geminiResult = null
    let openaiResult = null
    
    // Debug logging for reasoning mode condition
    console.log('Checking reasoning mode conditions:')
    console.log('- transcriptionMode:', transcriptionMode)
    console.log('- transcriptionMode === "reasoning":', transcriptionMode === 'reasoning')
    console.log('- process.env.GEMINI_API_KEY exists:', !!process.env.GEMINI_API_KEY)
    console.log('- process.env.OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY)
    
    // Run transcriptions in parallel for reasoning mode
    if (transcriptionMode === 'reasoning') {
      console.log('Reasoning mode: Running multi-model transcription...')
      console.log('- Has URL:', !!audioUrl)
      console.log('- Has File:', !!audioFile)
      
      // Prepare promises array based on available API keys
      const transcriptionPromises = []
      const transcriptionLabels = []
      
      // For efficiency, download audio ONCE if we have a URL and need it for multiple models
      let audioBuffer: Buffer | null = null
      let audioBase64: string | null = null
      
      if (audioUrl && (process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY)) {
        console.log('Downloading audio once for Gemini/OpenAI...')
        const downloadStart = Date.now()
        try {
          const response = await fetch(audioUrl)
          if (!response.ok) {
            throw new Error(`Failed to fetch audio: ${response.statusText}`)
          }
          const arrayBuffer = await response.arrayBuffer()
          audioBuffer = Buffer.from(arrayBuffer)
          audioBase64 = audioBuffer.toString('base64')
          console.log(`✓ Audio downloaded in ${Date.now() - downloadStart}ms, size: ${(audioBuffer.length / 1024 / 1024).toFixed(2)}MB`)
        } catch (error) {
          console.error('ERROR: Failed to download audio from Blob:', error)
          // If download fails, we cannot proceed with Gemini/OpenAI
          // But AssemblyAI can still work with the URL
          console.log('⚠️  Gemini and OpenAI will be skipped due to download failure')
        }
      }
      
      // Always include AssemblyAI (supports URLs directly)
      transcriptionPromises.push(
        transcribeWithAssemblyAI(audioUrl || audioFile, {
          turboMode: false, // Always use best model in reasoning mode
          enableSentiment,
          enableKeyPhrases,
          isUrl: !!audioUrl
        })
      )
      transcriptionLabels.push('AssemblyAI')
      
      // Add Gemini if API key exists AND we have audio data
      if (process.env.GEMINI_API_KEY) {
        if (audioBase64) {
          // Use pre-downloaded base64
          transcriptionPromises.push(
            transcribeAudioWithGemini(audioBase64, mimeType)
          )
          transcriptionLabels.push('Gemini')
        } else if (audioFile) {
          // Direct file upload (no URL case)
          const buffer = await audioFile.arrayBuffer()
          const base64 = Buffer.from(buffer).toString('base64')
          transcriptionPromises.push(
            transcribeAudioWithGemini(base64, mimeType)
          )
          transcriptionLabels.push('Gemini')
        } else {
          console.log('⚠️  Skipping Gemini: No audio data available')
        }
      }
      
      // Add OpenAI gpt-4o-transcribe if API key exists AND we have audio data
      if (process.env.OPENAI_API_KEY) {
        if (audioBuffer) {
          // Use pre-downloaded buffer
          transcriptionPromises.push(
            transcribeWithOpenAI(audioBuffer, {
              model: 'gpt-4o-transcribe',
              responseFormat: 'json',
              temperature: 0.0
            })
          )
          transcriptionLabels.push('OpenAI-GPT4o')
        } else if (audioFile) {
          // Direct file upload (no URL case)
          const buffer = await fileToBuffer(audioFile)
          transcriptionPromises.push(
            transcribeWithOpenAI(buffer, {
              model: 'gpt-4o-transcribe',
              responseFormat: 'json',
              temperature: 0.0
            })
          )
          transcriptionLabels.push('OpenAI-GPT4o')
        } else {
          console.log('⚠️  Skipping OpenAI: No audio data available')
        }
      }
      
      console.log(`Running ${transcriptionPromises.length} models in parallel:`, transcriptionLabels)
      console.log('=== STARTING PARALLEL TRANSCRIPTION ===')
      console.log('Models to run:', transcriptionLabels.join(', '))
      console.log('Start time:', new Date().toISOString())
      
      const parallelStartTime = Date.now()
      const results = await Promise.allSettled(transcriptionPromises)
      const parallelEndTime = Date.now()
      
      console.log('=== PARALLEL TRANSCRIPTION COMPLETE ===')
      console.log(`- Parallel execution time: ${parallelEndTime - parallelStartTime}ms (${((parallelEndTime - parallelStartTime)/1000).toFixed(1)}s)`)
      console.log(`- Total models run: ${results.length}`)
      console.log(`- Successful: ${results.filter(r => r.status === 'fulfilled').length}`)
      console.log(`- Failed: ${results.filter(r => r.status === 'rejected').length}`)
      
      // Process results with detailed timing
      const modelTimings: Record<string, number> = {}
      results.forEach((result, index) => {
        const label = transcriptionLabels[index]
        console.log(`=== PROCESSING ${label} RESULT ===`)
        console.log('- Status:', result.status)
        
        if (result.status === 'fulfilled') {
          console.log('- Value keys:', Object.keys(result.value))
          console.log('- Has text:', !!result.value.text)
          console.log('- Text length:', result.value.text?.length || 0)
          
          if (label === 'AssemblyAI') {
            assemblyResult = result.value
            console.log('- AssemblyAI utterances:', assemblyResult.utterances?.length || 0)
            console.log('- AssemblyAI speakers:', assemblyResult.utterances ? new Set(assemblyResult.utterances.map((u: any) => u.speaker)).size : 0)
            if (assemblyResult.processingTime) {
              modelTimings['AssemblyAI'] = assemblyResult.processingTime
            }
          } else if (label === 'Gemini') {
            geminiResult = result.value
            console.log('- Gemini processing time:', geminiResult.processingTime, 'ms')
            console.log('- Gemini has context:', !!geminiResult.context)
            if (geminiResult.processingTime) {
              modelTimings['Gemini'] = geminiResult.processingTime
            }
          } else if (label === 'OpenAI-GPT4o') {
            openaiResult = result.value
            console.log('- OpenAI processing time:', openaiResult.processingTime, 'ms')
            if (openaiResult.words) {
              console.log('- OpenAI word timestamps:', openaiResult.words.length)
            }
            if (openaiResult.processingTime) {
              modelTimings['OpenAI'] = openaiResult.processingTime
            }
          } else {
            console.log('- UNMATCHED LABEL:', label)
          }
        } else {
          console.log('- Error:', result.reason?.message)
          console.log('- Error type:', result.reason?.constructor?.name)
          modelTimings[label] = -1 // Mark as failed
        }
      })
      
      // Log timing breakdown
      console.log('=== TIMING BREAKDOWN ===')
      console.log('- Total parallel time:', parallelEndTime - parallelStartTime, 'ms')
      Object.entries(modelTimings).forEach(([model, time]) => {
        if (time === -1) {
          console.log(`- ${model}: FAILED`)
        } else {
          console.log(`- ${model}: ${time}ms`)
        }
      })
      
      // Ensure we have at least AssemblyAI result
      if (!assemblyResult) {
        throw new Error('AssemblyAI transcription failed - cannot proceed')
      }
    } else {
      // Standard or Turbo mode: Just use AssemblyAI
      console.log(`Starting transcription with AssemblyAI (${transcriptionMode} mode)...`)
      assemblyResult = await transcribeWithAssemblyAI(audioUrl || audioFile, {
        turboMode,
        enableSentiment,
        enableKeyPhrases,
        isUrl: !!audioUrl
      })
    }
    
    const transcriptionTime = Date.now() - startTime
    
    let { text, utterances, chapters, duration, allWords, sentimentAnalysis, keyPhrases, confidenceMetrics } = assemblyResult
    
    // Reconcile multiple transcripts if we have them
    if (transcriptionMode === 'reasoning') {
      // Prepare transcript sources for reconciliation
      const transcriptSources: TranscriptSource[] = []
      
      // Always include AssemblyAI
      transcriptSources.push({
        name: 'AssemblyAI',
        text: assemblyResult.text,
        words: allWords
      })
      
      // Add Gemini if available
      if (geminiResult && geminiResult.text) {
        transcriptSources.push({
          name: 'Gemini',
          text: geminiResult.text,
          context: geminiResult.context  // Pass context for reconciliation
        })
      }
      
      // Add OpenAI if available
      if (openaiResult && openaiResult.text) {
        transcriptSources.push({
          name: 'OpenAI-GPT4o',  // Fixed label to match what reconciliation expects
          text: openaiResult.text,
          words: openaiResult.words
        })
      }
      
      console.log('=== BEFORE RECONCILIATION ===')
      console.log('- assemblyResult exists:', !!assemblyResult)
      console.log('- geminiResult exists:', !!geminiResult)
      console.log('- openaiResult exists:', !!openaiResult)
      console.log('- assemblyResult.text length:', assemblyResult?.text?.length || 0)
      console.log('- geminiResult.text length:', geminiResult?.text?.length || 0)
      console.log('- openaiResult.text length:', openaiResult?.text?.length || 0)
      console.log('- transcriptSources length:', transcriptSources.length)
      transcriptSources.forEach((source, i) => {
        console.log(`- Source ${i}: ${source.name} (${source.text?.length || 0} chars)`)
      })
      
      console.log(`Reasoning mode: Reconciling ${transcriptSources.length} transcripts...`)
      console.log('- Sources:', transcriptSources.map(s => s.name))
      
      if (transcriptSources.length > 1) {
        try {
          console.log('Starting reconciliation...')
          const reconcileStart = Date.now()
          
          // Use the new reconciliation function
          const reconciliationResult = await simpleReconcile(transcriptSources, {
            preserveSpeakers: true,
            assemblyUtterances: utterances
          })
          
          const reconcileTime = Date.now() - reconcileStart
          
          // Update the results with reconciled data
          text = reconciliationResult.text
          if (reconciliationResult.utterances) {
            utterances = reconciliationResult.utterances
          }
          
          console.log('=== RECONCILIATION COMPLETE ===')
          console.log('- Reconciliation time:', reconcileTime, 'ms')
          console.log('- Method used:', reconciliationResult.method)
          console.log('- Sources used:', reconciliationResult.sourcesUsed)
          console.log('- Original AssemblyAI:', assemblyResult.text.length, 'chars')
          if (geminiResult) console.log('- Original Gemini:', geminiResult.text.length, 'chars')
          if (openaiResult) console.log('- Original OpenAI:', openaiResult.text.length, 'chars')
          console.log('- Reconciled result:', text.length, 'chars')
          console.log('- Speakers preserved:', utterances?.length || 0, 'utterances')
          
          // Check for specific content preservation
          const hasDoh = text.toLowerCase().includes('doh') || text.toLowerCase().includes("d'oh");
          console.log('- Contains "Doh!":', hasDoh)
          
          if (reconciliationResult.improvementMetrics) {
            console.log('- Improvement metrics:', reconciliationResult.improvementMetrics)
          }
        } catch (error) {
          console.error('Reconciliation failed, using AssemblyAI transcript:', error)
          // Fall back to AssemblyAI transcript if reconciliation fails
        }
      } else {
        console.log('Only one transcript available, skipping reconciliation')
      }
    }
    
    // Final performance summary
    console.log('=== FINAL PERFORMANCE SUMMARY ===')
    console.log(`Total API time: ${transcriptionTime}ms (${(transcriptionTime/1000).toFixed(1)}s)`)
    console.log('Mode:', transcriptionMode)
    if (transcriptionMode === 'reasoning') {
      console.log('Models used:')
      console.log('  - AssemblyAI: ✓')
      if (geminiResult) console.log('  - Gemini: ✓')
      if (openaiResult) console.log('  - OpenAI: ✓')
      console.log('Reconciliation applied:', text !== assemblyResult.text ? 'Yes (text changed)' : 'No (same as AssemblyAI)')
      
      // Check for specific content preservation
      const finalHasDoh = text.toLowerCase().includes('doh') || text.toLowerCase().includes("d'oh");
      console.log('Final transcript contains "Doh!":', finalHasDoh)
    }
    
    // Update usage
    const newUsage = await updateUsage(ip, duration)
    
    // Calculate word count
    const words = text.trim().split(/\s+/).length

    return NextResponse.json({
      text,
      words,
      utterances,
      chapters,
      duration,
      allWords,
      sentimentAnalysis,
      keyPhrases,
      minutesUsed: newUsage,
      remainingMinutes: Math.max(0, 20 - newUsage)
    })
    
  } catch (error) {
    console.error('=== TRANSCRIPTION ERROR ===')
    console.error('Error type:', typeof error)
    console.error('Error instance:', error instanceof Error)
    console.error('Full error:', error)
    
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      console.error('Error name:', error.name)
    }
    
    // Check for missing API key
    if (!process.env.ASSEMBLYAI_API_KEY) {
      console.error('ASSEMBLYAI_API_KEY is not configured in environment')
      return NextResponse.json(
        { error: 'Transcription service not configured. Please contact support.' },
        { status: 503 }
      )
    }
    
    // Check if it's an AssemblyAI API error
    if (error instanceof Error && error.message.includes('AssemblyAI')) {
      return NextResponse.json(
        { error: 'Transcription service temporarily unavailable. Please try again.' },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to transcribe audio. Please try again.' },
      { status: 500 }
    )
  } finally {
    console.log('=== TRANSCRIBE ENDPOINT END ===\n')
  }
}