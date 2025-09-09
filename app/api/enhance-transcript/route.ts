import { NextRequest, NextResponse } from 'next/server';
import { enhanceSegmentsWithGemini } from '@/lib/gemini';

export const maxDuration = 60; // Maximum function duration: 60 seconds

export async function POST(request: NextRequest) {
  console.log('\n=== ENHANCE TRANSCRIPT ENDPOINT START ===');
  console.log('Timestamp:', new Date().toISOString());
  
  try {
    // Check if Gemini API key is configured
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Enhancement service not configured' },
        { status: 503 }
      );
    }
    
    const body = await request.json();
    const { utterances, confidenceMetrics, allWords } = body;
    
    if (!utterances || !Array.isArray(utterances)) {
      return NextResponse.json(
        { error: 'Invalid request: utterances required' },
        { status: 400 }
      );
    }
    
    console.log('Enhancement request received:');
    console.log('- Utterances:', utterances.length);
    console.log('- Average confidence:', confidenceMetrics?.averageConfidence);
    console.log('- Low confidence words:', confidenceMetrics?.lowConfidenceWords?.length || 0);
    
    // Only enhance if confidence is below threshold or there are many low-confidence words
    const shouldEnhance = 
      (confidenceMetrics?.averageConfidence < 0.85) ||
      (confidenceMetrics?.lowConfidenceWords?.length > 10);
    
    if (!shouldEnhance) {
      console.log('Transcript confidence is high, skipping enhancement');
      return NextResponse.json({ 
        utterances,
        enhanced: false,
        message: 'Transcript confidence is already high'
      });
    }
    
    console.log('Starting Gemini enhancement...');
    const startTime = Date.now();
    
    // Convert utterances to format expected by Gemini enhancer
    const segments = utterances.map((u: any) => ({
      text: u.text,
      start: u.start,
      end: u.end,
      speaker: u.speaker,
      confidence: u.confidence
    }));
    
    // Enhance segments with Gemini
    const enhancedSegments = await enhanceSegmentsWithGemini(
      segments,
      confidenceMetrics?.lowConfidenceWords || []
    );
    
    // Convert back to utterance format
    const enhancedUtterances = enhancedSegments.map(s => ({
      speaker: s.speaker,
      text: s.text,
      start: s.start,
      end: s.end,
      words: [] // Words will be recalculated if needed
    }));
    
    const enhancementTime = Date.now() - startTime;
    console.log(`Enhancement completed in ${enhancementTime}ms`);
    
    // Calculate the full enhanced text
    const enhancedText = enhancedUtterances.map((u: any) => u.text).join(' ');
    
    return NextResponse.json({
      text: enhancedText,
      utterances: enhancedUtterances,
      enhanced: true,
      enhancementTime,
      originalConfidence: confidenceMetrics?.averageConfidence,
      lowConfidenceWordsFixed: confidenceMetrics?.lowConfidenceWords?.length || 0
    });
    
  } catch (error) {
    console.error('=== ENHANCEMENT ERROR ===');
    console.error('Error:', error);
    
    return NextResponse.json(
      { error: 'Failed to enhance transcript' },
      { status: 500 }
    );
  } finally {
    console.log('=== ENHANCE TRANSCRIPT ENDPOINT END ===\n');
  }
}