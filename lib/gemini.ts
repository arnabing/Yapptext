import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export interface TranscriptSegment {
  text: string;
  start: number;
  end: number;
  confidence?: number;
  speaker?: string;
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