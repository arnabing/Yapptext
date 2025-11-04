import { wordErrorRate } from 'word-error-rate';

export interface WERResult {
  wer: number; // Word Error Rate (0-1, lower is better)
  werPercent: number; // WER as percentage
  totalWords: number;
  insertions: number;
  deletions: number;
  substitutions: number;
  interjectionStats?: InterjectionStats;
}

export interface InterjectionStats {
  // D'oh! tracking (for Simpsons)
  dohInReference: number;
  dohInCandidate: number;
  dohTruePositives: number; // Correctly preserved
  dohFalsePositives: number; // Added when shouldn't
  dohFalseNegatives: number; // Missing when should exist

  // Other interjections
  otherInterjections: {
    [key: string]: {
      inReference: number;
      inCandidate: number;
      truePositives: number;
    };
  };
}

/**
 * Calculate Word Error Rate between reference and candidate transcripts
 */
export function calculateWER(
  reference: string,
  candidate: string,
  options: {
    checkInterjections?: boolean;
    interjectionList?: string[];
  } = {}
): WERResult {
  // Normalize texts for WER calculation
  const refNormalized = normalizeForWER(reference);
  const candNormalized = normalizeForWER(candidate);

  // Calculate WER using the library (returns a number 0-1)
  const werScore = wordErrorRate(refNormalized, candNormalized);

  const totalWords = refNormalized.split(/\s+/).filter(w => w.length > 0).length;

  // Calculate individual error counts
  // WER = (S + D + I) / N where N is reference word count
  // We can estimate these from the alignment
  const errors = Math.round(werScore * totalWords);

  // Since the library only returns a single number, we estimate the error types
  // For more accurate breakdown, we'd need to implement alignment ourselves
  const werResult: WERResult = {
    wer: werScore,
    werPercent: Math.round(werScore * 100 * 10) / 10, // Round to 1 decimal
    totalWords,
    insertions: Math.floor(errors / 3), // Rough estimate
    deletions: Math.floor(errors / 3),
    substitutions: errors - 2 * Math.floor(errors / 3),
  };

  // Calculate interjection stats if requested
  if (options.checkInterjections) {
    werResult.interjectionStats = calculateInterjectionStats(
      reference,
      candidate,
      options.interjectionList || ["d'oh", 'doh', 'woohoo', 'woo-hoo', 'mmm']
    );
  }

  return werResult;
}

/**
 * Normalize text for WER calculation
 * Converts to lowercase, removes extra punctuation, normalizes spacing
 */
function normalizeForWER(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,!?;:'"()]/g, '') // Remove most punctuation
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

/**
 * Calculate interjection preservation stats
 */
function calculateInterjectionStats(
  reference: string,
  candidate: string,
  interjections: string[]
): InterjectionStats {
  const refLower = reference.toLowerCase();
  const candLower = candidate.toLowerCase();

  // Count D'oh! specifically (most important for Simpsons)
  const dohPatterns = /\bd['']?oh!?\b/gi;
  const dohInRef = (refLower.match(dohPatterns) || []).length;
  const dohInCand = (candLower.match(dohPatterns) || []).length;

  // True Positives: min of both (correctly preserved)
  const dohTP = Math.min(dohInRef, dohInCand);
  // False Positives: extra in candidate
  const dohFP = Math.max(0, dohInCand - dohInRef);
  // False Negatives: missing from candidate
  const dohFN = Math.max(0, dohInRef - dohInCand);

  // Track other interjections
  const otherInterjections: InterjectionStats['otherInterjections'] = {};

  for (const interjection of interjections) {
    if (interjection.toLowerCase().includes('doh')) continue; // Already counted

    const pattern = new RegExp(`\\b${interjection}\\b`, 'gi');
    const inRef = (refLower.match(pattern) || []).length;
    const inCand = (candLower.match(pattern) || []).length;

    if (inRef > 0 || inCand > 0) {
      otherInterjections[interjection] = {
        inReference: inRef,
        inCandidate: inCand,
        truePositives: Math.min(inRef, inCand)
      };
    }
  }

  return {
    dohInReference: dohInRef,
    dohInCandidate: dohInCand,
    dohTruePositives: dohTP,
    dohFalsePositives: dohFP,
    dohFalseNegatives: dohFN,
    otherInterjections
  };
}

/**
 * Compare candidate against reference from draft.json file
 */
export function compareAgainstReference(
  candidateText: string,
  referenceDraft: {
    utterances: Array<{ speaker: string; text: string; start: number; end: number }>;
  }
): WERResult {
  // Reconstruct reference text from utterances
  const referenceText = referenceDraft.utterances
    .map(u => u.text)
    .join(' ');

  return calculateWER(referenceText, candidateText, {
    checkInterjections: true
  });
}

/**
 * Get human-readable WER grade
 */
export function getWERGrade(wer: number): {
  grade: string;
  color: string;
  description: string;
} {
  if (wer < 0.05) {
    return {
      grade: 'A+',
      color: 'green',
      description: 'Excellent - Near perfect'
    };
  } else if (wer < 0.10) {
    return {
      grade: 'A',
      color: 'green',
      description: 'Very Good - Professional quality'
    };
  } else if (wer < 0.15) {
    return {
      grade: 'B',
      color: 'blue',
      description: 'Good - Minor errors'
    };
  } else if (wer < 0.25) {
    return {
      grade: 'C',
      color: 'yellow',
      description: 'Acceptable - Some errors'
    };
  } else if (wer < 0.40) {
    return {
      grade: 'D',
      color: 'orange',
      description: 'Poor - Many errors'
    };
  } else {
    return {
      grade: 'F',
      color: 'red',
      description: 'Very Poor - Major errors'
    };
  }
}
