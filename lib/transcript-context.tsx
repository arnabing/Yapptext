'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export type TranscriptData = {
  id?: string
  title?: string
  text: string
  fileName: string
  duration: number
  audioUrl: string
  utterances: any[]
  chapters: any[]
  words: any[]
} | null

type TranscriptContextType = {
  transcriptData: TranscriptData
  setTranscriptData: (data: TranscriptData) => void
  clearTranscriptData: () => void
}

const TranscriptContext = createContext<TranscriptContextType | null>(null)

export function TranscriptProvider({ children }: { children: ReactNode }) {
  const [transcriptData, setTranscriptDataState] = useState<TranscriptData>(null)

  const setTranscriptData = useCallback((data: TranscriptData) => {
    setTranscriptDataState(data)
    // Also update sessionStorage for persistence across page reloads
    if (data && typeof window !== 'undefined') {
      sessionStorage.setItem('demoTranscript', JSON.stringify(data))
    }
  }, [])

  const clearTranscriptData = useCallback(() => {
    setTranscriptDataState(null)
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('demoTranscript')
    }
  }, [])

  return (
    <TranscriptContext.Provider value={{ transcriptData, setTranscriptData, clearTranscriptData }}>
      {children}
    </TranscriptContext.Provider>
  )
}

export function useTranscriptContext() {
  const context = useContext(TranscriptContext)
  if (!context) {
    throw new Error('useTranscriptContext must be used within TranscriptProvider')
  }
  return context
}
