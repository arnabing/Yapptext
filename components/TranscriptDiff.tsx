'use client'

import { DiffSegment } from '@/lib/diff-utils'

interface TranscriptDiffProps {
  segments: DiffSegment[]
  title?: string
}

export function TranscriptDiff({ segments, title }: TranscriptDiffProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      {title && <h4 className="text-sm font-semibold mb-3 text-gray-400">{title}</h4>}
      <div className="font-mono text-sm leading-relaxed">
        {segments.map((segment, i) => {
          switch (segment.type) {
            case 'same':
              return (
                <span key={i} className="text-gray-300">
                  {segment.text}{' '}
                </span>
              )
            case 'added':
              return (
                <span key={i} className="bg-green-900/50 text-green-300 px-1 rounded">
                  {segment.text}{' '}
                </span>
              )
            case 'removed':
              return (
                <span key={i} className="bg-red-900/50 text-red-300 line-through px-1 rounded">
                  {segment.text}{' '}
                </span>
              )
            case 'changed':
              return (
                <span key={i} className="bg-yellow-900/50 text-yellow-300 px-1 rounded">
                  {segment.text}{' '}
                </span>
              )
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}

export function DiffStats({ stats }: { stats: any }) {
  return (
    <div className="flex gap-4 text-sm">
      <span className="text-green-400">+{stats.added} added</span>
      <span className="text-red-400">-{stats.removed} removed</span>
      <span className="text-yellow-400">~{stats.changed} changed</span>
      <span className="text-gray-400">{stats.same} unchanged</span>
      <span className="font-semibold">{stats.changeRate}% change rate</span>
    </div>
  )
}