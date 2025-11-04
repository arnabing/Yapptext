import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface TranscriptSource {
  name: string;
  text: string;
  confidence?: number;
  context?: string;
  words?: Array<{ text?: string; word?: string; start: number; end: number; confidence?: number }>;
}

export interface ReconciliationResult {
  text: string;
  utterances?: Array<{ speaker: string; text: string; start: number; end: number }>;
  method: string;
  sourcesUsed: string[];
  improvementMetrics?: {
    disagreements: number;
    corrections: number;
    confidenceScore: number;
  };
}

/**
 * Simple reconciliation using GPT-4 to pick the best parts from multiple transcripts
 */
export async function simpleReconcile(
  sources: TranscriptSource[],
  options: {
    preserveSpeakers?: boolean;
    assemblyUtterances?: Array<{ speaker: string; text: string; start: number; end: number }>;
  } = {}
): Promise<ReconciliationResult> {
  try {
    console.log('=== STARTING SIMPLE RECONCILIATION ===');
    console.log('Sources provided:', sources.map(s => s.name));
    console.log('Preserve speakers:', options.preserveSpeakers);
    
    // Check for interjections in source texts
    const interjectionChecks = ['doh', "d'oh", 'wow', 'oh', 'ah', 'hmm', 'uh', 'um'];
    sources.forEach(source => {
      const lowerText = source.text.toLowerCase();
      const foundInterjections = interjectionChecks.filter(interjection => lowerText.includes(interjection));
      if (foundInterjections.length > 0) {
        console.log(`- ${source.name} contains interjections:`, foundInterjections);
      }
    });
    
    // Filter out empty transcripts
    const validSources = sources.filter(s => s.text && s.text.length > 0);
    
    if (validSources.length === 0) {
      throw new Error('No valid transcripts to reconcile');
    }
    
    if (validSources.length === 1) {
      console.log('Only one valid transcript, returning as-is');
      return {
        text: validSources[0].text,
        utterances: options.assemblyUtterances,
        method: 'single_source',
        sourcesUsed: [validSources[0].name]
      };
    }
    
    // Build the reconciliation prompt
    let prompt = `You are an expert transcription editor. Compare these ${validSources.length} transcripts of the same audio and produce the most accurate version.

`;
    
    // Add context if available
    const contextSource = validSources.find(s => s.context);
    if (contextSource?.context) {
      prompt += `### Audio Context:
${contextSource.context}

`;
    }
    
    validSources.forEach((source, index) => {
      prompt += `### Transcript ${index + 1} (${source.name}):\n${source.text}\n\n`;
    });
    
    prompt += `### Instructions:
1. Compare all transcripts word by word
2. When transcripts disagree, choose the version that:
   - Makes the most semantic sense in context
   - Has proper spelling for names, technical terms, and brands
   - Uses correct grammar (unless it's natural speech)
3. Fix obvious errors present in all transcripts

4. ABSOLUTELY CRITICAL - PRESERVE ALL INTERJECTIONS AND EXCLAMATIONS:
   - "Doh!" / "D'oh!" (Homer Simpson's catchphrase - MUST be kept)
   - "Wow", "Oh", "Ah", "Hmm", "Uh", "Um"
   - ANY emotional expressions or exclamations
   - Character-specific catchphrases
   - Sound effects (gasps, sighs, laughter)
   
5. PRESERVE ALL natural speech patterns:
   - Fillers (um, uh, hmm, etc.)
   - Stutters and false starts
   - Contractions and colloquialisms
   
6. NEVER remove ANY words unless they are:
   - Obvious duplicates (e.g., "the the")
   - Clear technical/garbled errors
   
7. When ANY transcript contains an interjection like "Doh!", include it even if others don't have it

8. Focus on accuracy for:
   - Proper nouns and names
   - Technical terminology
   - Numbers and dates
   - Homophones (their/there, to/too, etc.)

Output ONLY the final reconciled transcript. No explanations or metadata.`;
    
    if (options.preserveSpeakers && options.assemblyUtterances) {
      prompt += `\n\nIMPORTANT: Format the output with speaker labels exactly as shown:
[SPEAKER_A]: text for speaker A
[SPEAKER_B]: text for speaker B

Use the speaker structure from AssemblyAI (Transcript 1) to guide speaker changes.`;
    }
    
    console.log('Calling GPT-4o-mini for reconciliation...');
    console.log(`- Prompt length: ${prompt.length} chars`);
    console.log(`- Number of transcripts: ${validSources.length}`);
    
    const gptStartTime = Date.now();
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a professional transcription editor. Your job is to reconcile multiple transcripts into the most accurate version.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.1,
      max_tokens: 8192
    });
    const gptEndTime = Date.now();
    console.log(`- GPT-4o-mini response time: ${gptEndTime - gptStartTime}ms`);
    
    const reconciledText = response.choices[0].message.content || '';
    
    console.log('=== RECONCILIATION COMPLETE ===');
    console.log('- Original lengths:', validSources.map(s => s.text.length));
    console.log('- Reconciled length:', reconciledText.length);
    
    // Check if interjections were preserved
    const reconciledLower = reconciledText.toLowerCase();
    const preservedInterjections = interjectionChecks.filter(interjection => reconciledLower.includes(interjection));
    console.log('- Preserved interjections:', preservedInterjections);
    const hasDoh = reconciledLower.includes('doh') || reconciledLower.includes("d'oh");
    console.log('- "Doh!" preserved:', hasDoh);
    
    // If we need to preserve speakers, parse the reconciled text back into utterances
    let utterances = options.assemblyUtterances;
    if (options.preserveSpeakers && options.assemblyUtterances) {
      // If the reconciled text doesn't have speaker labels, use original utterances
      if (!reconciledText.includes('[SPEAKER_')) {
        console.log('No speaker labels in reconciled text, preserving original utterances');
        utterances = options.assemblyUtterances;
      } else {
        utterances = parseUtterancesFromText(reconciledText, options.assemblyUtterances);
      }
    }
    
    return {
      text: reconciledText,
      utterances: utterances,
      method: 'gpt4_reconciliation',
      sourcesUsed: validSources.map(s => s.name),
      improvementMetrics: calculateImprovementMetrics(validSources, reconciledText)
    };
  } catch (error) {
    console.error('Reconciliation error:', error);
    // Fallback to first source
    return {
      text: sources[0].text,
      utterances: options.assemblyUtterances,
      method: 'fallback',
      sourcesUsed: [sources[0].name]
    };
  }
}

/**
 * Advanced reconciliation with word-level voting (ROVER-inspired)
 */
export async function advancedReconcile(
  sources: TranscriptSource[],
  options: {
    preserveSpeakers?: boolean;
    assemblyUtterances?: Array<{ speaker: string; text: string; start: number; end: number }>;
    useAudioContext?: boolean;
    audioBase64?: string;
    mimeType?: string;
  } = {}
): Promise<ReconciliationResult> {
  // TODO: Implement ROVER-style voting with word alignment
  // For now, fall back to simple reconciliation
  return simpleReconcile(sources, options);
}

/**
 * Parse utterances from text with speaker labels
 */
function parseUtterancesFromText(
  text: string,
  originalUtterances?: Array<{ speaker: string; text: string; start: number; end: number }>
): Array<{ speaker: string; text: string; start: number; end: number }> {
  const lines = text.split('\n').filter(line => line.trim());
  const utterances: Array<{ speaker: string; text: string; start: number; end: number }> = [];
  
  lines.forEach((line, index) => {
    const match = line.match(/\[([^\]]+)\]:\s*(.*)/);
    if (match) {
      const speaker = match[1];
      const text = match[2];
      
      // Try to preserve original timestamps if available
      const originalUtterance = originalUtterances?.[index];
      
      utterances.push({
        speaker,
        text,
        start: originalUtterance?.start || 0,
        end: originalUtterance?.end || 0
      });
    }
  });
  
  return utterances.length > 0 ? utterances : originalUtterances || [];
}

/**
 * Calculate improvement metrics
 */
function calculateImprovementMetrics(
  sources: TranscriptSource[],
  _reconciledText: string
): { disagreements: number; corrections: number; confidenceScore: number } {
  // Simple heuristic: count word differences
  const sourceWords = sources.map(s => s.text.toLowerCase().split(/\s+/));
  
  let disagreements = 0;
  let corrections = 0;
  
  // Count disagreements between sources
  const minLength = Math.min(...sourceWords.map(w => w.length));
  for (let i = 0; i < minLength; i++) {
    const words = sourceWords.map(w => w[i]);
    const uniqueWords = new Set(words);
    if (uniqueWords.size > 1) {
      disagreements++;
    }
  }
  
  // Estimate corrections (words that differ from all sources)
  // This is a rough estimate
  corrections = Math.floor(disagreements * 0.7);
  
  // Confidence score based on agreement
  const agreementRate = 1 - (disagreements / minLength);
  const confidenceScore = Math.round(agreementRate * 100);
  
  return {
    disagreements,
    corrections,
    confidenceScore
  };
}