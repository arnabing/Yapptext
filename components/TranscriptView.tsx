'use client'

import { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// AssemblyAI timestamps have 200-500ms accuracy tolerance per their documentation
// This offset compensates for timestamps that tend to be ahead of actual audio
// Adjust if needed based on your audio source (300ms is middle of their accuracy range)
const TIMESTAMP_SYNC_OFFSET = 300 // milliseconds

interface Word {
  text: string
  start: number
  end: number
  confidence?: number
  speaker?: string
}

interface TranscriptSegment {
  speaker: string
  text: string
  start: number
  end: number
  words?: Word[]
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
  words?: Word[]
}


export function TranscriptView({ 
  utterances, 
  chapters, 
  fullText, 
  currentTime = 0,
  words = []
}: TranscriptViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const activeWordRef = useRef<HTMLSpanElement>(null)
  
  
  useEffect(() => {
    if (activeWordRef.current && scrollRef.current) {
      const element = activeWordRef.current
      const container = scrollRef.current
      const elementRect = element.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      
      // Only scroll if the active word is outside the viewport
      if (elementRect.top < containerRect.top + 100 || elementRect.bottom > containerRect.bottom - 100) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [currentTime])
  
  // If no utterances, display plain text
  if (!utterances || utterances.length === 0) {
    return (
      <ScrollArea className="h-full">
        <div className="p-4 md:p-6 max-w-4xl mx-auto pb-52">
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">{fullText}</p>
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

  // Create speaker to color mapping and determine main speaker
  const speakers = Array.from(new Set(utterances.map(u => u.speaker)))
  
  // Count utterances per speaker to find main speaker (most frequent)
  const speakerCounts = utterances.reduce((acc, u) => {
    acc[u.speaker] = (acc[u.speaker] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  // Main speaker is the most frequent one (or first if equal)
  const mainSpeaker = speakers.reduce((main, speaker) => 
    speakerCounts[speaker] > speakerCounts[main] ? speaker : main
  , speakers[0])
  
  // Colors for secondary speakers
  const secondaryColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-yellow-500'
  ]
  
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
    <ScrollArea className="h-full" ref={scrollRef}>
      <div className="p-4 md:p-6 space-y-3 max-w-4xl mx-auto pb-52">
        {/* Chapters section removed for better performance */}
        
        {/* Transcript segments - Standardized iMessage style for all */}
        {groupedUtterances.map((group, groupIndex) => {
          const isActive = currentTime >= group.segments[0].start && 
                          currentTime <= group.segments[group.segments.length - 1].end
          
          const isMainSpeaker = group.speaker === mainSpeaker
          const speakerIndex = speakers.indexOf(group.speaker)
          
          // Get color for secondary speakers
          const secondaryColorIndex = !isMainSpeaker ? 
            speakers.filter(s => s !== mainSpeaker).indexOf(group.speaker) : -1
          const bgColor = !isMainSpeaker ? 
            secondaryColors[secondaryColorIndex % secondaryColors.length] : ''
          
          return (
            <div 
              key={groupIndex}
              className={`flex ${!isMainSpeaker ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div className={`max-w-[85%] md:max-w-[70%] space-y-1`}>
                <div className={`text-xs font-medium text-muted-foreground mb-1 ${
                  !isMainSpeaker ? 'text-right' : ''
                }`}>
                  {group.speaker}
                </div>
                <Card className={cn(
                  "border-0 shadow-sm transition-all",
                  !isMainSpeaker 
                    ? `${bgColor} text-white` 
                    : 'bg-muted',
                  isActive && 'ring-2 ring-primary/30'
                )}>
                  <div className="px-3 md:px-4 py-2">
                    {group.segments.map((segment, segIndex) => (
                      <p key={segIndex} className="text-sm leading-relaxed break-words">
                        {segment.words && segment.words.length > 0 ? (
                          segment.words.map((word, wordIndex) => {
                            // Apply sync offset to compensate for AssemblyAI timestamp accuracy
                            const syncedTime = currentTime + TIMESTAMP_SYNC_OFFSET
                            const isCurrentWord = syncedTime >= word.start && syncedTime <= word.end
                            return (
                              <span
                                key={wordIndex}
                                ref={isCurrentWord ? activeWordRef : null}
                                className={cn(
                                  "transition-colors duration-200",
                                  isCurrentWord && (!isMainSpeaker 
                                    ? 'bg-white/20' 
                                    : 'bg-primary/20')
                                )}
                                style={{
                                  transition: 'background-color 0.2s'
                                }}
                              >
                                {word.text}{' '}
                              </span>
                            )
                          })
                        ) : (
                          segment.text
                        )}
                      </p>
                    ))}
                  </div>
                </Card>
                <span className={`text-xs text-muted-foreground ${
                  !isMainSpeaker ? 'text-right block' : ''
                }`}>
                  {formatTime(group.segments[0].start / 1000)}
                </span>
              </div>
            </div>
          )
        })}
        {/* Spacer for audio player - ensures content isn't covered on desktop */}
        <div className="h-52" aria-hidden="true" />
      </div>
    </ScrollArea>
  )
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}