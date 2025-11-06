'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Download, FileText, File, FileJson, ChevronDown } from 'lucide-react'
import { EmailCaptureModal } from '@/components/auth/EmailCaptureModal'
import { useAuth } from '@clerk/nextjs'

interface TranscriptData {
  text: string
  words?: Array<{
    text: string
    start: number
    end: number
    speaker?: string
  }>
  utterances?: Array<{
    text: string
    speaker: string
    start: number
    end: number
  }>
}

interface DownloadButtonProps {
  transcript: TranscriptData
  filename?: string
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export function DownloadButton({
  transcript,
  filename = 'transcript',
  variant = 'default',
  size = 'default',
  className = '',
}: DownloadButtonProps) {
  const { isSignedIn } = useAuth()
  const [showEmailCapture, setShowEmailCapture] = useState(false)

  const handleDownloadAttempt = (format: string) => {
    // Gate downloads for anonymous users
    if (!isSignedIn) {
      setShowEmailCapture(true)
      return
    }

    // Proceed with download for authenticated users
    downloadTranscript(format)
  }

  const downloadTranscript = (format: string) => {
    let content = ''
    let mimeType = 'text/plain'
    let extension = 'txt'

    switch (format) {
      case 'txt':
        content = generatePlainText(transcript)
        mimeType = 'text/plain'
        extension = 'txt'
        break

      case 'srt':
        content = generateSRT(transcript)
        mimeType = 'text/srt'
        extension = 'srt'
        break

      case 'vtt':
        content = generateVTT(transcript)
        mimeType = 'text/vtt'
        extension = 'vtt'
        break

      case 'json':
        content = JSON.stringify(transcript, null, 2)
        mimeType = 'application/json'
        extension = 'json'
        break
    }

    // Create and download file
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}.${extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={size} className={className}>
            <Download className="h-4 w-4 mr-2" />
            Download
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleDownloadAttempt('txt')}>
            <FileText className="h-4 w-4 mr-2" />
            Plain Text (.txt)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownloadAttempt('srt')}>
            <File className="h-4 w-4 mr-2" />
            Subtitles (.srt)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownloadAttempt('vtt')}>
            <File className="h-4 w-4 mr-2" />
            WebVTT (.vtt)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownloadAttempt('json')}>
            <FileJson className="h-4 w-4 mr-2" />
            JSON (.json)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EmailCaptureModal
        open={showEmailCapture}
        onOpenChange={setShowEmailCapture}
        trigger="download-attempt"
      />
    </>
  )
}

// Helper functions to generate different formats

function generatePlainText(transcript: TranscriptData): string {
  if (transcript.utterances) {
    return transcript.utterances
      .map(utt => `${utt.speaker}: ${utt.text}`)
      .join('\n\n')
  }
  return transcript.text
}

function generateSRT(transcript: TranscriptData): string {
  if (!transcript.utterances && !transcript.words) {
    // Fallback: create single subtitle with full text
    return '1\n00:00:00,000 --> 00:00:10,000\n' + transcript.text
  }

  let srt = ''
  const items = transcript.utterances || []

  items.forEach((item, index) => {
    const startTime = formatTimeSRT(item.start)
    const endTime = formatTimeSRT(item.end)
    const text = item.speaker ? `${item.speaker}: ${item.text}` : item.text

    srt += `${index + 1}\n${startTime} --> ${endTime}\n${text}\n\n`
  })

  return srt
}

function generateVTT(transcript: TranscriptData): string {
  let vtt = 'WEBVTT\n\n'

  if (!transcript.utterances && !transcript.words) {
    // Fallback
    vtt += '00:00:00.000 --> 00:00:10.000\n' + transcript.text
    return vtt
  }

  const items = transcript.utterances || []

  items.forEach(item => {
    const startTime = formatTimeVTT(item.start)
    const endTime = formatTimeVTT(item.end)
    const text = item.speaker ? `<v ${item.speaker}>${item.text}` : item.text

    vtt += `${startTime} --> ${endTime}\n${text}\n\n`
  })

  return vtt
}

function formatTimeSRT(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)
  const ms = Math.floor((seconds % 1) * 1000)

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)},${pad(ms, 3)}`
}

function formatTimeVTT(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)
  const ms = Math.floor((seconds % 1) * 1000)

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}.${pad(ms, 3)}`
}

function pad(num: number, size: number = 2): string {
  return String(num).padStart(size, '0')
}
