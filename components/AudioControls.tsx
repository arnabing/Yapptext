'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Play, Pause, Rewind, FastForward } from 'lucide-react'

interface AudioControlsProps {
  audioUrl: string
  fileName?: string
  onTimeUpdate?: (time: number) => void
  className?: string
}

export function AudioControls({ audioUrl, fileName, onTimeUpdate, className = '' }: AudioControlsProps) {
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

    // Seeked event ensures sync after seeking completes
    const handleSeeked = () => {
      setCurrentTime(audio.currentTime)
      onTimeUpdate?.(audio.currentTime)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('seeked', handleSeeked)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('seeked', handleSeeked)
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
    onTimeUpdate?.(value[0]) // Immediate update for instant feedback
  }

  const skipBackward = () => {
    const audio = audioRef.current
    if (!audio) return
    const newTime = Math.max(0, audio.currentTime - 10)
    audio.currentTime = newTime
    setCurrentTime(newTime)
    onTimeUpdate?.(newTime) // Immediate update for instant feedback

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
    const newTime = Math.min(duration, audio.currentTime + 10)
    audio.currentTime = newTime
    setCurrentTime(newTime)
    onTimeUpdate?.(newTime) // Immediate update for instant feedback

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

  // Don't render if there's no audio
  if (!audioUrl) return null

  return (
    <>
      <audio ref={audioRef} src={audioUrl} />

      <div className={`bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-white/20 dark:border-white/10 ${className}`}>
        <div className="container max-w-5xl mx-auto px-4 py-4">
          {/* File name display */}
          {fileName && (
            <div className="text-xs text-muted-foreground mb-2 text-center truncate">
              {fileName}
            </div>
          )}

          <div className="flex flex-col gap-2.5">
            {/* Full-width slider */}
            <div className="w-full">
              <Slider
                value={[currentTime]}
                max={duration || 100}
                step={0.1}
                onValueChange={handleSliderChange}
                className="w-full"
                aria-label="Seek audio"
              />
            </div>

            {/* Times below slider */}
            <div className="flex items-center justify-between -mt-1">
              <span className="text-xs font-mono tabular-nums text-muted-foreground">
                {formatTime(currentTime)}
              </span>
              <span className="text-xs font-mono tabular-nums text-muted-foreground">
                {formatTime(duration)}
              </span>
            </div>

            {/* Centered controls */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <Button
                id="skip-back-btn"
                size="icon"
                variant="ghost"
                onClick={skipBackward}
                className="h-9 w-9 transition-transform"
                title="Skip back 10 seconds"
              >
                <Rewind className="h-5 w-5" />
              </Button>

              <Button
                size="icon"
                onClick={togglePlayPause}
                className="h-11 w-11 mx-1 shadow-md hover:shadow-lg transition-all"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6 ml-0.5" />
                )}
              </Button>

              <Button
                id="skip-forward-btn"
                size="icon"
                variant="ghost"
                onClick={skipForward}
                className="h-9 w-9 transition-transform"
                title="Skip forward 10 seconds"
              >
                <FastForward className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
