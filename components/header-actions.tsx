"use client"

import { useHeader } from "@/lib/header-context"

export function HeaderActions() {
  const { headerActions } = useHeader()

  if (!headerActions) {
    return null
  }

  return <div className="ml-auto flex gap-2">{headerActions}</div>
}
