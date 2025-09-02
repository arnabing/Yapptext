'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface TranscriptSegment {
  speaker: string
  text: string
  start: number
  end: number
}

interface Chapter {
  headline: string
  summary: string
  start: number
  end: number
}

interface TranscriptViewProps {
  utterances?: TranscriptSegment[]
  chapters?: Chapter[]
  fullText: string
  currentTime?: number
}

const speakerColors = [
  'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  'bg-green-500/10 text-green-700 dark:text-green-300',
  'bg-purple-500/10 text-purple-700 dark:text-purple-300',
  'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  'bg-pink-500/10 text-pink-700 dark:text-pink-300',
]

export function TranscriptView({ 
  utterances, 
  chapters, 
  fullText, 
  currentTime = 0 
}: TranscriptViewProps) {
  // If no utterances, display plain text
  if (!utterances || utterances.length === 0) {
    return (
      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="space-y-4">
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{fullText}</p>
        </div>
      </ScrollArea>
    )
  }

  // Group utterances by chapter if chapters exist
  const getChapterForUtterance = (utterance: TranscriptSegment) => {
    if (!chapters) return null
    return chapters.find(
      chapter => utterance.start >= chapter.start && utterance.end <= chapter.end
    )
  }

  // Create speaker to color mapping
  const speakers = [...new Set(utterances.map(u => u.speaker))]
  const speakerColorMap = Object.fromEntries(
    speakers.map((speaker, i) => [speaker, speakerColors[i % speakerColors.length]])
  )

  // Group consecutive utterances by the same speaker
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

  return (
    <ScrollArea className="h-[500px] rounded-md border">
      <div className="p-4 space-y-4">
        {/* Show chapters at the top if they exist */}
        {chapters && chapters.length > 0 && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Chapters</h3>
            <div className="space-y-2">
              {chapters.map((chapter, idx) => (
                <div key={idx} className="text-sm">
                  <span className="font-medium">{chapter.headline}</span>
                  <span className="text-muted-foreground ml-2">
                    {formatTime(chapter.start / 1000)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Transcript segments */}
        {groupedUtterances.map((group, groupIndex) => {
          const isActive = currentTime >= group.segments[0].start && 
                          currentTime <= group.segments[group.segments.length - 1].end
          
          return (
            <div 
              key={groupIndex} 
              className={`space-y-2 ${isActive ? 'bg-accent/50 -mx-2 px-2 py-1 rounded-md' : ''}`}
            >
              <div className="flex items-center gap-2">
                <Badge 
                  variant="secondary" 
                  className={speakerColorMap[group.speaker]}
                >
                  {group.speaker}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {formatTime(group.segments[0].start / 1000)}
                </span>
              </div>
              
              <div className="space-y-1">
                {group.segments.map((segment, segIndex) => (
                  <p 
                    key={segIndex}
                    className="text-sm leading-relaxed pl-2"
                  >
                    {segment.text}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}