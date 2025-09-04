'use client'

import { useEffect, useRef } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

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
  const activeRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const element = activeRef.current
      const container = scrollRef.current
      const elementRect = element.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      
      if (elementRect.top < containerRect.top || elementRect.bottom > containerRect.bottom) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [currentTime])
  
  // If no utterances, display plain text
  if (!utterances || utterances.length === 0) {
    return (
      <ScrollArea className="h-[calc(100vh-20rem)] md:h-[calc(100vh-16rem)] rounded-md border">
        <div className="p-4 md:p-6">
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

  // Create speaker to color mapping  
  const speakers = Array.from(new Set(utterances.map(u => u.speaker)))
  const isConversation = speakers.length === 2 // Check if it's a 2-person conversation
  
  // Colors for multi-speaker (3+) scenarios
  const multiSpeakerColors = [
    { bg: 'bg-blue-500/10', border: 'border-blue-500/20', avatar: 'bg-blue-500' },
    { bg: 'bg-green-500/10', border: 'border-green-500/20', avatar: 'bg-green-500' },
    { bg: 'bg-purple-500/10', border: 'border-purple-500/20', avatar: 'bg-purple-500' },
    { bg: 'bg-orange-500/10', border: 'border-orange-500/20', avatar: 'bg-orange-500' },
    { bg: 'bg-pink-500/10', border: 'border-pink-500/20', avatar: 'bg-pink-500' },
    { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', avatar: 'bg-yellow-500' }
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
    <ScrollArea className="h-[calc(100vh-20rem)] md:h-[calc(100vh-16rem)] rounded-md border" ref={scrollRef}>
      <div className="p-4 md:p-6 space-y-3">
        {/* Chapters section removed for better performance */}
        
        {/* Transcript segments */}
        {groupedUtterances.map((group, groupIndex) => {
          const isActive = currentTime >= group.segments[0].start && 
                          currentTime <= group.segments[group.segments.length - 1].end
          
          const speakerIndex = speakers.indexOf(group.speaker)
          const isSecondSpeaker = speakerIndex === 1
          
          // For 2-speaker conversations
          if (isConversation) {
            return (
              <div 
                key={groupIndex}
                ref={isActive ? activeRef : null}
                className={`flex ${isSecondSpeaker ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div className={`max-w-[85%] md:max-w-[70%] space-y-1`}>
                  <div className={`text-xs font-medium text-muted-foreground mb-1 ${
                    isSecondSpeaker ? 'text-right' : ''
                  }`}>
                    {group.speaker}
                  </div>
                  <Card className={cn(
                    "border-0 shadow-sm transition-all",
                    isSecondSpeaker 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted',
                    isActive && 'ring-2 ring-primary/30'
                  )}>
                    <div className="px-3 md:px-4 py-2">
                      {group.segments.map((segment, segIndex) => (
                        <p key={segIndex} className="text-sm leading-relaxed break-words">
                          {segment.words && segment.words.length > 0 ? (
                            segment.words.map((word, wordIndex) => {
                              const isCurrentWord = currentTime >= word.start && currentTime <= word.end
                              return (
                                <span
                                  key={wordIndex}
                                  className={cn(
                                    "transition-colors duration-200",
                                    isCurrentWord && (isSecondSpeaker 
                                      ? 'bg-primary-foreground/20' 
                                      : 'bg-primary/20')
                                  )}
                                  style={{
                                    fontWeight: isCurrentWord ? 600 : 400,
                                    transition: 'font-weight 0.2s, background-color 0.2s'
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
                    isSecondSpeaker ? 'text-right block' : ''
                  }`}>
                    {formatTime(group.segments[0].start / 1000)}
                  </span>
                </div>
              </div>
            )
          }
          
          // For multi-speaker (3+) conversations
          const colorScheme = multiSpeakerColors[speakerIndex % multiSpeakerColors.length]
          
          return (
            <div 
              key={groupIndex}
              ref={isActive ? activeRef : null}
              className="flex justify-start mb-4"
            >
              <div className="max-w-[90%] md:max-w-[85%] space-y-1">
                <div className="text-xs font-medium text-muted-foreground mb-1">
                  {group.speaker}
                </div>
                <Card className={cn(
                  "border transition-all",
                  colorScheme.border,
                  colorScheme.bg,
                  isActive && 'ring-2 ring-primary/30'
                )}>
                  <div className="px-3 md:px-4 py-2">
                    {group.segments.map((segment, segIndex) => (
                      <p key={segIndex} className="text-sm leading-relaxed break-words">
                        {segment.words && segment.words.length > 0 ? (
                          segment.words.map((word, wordIndex) => {
                            const isCurrentWord = currentTime >= word.start && currentTime <= word.end
                            return (
                              <span
                                key={wordIndex}
                                className={cn(
                                  "transition-colors duration-200",
                                  isCurrentWord && 'bg-primary/30'
                                )}
                                style={{
                                  fontWeight: isCurrentWord ? 600 : 400,
                                  transition: 'font-weight 0.2s, background-color 0.2s'
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
                <span className="text-xs text-muted-foreground">
                  {formatTime(group.segments[0].start / 1000)}
                </span>
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