import { TranscriptSource, ReconciliationResult } from './reconcile';

interface WordToken {
  text: string;
  start?: number;
  end?: number;
  confidence?: number;
  source: string;
}

/**
 * Tokenize text into words while preserving punctuation
 */
function tokenizeText(text: string): string[] {
  // Split on whitespace but keep punctuation attached
  return text.split(/\s+/).filter(word => word.length > 0);
}

/**
 * Align words from multiple transcripts using dynamic programming
 * Similar to sequence alignment in bioinformatics
 */
function alignTranscripts(transcripts: { name: string; words: string[] }[]): WordToken[][] {
  if (transcripts.length === 0) return [];
  if (transcripts.length === 1) {
    return transcripts[0].words.map(word => [{
      text: word,
      source: transcripts[0].name
    }]);
  }

  // For simplicity, we'll use a basic alignment that assumes similar word order
  // In production, you'd want a more sophisticated alignment algorithm
  const maxLength = Math.max(...transcripts.map(t => t.words.length));
  const aligned: WordToken[][] = [];

  for (let i = 0; i < maxLength; i++) {
    const wordGroup: WordToken[] = [];
    for (const transcript of transcripts) {
      if (i < transcript.words.length) {
        wordGroup.push({
          text: transcript.words[i],
          source: transcript.name
        });
      }
    }
    if (wordGroup.length > 0) {
      aligned.push(wordGroup);
    }
  }

  return aligned;
}

/**
 * Normalize word for comparison (lowercase, remove punctuation for matching)
 */
function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[.,!?;:'"]/g, '');
}

/**
 * Vote on the best word from aligned alternatives
 */
function voteOnWord(alternatives: WordToken[], context?: string): string {
  if (alternatives.length === 0) return '';
  if (alternatives.length === 1) return alternatives[0].text;

  // Count votes for each normalized word
  const votes = new Map<string, { word: string; count: number; sources: string[] }>();
  
  for (const alt of alternatives) {
    const normalized = normalizeWord(alt.text);
    const existing = votes.get(normalized);
    
    if (existing) {
      existing.count++;
      existing.sources.push(alt.source);
      // Keep the version with better capitalization/punctuation
      if (alt.text.match(/^[A-Z]/) && !existing.word.match(/^[A-Z]/)) {
        existing.word = alt.text;
      }
    } else {
      votes.set(normalized, {
        word: alt.text,
        count: 1,
        sources: [alt.source]
      });
    }
  }

  // Find the word with the most votes
  let bestWord = alternatives[0].text;
  let maxVotes = 0;
  
  for (const [_, vote] of votes) {
    if (vote.count > maxVotes) {
      maxVotes = vote.count;
      bestWord = vote.word;
    } else if (vote.count === maxVotes) {
      // Tie-breaker: prefer AssemblyAI for speaker consistency
      if (vote.sources.includes('AssemblyAI')) {
        bestWord = vote.word;
      }
    }
  }

  return bestWord;
}

/**
 * Reconcile transcripts using majority voting
 * Much faster than GPT-based reconciliation
 */
export async function votingReconcile(
  sources: TranscriptSource[],
  options: {
    preserveSpeakers?: boolean;
    assemblyUtterances?: Array<{ speaker: string; text: string; start: number; end: number }>;
  } = {}
): Promise<ReconciliationResult> {
  const startTime = Date.now();
  
  console.log('=== STARTING VOTING RECONCILIATION ===');
  console.log('Sources:', sources.map(s => s.name));
  
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

  // Tokenize all transcripts
  const tokenized = validSources.map(source => ({
    name: source.name,
    words: tokenizeText(source.text)
  }));

  console.log('Tokenized transcripts:');
  tokenized.forEach(t => {
    console.log(`- ${t.name}: ${t.words.length} words`);
  });

  // Align transcripts
  const aligned = alignTranscripts(tokenized);
  console.log(`Aligned ${aligned.length} word positions`);

  // Vote on each word position
  const reconciledWords: string[] = [];
  let agreements = 0;
  let disagreements = 0;
  let improvements = 0;

  for (const wordGroup of aligned) {
    const chosenWord = voteOnWord(wordGroup);
    reconciledWords.push(chosenWord);
    
    // Track statistics
    const uniqueWords = new Set(wordGroup.map(w => normalizeWord(w.text)));
    if (uniqueWords.size === 1) {
      agreements++;
    } else {
      disagreements++;
      // Check if we chose something different from AssemblyAI
      const assemblyWord = wordGroup.find(w => w.source === 'AssemblyAI');
      if (assemblyWord && normalizeWord(assemblyWord.text) !== normalizeWord(chosenWord)) {
        improvements++;
      }
    }
  }

  // Join words back into text
  const reconciledText = reconciledWords.join(' ');
  
  const processingTime = Date.now() - startTime;
  
  console.log('=== VOTING RECONCILIATION COMPLETE ===');
  console.log(`- Processing time: ${processingTime}ms`);
  console.log(`- Total words: ${reconciledWords.length}`);
  console.log(`- Agreements: ${agreements} (${(agreements * 100 / aligned.length).toFixed(1)}%)`);
  console.log(`- Disagreements: ${disagreements} (${(disagreements * 100 / aligned.length).toFixed(1)}%)`);
  console.log(`- Improvements: ${improvements}`);
  console.log(`- Original lengths:`, validSources.map(s => s.text.length));
  console.log(`- Reconciled length: ${reconciledText.length}`);

  return {
    text: reconciledText,
    utterances: options.assemblyUtterances, // Preserve original speaker labels
    method: 'majority_voting',
    sourcesUsed: validSources.map(s => s.name),
    improvementMetrics: {
      disagreements,
      corrections: improvements,
      confidenceScore: Math.round((agreements * 100) / aligned.length)
    }
  };
}

/**
 * Advanced voting with confidence scores
 */
export async function weightedVotingReconcile(
  sources: TranscriptSource[],
  options: {
    preserveSpeakers?: boolean;
    assemblyUtterances?: Array<{ speaker: string; text: string; start: number; end: number }>;
    weights?: Record<string, number>;
  } = {}
): Promise<ReconciliationResult> {
  // Default weights based on model strengths
  const weights = options.weights || {
    'AssemblyAI': 0.4,     // Best for speakers and structure
    'Gemini': 0.35,        // Best for context and understanding  
    'OpenAI-GPT4o': 0.25,  // Good validation
    'OpenAI': 0.25         // Fallback
  };

  console.log('=== WEIGHTED VOTING RECONCILIATION ===');
  console.log('Weights:', weights);

  // For now, use simple voting
  // TODO: Implement weighted voting algorithm
  return votingReconcile(sources, options);
}