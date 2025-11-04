import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenAI, createUserContent, createPartFromUri } from '@google/genai';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// Initialize Gemini AI with both SDKs
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const genAINew = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface TranscriptSegment {
  text: string;
  start: number;
  end: number;
  confidence?: number;
  speaker?: string;
}

export interface GeminiTranscriptionResult {
  text: string;
  processingTime: number;
  context?: string;
}

export interface EnhancementRequest {
  segments: TranscriptSegment[];
  context: string;
  lowConfidenceWords: Array<{
    word: string;
    confidence: number;
    timestamp: number;
  }>;
}

export async function enhanceTranscriptWithGemini(request: EnhancementRequest): Promise<string> {
  try {
    // Use Gemini 2.5 Flash-Lite for cost-effective enhancement
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Build context-aware prompt
    const prompt = `You are a professional transcription editor. Your task is to correct errors in the following transcript while preserving the original meaning and speaker intent.

## Context
This is an audio transcript that may contain errors, especially in the following low-confidence words:
${request.lowConfidenceWords.map(w => `- "${w.word}" (confidence: ${w.confidence.toFixed(2)})`).join('\n')}

## Original Transcript
${request.segments.map(s => s.text).join(' ')}

## Instructions
1. Fix obvious transcription errors (misspellings, wrong words that sound similar)
2. Correct proper nouns, brand names, and technical terms
3. Fix grammar only where it's clearly a transcription error, not natural speech
4. Preserve the speaker's natural speaking style and tone
5. DO NOT add or remove content
6. DO NOT change the meaning
7. Keep contractions and informal speech as-is

## Output Format
Return ONLY the corrected transcript text, without any explanations or metadata.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const enhancedText = response.text();

    console.log('Gemini enhancement completed');
    console.log(`- Original length: ${request.segments.map(s => s.text).join(' ').length}`);
    console.log(`- Enhanced length: ${enhancedText.length}`);

    return enhancedText;
  } catch (error) {
    console.error('Gemini enhancement error:', error);
    throw new Error('Failed to enhance transcript with Gemini');
  }
}

export async function enhanceSegmentsWithGemini(
  segments: TranscriptSegment[],
  lowConfidenceWords: Array<{ word: string; confidence: number; timestamp: number }>
): Promise<TranscriptSegment[]> {
  try {
    // Group segments into batches for efficient processing
    const BATCH_SIZE = 10;
    const enhancedSegments: TranscriptSegment[] = [];
    
    for (let i = 0; i < segments.length; i += BATCH_SIZE) {
      const batch = segments.slice(i, i + BATCH_SIZE);
      const batchStart = batch[0].start;
      const batchEnd = batch[batch.length - 1].end;
      
      // Find low confidence words in this batch's time range
      const relevantLowConfWords = lowConfidenceWords.filter(
        w => w.timestamp >= batchStart && w.timestamp <= batchEnd
      );
      
      if (relevantLowConfWords.length === 0) {
        // No low confidence words, keep original
        enhancedSegments.push(...batch);
        continue;
      }
      
      // Enhance this batch
      const enhanced = await enhanceTranscriptWithGemini({
        segments: batch,
        context: getContext(segments, i, BATCH_SIZE),
        lowConfidenceWords: relevantLowConfWords
      });
      
      // Split enhanced text back into segments (simple approach)
      // In production, you'd want more sophisticated alignment
      const enhancedText = enhanced.split(' ');
      const wordsPerSegment = Math.ceil(enhancedText.length / batch.length);
      
      batch.forEach((originalSegment, idx) => {
        const startIdx = idx * wordsPerSegment;
        const endIdx = Math.min((idx + 1) * wordsPerSegment, enhancedText.length);
        const segmentText = enhancedText.slice(startIdx, endIdx).join(' ');
        
        enhancedSegments.push({
          ...originalSegment,
          text: segmentText || originalSegment.text // Fallback to original if empty
        });
      });
    }
    
    return enhancedSegments;
  } catch (error) {
    console.error('Segment enhancement error:', error);
    // Return original segments if enhancement fails
    return segments;
  }
}

function getContext(segments: TranscriptSegment[], currentIndex: number, batchSize: number): string {
  // Get surrounding context (previous and next segments)
  const contextBefore = segments
    .slice(Math.max(0, currentIndex - 5), currentIndex)
    .map(s => s.text)
    .join(' ');
    
  const contextAfter = segments
    .slice(currentIndex + batchSize, Math.min(segments.length, currentIndex + batchSize + 5))
    .map(s => s.text)
    .join(' ');
    
  return `Previous context: ${contextBefore}\n\nNext context: ${contextAfter}`;
}

/**
 * Transcribe audio from URL using Gemini's file upload
 */
export async function transcribeAudioWithGeminiFromUrl(
  audioUrl: string,
  mimeType: string = 'audio/mp3'
): Promise<GeminiTranscriptionResult> {
  try {
    console.log('=== GEMINI URL TRANSCRIPTION START ===');
    console.log('- Audio URL:', audioUrl);
    console.log('- MIME type:', mimeType);
    
    // Download the audio file first (Gemini file upload doesn't accept URLs)
    console.log('- Downloading audio from URL...');
    const response = await fetch(audioUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch audio: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const audioBase64 = Buffer.from(arrayBuffer).toString('base64');
    
    console.log('- Audio downloaded, size:', (arrayBuffer.byteLength / 1024 / 1024).toFixed(2), 'MB');
    console.log('- Base64 length:', audioBase64.length);
    
    // Now transcribe using the base64 data (reuse existing function)
    return transcribeAudioWithGemini(audioBase64, mimeType);
  } catch (error: any) {
    console.error('=== GEMINI URL TRANSCRIPTION ERROR ===');
    console.error('- Error type:', error?.constructor?.name);
    console.error('- Error message:', error?.message);
    console.error('- Full error:', error);
    throw new Error(`Gemini URL transcription failed: ${error?.message || 'Unknown error'}`);
  }
}

/**
 * Transcribe audio using Gemini's file upload approach (new SDK)
 */
export async function transcribeAudioWithGeminiFileUpload(
  audioBuffer: Buffer,
  mimeType: string = 'audio/mp3',
  fileName: string = 'audio.mp3'
): Promise<GeminiTranscriptionResult> {
  try {
    console.log('=== GEMINI FILE UPLOAD TRANSCRIPTION START ===');
    console.log('- Audio buffer size:', audioBuffer.length);
    console.log('- MIME type:', mimeType);
    console.log('- File name:', fileName);
    
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }
    
    const startTime = Date.now();
    
    try {
      console.log('Uploading audio file to Gemini...');
      
      // Create a temporary file
      const tempDir = os.tmpdir();
      const tempFilePath = path.join(tempDir, `gemini_audio_${Date.now()}.${fileName.split('.').pop()}`);
      
      // Write buffer to temp file
      fs.writeFileSync(tempFilePath, audioBuffer);
      console.log('Temp file created:', tempFilePath);
      
      try {
        // Upload the file
        const uploadedFile = await genAINew.files.upload({
          file: tempFilePath,
          config: { mimeType: mimeType }
        });
        
        console.log('File uploaded successfully:', uploadedFile.uri);
        
        // First get context analysis
        console.log('Analyzing audio context...');
        const contextResult = await genAINew.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: createUserContent([
            createPartFromUri(uploadedFile.uri ?? '', uploadedFile.mimeType ?? mimeType ?? 'audio/mpeg'),
            'Briefly describe this audio content in 1-2 sentences. Focus on identifying speakers, the type of content (conversation, narration, etc.), and any notable characteristics.'
          ])
        });
        
        const audioContext = contextResult.text;
        console.log('=== GEMINI CONTEXT ANALYSIS ===');
        console.log(audioContext);
        
        // Generate transcript with context awareness
        const result = await genAINew.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: createUserContent([
            createPartFromUri(uploadedFile.uri ?? '', uploadedFile.mimeType ?? mimeType ?? 'audio/mpeg'),
            `Context: ${audioContext}\n\nGenerate an accurate transcript of this audio. Include all spoken words, fillers (um, uh), interjections (Doh!, wow, etc.), and natural speech patterns. Use proper punctuation and capitalization. Return ONLY the transcript text.`
          ])
        });
        
        const transcript = result.text;
        const processingTime = Date.now() - startTime;
        
        if (!transcript || transcript.length === 0) {
          throw new Error('Gemini returned empty transcript');
        }
        
        console.log(`=== GEMINI FILE UPLOAD SUCCESS ===`);
        console.log(`- Processing time: ${processingTime}ms`);
        console.log(`- Transcript length: ${transcript.length} characters`);
        console.log(`- Has context: true`);
        console.log(`- First 200 chars: ${transcript.substring(0, 200)}...`);
        
        return {
          text: transcript,
          processingTime,
          context: audioContext
        };
      } finally {
        // Always clean up temp file
        try {
          fs.unlinkSync(tempFilePath);
          console.log('Temp file cleaned up');
        } catch (cleanupError) {
          console.warn('Failed to clean up temp file:', cleanupError);
        }
      }
    } catch (uploadError: any) {
      console.error('File upload approach failed:', uploadError?.message);
      throw uploadError;
    }
  } catch (error: any) {
    console.error('=== GEMINI FILE UPLOAD ERROR ===');
    console.error('Error:', error?.message || error);
    throw new Error(`Gemini file upload failed: ${error?.message || 'Unknown error'}`);
  }
}

/**
 * Analyze audio context quickly without full transcription (file upload path)
 */
export async function analyzeAudioContextWithGemini(
  audioBuffer: Buffer,
  mimeType: string = 'audio/mp3',
  fileName: string = 'audio.mp3'
): Promise<string> {
  if (!process.env.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not configured');
  // Upload as temp file and only ask for a short description
  const os = await import('os');
  const path = await import('path');
  const fs = await import('fs');
  const tempDir = os.tmpdir();
  const tempFile = path.join(tempDir, `gemini_ctx_${Date.now()}.${fileName.split('.').pop()}`);
  fs.writeFileSync(tempFile, audioBuffer);
  try {
    const safeMime = mimeType || 'audio/mpeg';
    const uploaded = await genAINew.files.upload({ file: tempFile, config: { mimeType: safeMime } });
    const ctxResult = await genAINew.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: createUserContent([
        createPartFromUri(uploaded.uri ?? '', ((uploaded as any).mimeType ?? safeMime)),
        'Briefly describe this audio content in 1–2 sentences. Focus on who is speaking, the type of content, and notable characteristics.'
      ])
    });
    return ctxResult.text || '';
  } finally {
    try { fs.unlinkSync(tempFile); } catch {}
  }
}

/**
 * Transcribe audio directly using Gemini's native audio understanding (fallback to inline data)
 */
export async function transcribeAudioWithGemini(audioBase64: string, mimeType: string = 'audio/mp3'): Promise<GeminiTranscriptionResult> {
  try {
    // First try the new file upload approach if we have a buffer
    const audioBuffer = Buffer.from(audioBase64, 'base64');
    if (audioBuffer && audioBuffer.length > 0) {
      console.log('Attempting file upload approach first...');
      try {
        return await transcribeAudioWithGeminiFileUpload(audioBuffer, mimeType);
      } catch (uploadError) {
        console.log('File upload failed, falling back to inline data approach:', uploadError);
      }
    }
    
    console.log('=== GEMINI INLINE TRANSCRIPTION START ===');
    console.log('- Audio base64 size:', audioBase64.length);
    console.log('- MIME type:', mimeType);
    console.log('- API key exists:', !!process.env.GEMINI_API_KEY);
    
    // Validate inputs
    if (!audioBase64 || audioBase64.length === 0) {
      throw new Error('Audio base64 is empty');
    }
    
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }
    
    const startTime = Date.now();
    
    // Try both model names
    let model;
    let modelName = 'gemini-2.5-flash';  // Start with stable model
    
    try {
      model = genAI.getGenerativeModel({ 
        model: modelName,
        generationConfig: {
          temperature: 0.1,
          topK: 1,
          topP: 0.8,
          maxOutputTokens: 8192,
        }
      });
    } catch (modelError) {
      console.log(`Model ${modelName} failed, trying gemini-2.0-flash-exp`);
      modelName = 'gemini-2.0-flash-exp';
      model = genAI.getGenerativeModel({ 
        model: modelName,
        generationConfig: {
          temperature: 0.1,
          topK: 1,
          topP: 0.8,
          maxOutputTokens: 8192,
        }
      });
    }

    // First get context analysis
    console.log('Analyzing audio context with Gemini (inline)...');
    let audioContext: string | undefined;
    const contextParts = [
      {
        inlineData: {
          mimeType: mimeType,
          data: audioBase64
        }
      },
      {
        text: 'Briefly describe what this audio is about in 1-2 sentences. What is the context, topic, and who is speaking?'
      }
    ];
    
    try {
      const contextResult = await model.generateContent(contextParts);
      if (contextResult.response) {
        audioContext = contextResult.response.text();
        console.log('=== GEMINI CONTEXT ANALYSIS (INLINE) ===');
        console.log(audioContext);
        console.log('=========================================');
      }
    } catch (contextError) {
      console.log('Context analysis failed, continuing with transcription');
    }

    const prompt = `Transcribe this audio accurately. Include all spoken words, fillers (um, uh), and natural speech patterns. Use proper punctuation and capitalization. Return ONLY the transcript text.`;

    console.log(`Sending request to Gemini API with model: ${modelName}`);
    
    // Create the request with proper formatting
    const parts = [
      {
        inlineData: {
          mimeType: mimeType,
          data: audioBase64
        }
      },
      {
        text: prompt
      }
    ];
    
    const result = await model.generateContent(parts);

    if (!result.response) {
      throw new Error('No response from Gemini API');
    }
    
    const transcript = result.response.text();
    const processingTime = Date.now() - startTime;

    if (!transcript || transcript.length === 0) {
      throw new Error('Gemini returned empty transcript');
    }

    console.log(`=== GEMINI INLINE SUCCESS ===`);
    console.log(`- Processing time: ${processingTime}ms`);
    console.log(`- Transcript length: ${transcript.length} characters`);
    console.log(`- First 200 chars: ${transcript.substring(0, 200)}...`);
    console.log(`- Word count: ${transcript.split(/\s+/).length} words`);

    return {
      text: transcript,
      processingTime,
      context: audioContext
    };
  } catch (error: any) {
    console.error('=== GEMINI TRANSCRIPTION ERROR ===');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error?.message);
    console.error('Error details:', error);
    
    // More detailed error message
    const errorMessage = error?.message || 'Unknown error';
    throw new Error(`Gemini transcription failed: ${errorMessage}`);
  }
}

/**
 * Reconcile two transcripts using Gemini's intelligence with audio context
 */
export async function reconcileTranscriptsWithAudio(
  assemblyTranscript: string,
  geminiTranscript: string,
  audioBase64: string,
  mimeType: string = 'audio/mp3'
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `You have two transcripts of the same audio from different AI models. 
    Listen to the audio and create the most accurate final transcript.

    Transcript A (AssemblyAI):
    ${assemblyTranscript}

    Transcript B (Gemini):
    ${geminiTranscript}

    Instructions:
    1. Listen carefully to the actual audio
    2. When the transcripts differ, choose the version that matches what you hear
    3. Fix any errors present in both transcripts
    4. Preserve natural speech patterns and fillers
    5. Ensure proper punctuation and capitalization
    6. Pay special attention to:
       - Proper nouns and names
       - Technical terms and acronyms
       - Numbers and dates
       - Homophones (words that sound alike)

    Return ONLY the final, most accurate transcript.`;

    const result = await model.generateContent([
      { inlineData: { mimeType, data: audioBase64 } },
      { text: prompt }
    ]);

    const response = await result.response;
    const reconciledTranscript = response.text();

    console.log('Gemini reconciliation completed');
    console.log(`- Original AssemblyAI length: ${assemblyTranscript.length}`);
    console.log(`- Original Gemini length: ${geminiTranscript.length}`);
    console.log(`- Reconciled length: ${reconciledTranscript.length}`);

    return reconciledTranscript;
  } catch (error) {
    console.error('Gemini reconciliation error:', error);
    // Fallback to AssemblyAI transcript if reconciliation fails
    return assemblyTranscript;
  }
}

/**
 * Reconcile transcripts with speaker information preserved
 */
export async function reconcileTranscriptsWithSpeakers(
  assemblyUtterances: Array<{ speaker: string; text: string; start: number; end: number }>,
  geminiTranscript: string,
  audioBase64: string,
  mimeType: string = 'audio/mp3'
): Promise<Array<{ speaker: string; text: string; start: number; end: number }>> {
  try {
    console.log('Starting transcript reconciliation with speakers...');
    console.log('- Assembly utterances:', assemblyUtterances.length);
    console.log('- Gemini transcript length:', geminiTranscript.length);
    console.log('- Audio provided:', !!audioBase64);
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const assemblyFormatted = assemblyUtterances
      .map(u => `[${u.speaker}]: ${u.text}`)
      .join('\n');

    const prompt = `You have two transcripts of the same audio. 
    Listen to the audio and create the most accurate version while preserving speaker labels.

    Transcript A (with speakers):
    ${assemblyFormatted}

    Transcript B (without speakers):
    ${geminiTranscript}

    Instructions:
    1. Listen to the actual audio to verify accuracy
    2. Keep the speaker labels from Transcript A
    3. Use the most accurate text from either transcript
    4. Fix any errors present in both
    5. Maintain the same format: [Speaker]: text
    
    Return the corrected transcript in the same [Speaker]: text format.`;

    const result = await model.generateContent([
      { inlineData: { mimeType, data: audioBase64 } },
      { text: prompt }
    ]);

    const response = await result.response;
    const reconciledText = response.text();

    // Parse the reconciled text back into utterances
    const lines = reconciledText.split('\n').filter(line => line.trim());
    const reconciledUtterances = lines.map((line, index) => {
      const match = line.match(/\[([^\]]+)\]:\s*(.*)/);
      if (match) {
        // Try to find the original utterance to preserve timestamps
        const originalUtterance = assemblyUtterances.find(
          u => u.speaker === match[1] && index < assemblyUtterances.length
        ) || assemblyUtterances[index];
        
        return {
          speaker: match[1],
          text: match[2],
          start: originalUtterance?.start || 0,
          end: originalUtterance?.end || 0
        };
      }
      // Fallback if format doesn't match
      return assemblyUtterances[index] || { speaker: 'SPEAKER_00', text: line, start: 0, end: 0 };
    });

    return reconciledUtterances;
  } catch (error) {
    console.error('Speaker reconciliation error:', error);
    // Return original utterances if reconciliation fails
    return assemblyUtterances;
  }
}