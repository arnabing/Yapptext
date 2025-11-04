export interface TranscriptSegment {
  speaker: string
  text: string
  start: number
  end: number
  words?: Array<{
    text: string
    start: number
    end: number
  }>
}

export function formatTranscriptAsPlainText(
  utterances: TranscriptSegment[],
  plainText?: string
): string {
  if (!utterances || utterances.length === 0) {
    return plainText || ''
  }

  const groupedUtterances = groupUtterancesBySpeaker(utterances)
  let formattedText = ''

  groupedUtterances.forEach((group) => {
    const timestamp = formatTime(group.segments[0].start / 1000)

    formattedText += `[${group.speaker}] ${timestamp}\n`

    group.segments.forEach(segment => {
      formattedText += `${segment.text}\n`
    })

    formattedText += '\n'
  })

  return formattedText.trim()
}

export function formatTranscriptAsHTML(
  utterances: TranscriptSegment[],
  plainText?: string
): string {
  if (!utterances || utterances.length === 0) {
    if (plainText) {
      return `<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 0 auto;">
        <p>${plainText.replace(/\n/g, '<br>')}</p>
      </div>`
    }
    return ''
  }

  const speakers = Array.from(new Set(utterances.map(u => u.speaker)))
  const speakerCounts = utterances.reduce((acc, u) => {
    acc[u.speaker] = (acc[u.speaker] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const mainSpeaker = speakers.reduce((main, speaker) =>
    speakerCounts[speaker] > speakerCounts[main] ? speaker : main
  , speakers[0])

  const secondaryColors = [
    '#3B82F6', '#10B981', '#8B5CF6', '#F97316', '#EC4899', '#EAB308'
  ]

  const speakerColors: Record<string, string> = {}
  let colorIndex = 0
  speakers.forEach(speaker => {
    if (speaker !== mainSpeaker) {
      speakerColors[speaker] = secondaryColors[colorIndex % secondaryColors.length]
      colorIndex++
    }
  })

  const groupedUtterances = groupUtterancesBySpeaker(utterances)

  let html = `<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">`

  groupedUtterances.forEach((group) => {
    const isMainSpeaker = group.speaker === mainSpeaker
    const timestamp = formatTime(group.segments[0].start / 1000)
    const bgColor = !isMainSpeaker ? speakerColors[group.speaker] : '#F3F4F6'
    const textColor = !isMainSpeaker ? 'white' : 'black'
    const alignment = !isMainSpeaker ? 'right' : 'left'
    const marginSide = !isMainSpeaker ? 'margin-left: auto; margin-right: 0' : 'margin-left: 0; margin-right: auto'

    html += `
      <div style="margin-bottom: 16px; text-align: ${alignment};">
        <div style="display: inline-block; max-width: 70%; ${marginSide};">
          <div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #6B7280;">
            ${group.speaker}
          </div>
          <div style="background-color: ${bgColor}; color: ${textColor}; padding: 12px 16px; border-radius: 12px; text-align: left;">
            ${group.segments.map(segment => segment.text).join(' ')}
          </div>
          <div style="font-size: 12px; color: #9CA3AF; margin-top: 4px;">
            ${timestamp}
          </div>
        </div>
      </div>
    `
  })

  html += `</div>`
  return html
}

export function formatTranscriptAsMarkdown(
  utterances: TranscriptSegment[],
  plainText?: string
): string {
  if (!utterances || utterances.length === 0) {
    return plainText || ''
  }

  const groupedUtterances = groupUtterancesBySpeaker(utterances)

  let markdown = '# Transcript\n\n'

  groupedUtterances.forEach((group) => {
    const timestamp = formatTime(group.segments[0].start / 1000)

    markdown += `## ${group.speaker}\n`
    markdown += `*${timestamp}*\n\n`

    group.segments.forEach(segment => {
      markdown += `${segment.text}\n\n`
    })

    markdown += '---\n\n'
  })

  return markdown.trim()
}

function groupUtterancesBySpeaker(utterances: TranscriptSegment[]): Array<{
  speaker: string
  segments: TranscriptSegment[]
}> {
  const groupedUtterances: Array<{
    speaker: string
    segments: TranscriptSegment[]
  }> = []

  let currentGroup: typeof groupedUtterances[0] | null = null

  utterances.forEach((utterance) => {
    if (!currentGroup || currentGroup.speaker !== utterance.speaker) {
      currentGroup = {
        speaker: utterance.speaker,
        segments: [utterance]
      }
      groupedUtterances.push(currentGroup)
    } else {
      currentGroup.segments.push(utterance)
    }
  })

  return groupedUtterances
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}