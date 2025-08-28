'use client'

import { useState, useRef, useEffect, ChangeEvent, DragEvent } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Upload, CheckCircle, Copy, AlertCircle, FileAudio, Loader2 } from 'lucide-react'

type AppState = 'idle' | 'file-selected' | 'processing' | 'complete' | 'error'

export default function Home() {
  const [state, setState] = useState<AppState>('idle')
  const [file, setFile] = useState<File | null>(null)
  const [transcript, setTranscript] = useState('')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [processingTime, setProcessingTime] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [minutesUsed, setMinutesUsed] = useState(0)
  const [dailyLimit] = useState(20)
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const processingTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Check usage limit on load
    fetch('/api/check-limit')
      .then(res => res.json())
      .then(data => {
        setMinutesUsed(data.minutesUsed || 0)
      })
      .catch(console.error)
  }, [])

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleFileSelect = (selectedFile: File) => {
    const validTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/wave', 'audio/x-wav', 'audio/m4a', 'audio/x-m4a', 'audio/webm', 'audio/mp4']
    
    if (!validTypes.includes(selectedFile.type) && !selectedFile.name.match(/\.(mp3|wav|m4a|webm|mp4)$/i)) {
      setError('Please upload a valid audio file (MP3, WAV, M4A, WebM, or MP4)')
      setState('error')
      return
    }

    if (selectedFile.size > 25 * 1024 * 1024) {
      setError('File size must be less than 25MB')
      setState('error')
      return
    }

    setFile(selectedFile)
    setState('file-selected')
    setError('')
  }

  const processFile = async () => {
    if (!file) return

    if (minutesUsed >= dailyLimit) {
      setError('Daily limit reached. Please try again tomorrow.')
      setState('error')
      return
    }

    setState('processing')
    setProgress(0)
    setProcessingTime(0)

    processingTimerRef.current = setInterval(() => {
      setProcessingTime(prev => prev + 1)
    }, 1000)

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev
        return prev + Math.random() * 15
      })
    }, 500)

    try {
      const formData = new FormData()
      formData.append('audio', file)

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      })

      clearInterval(progressInterval)
      
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to transcribe audio')
      }

      const data = await response.json()
      
      setProgress(100)
      setTranscript(data.text)
      setWordCount(data.words || data.text.split(' ').length)
      setMinutesUsed(data.minutesUsed || minutesUsed + data.duration)
      setState('complete')
      
      if (processingTimerRef.current) {
        clearInterval(processingTimerRef.current)
      }
    } catch (err) {
      clearInterval(progressInterval)
      if (processingTimerRef.current) {
        clearInterval(processingTimerRef.current)
      }
      
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
      setProgress(0)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(transcript)
      const button = document.getElementById('copy-button')
      if (button) {
        button.textContent = 'Copied!'
        setTimeout(() => {
          button.textContent = 'Copy'
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const reset = () => {
    setState('idle')
    setFile(null)
    setTranscript('')
    setProgress(0)
    setError('')
    setProcessingTime(0)
    setWordCount(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const getFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto p-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">YappText</h1>
          <p className="text-muted-foreground">Audio to text in seconds</p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            {/* Upload Zone - State-based rendering */}
            {state === 'idle' && (
              <div
                className={`border-2 border-dashed rounded-lg transition-colors ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="p-12 text-center">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg mb-2">Drop audio file here</p>
                  <p className="text-sm text-muted-foreground mb-4">or</p>
                  <Button onClick={() => fileInputRef.current?.click()}>
                    Select File
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="audio/*,.mp3,.wav,.m4a,.webm,.mp4"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />
                  <p className="text-xs text-muted-foreground mt-4">
                    Supports MP3, WAV, M4A, WebM, MP4 • Max 25MB
                  </p>
                </div>
              </div>
            )}

            {state === 'file-selected' && file && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileAudio className="h-8 w-8 text-primary" />
                    <div className="flex-1">
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {getFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={processFile} className="flex-1">
                      Transcribe
                    </Button>
                    <Button variant="outline" onClick={reset}>
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {state === 'processing' && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="font-medium">Processing audio...</span>
                  </div>
                  <Progress value={progress} className="mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {processingTime > 0 && `${processingTime} seconds elapsed`}
                  </p>
                </CardContent>
              </Card>
            )}

            {state === 'complete' && (
              <Alert className="border-green-500/50 bg-green-50/50 dark:bg-green-950/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800 dark:text-green-200">
                  Transcript ready! {wordCount} words transcribed
                </AlertDescription>
              </Alert>
            )}

            {state === 'error' && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Transcript Display */}
            {transcript && state === 'complete' && (
              <>
                <div className="relative">
                  <Textarea
                    readOnly
                    value={transcript}
                    className="min-h-[300px] resize-none pr-20 font-mono text-sm"
                  />
                  <Button
                    id="copy-button"
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>

                <Button variant="outline" className="w-full" onClick={reset}>
                  Process Another File
                </Button>
              </>
            )}

            {/* Usage Indicator */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Daily usage</span>
                <span>{minutesUsed}/{dailyLimit} minutes</span>
              </div>
              <Progress value={(minutesUsed / dailyLimit) * 100} />
              {minutesUsed >= dailyLimit && (
                <p className="text-xs text-destructive">
                  Daily limit reached. Try again tomorrow.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}