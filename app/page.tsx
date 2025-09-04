'use client'

import { useState, useRef, useEffect, ChangeEvent, DragEvent } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Upload, Copy, AlertCircle, FileAudio, Loader2, Plus, Clock, PlayCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { confettiPresets } from '@/components/confetti'
import { TranscriptView } from '@/components/TranscriptView'
import { AudioControls } from '@/components/AudioControls'
import { LanguageSelector } from '@/components/LanguageSelector'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

type AppState = 'idle' | 'file-selected' | 'processing' | 'complete' | 'error'

export default function Home() {
  const { toast } = useToast()
  const [state, setState] = useState<AppState>('idle')
  const [file, setFile] = useState<File | null>(null)
  const [transcript, setTranscript] = useState('')
  const [utterances, setUtterances] = useState<any[]>([])
  const [chapters, setChapters] = useState<any[]>([])
  const [allWords, setAllWords] = useState<any[]>([])
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [processingTime, setProcessingTime] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [minutesUsed, setMinutesUsed] = useState(0)
  const [dailyLimit] = useState(20)
  const [statusMessage, setStatusMessage] = useState('')
  const [audioUrl, setAudioUrl] = useState<string>('')
  const [currentPlayTime, setCurrentPlayTime] = useState(0)
  const [isTranslating, setIsTranslating] = useState(false)
  const [originalTranscript, setOriginalTranscript] = useState('')
  const [originalUtterances, setOriginalUtterances] = useState<any[]>([])
  const [audioDuration, setAudioDuration] = useState(0) // in seconds
  const [estimatedTime, setEstimatedTime] = useState(0) // in seconds
  const [useNanoModel, setUseNanoModel] = useState(false) // Use faster Nano model
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const processingTimerRef = useRef<NodeJS.Timeout | null>(null)
  
  // Sample audio files
  const sampleAudios = [
    { 
      name: 'JFK Moon Speech',
      url: 'https://www.nasa.gov/62284main_jfk_moon_speech.mp3',
      duration: '2 min',
      description: 'Historic speech'
    },
    {
      name: 'Interview Sample',  
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Winston_Churchill_-_Be_Ye_Men_of_Valour.ogg',
      duration: '3 min',
      description: 'Churchill speech'
    },
    {
      name: 'Podcast Demo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/FDR_Pearl_Harbor.ogg', 
      duration: '1 min',
      description: 'FDR address'
    }
  ]

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
    // Create audio URL for playback
    const url = URL.createObjectURL(selectedFile)
    setAudioUrl(url)
    
    // Get audio duration for time estimation
    const audio = new Audio(url)
    audio.addEventListener('loadedmetadata', () => {
      const duration = Math.round(audio.duration) // duration in seconds
      setAudioDuration(duration)
      // Estimate processing time: ~0.5 seconds per minute of audio (based on AssemblyAI benchmarks)
      const estimatedProcessingTime = Math.max(10, Math.round(duration * 0.5 / 60))
      setEstimatedTime(estimatedProcessingTime)
    })
    
    const validTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/wave', 'audio/x-wav', 'audio/m4a', 'audio/x-m4a', 'audio/webm', 'audio/mp4']
    
    if (!validTypes.includes(selectedFile.type) && !selectedFile.name.match(/\.(mp3|wav|m4a|webm|mp4)$/i)) {
      setError('Please upload a valid audio file (MP3, WAV, M4A, WebM, or MP4)')
      setState('error')
      return
    }

    if (selectedFile.size > 20 * 1024 * 1024) {
      setError('File size must be less than 20MB (approx. 20 minutes of audio)')
      setState('error')
      return
    }

    setFile(selectedFile)
    setState('file-selected')
    setError('')
  }

  const processFile = async () => {
    if (!file) return
    
    console.log('\n=== STARTING FILE PROCESSING ===')
    console.log('File:', file.name)
    console.log('Size:', (file.size / 1024 / 1024).toFixed(2), 'MB')
    console.log('Type:', file.type)
    console.log('Audio duration:', audioDuration, 'seconds')
    console.log('Estimated processing time:', estimatedTime, 'seconds')

    if (minutesUsed >= dailyLimit) {
      setError('Daily limit reached. Please try again tomorrow.')
      setState('error')
      return
    }

    setState('processing')
    setProgress(0)
    setProcessingTime(0)
    setStatusMessage('Uploading audio...')

    processingTimerRef.current = setInterval(() => {
      setProcessingTime(prev => prev + 1)
    }, 1000)

    try {
      const formData = new FormData()
      formData.append('audio', file)
      formData.append('useNanoModel', useNanoModel.toString())
      formData.append('enableSentiment', 'true')
      formData.append('enableKeyPhrases', 'true')

      // Use XMLHttpRequest for real upload progress
      const xhr = new XMLHttpRequest()
      
      const uploadPromise = new Promise<any>((resolve, reject) => {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded / e.total) * 40) // 0-40% for upload
            setProgress(percentComplete)
            console.log(`Upload progress: ${percentComplete}% (${(e.loaded / 1024 / 1024).toFixed(2)}MB / ${(e.total / 1024 / 1024).toFixed(2)}MB)`)
          }
        })

        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            try {
              const data = JSON.parse(xhr.responseText)
              resolve(data)
            } catch (e) {
              reject(new Error('Invalid response format'))
            }
          } else {
            try {
              const errorData = JSON.parse(xhr.responseText)
              reject(new Error(errorData.error || `Request failed with status ${xhr.status}`))
            } catch {
              reject(new Error(`Request failed with status ${xhr.status}`))
            }
          }
        })

        xhr.addEventListener('error', () => {
          reject(new Error('Network error occurred. Please try again.'))
        })

        xhr.addEventListener('timeout', () => {
          reject(new Error('Request timed out. Please try with a smaller file.'))
        })

        xhr.open('POST', '/api/transcribe')
        xhr.timeout = 120000 // 2 minutes timeout
        xhr.send(formData)
      })

      // After upload completes, show processing status
      console.log('Upload complete, starting transcription processing...')
      setProgress(40) // Upload complete, now processing
      setStatusMessage('Processing transcript...')
      
      // Calculate progress based on estimated time
      const startProcessingTime = Date.now()
      const progressInterval = setInterval(() => {
        const elapsed = (Date.now() - startProcessingTime) / 1000
        const progress = Math.min(95, 40 + (elapsed / estimatedTime) * 55) // 40-95% for processing
        setProgress(Math.round(progress))
        console.log(`Processing: ${Math.round(elapsed)}s elapsed, progress: ${Math.round(progress)}%`)
      }, 2000) // Log every 2 seconds
      
      const data = await uploadPromise
      clearInterval(progressInterval)
      
      const totalTime = (Date.now() - startProcessingTime) / 1000
      console.log('\n=== TRANSCRIPTION COMPLETE ===')
      console.log('Total processing time:', totalTime.toFixed(1), 'seconds')
      console.log('Text length:', data.text?.length || 0, 'characters')
      console.log('Words:', data.words || 0)
      console.log('Utterances:', data.utterances?.length || 0)
      console.log('Speakers:', data.utterances ? new Set(data.utterances.map((u: any) => u.speaker)).size : 0)
      console.log('All words for highlighting:', data.allWords?.length || 0)
      console.log('Sentiment analysis:', data.sentimentAnalysis ? 'Available' : 'Not available')
      console.log('Key phrases:', data.keyPhrases?.length || 0)
      
      setProgress(100)
      setTranscript(data.text)
      setOriginalTranscript(data.text) // Store original for translation
      setUtterances(data.utterances || [])
      setOriginalUtterances(data.utterances || []) // Store original utterances
      setChapters(data.chapters || [])
      setAllWords(data.allWords || [])
      setWordCount(data.words || data.text.split(' ').length)
      setMinutesUsed(data.minutesUsed || minutesUsed + data.duration)
      setState('complete')
      
      // Show success toast
      const speakerCount = data.utterances?.length > 0 
        ? new Set(data.utterances.map((u: any) => u.speaker)).size
        : 0
      
      toast({
        title: "✨ Transcript ready!",
        description: `Successfully transcribed ${data.words || data.text.split(' ').length} words${speakerCount > 0 ? ` with ${speakerCount} speaker${speakerCount > 1 ? 's' : ''} detected` : ''}`,
      })
      
      // Trigger confetti after a short delay
      setTimeout(() => {
        console.log('Triggering confetti...')
        try {
          confettiPresets.success()
          console.log('Confetti triggered successfully')
        } catch (error) {
          console.error('Confetti error:', error)
        }
      }, 100)
      
      if (processingTimerRef.current) {
        clearInterval(processingTimerRef.current)
      }
    } catch (err) {
      if (processingTimerRef.current) {
        clearInterval(processingTimerRef.current)
      }
      
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
      setProgress(0)
    }
  }

  const handleTranslate = async (targetLanguage: string) => {
    if (!originalTranscript) return
    
    // Handle returning to original
    if (targetLanguage === 'original') {
      setTranscript(originalTranscript)
      setUtterances(originalUtterances)
      toast({
        title: "Returned to original",
        description: "Showing original transcript",
      })
      return
    }
    
    setIsTranslating(true)
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: originalTranscript,
          utterances: originalUtterances,
          targetLanguage,
        }),
      })
      
      const data = await response.json()
      
      if (data.error) {
        toast({
          title: "Translation failed",
          description: data.error,
          variant: "destructive",
        })
      } else {
        setTranscript(data.translatedText)
        // Use translated utterances if available, otherwise clear
        if (data.translatedUtterances) {
          setUtterances(data.translatedUtterances)
        } else {
          setUtterances([])
        }
        toast({
          title: "✨ Translation complete!",
          description: `Translated to ${targetLanguage} ${data.translatedUtterances ? 'with speaker segments preserved' : ''}`,
        })
      }
    } catch (error) {
      console.error('Translation error:', error)
      toast({
        title: "Translation error",
        description: "Failed to translate transcript",
        variant: "destructive",
      })
    } finally {
      setIsTranslating(false)
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
    setOriginalTranscript('')
    setUtterances([])
    setChapters([])
    setAllWords([])
    setProgress(0)
    setError('')
    setProcessingTime(0)
    setWordCount(0)
    setAudioUrl('')
    setCurrentPlayTime(0)
    setIsTranslating(false)
    setAudioDuration(0)
    setEstimatedTime(0)
    setStatusMessage('')
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
      <div className={`container max-w-4xl mx-auto p-4 py-8 ${transcript && state === 'complete' ? 'pb-24' : ''}`}>
        {/* Add New Button - Only show when transcript is complete */}
        {state === 'complete' && (
          <div className="fixed top-4 right-4 z-50">
            <Button
              size="icon"
              className="rounded-full h-12 w-12 shadow-lg"
              onClick={reset}
              title="New transcription"
            >
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        )}
        
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            YappText
          </h1>
          <p className="text-lg text-muted-foreground">
            Advanced transcription with speaker detection
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            {/* Upload Zone - State-based rendering */}
            {state === 'idle' && (
              <>
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
                
                {/* Sample Audio Pills */}
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground mb-3">Or try a sample:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sampleAudios.map((sample, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary/10 transition-colors py-2 px-3"
                        onClick={async () => {
                          console.log('Loading sample:', sample.name)
                          setStatusMessage('Loading sample audio...')
                          try {
                            const response = await fetch(sample.url)
                            const blob = await response.blob()
                            const file = new File([blob], sample.name + '.mp3', { type: 'audio/mpeg' })
                            handleFileSelect(file)
                            console.log('Sample loaded successfully:', sample.name)
                          } catch (error) {
                            console.error('Failed to load sample:', error)
                            setError('Failed to load sample audio')
                            setState('error')
                          }
                        }}
                      >
                        <PlayCircle className="h-3 w-3 mr-1" />
                        <span className="font-medium">{sample.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">{sample.duration}</span>
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Speed Toggle */}
                  <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
                    <Switch
                      id="nano-mode"
                      checked={useNanoModel}
                      onCheckedChange={setUseNanoModel}
                    />
                    <Label htmlFor="nano-mode" className="flex flex-col">
                      <span className="text-sm font-medium">Fast mode (Nano)</span>
                      <span className="text-xs text-muted-foreground">
                        {useNanoModel ? '3x faster, slightly less accurate' : 'Best accuracy (default)'}
                      </span>
                    </Label>
                  </div>
                </div>
              </>
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
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium">
                          {statusMessage}
                        </p>
                        <span className="text-sm text-muted-foreground">
                          {progress}%
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>
                          {processingTime > 0 && `${processingTime}s elapsed`}
                        </span>
                      </div>
                      {estimatedTime > 0 && processingTime < estimatedTime && (
                        <span>
                          ~{Math.max(0, estimatedTime - processingTime)}s remaining
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Transcript</h3>
                    <div className="flex gap-2">
                      <LanguageSelector
                        onTranslate={handleTranslate}
                        isTranslating={isTranslating}
                      />
                      <Button
                        id="copy-button"
                        size="sm"
                        variant="outline"
                        onClick={copyToClipboard}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>
                  
                  <TranscriptView
                    utterances={utterances}
                    chapters={chapters}
                    fullText={transcript}
                    currentTime={currentPlayTime * 1000}
                    words={allWords}
                  />
                </div>

              </>
            )}

            {/* Usage Indicator */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Daily usage</span>
                <span>{minutesUsed}/{dailyLimit} minutes</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((minutesUsed / dailyLimit) * 100, 100)}%` }}
                />
              </div>
              {minutesUsed >= dailyLimit && (
                <p className="text-xs text-destructive">
                  Daily limit reached. Try again tomorrow.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Sticky Audio Player */}
      {transcript && state === 'complete' && audioUrl && (
        <AudioControls
          audioUrl={audioUrl}
          onTimeUpdate={setCurrentPlayTime}
        />
      )}
    </div>
  )
}