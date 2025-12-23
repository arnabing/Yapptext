/**
 * ChatGPT Deep Link Actions
 *
 * Opens ChatGPT with pre-crafted prompts for transcript analysis.
 * Zero API cost - uses user's ChatGPT account.
 */

export interface ChatGPTAction {
  id: string
  label: string
  icon: string  // Solar icon name
  prompt: (transcript: string) => string
}

export const AI_ACTIONS: ChatGPTAction[] = [
  {
    id: 'summarize',
    label: 'Summarize',
    icon: 'solar:document-text-bold',
    prompt: (transcript) => `Summarize this transcript in 3 bullet points:\n\n${transcript}`
  },
  {
    id: 'tasks',
    label: 'Turn into tasks',
    icon: 'solar:checklist-bold',
    prompt: (transcript) => `Extract action items and tasks from this transcript:\n\n${transcript}`
  },
  {
    id: 'ask',
    label: 'Ask Questions',
    icon: 'solar:chat-round-dots-bold',
    prompt: (transcript) => `I have a transcript I'd like to discuss:\n\n${transcript}\n\nWhat questions do you have?`
  }
]

/**
 * Truncate long transcripts to stay within URL limits
 * ChatGPT URLs have practical limits (~8000 chars)
 */
export function truncateForChatGPT(transcript: string, maxChars = 6000): string {
  if (transcript.length <= maxChars) return transcript

  const keepStart = Math.floor(maxChars * 0.8)
  const keepEnd = Math.floor(maxChars * 0.2)

  return transcript.slice(0, keepStart) +
    '\n\n[... transcript truncated for length ...]\n\n' +
    transcript.slice(-keepEnd)
}

/**
 * Build ChatGPT URL with encoded prompt
 */
export function buildChatGPTUrl(prompt: string): string {
  const encoded = encodeURIComponent(prompt)
  return `https://chatgpt.com/?q=${encoded}`
}

/**
 * Get action by ID
 */
export function getAction(id: string): ChatGPTAction | undefined {
  return AI_ACTIONS.find(action => action.id === id)
}

// Reuse window reference to avoid popup blocker on subsequent clicks
let chatGPTWindow: Window | null = null

/**
 * Open ChatGPT with a specific action and transcript
 * Returns success status and URL for fallback handling
 */
export function openChatGPT(actionId: string, transcript: string): { success: boolean; url: string } {
  const action = getAction(actionId)
  if (!action) {
    console.error(`Unknown ChatGPT action: ${actionId}`)
    return { success: false, url: '' }
  }

  const truncated = truncateForChatGPT(transcript)
  const prompt = action.prompt(truncated)
  const url = buildChatGPTUrl(prompt)

  // Reuse existing window to avoid popup blocker on subsequent clicks
  if (chatGPTWindow && !chatGPTWindow.closed) {
    chatGPTWindow.location.href = url
    chatGPTWindow.focus()
  } else {
    chatGPTWindow = window.open(url, 'chatgpt', 'noopener')
  }

  return { success: chatGPTWindow !== null, url }
}
