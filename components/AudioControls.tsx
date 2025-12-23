'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { LiquidGlassCard } from '@/components/ui/liquid-glass'
import { Play, Pause, Rewind, FastForward, Loader2 } from 'lucide-react'

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
  const [isSeeking, setIsSeeking] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      if (isSeeking) return // Don't update while user is seeking
      setCurrentTime(audio.currentTime)
      onTimeUpdate?.(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handleWaiting = () => {
      setIsBuffering(true)
    }

    const handleCanPlay = () => {
      setIsBuffering(false)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('waiting', handleWaiting)
    audio.addEventListener('canplay', handleCanPlay)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('waiting', handleWaiting)
      audio.removeEventListener('canplay', handleCanPlay)
    }
  }, [onTimeUpdate, isSeeking])

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
    setIsSeeking(true)
    setCurrentTime(value[0]) // Visual update only, no audio seek yet
  }

  const handleSliderCommit = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
    setIsSeeking(false) // Resume timeupdate events
    // Note: onTimeUpdate will be called by timeupdate event once audio is ready
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
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Bottom: Controls pill */}
      <div className={`flex justify-center px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] ${className}`}>
        <LiquidGlassCard
          draggable={false}
          blurIntensity="lg"
          shadowIntensity="lg"
          glowIntensity="sm"
          borderRadius={fileName ? "1.5rem" : "9999px"}
          tint="auto"
          className="relative z-30 w-full max-w-2xl"
        >
          {/* Buffering indicator */}
          {isBuffering && (
            <div className={`absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-40 ${fileName ? 'rounded-3xl' : 'rounded-full'}`}>
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
            </div>
          )}

          <div className="flex flex-col relative z-30">
            {/* Top row: Filename centered */}
            {fileName && (
              <div className="text-center px-4 pt-2 pb-1">
                <span className="text-xs text-muted-foreground truncate block" title={fileName}>
                  {fileName.length > 30 ? `${fileName.slice(0, 27)}...` : fileName}
                </span>
              </div>
            )}

            {/* Bottom row: Playback controls + slider */}
            <div className="flex items-center gap-3 px-3 py-2">
              {/* Left: Playback controls */}
              <div className="flex items-center gap-1 shrink-0">
                <Button
                  id="skip-back-btn"
                  size="icon"
                  variant="ghost"
                  onClick={skipBackward}
                  className="h-8 w-8 transition-transform hover:bg-white/10"
                  title="Skip back 10 seconds"
                >
                  <Rewind className="h-4 w-4" />
                </Button>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={togglePlayPause}
                  className="h-9 w-9 hover:bg-white/10"
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
                  size="icon"
                  variant="ghost"
                  onClick={skipForward}
                  className="h-8 w-8 transition-transform hover:bg-white/10"
                  title="Skip forward 10 seconds"
                >
                  <FastForward className="h-4 w-4" />
                </Button>
              </div>

              {/* Center: Slider with time */}
              <div className="flex-1 flex items-center gap-2 min-w-0">
                <span className="text-xs font-mono tabular-nums text-muted-foreground shrink-0 w-10 text-right">
                  {formatTime(currentTime)}
                </span>
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={0.1}
                  onValueChange={handleSliderChange}
                  onValueCommit={handleSliderCommit}
                  className="flex-1"
                  aria-label="Seek audio"
                />
                <span className="text-xs font-mono tabular-nums text-muted-foreground shrink-0 w-10">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </>
  )
}
