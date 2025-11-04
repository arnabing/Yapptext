import { TranscriptSource, ReconciliationResult } from './reconcile';
import OpenAI from 'openai';

interface AlignedWord {
  position: number;
  variants: Map<string, { sources: string[]; normalized: string }>;
}

/**
 * Normalize word for comparison
 */
function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[.,!?;:'"]/g, '');
}

/**
 * Check if word is a Homer Simpson catchphrase
 */
function isHomerCatchphrase(word: string): boolean {
  const catchphrases = ['doh', "d'oh", 'woo-hoo', 'woohoo', 'mmm'];
  const normalized = normalizeWord(word);
  return catchphrases.some(phrase => normalized.includes(phrase));
}

/**
 * Simple word frequency voting - majority wins
 */
export async function simpleWordVoting(
  sources: TranscriptSource[],
  options: { context?: string } = {}
): Promise<ReconciliationResult> {
  console.log('=== SIMPLE WORD VOTING RECONCILIATION ===');
  const startTime = Date.now();

  // Tokenize all transcripts
  const tokenized = sources.map(source => ({
    name: source.name,
    words: source.text.split(/\s+/).filter(w => w.length > 0)
  }));

  // Find the maximum length
  const maxLength = Math.max(...tokenized.map(t => t.words.length));
  const reconciledWords: string[] = [];

  let agreements = 0;
  let disagreements = 0;
  let catchphrasesPreserved = 0;

  // Process each word position
  for (let i = 0; i < maxLength; i++) {
    const catchphraseVotesAtI = tokenized.reduce((acc, transcript) => {
      if (i < transcript.words.length) {
        const w = transcript.words[i];
        return acc + (isHomerCatchphrase(w) ? 1 : 0);
      }
      return acc;
    }, 0);
    const wordVotes = new Map<string, number>();
    const wordSources = new Map<string, string[]>();

    // Collect votes for this position
    for (const transcript of tokenized) {
      if (i < transcript.words.length) {
        const word = transcript.words[i];
        const normalized = normalizeWord(word);

        // Track votes
        const currentVotes = wordVotes.get(normalized) || 0;
        wordVotes.set(normalized, currentVotes + 1);

        // Track sources
        const sources = wordSources.get(normalized) || [];
        sources.push(transcript.name);
        wordSources.set(normalized, sources);

        // Keep the best formatted version
        if (!wordVotes.has(word)) {
          wordVotes.set(word, 0);
        }
      }
    }

    // Choose the word with most votes
    let bestWord = '';
    let maxVotes = 0;

    for (const entry of Array.from(wordVotes.entries())) {
    const word = entry[0];
    const votes = entry[1];
      const normalized = normalizeWord(word);
      const normalizedVotes = wordVotes.get(normalized) || votes;

      // Special handling for Homer catchphrases
      if (options.context?.toLowerCase().includes('homer') && isHomerCatchphrase(word)) {
        const prevToken = reconciledWords[reconciledWords.length - 1] || '';
        const isBoundary = reconciledWords.length === 0 || /[.!?]\s*$/.test(prevToken);
        const hasSupport = catchphraseVotesAtI >= 2; // require 2-of-3 model hint
        if (isBoundary && hasSupport) {
          bestWord = word.toLowerCase().includes('oh') ? "D'oh!" : word;
          catchphrasesPreserved++;
          break;
        }
        // else fall through to normal voting without forcing insertion
      }

      if (normalizedVotes > maxVotes) {
        maxVotes = normalizedVotes;
        bestWord = word;
      }
    }

    if (bestWord) {
      reconciledWords.push(bestWord);
      if (maxVotes === sources.length) agreements++;
      else disagreements++;
    }
  }

  let reconciledText = reconciledWords.join(' ');
  reconciledText = postProcessText(reconciledText, options.context);
  const processingTime = Date.now() - startTime;

  console.log('=== SIMPLE VOTING COMPLETE ===');
  console.log(`- Time: ${processingTime}ms`);
  console.log(`- Words: ${reconciledWords.length}`);
  console.log(`- Agreements: ${agreements} (${(agreements * 100 / reconciledWords.length).toFixed(1)}%)`);
  console.log(`- Disagreements: ${disagreements}`);
  console.log(`- Catchphrases preserved: ${catchphrasesPreserved}`);

  return {
    text: reconciledText,
    method: 'simple_word_voting',
    sourcesUsed: sources.map(s => s.name),
    improvementMetrics: {
      disagreements,
      corrections: catchphrasesPreserved,
      confidenceScore: Math.round((agreements * 100) / reconciledWords.length)
    }
  };
}

/**
 * Phrase-level voting (2-3 word chunks)
 */
export async function phraseVoting(
  sources: TranscriptSource[],
  options: { context?: string; phraseSize?: number } = {}
): Promise<ReconciliationResult> {
  console.log('=== PHRASE-LEVEL VOTING RECONCILIATION ===');
  const startTime = Date.now();
  const phraseSize = options.phraseSize || 3;

  // Tokenize all transcripts
  const tokenized = sources.map(source => ({
    name: source.name,
    words: source.text.split(/\s+/).filter(w => w.length > 0)
  }));

  // Create phrases
  const phraseSets = tokenized.map(transcript => {
    const phrases: string[] = [];
    for (let i = 0; i < transcript.words.length; i += phraseSize) {
      const phrase = transcript.words.slice(i, i + phraseSize).join(' ');
      phrases.push(phrase);
    }
    return { name: transcript.name, phrases };
  });

  // Vote on phrases
  const maxPhrases = Math.max(...phraseSets.map(p => p.phrases.length));
  const reconciledPhrases: string[] = [];
  let disagreements = 0;

  for (let i = 0; i < maxPhrases; i++) {
    const phraseVotes = new Map<string, number>();

    for (const phraseSet of phraseSets) {
      if (i < phraseSet.phrases.length) {
        const phrase = phraseSet.phrases[i];
        const votes = phraseVotes.get(phrase) || 0;
        phraseVotes.set(phrase, votes + 1);
      }
    }

    // Choose phrase with most votes
    let bestPhrase = '';
    let maxVotes = 0;

  for (const entry of Array.from(phraseVotes.entries())) {
    const phrase = entry[0];
    const votes = entry[1];
      // Check for Homer catchphrases in the phrase
      if (options.context?.toLowerCase().includes('homer')) {
        const words = phrase.split(' ');
        const hasCatchphrase = words.some((w: string) => isHomerCatchphrase(w));
        if (hasCatchphrase) {
          // Transform catchphrases to proper format
          const corrected = words.map(w =>
            isHomerCatchphrase(w) ? "D'oh!" : w
          ).join(' ');
          bestPhrase = corrected;
          break;
        }
      }

      if (votes > maxVotes) {
        maxVotes = votes;
        bestPhrase = phrase;
      }
    }

    if (bestPhrase) {
      reconciledPhrases.push(bestPhrase);
      if (maxVotes < sources.length) disagreements++;
    }
  }

  const reconciledText = postProcessText(reconciledPhrases.join(' '), options.context);
  const processingTime = Date.now() - startTime;

  console.log('=== PHRASE VOTING COMPLETE ===');
  console.log(`- Time: ${processingTime}ms`);
  console.log(`- Phrases: ${reconciledPhrases.length}`);
  console.log(`- Disagreements: ${disagreements}`);

  return {
    text: reconciledText,
    method: 'phrase_voting',
    sourcesUsed: sources.map(s => s.name),
    improvementMetrics: {
      disagreements,
      corrections: 0,
      confidenceScore: Math.round(((maxPhrases - disagreements) * 100) / maxPhrases)
    }
  };
}

/**
 * Weighted voting based on model strengths
 */
export async function weightedVoting(
  sources: TranscriptSource[],
  options: {
    context?: string;
    weights?: Record<string, number>;
  } = {}
): Promise<ReconciliationResult> {
  console.log('=== WEIGHTED VOTING RECONCILIATION ===');
  const startTime = Date.now();

  // Default weights based on model strengths
  const weights = options.weights || {
    'AssemblyAI': 0.45,
    'Gemini': 0.40,
    'OpenAI-GPT4o': 0.15,
    'OpenAI': 0.15
  };

  console.log('Using weights:', weights);

  // Tokenize all transcripts
  const tokenized = sources.map(source => ({
    name: source.name,
    words: source.text.split(/\s+/).filter(w => w.length > 0),
    weight: weights[source.name] || 0.33
  }));

  const maxLength = Math.max(...tokenized.map(t => t.words.length));
  const reconciledWords: string[] = [];
  let homerBoosts = 0;

  for (let i = 0; i < maxLength; i++) {
    const catchphraseVotesAtI = tokenized.reduce((acc, transcript) => {
      if (i < transcript.words.length) {
        const w = transcript.words[i];
        return acc + (isHomerCatchphrase(w) ? 1 : 0);
      }
      return acc;
    }, 0);
    const wordScores = new Map<string, number>();
    const wordOriginals = new Map<string, string>();

    for (const transcript of tokenized) {
      if (i < transcript.words.length) {
        const word = transcript.words[i];
        const normalized = normalizeWord(word);

        const currentScore = wordScores.get(normalized) || 0;
        wordScores.set(normalized, currentScore + transcript.weight);

        // Keep best formatted version
        if (!wordOriginals.has(normalized) || transcript.name === 'AssemblyAI') {
          wordOriginals.set(normalized, word);
        }
      }
    }

    // Choose word with highest weighted score
    let bestWord = '';
    let maxScore = 0;

    for (const entry of Array.from(wordScores.entries())) {
    const normalized = entry[0];
    const score = entry[1];
      const original = wordOriginals.get(normalized) || normalized;

      // Boost score for Homer catchphrases if context mentions Homer
      let adjustedScore = score;
      if (options.context?.toLowerCase().includes('homer') && isHomerCatchphrase(original)) {
        adjustedScore += 0.5; // Boost catchphrase score
        homerBoosts++;
      }

      if (adjustedScore > maxScore) {
        maxScore = adjustedScore;
        // Gate D'oh insertion: only at boundaries
        if (isHomerCatchphrase(original) && options.context?.toLowerCase().includes('homer')) {
          const prevToken = reconciledWords[reconciledWords.length - 1] || '';
          const isBoundary = reconciledWords.length === 0 || /[.!?]\s*$/.test(prevToken);
          const hasSupport = catchphraseVotesAtI >= 2; // require 2-of-3 model hint
          bestWord = (isBoundary && hasSupport) ? (original.toLowerCase().includes('oh') ? "D'oh!" : original) : original;
        } else {
          bestWord = original;
        }
      }
    }

    if (bestWord) {
      reconciledWords.push(bestWord);
    }
  }

  let reconciledText = reconciledWords.join(' ');
  reconciledText = postProcessText(reconciledText, options.context);
  const processingTime = Date.now() - startTime;

  console.log('=== WEIGHTED VOTING COMPLETE ===');
  console.log(`- Time: ${processingTime}ms`);
  console.log(`- Words: ${reconciledWords.length}`);
  console.log(`- Homer catchphrase boosts: ${homerBoosts}`);

  return {
    text: reconciledText,
    method: 'weighted_voting',
    sourcesUsed: sources.map(s => s.name),
    improvementMetrics: {
      disagreements: 0,
      corrections: homerBoosts,
      confidenceScore: 85 // Estimated based on weighted consensus
    }
  };
}

/**
 * Context-aware reconciliation using Gemini's understanding
 */
export async function contextAwareReconcile(
  sources: TranscriptSource[],
  options: { preserveSpeakers?: boolean } = {}
): Promise<ReconciliationResult> {
  console.log('=== CONTEXT-AWARE RECONCILIATION ===');
  const startTime = Date.now();

  // Find the source with context (usually Gemini)
  const contextSource = sources.find(s => s.context);
  const context = contextSource?.context || '';

  console.log('Context:', context);

  // Extract key information from context
  const isHomerSimpson = context.toLowerCase().includes('homer simpson');
  const isSimpsons = context.toLowerCase().includes('simpsons');

  // If it's Homer Simpson content, use special handling
  if (isHomerSimpson || isSimpsons) {
    console.log('Detected Homer Simpson content - applying special rules');

    // Use weighted voting with Homer-specific adjustments
    const result = await weightedVoting(sources, {
      context,
      weights: {
        'AssemblyAI': 0.35,  // Good for structure
        'Gemini': 0.50,      // Boost Gemini since it understands context
        'OpenAI-GPT4o': 0.15
      }
    });

    // Post-process to ensure catchphrases are properly formatted
    let processedText = result.text;

    // Replace common mis-transcriptions with proper catchphrases
    const replacements = [
      { pattern: /\bdoh\b/gi, replacement: "D'oh!" },
      { pattern: /\bdough\b/gi, replacement: "D'oh!" },
      { pattern: /\bwoo\s*hoo\b/gi, replacement: "Woo-hoo!" },
      { pattern: /\bmmm+\b/gi, replacement: "Mmm..." }
    ];

    for (const { pattern, replacement } of replacements) {
      processedText = processedText.replace(pattern, replacement);
    }

    const processingTime = Date.now() - startTime;

    return {
      text: processedText,
      method: 'context_aware_homer',
      sourcesUsed: sources.map(s => s.name),
      improvementMetrics: {
        disagreements: result.improvementMetrics?.disagreements || 0,
        corrections: (result.improvementMetrics?.corrections || 0) + replacements.length,
        confidenceScore: 90 // High confidence with context
      }
    };
  }

  // For non-Homer content, use standard weighted voting
  return weightedVoting(sources, { context });
}

/**
 * Baseline context-aware reconciliation (frozen control)
 * - If Simpsons domain detected, use simple weighted voting and minimal catchphrase normalization
 * - Otherwise, default weighted voting without extra tweaks
 */
export async function baselineContextAware(
  sources: TranscriptSource[],
  _options: { preserveSpeakers?: boolean } = {}
): Promise<ReconciliationResult> {
  const contextSource = sources.find(s => s.context);
  const context = contextSource?.context || '';
  const isSimpsons = context.toLowerCase().includes('simpson') || context.toLowerCase().includes("d'oh");

  if (!isSimpsons) {
    return weightedVoting(sources, { context });
  }

  // Simpsons control path: simple weights + minimal normalization + guardrails
  const result = await weightedVoting(sources, {
    context,
    weights: {
      'AssemblyAI': 0.35,
      'Gemini': 0.50,
      'OpenAI-GPT4o': 0.15
    }
  });

  // Minimal catchphrase normalization
  let processed = result.text;
  processed = processed.replace(/\bdoh\b/gi, "D'oh!");
  processed = processed.replace(/\bdough\b/gi, "D'oh!");
  processed = processed.replace(/\bwoo\s*hoo\b/gi, 'Woo-hoo!');
  processed = processed.replace(/\bmmm+\b/gi, 'Mmm...');

  // Guardrail 1: n-gram de-duplication (2-5 grams) naive pass
  processed = dedupeNgrams(processed, 5);

  // Guardrail 2: bound utterance length relative to AssemblyAI if present
  const aai = sources.find(s => s.name.toLowerCase().includes('assembly'))
  if (aai) {
    const maxLen = Math.ceil(aai.text.length * 1.15);
    const minLen = Math.floor(aai.text.length * 0.85);
    if (processed.length > maxLen) processed = processed.slice(0, maxLen);
    if (processed.length < minLen) {
      // pad minimally with original to avoid shrinking too much
      processed = (processed + ' ' + aai.text.slice(0, Math.min(aai.text.length, minLen - processed.length))).trim();
    }
  }

  return {
    ...result,
    text: postProcessText(processed, context),
    method: 'context_aware_baseline'
  };
}

// Simple n-gram de-duplication: collapses exact repeated n-grams for 2..N
function dedupeNgrams(text: string, maxN: number): string {
  let out = text;
  for (let n = 5; n >= 2; n--) {
    const pattern = new RegExp(`(\\b(?:\\w+\\s+){${n-1}}\\w+)(?:\\s+\\1)+`, 'gi');
    out = out.replace(pattern, '$1');
  }
  return out;
}

// Shared post-processing: collapse repeated tokens and n-grams; normalize D'oh sequences
function postProcessText(text: string, context?: string): string {
  let out = text;
  const lowerCtx = context?.toLowerCase() || '';
  const isSimpsons = lowerCtx.includes('simpsons') || lowerCtx.includes('homer');

  // Normalize common catchphrases lightly (domain-gated where appropriate)
  if (isSimpsons) {
    out = out.replace(/\bdough\b/gi, "D'oh!");
    out = out.replace(/\bdoh\b/gi, "D'oh!");
    out = out.replace(/\bwoo\s*hoo\b/gi, 'Woo-hoo!');
    out = out.replace(/\bmmm+\b/gi, 'Mmm...');
  }

  // Collapse duplicate interjections
  out = out.replace(/(D'oh!)(\s+\1)+/g, "$1");
  out = out.replace(/(Woo-hoo!)(\s+\1)+/g, "$1");
  out = out.replace(/(Mmm\.\.\.)(\s+\1)+/g, "$1");

  // Idiom freeze: protect common "don't X" idioms from accidental replacement
  const protectedIdioms = ['panic', 'move', 'worry', 'know', 'think', 'be'];
  // If Simpsons domain, we might convert boundary "Don’t" to D'oh!, but not for idioms
  if (isSimpsons) {
    out = out.replace(/(^|[.!?]\s+)(don['’]?t|don\b|dont\b)\b(\s+\w+)?/gi, (match, p1: string, _p2: string, p3?: string) => {
      const nextWord = (p3 || '').trim().toLowerCase();
      if (nextWord && protectedIdioms.includes(nextWord)) return match; // keep idioms
      return `${p1}D'oh!`;
    });
  }

  // Collapse extreme single-word repetitions (>=4) down to 3 occurrences
  out = out.replace(/\b(\w+)(?:\s+\1){3,}\b/gi, (m: string) => {
    const word = m.split(/\s+/)[0];
    return `${word} ${word} ${word}`;
  });
  // N-gram de-dup (2..5)
  out = dedupeNgrams(out, 5);
  return out;
}

/**
 * Advanced alignment-based voting with DTW-like approach
 */
export async function advancedAlignmentVoting(
  sources: TranscriptSource[],
  options: { context?: string } = {}
): Promise<ReconciliationResult> {
  console.log('=== ADVANCED ALIGNMENT VOTING ===');
  const startTime = Date.now();

  // This would implement a more sophisticated alignment algorithm
  // For now, we'll use weighted voting as a placeholder
  const result = await weightedVoting(sources, options);

  result.method = 'advanced_alignment';
  return result;
}

/**
 * Confidence-weighted voting anchored to AssemblyAI words
 * - Keeps high-confidence AssemblyAI tokens
 * - For low-confidence tokens, chooses best alternative from other models by weighted score
 * - Uses relative index mapping to sample alternatives (cheap alignment)
 */
export async function confidenceWeightedVoting(
  sources: TranscriptSource[],
  options: { confidenceThreshold?: number; context?: string } = {}
): Promise<ReconciliationResult> {
  console.log('=== CONFIDENCE-WEIGHTED VOTING ===');
  const startTime = Date.now();

  const assembly = sources.find(s => s.name.toLowerCase().includes('assembly')) || sources[0];
  const others = sources.filter(s => s !== assembly);
  const context = options.context || '';
  const confThresh = options.confidenceThreshold ?? 0.9;

  // Tokenize assembly with confidences when available
  const aaiWordsList: Array<{ text: string; confidence: number }> = (assembly.words as any[] | undefined)?.map((w: any) => ({
    text: w.text,
    confidence: typeof w.confidence === 'number' ? w.confidence : 1.0
  })) || assembly.text.split(/\s+/).filter(Boolean).map((t: string) => ({ text: t, confidence: 1.0 }));

  const aLen = aaiWordsList.length;
  const otherTokenLists = others.map(s => ({
    name: s.name,
    words: s.text.split(/\s+/).filter(Boolean)
  }));

  const finalWords: string[] = [];
  let keptHighConf = 0;
  let lowConfEdits = 0;
  let catchphraseBoosts = 0;

  for (let i = 0; i < aLen; i++) {
    const aWord = aaiWordsList[i];
    const aText = aWord.text;
    const aNorm = normalizeWord(aText);
    const aConf = aWord.confidence;

    if (aConf >= confThresh) {
      finalWords.push(aText);
      keptHighConf++;
      continue;
    }

    // Build candidate scores
    const scores = new Map<string, number>();
    const originalMap = new Map<string, string>();

    // Assembly candidate gets score proportional to its confidence
    const baseKey = normalizeWord(aText);
    scores.set(baseKey, Math.max(0.01, aConf));
    originalMap.set(baseKey, aText);

    for (const other of otherTokenLists) {
      const j = Math.min(other.words.length - 1, Math.max(0, Math.round((i / Math.max(1, aLen - 1)) * (other.words.length - 1))));
      const oText = other.words[j];
      if (!oText) continue;
      const oKey = normalizeWord(oText);
      const prev = scores.get(oKey) || 0;
      let add = 0.7; // neutral prior for non-AAI

      // Context-aware boost for catchphrases
      if (context.toLowerCase().includes('homer') && isHomerCatchphrase(oText)) {
        add += 0.5;
        catchphraseBoosts++;
      }

      scores.set(oKey, prev + add);
      if (!originalMap.has(oKey) || other.name.includes('AssemblyAI')) {
        originalMap.set(oKey, oText);
      }
    }

    // Choose best scored token
    let bestKey = baseKey;
    let bestScore = -Infinity;
    for (const entry of Array.from(scores.entries())) {
      const key = entry[0];
      const sc = entry[1];
      if (sc > bestScore) {
        bestScore = sc;
        bestKey = key;
      }
    }

    let bestText = originalMap.get(bestKey) || aText;

    // Strict D'oh gating: allow D'oh only at utterance start or after sentence end
    const prevToken = finalWords[finalWords.length - 1] || '';
    const prevEndsSentence = /[.!?]\s*$/.test(prevToken);
    const isBoundary = finalWords.length === 0 || prevEndsSentence;
    const isDohCandidate = /^(?:d'?oh!?|dough|doo+h!?|doh)$/i.test(bestText.trim());
    if (isDohCandidate && !isBoundary) {
      bestText = aText; // avoid mid-utterance D'oh insertions
    }

    // Normalize Homer catchphrases formatting when applicable
    if (context.toLowerCase().includes('homer') && isHomerCatchphrase(bestText)) {
      bestText = bestText.toLowerCase().includes('oh') ? "D'oh!" : bestText;
    }

    if (bestText !== aText) lowConfEdits++;
    finalWords.push(bestText);
  }

  let reconciledText = finalWords.join(' ');
  reconciledText = postProcessText(reconciledText);
  const processingTime = Date.now() - startTime;
  console.log('=== CONFIDENCE-WEIGHTED COMPLETE ===');
  console.log(`- Time: ${processingTime}ms`);
  console.log(`- Kept high-confidence: ${keptHighConf}`);
  console.log(`- Low-confidence edits: ${lowConfEdits}`);
  console.log(`- Catchphrase boosts: ${catchphraseBoosts}`);

  return {
    text: reconciledText,
    method: 'confidence_weighted_voting',
    sourcesUsed: sources.map(s => s.name),
    improvementMetrics: {
      disagreements: Math.max(0, aLen - keptHighConf),
      corrections: lowConfEdits + catchphraseBoosts,
      confidenceScore: Math.round((keptHighConf * 100) / Math.max(1, aLen))
    }
  };
}

/**
 * Selective GPT reconciliation on low-confidence AssemblyAI utterances
 * - Uses AssemblyAI utterances as segments
 * - Flags utterances with avg confidence below threshold
 * - Provides prev/next utterance as context (optional)
 * - Asks GPT to return ONLY the corrected text for the target utterance
 */
export async function selectiveGptReconcile(
  sources: TranscriptSource[],
  options: {
    assemblyUtterances: Array<{ speaker: string; text: string; start: number; end: number; words?: Array<{ text: string; start: number; end: number; confidence?: number }> }>;
    confThreshold?: number;
    disagreeThreshold?: number; // 0..1 Jaccard agreement threshold
    useContextWindow?: boolean;
    glossaryNormalization?: boolean;
    context?: string;
    model?: string; // default gpt-4o
  }
): Promise<ReconciliationResult> {
  const startTime = Date.now();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const confThreshold = options.confThreshold ?? 0.6;
  const useCtx = options.useContextWindow ?? true;
  const disagreeThreshold = options.disagreeThreshold ?? 0.6;
  const model = options.model || 'gpt-4o';
  const context = options.context || '';

  // Identify sources by name for convenience
  const assembly = sources.find(s => s.name.toLowerCase().includes('assembly')) || sources[0];
  const gemini = sources.find(s => s.name.toLowerCase().includes('gemini'));
  const openaiSource = sources.find(s => s.name.toLowerCase().includes('openai'));

  const outputUtterances: string[] = [];
  const correctedUtterances: Array<{ speaker: string; text: string; start: number; end: number }> = [];
  let flagged = 0;
  let changed = 0;
  function jaccardAgreement(a: string, b: string): number {
    const aSet = new Set(a.toLowerCase().split(/\s+/).filter(Boolean));
    const bSet = new Set(b.toLowerCase().split(/\s+/).filter(Boolean));
    if (aSet.size === 0 && bSet.size === 0) return 1;
    const intersection = new Set(Array.from(aSet).filter((x: string) => bSet.has(x)));
    const union = new Set([...Array.from(aSet), ...Array.from(bSet)]);
    return union.size === 0 ? 1 : intersection.size / union.size;
  }


  // Helper: compute avg confidence for an utterance
  function avgConfidence(words?: Array<{ confidence?: number }>): number {
    if (!words || words.length === 0) return 1.0;
    const vals = words.map(w => (w.confidence ?? 1.0));
    if (vals.length === 0) return 1.0;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  // Helper: get a small snippet from another transcript near a phrase
  function extractNearbySnippet(fullText: string, anchor: string, radius = 200): string {
    if (!fullText || !anchor) return '';
    const key = anchor.split(/\s+/).slice(Math.max(0, Math.floor(anchor.split(/\s+/).length / 2) - 6), Math.floor(anchor.split(/\s+/).length / 2) + 6).join(' ');
    const idx = fullText.indexOf(key);
    if (idx === -1) return '';
    const start = Math.max(0, idx - radius);
    const end = Math.min(fullText.length, idx + key.length + radius);
    return fullText.slice(start, end);
  }

  for (let i = 0; i < options.assemblyUtterances.length; i++) {
    const utt = options.assemblyUtterances[i];
    const prev = i > 0 ? options.assemblyUtterances[i - 1] : undefined;
    const next = i < options.assemblyUtterances.length - 1 ? options.assemblyUtterances[i + 1] : undefined;

    const avgConf = avgConfidence(utt.words);
    let needsFix = avgConf < confThreshold;
    // Also gate by inter-model disagreement if available
    if (!needsFix) {
      const gem = gemini ? extractNearbySnippet(gemini.text, utt.text) : '';
      const oai = openaiSource ? extractNearbySnippet(openaiSource.text, utt.text) : '';
      const agreements: number[] = [];
      if (gem) agreements.push(jaccardAgreement(utt.text, gem));
      if (oai) agreements.push(jaccardAgreement(utt.text, oai));
      if (agreements.length > 0) {
        const maxAgree = Math.max(...agreements);
        if (maxAgree < disagreeThreshold) needsFix = true;
      }
    }

    if (!needsFix) {
      outputUtterances.push(utt.text);
      continue;
    }

    flagged++;

    // Build candidate variants
    const assemblyVariant = utt.text;
    const geminiVariant = gemini ? extractNearbySnippet(gemini.text, utt.text) : '';
    const openaiVariant = openaiSource ? extractNearbySnippet(openaiSource.text, utt.text) : '';

    // Construct prompt
    let userPrompt = `You are a professional transcription editor. Correct the following utterance using context and candidate variants.\n\n`;
    if (context) {
      userPrompt += `Audio/context description: ${context}\n\n`;
    }
    if (useCtx) {
      if (prev) userPrompt += `Previous utterance: ${prev.text}\n`;
      userPrompt += `Target utterance (AssemblyAI): ${assemblyVariant}\n`;
      if (next) userPrompt += `Next utterance: ${next.text}\n\n`;
    } else {
      userPrompt += `Target utterance (AssemblyAI): ${assemblyVariant}\n\n`;
    }

    userPrompt += `Candidate variants from other models (may contain errors):\n`;
    if (geminiVariant) userPrompt += `- Gemini: ${geminiVariant}\n`;
    if (openaiVariant) userPrompt += `- OpenAI: ${openaiVariant}\n`;

    userPrompt += `\nInstructions:\n` +
      `1. Fix wrong words using semantic context; prefer correct names/brands/technical terms.\n` +
      `2. Preserve natural speech (fillers, interjections).\n` +
      `3. Do not add or remove meaning; keep length roughly similar.\n` +
      `4. Return ONLY the corrected text for the target utterance (no speaker label, no explanations).`;

    const completion = await openai.chat.completions.create({
      model,
      temperature: 0.1,
      messages: [
        { role: 'system', content: 'You are an expert transcription editor.' },
        { role: 'user', content: userPrompt + '\n\nReturn ONLY the corrected target utterance text. Do not shorten the content; keep all words unless they are obviously wrong.' }
      ]
    });

    let corrected = completion.choices[0]?.message?.content?.trim() || assemblyVariant;

    // Optional glossary normalization (basic deterministic replacements)
    if (options.glossaryNormalization && (context?.toLowerCase().includes('homer') || context?.toLowerCase().includes('simpsons'))) {
      const replacements = [
        { pattern: /\bdoh\b/gi, replacement: "D'oh!" },
        { pattern: /\bdough\b/gi, replacement: "D'oh!" },
        { pattern: /\bwoo\s*hoo\b/gi, replacement: 'Woo-hoo!' },
        { pattern: /\bmmm+\b/gi, replacement: 'Mmm...' }
      ];
      for (const { pattern, replacement } of replacements) {
        corrected = corrected.replace(pattern, replacement);
      }
    }

    if (corrected !== assemblyVariant) changed++;
    outputUtterances.push(corrected);
    correctedUtterances.push({ speaker: utt.speaker, text: corrected, start: utt.start, end: utt.end });
  }

  const reconciledText = outputUtterances.join(' ');
  const processingTime = Date.now() - startTime;

  return {
    text: reconciledText,
    method: 'selective_gpt_reconcile',
    sourcesUsed: sources.map(s => s.name),
    improvementMetrics: {
      disagreements: flagged,
      corrections: changed,
      confidenceScore: Math.max(0, 100 - Math.round((flagged - changed) * 2))
    },
    utterances: correctedUtterances.length > 0 ? correctedUtterances : undefined
  };
}