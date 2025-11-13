"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface HeaderContextProps {
  headerActions: ReactNode
  setHeaderActions: (actions: ReactNode) => void
}

const HeaderContext = createContext<HeaderContextProps | null>(null)

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [headerActions, setHeaderActions] = useState<ReactNode>(null)

  return (
    <HeaderContext.Provider value={{ headerActions, setHeaderActions }}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeader() {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider.")
  }
  return context
}
