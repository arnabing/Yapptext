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
  // Return safe defaults if provider is not available (e.g., on landing page)
  if (!context) {
    return {
      headerActions: null,
      setHeaderActions: () => {}
    }
  }
  return context
}
