/**
 * Simple diff utility to compare transcripts
 */

export interface DiffSegment {
  type: 'same' | 'added' | 'removed' | 'changed';
  text: string;
  source?: string;
}

/**
 * Compare two texts and return differences
 */
export function diffTexts(original: string, modified: string): DiffSegment[] {
  const originalWords = original.split(/\s+/);
  const modifiedWords = modified.split(/\s+/);
  
  const segments: DiffSegment[] = [];
  let i = 0, j = 0;
  
  while (i < originalWords.length || j < modifiedWords.length) {
    if (i >= originalWords.length) {
      // Rest of modified is added
      segments.push({
        type: 'added',
        text: modifiedWords.slice(j).join(' ')
      });
      break;
    }
    
    if (j >= modifiedWords.length) {
      // Rest of original is removed
      segments.push({
        type: 'removed',
        text: originalWords.slice(i).join(' ')
      });
      break;
    }
    
    if (originalWords[i] === modifiedWords[j]) {
      // Words match
      let sameText = '';
      while (i < originalWords.length && j < modifiedWords.length && 
             originalWords[i] === modifiedWords[j]) {
        sameText += (sameText ? ' ' : '') + originalWords[i];
        i++;
        j++;
      }
      segments.push({
        type: 'same',
        text: sameText
      });
    } else {
      // Words differ - find next matching word
      let found = false;
      
      // Check if word was removed
      for (let k = j + 1; k < Math.min(j + 5, modifiedWords.length); k++) {
        if (originalWords[i] === modifiedWords[k]) {
          // Found match ahead in modified - words were added
          segments.push({
            type: 'added',
            text: modifiedWords.slice(j, k).join(' ')
          });
          j = k;
          found = true;
          break;
        }
      }
      
      if (!found) {
        // Check if word was added
        for (let k = i + 1; k < Math.min(i + 5, originalWords.length); k++) {
          if (originalWords[k] === modifiedWords[j]) {
            // Found match ahead in original - words were removed
            segments.push({
              type: 'removed',
              text: originalWords.slice(i, k).join(' ')
            });
            i = k;
            found = true;
            break;
          }
        }
      }
      
      if (!found) {
        // Word was changed
        segments.push({
          type: 'removed',
          text: originalWords[i]
        });
        segments.push({
          type: 'added',
          text: modifiedWords[j]
        });
        i++;
        j++;
      }
    }
  }
  
  // Merge consecutive segments of same type
  const merged: DiffSegment[] = [];
  for (const segment of segments) {
    const last = merged[merged.length - 1];
    if (last && last.type === segment.type) {
      last.text += ' ' + segment.text;
    } else {
      merged.push(segment);
    }
  }
  
  return merged;
}

/**
 * Calculate statistics about differences
 */
export function diffStats(segments: DiffSegment[]) {
  let added = 0, removed = 0, changed = 0, same = 0;
  
  for (const segment of segments) {
    const words = segment.text.split(/\s+/).length;
    switch (segment.type) {
      case 'added': added += words; break;
      case 'removed': removed += words; break;
      case 'changed': changed += words; break;
      case 'same': same += words; break;
    }
  }
  
  const total = added + removed + changed + same;
  const changeRate = ((added + removed + changed) / total) * 100;
  
  return {
    added,
    removed,
    changed,
    same,
    total,
    changeRate: changeRate.toFixed(1)
  };
}

/**
 * Find specific improvements (proper nouns, numbers, etc.)
 */
export function findImprovements(original: string, modified: string): string[] {
  const improvements: string[] = [];
  const originalWords = original.toLowerCase().split(/\s+/);
  const modifiedWords = modified.split(/\s+/);
  
  for (let i = 0; i < Math.min(originalWords.length, modifiedWords.length); i++) {
    const origLower = originalWords[i];
    const modWord = modifiedWords[i];
    const modLower = modWord.toLowerCase();
    
    // Check for capitalization fixes
    if (origLower === modLower && modWord !== originalWords[i]) {
      if (modWord[0] === modWord[0].toUpperCase()) {
        improvements.push(`Capitalized: ${modWord}`);
      }
    }
    
    // Check for number format improvements
    if (origLower.match(/^(forty|thirty|twenty|fifty|sixty|seventy|eighty|ninety)$/)) {
      if (modWord.match(/^\d+$/)) {
        improvements.push(`Number format: ${origLower} → ${modWord}`);
      }
    }
    
    // Check for common corrections
    const corrections: Record<string, string> = {
      'there': 'their',
      'your': "you're",
      'its': "it's",
      'to': 'too',
      'then': 'than'
    };
    
    if (corrections[origLower] === modLower) {
      improvements.push(`Grammar: ${origLower} → ${modWord}`);
    }
  }
  
  return improvements.slice(0, 10); // Limit to 10 examples
}