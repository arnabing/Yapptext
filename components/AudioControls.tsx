'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

interface AudioControlsProps {
  audioUrl: string
  onTimeUpdate?: (time: number) => void
  className?: string
  fileName?: string
}

export function AudioControls({ audioUrl, onTimeUpdate, className = '', fileName }: AudioControlsProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      onTimeUpdate?.(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [onTimeUpdate])
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      
      switch(e.key) {
        case ' ':
          e.preventDefault()
          togglePlayPause()
          break
        case 'ArrowLeft':
          e.preventDefault()
          skipBackward()
          break
        case 'ArrowRight':
          e.preventDefault()
          skipForward()
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isPlaying])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSliderChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return
    
    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const skipBackward = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.max(0, audio.currentTime - 10)
    
    // Visual feedback
    const btn = document.getElementById('skip-back-btn')
    if (btn) {
      btn.classList.add('scale-95')
      setTimeout(() => btn.classList.remove('scale-95'), 150)
    }
  }

  const skipForward = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = Math.min(duration, audio.currentTime + 10)
    
    // Visual feedback
    const btn = document.getElementById('skip-forward-btn')
    if (btn) {
      btn.classList.add('scale-95')
      setTimeout(() => btn.classList.remove('scale-95'), 150)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 ${className}`}>
      <audio ref={audioRef} src={audioUrl} />
      
      <div className="bg-background/80 backdrop-blur border-t">
        <div className="container max-w-5xl mx-auto px-4 py-4">
          {/* File name display */}
          {fileName && (
            <div className="text-xs text-muted-foreground mb-2 text-center truncate">
              {fileName}
            </div>
          )}
          <div className="flex items-center gap-4">
            {/* Play/Pause and Skip Controls */}
            <div className="flex items-center gap-1">
              <Button
                id="skip-back-btn"
                variant="ghost"
                size="icon"
                onClick={skipBackward}
                className="h-9 w-9 transition-transform"
                title="Skip back 10 seconds"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button
                variant="default"
                size="icon"
                onClick={togglePlayPause}
                className="h-10 w-10 mx-1 shadow-md hover:shadow-lg transition-all"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5 ml-0.5" />
                )}
              </Button>
              
              <Button
                id="skip-forward-btn"
                variant="ghost"
                size="icon"
                onClick={skipForward}
                className="h-9 w-9 transition-transform"
                title="Skip forward 10 seconds"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Current time */}
            <span className="text-sm font-mono tabular-nums text-muted-foreground min-w-[3.5rem] text-center">
              {formatTime(currentTime)}
            </span>
            
            {/* Timeline Slider */}
            <div className="flex-1 flex items-center gap-3">
              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={0.1}
                onValueChange={handleSliderChange}
                className="flex-1"
                aria-label="Seek audio"
              />
            </div>
            
            {/* Duration */}
            <span className="text-sm font-mono tabular-nums text-muted-foreground min-w-[3.5rem] text-center">
              {formatTime(duration)}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  )
}