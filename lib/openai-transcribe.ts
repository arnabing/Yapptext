import OpenAI from 'openai';
import { Readable } from 'stream';
import { File } from 'node:buffer';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface OpenAITranscriptionResult {
  text: string;
  words?: Array<{
    word: string;
    start: number;
    end: number;
  }>;
  segments?: Array<{
    id: number;
    seek: number;
    start: number;
    end: number;
    text: string;
    tokens: number[];
    temperature: number;
    avg_logprob: number;
    compression_ratio: number;
    no_speech_prob: number;
  }>;
  duration?: number;
  processingTime: number;
}

/**
 * Transcribe audio using OpenAI's latest models
 */
export async function transcribeWithOpenAI(
  audioFile: File | Buffer | string,
  options: {
    model?: 'whisper-1' | 'gpt-4o-transcribe' | 'gpt-4o-mini-transcribe';
    responseFormat?: 'json' | 'text' | 'verbose_json';
    prompt?: string;
    language?: string;
    temperature?: number;
  } = {}
): Promise<OpenAITranscriptionResult> {
  try {
    console.log('=== OPENAI AUDIO TRANSCRIPTION START ===');
    console.log('- Input type:', typeof audioFile, audioFile instanceof File ? 'File' : Buffer.isBuffer(audioFile) ? 'Buffer' : 'string');
    console.log('- Model:', options.model || 'gpt-4o-transcribe');
    console.log('- Response format:', options.responseFormat || 'json');
    console.log('- API key exists:', !!process.env.OPENAI_API_KEY);
    console.log('- API key length:', process.env.OPENAI_API_KEY?.length);
    console.log('- API key prefix:', process.env.OPENAI_API_KEY?.substring(0, 10));
    
    if (!process.env.OPENAI_API_KEY) {
      console.error('⚠️  OPENAI_API_KEY is not configured in environment');
      throw new Error('OPENAI_API_KEY is not configured');
    }
    
    const startTime = Date.now();
    
    // Convert audio to appropriate format for OpenAI
    let file: any;
    
    if (audioFile instanceof File) {
      // Browser File object
      console.log('Processing as File object');
      file = audioFile;
    } else if (Buffer.isBuffer(audioFile)) {
      // Node.js Buffer - OpenAI SDK needs a File-like object
      console.log('Processing as Buffer, size:', audioFile.length);
      // Use Node.js File class
      file = new File([audioFile], 'audio.mp3', { type: 'audio/mpeg' });
      console.log('Created File with name:', file.name, 'size:', file.size);
    } else if (typeof audioFile === 'string') {
      // Base64 string - convert to Buffer then to File
      console.log('Processing as base64 string, length:', audioFile.length);
      const buffer = Buffer.from(audioFile, 'base64');
      file = new File([buffer], 'audio.mp3', { type: 'audio/mpeg' });
      console.log('Created File from base64, size:', file.size);
    } else {
      console.error('Invalid input type:', typeof audioFile);
      throw new Error('Invalid audio file format');
    }
    
    // Use gpt-4o-transcribe by default for best accuracy
    const model = options.model || 'gpt-4o-transcribe';
    
    // gpt-4o models only support json or text formats
    const responseFormat = model.includes('gpt-4o') 
      ? (options.responseFormat === 'text' ? 'text' : 'json')
      : (options.responseFormat || 'verbose_json');
    
    console.log(`Using model: ${model} with format: ${responseFormat}`);
    
    const transcriptionParams: any = {
      file: file,
      model: model,
      response_format: responseFormat,
    };
    
    // Add optional parameters
    if (options.prompt) {
      transcriptionParams.prompt = options.prompt;
    }
    
    if (options.language) {
      transcriptionParams.language = options.language;
    }
    
    if (options.temperature !== undefined) {
      transcriptionParams.temperature = options.temperature;
    }
    
    // For whisper-1, we can get word-level timestamps
    if (model === 'whisper-1' && responseFormat === 'verbose_json') {
      transcriptionParams.timestamp_granularities = ['word', 'segment'];
    }
    
    const transcription = await openai.audio.transcriptions.create(transcriptionParams);
    
    const processingTime = Date.now() - startTime;
    
    // Handle different response formats
    let result: OpenAITranscriptionResult;
    
    if (responseFormat === 'text') {
      result = {
        text: transcription as unknown as string,
        processingTime
      };
    } else {
      // JSON or verbose_json format
      const jsonResponse = transcription as any;
      result = {
        text: jsonResponse.text,
        words: jsonResponse.words,
        segments: jsonResponse.segments,
        duration: jsonResponse.duration,
        processingTime
      };
    }
    
    console.log(`=== OPENAI TRANSCRIPTION SUCCESS ===`);
    console.log(`- Processing time: ${processingTime}ms`);
    console.log(`- Transcript length: ${result.text.length} characters`);
    console.log(`- First 200 chars: ${result.text.substring(0, 200)}...`);
    console.log(`- Word count: ${result.text.split(/\s+/).length} words`);
    if (result.words) {
      console.log(`- Word-level timestamps: ${result.words.length} words`);
    }
    if (result.segments) {
      console.log(`- Segments: ${result.segments.length}`);
    }
    
    return result;
  } catch (error: any) {
    console.error('=== OPENAI TRANSCRIPTION ERROR ===');
    console.error('- Error type:', error?.constructor?.name);
    console.error('- Error message:', error?.message);
    console.error('- Error status:', error?.status);
    console.error('- Error response:', error?.response);
    console.error('- Full error:', error);
    
    // Check for specific error types
    if (error?.message?.includes('API key') || error?.message?.includes('Incorrect API key')) {
      console.error('⚠️  API Key Issue: Check that your OPENAI_API_KEY is correct');
      console.error('   - Should start with "sk-"');
      console.error('   - No quotes around the key');
      console.error('   - No extra spaces');
    } else if (error?.message?.includes('quota')) {
      console.error('⚠️  Quota exceeded - check your OpenAI billing');
    } else if (error?.message?.includes('model') || error?.message?.includes('does not exist')) {
      console.error('⚠️  Model not available - gpt-4o-transcribe may not be accessible');
      console.error('   - Try using "whisper-1" instead');
    } else if (error?.status === 413) {
      console.error('⚠️  File too large - max 25MB for OpenAI');
    } else if (error?.message?.includes('Invalid value')) {
      console.error('⚠️  File format issue - OpenAI expects specific file format');
      console.error('   - Make sure audio is properly formatted');
    }
    
    // More detailed error message
    const errorMessage = error?.message || 'Unknown error';
    throw new Error(`OpenAI transcription failed: ${errorMessage}`);
  }
}

/**
 * Transcribe audio directly from URL (downloads first, then transcribes)
 * Note: OpenAI doesn't support direct URL transcription, so we need to download first
 */
export async function transcribeWithOpenAIFromUrl(
  audioUrl: string,
  options: {
    model?: 'whisper-1' | 'gpt-4o-transcribe' | 'gpt-4o-mini-transcribe';
    responseFormat?: 'json' | 'text' | 'verbose_json';
    prompt?: string;
    language?: string;
    temperature?: number;
  } = {}
): Promise<OpenAITranscriptionResult> {
  try {
    console.log('=== OPENAI URL TRANSCRIPTION START ===');
    console.log('- Fetching audio from URL:', audioUrl);
    
    // Download the audio file
    const response = await fetch(audioUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch audio: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    console.log('- Audio downloaded, size:', (buffer.length / 1024 / 1024).toFixed(2), 'MB');
    
    // Now transcribe using the buffer
    return transcribeWithOpenAI(buffer, options);
  } catch (error: any) {
    console.error('OpenAI URL transcription error:', error);
    throw new Error(`Failed to transcribe from URL: ${error?.message || 'Unknown error'}`);
  }
}

/**
 * Helper function to convert File to Buffer for Node.js environment
 */
export async function fileToBuffer(file: File): Promise<Buffer> {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * Helper function to estimate audio duration from file size
 * (Similar to AssemblyAI's estimation)
 */
export function estimateAudioDuration(fileSize: number): number {
  // Rough estimation: 1 minute of audio ≈ 1MB for MP3 at 128kbps
  const minutes = fileSize / (1024 * 1024);
  return Math.ceil(minutes);
}