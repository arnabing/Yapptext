'use client'

import { useEffect, useMemo, useState } from 'react'
import { diffTexts, diffStats, findImprovements } from '@/lib/diff-utils'
import { TranscriptDiff, DiffStats } from '@/components/TranscriptDiff'

export default function TestTranscriptionPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [testType, setTestType] = useState<'benchmark' | 'homer'>('homer')
  const [contextWindow, setContextWindow] = useState(true)
  const [confThreshold, setConfThreshold] = useState(0.85)
  const [glossary, setGlossary] = useState(true)
  const [expLabel, setExpLabel] = useState('')
  const [reference, setReference] = useState<'none' | 'homer_short' | 'lil_wayne'>('none')
  const [referenceData, setReferenceData] = useState<any | null>(null)
  const [referenceError, setReferenceError] = useState<string | null>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [useShort, setUseShort] = useState(false)
  // Static Compare state
  const [staticCandidates, setStaticCandidates] = useState<Array<{ label: string, text: string }>>([])
  const [candidateLabel, setCandidateLabel] = useState('Candidate 1')
  const [candidateRaw, setCandidateRaw] = useState('')
  const [candidateError, setCandidateError] = useState<string | null>(null)

  async function loadReference(ref: 'homer_short' | 'lil_wayne') {
    try {
      setReferenceError(null)
      const url = ref === 'homer_short'
        ? '/samples/homer_short.draft.json'
        : '/samples/lil_wayne_deposition.draft.json'
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Failed to load reference: ${res.status}`)
      const json = await res.json()
      setReferenceData(json)
    } catch (e:any) {
      setReferenceData(null)
      setReferenceError(e.message)
    }
  }

  useEffect(() => {
    if (reference === 'none') { setReferenceData(null); return }
    loadReference(reference)
  }, [reference])

  // Auto-enable short clip when Homer (short) reference is selected
  useEffect(() => {
    setUseShort(reference === 'homer_short')
  }, [reference])

  function extractTextFromMaybeJson(raw: string): string {
    try {
      const obj = JSON.parse(raw)
      if (obj && typeof obj === 'object') {
        if (Array.isArray(obj.utterances)) {
          return obj.utterances.map((u: any) => u.text).join(' ')
        }
        if (typeof obj.text === 'string') return obj.text
      }
    } catch {}
    return raw
  }

  function onAddStaticCandidate() {
    setCandidateError(null)
    const text = extractTextFromMaybeJson(candidateRaw).trim()
    if (!referenceData) {
      setCandidateError('Select a reference first')
      return
    }
    if (!text) {
      setCandidateError('Paste transcript text or JSON first')
      return
    }
    const label = candidateLabel.trim() || `Candidate ${staticCandidates.length + 1}`
    setStaticCandidates(prev => [...prev, { label, text }])
    setCandidateRaw('')
    setCandidateLabel(`Candidate ${staticCandidates.length + 2}`)
  }

  async function onLoadCandidateFile(file: File) {
    try {
      setCandidateError(null)
      const text = await file.text()
      const extracted = extractTextFromMaybeJson(text).trim()
      if (!extracted) {
        setCandidateError('Could not extract text from file')
        return
      }
      const label = file.name.replace(/\.(json|txt)$/i, '')
      setStaticCandidates(prev => [...prev, { label, text: extracted }])
    } catch (e: any) {
      setCandidateError(e.message || 'Failed to load file')
    }
  }

  // --- Local WER + gating helpers (reference-only, no timestamps needed) ---
  function tokenizeWords(s: string): string[] {
    return s
      .toLowerCase()
      .replace(/[^a-z0-9'\-\s]+/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
  }

  function computeWER(ref: string, cand: string) {
    const r = tokenizeWords(ref)
    const h = tokenizeWords(cand)
    const R = r.length
    const H = h.length
    // DP edit distance
    const dp: number[][] = Array.from({ length: R + 1 }, () => Array(H + 1).fill(0))
    for (let i = 0; i <= R; i++) dp[i][0] = i
    for (let j = 0; j <= H; j++) dp[0][j] = j
    for (let i = 1; i <= R; i++) {
      for (let j = 1; j <= H; j++) {
        const cost = r[i - 1] === h[j - 1] ? 0 : 1
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,         // deletion
          dp[i][j - 1] + 1,         // insertion
          dp[i - 1][j - 1] + cost   // substitution
        )
      }
    }
    const edits = dp[R][H]
    const wer = R === 0 ? 0 : edits / R
    return { wer, werPercent: wer * 100 }
  }

  function gatesFor(refText: string, candText: string) {
    const refLower = refText.toLowerCase()
    const candLower = candText.toLowerCase()
    const refDoh = (refLower.match(/\bd['’]?oh!?/g) || []).length
    const candDoh = (candLower.match(/\bd['’]?oh!?/g) || []).length
    const tp = Math.min(candDoh, refDoh)
    const fp = Math.max(0, candDoh - refDoh)
    const fn = Math.max(0, refDoh - candDoh)
    const idiomOk = refLower.includes("don't panic") ? candLower.includes("don't panic") : true
    const ratio = refText.length ? (candText.length / refText.length) : 1
    const boundsOk = ratio >= 0.85 && ratio <= 1.15
    const dohOk = (fn === 0 && fp === 0)
    const pass = dohOk && idiomOk && boundsOk
    return { pass, tp, fp, fn, idiomOk, ratio, boundsOk }
  }

  const runTest = async () => {
    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const params = new URLSearchParams()
      if (testType === 'homer') {
        params.set('contextWindow', contextWindow ? '1' : '0')
        params.set('confThreshold', String(confThreshold))
        params.set('glossary', glossary ? '1' : '0')
        if (useShort) params.set('short', '1')
        if (expLabel.trim().length > 0) params.set('expLabel', expLabel.trim())
      }
      const endpoint = testType === 'homer' ? `/api/test-homer?${params.toString()}` : '/api/benchmark-transcribe'
      const response = await fetch(endpoint)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Test failed')
      }

      setResults(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Transcription Accuracy Testing</h1>
        <p className="text-gray-400 mb-4">
          {testType === 'homer'
            ? "🍩 Homer Simpson Best Moments (13.4MB) - Testing catchphrase preservation"
            : "🎬 Pulp Fiction (7.5MB) - General benchmark test"}
        </p>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setTestType('homer')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              testType === 'homer'
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            🍩 Homer Simpson Test
          </button>
          <button
            onClick={() => setTestType('benchmark')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              testType === 'benchmark'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            🎬 Pulp Fiction Benchmark
          </button>
        </div>

        {/* Reference selector */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3 text-sm">Reference (gold) selection</h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="ref" checked={reference==='none'} onChange={() => setReference('none')} />
              <span>No reference</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="ref" checked={reference==='homer_short'} onChange={() => setReference('homer_short')} />
              <span>Homer (short)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="ref" checked={reference==='lil_wayne'} onChange={() => setReference('lil_wayne')} />
              <span>Lil Wayne deposition</span>
            </label>
            {referenceData && (
              <span className="text-gray-400">• {referenceData.utterances?.length || 0} utt • {referenceData.speakers?.length || 0} speakers</span>
            )}
            {referenceError && (
              <span className="text-red-400">{referenceError}</span>
            )}
            {/* Use short clip toggle for Homer tests */}
            {testType === 'homer' && (
              <label className="flex items-center gap-2 ml-auto">
                <input
                  type="checkbox"
                  checked={useShort}
                  onChange={(e) => setUseShort(e.target.checked)}
                />
                <span>Use short clip (Homer)</span>
              </label>
            )}
          </div>
        </div>

        {/* Static Compare (no re-run) */}
        {reference !== 'none' && referenceData && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">Static Compare (paste or upload transcripts, no API run)</h3>
              <div className="text-xs text-gray-400">Reference: {reference === 'homer_short' ? 'Homer (short)' : 'Lil Wayne deposition'}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs text-gray-400 mb-1">Paste transcript text or JSON</label>
                <textarea
                  value={candidateRaw}
                  onChange={e => setCandidateRaw(e.target.value)}
                  className="w-full h-28 bg-gray-900 border border-gray-700 rounded p-2 text-sm"
                  placeholder="Paste full transcript text, or JSON with { utterances: [{ text }] } or { text }"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Label</label>
                  <input
                    value={candidateLabel}
                    onChange={e => setCandidateLabel(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm"
                    placeholder="e.g., Confidence-Weighted (saved)"
                  />
                </div>
                <button
                  onClick={onAddStaticCandidate}
                  className="bg-green-700 hover:bg-green-600 px-3 py-2 rounded text-sm font-semibold"
                >Add Candidate</button>
                <div className="text-xs text-gray-400">or upload JSON/TXT:</div>
                <input
                  type="file"
                  accept=".json,.txt"
                  onChange={e => { const f = e.target.files?.[0]; if (f) onLoadCandidateFile(f) }}
                  className="text-xs"
                />
                {candidateError && <div className="text-xs text-red-400">{candidateError}</div>}
              </div>
            </div>

            {staticCandidates.length > 0 && (
              <div className="mt-4 overflow-x-auto">
                {(() => {
                  const refText: string = (referenceData.utterances || []).map((u: any) => u.text).join(' ')
                  const ranked = staticCandidates.map(c => {
                    const { wer, werPercent } = computeWER(refText, c.text)
                    const g = gatesFor(refText, c.text)
                    return { ...c, wer, werPercent, ...g }
                  })
                  const passers = ranked.filter(r => r.pass)
                  const winner = passers.sort((a, b) => a.wer - b.wer)[0]
                  return (
                    <>
                      {winner && (
                        <div className="mb-3 p-2 bg-green-900/30 border border-green-600 rounded text-xs">
                          <span className="text-green-300 font-semibold">Static Winner:</span>
                          <span className="ml-2">{winner.label}</span>
                          <span className="ml-3 text-gray-300">WER {winner.werPercent.toFixed(1)}%</span>
                        </div>
                      )}
                      <table className="w-full text-xs">
                        <thead className="text-gray-400">
                          <tr>
                            <th className="text-left p-2">Candidate</th>
                            <th className="text-right p-2">WER %</th>
                            <th className="text-center p-2">Pass</th>
                            <th className="text-right p-2">D’oh TP</th>
                            <th className="text-right p-2">FP</th>
                            <th className="text-right p-2">FN</th>
                            <th className="text-center p-2">Idiom</th>
                            <th className="text-right p-2">Dup n-grams</th>
                            <th className="text-right p-2">Len ratio</th>
                            <th className="text-center p-2">Bounds</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ranked.map((c) => {
                            const refLower = refText.toLowerCase()
                            const refDoh = (refLower.match(/\bd['’]?oh!?/g) || []).length
                            const candLower = c.text.toLowerCase()
                            const candDoh = (candLower.match(/\bd['’]?oh!?/g) || []).length
                            const tp = Math.min(candDoh, refDoh)
                            const fp = Math.max(0, candDoh - refDoh)
                            const fn = Math.max(0, refDoh - candDoh)
                            const hasIdiomRef = refLower.includes("don't panic")
                            const idiomOk = hasIdiomRef ? candLower.includes("don't panic") : true
                            const single = (c.text.match(/\b(\w+)\s+\1\b/gi) || []).length
                            const bigram = (c.text.match(/\b(\w+\s+\w+)\s+\1\b/gi) || []).length
                            const dups = single + bigram
                            const ratio = refText.length ? (c.text.length / refText.length) : 1
                            const outOfBounds = ratio < 0.85 || ratio > 1.15
                            return (
                              <tr key={c.label} className={`border-t border-gray-700 ${winner && winner.label === c.label ? 'bg-green-900/10' : ''}`}>
                                <td className="p-2">{c.label}</td>
                                <td className="p-2 text-right">{c.werPercent.toFixed(1)}</td>
                                <td className="p-2 text-center">{c.pass ? '✓' : '✗'}</td>
                                <td className="p-2 text-right text-green-400">{tp}</td>
                                <td className="p-2 text-right text-yellow-400">{fp}</td>
                                <td className="p-2 text-right text-red-400">{fn}</td>
                                <td className="p-2 text-center">{idiomOk ? '✓' : '✗'}</td>
                                <td className="p-2 text-right">{dups}</td>
                                <td className="p-2 text-right">{ratio.toFixed(2)}</td>
                                <td className="p-2 text-center">{outOfBounds ? '✗' : '✓'}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </>
                  )
                })()}
              </div>
            )}
          </div>
        )}

        {/* Controls for Homer experiments (hidden by default, sensible defaults applied) */}
        {testType === 'homer' && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm">Experiment Controls</h3>
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-xs px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
              >
                {showAdvanced ? 'Hide Advanced' : 'Show Advanced'}
              </button>
            </div>
            {!showAdvanced && (
              <p className="text-xs text-gray-400">Defaults: context ON, glossary ON, confThreshold 0.85</p>
            )}
            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mt-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={contextWindow}
                    onChange={(e) => setContextWindow(e.target.checked)}
                  />
                  <span>Use context window (prev/next)</span>
                </label>

                <div>
                  <label className="block text-gray-400 mb-1">Confidence threshold (AssemblyAI)</label>
                  <input
                    type="range"
                    min={0.3}
                    max={0.9}
                    step={0.05}
                    value={confThreshold}
                    onChange={(e) => setConfThreshold(parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-gray-400 mt-1">{confThreshold.toFixed(2)}</div>
                </div>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={glossary}
                    onChange={(e) => setGlossary(e.target.checked)}
                  />
                  <span>Glossary normalization (names/catchphrases)</span>
                </label>

                <div>
                  <label className="block text-gray-400 mb-1">Experiment label</label>
                  <input
                    type="text"
                    placeholder="e.g., ctx+conf0.85+gloss"
                    value={expLabel}
                    onChange={(e) => setExpLabel(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <button
          onClick={runTest}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed px-6 py-3 rounded-lg font-semibold mb-8 transition-colors"
        >
          {loading ? `Running ${testType === 'homer' ? 'Homer' : 'Benchmark'} Test...` : `Run ${testType === 'homer' ? 'Homer Simpson' : 'Benchmark'} Test`}
        </button>

        {error && (
          <div className="bg-red-900/50 border border-red-600 rounded-lg p-4 mb-8">
            <h3 className="font-semibold mb-2">Error</h3>
            <p>{error}</p>
          </div>
        )}

        {results && (
          <div className="space-y-8">
            {/* WER Rankings Table */}
            {results.summary?.hasReference && results.reconciliations && Array.isArray(results.reconciliations) && (
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-2 border-green-500 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <span>🏆</span>
                  <span>WER Rankings</span>
                  <span className="text-sm font-normal text-gray-400">(Lower is Better)</span>
                </h2>
                <p className="text-sm text-gray-400 mb-4">
                  Word Error Rate measures transcription accuracy. Best strategy shown in green.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-900/50">
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 font-semibold">Rank</th>
                        <th className="text-left p-3 font-semibold">Strategy</th>
                        <th className="text-right p-3 font-semibold">WER %</th>
                        <th className="text-center p-3 font-semibold">Grade</th>
                        <th className="text-right p-3 font-semibold">D'oh! Found</th>
                        <th className="text-right p-3 font-semibold">Time (ms)</th>
                        <th className="text-right p-3 font-semibold">Words</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.reconciliations
                        .filter((r: any) => r.wer !== null && r.wer !== undefined)
                        .sort((a: any, b: any) => a.wer.wer - b.wer.wer)
                        .map((strategy: any, index: number) => {
                          const isWinner = index === 0
                          const gradeColor =
                            strategy.werGrade?.color === 'green' ? 'text-green-400' :
                            strategy.werGrade?.color === 'blue' ? 'text-blue-400' :
                            strategy.werGrade?.color === 'yellow' ? 'text-yellow-400' :
                            strategy.werGrade?.color === 'orange' ? 'text-orange-400' :
                            'text-red-400'

                          return (
                            <tr
                              key={strategy.method}
                              className={`border-t border-gray-700 ${isWinner ? 'bg-green-900/20' : ''}`}
                            >
                              <td className="p-3">
                                {isWinner && <span className="text-2xl">🥇</span>}
                                {index === 1 && <span className="text-2xl">🥈</span>}
                                {index === 2 && <span className="text-2xl">🥉</span>}
                                {index > 2 && <span className="text-gray-500">#{index + 1}</span>}
                              </td>
                              <td className={`p-3 ${isWinner ? 'font-bold text-green-300' : ''}`}>
                                {strategy.method}
                              </td>
                              <td className={`p-3 text-right font-mono ${isWinner ? 'text-green-400 font-bold text-lg' : ''}`}>
                                {strategy.wer.werPercent.toFixed(1)}%
                              </td>
                              <td className={`p-3 text-center font-bold ${gradeColor}`}>
                                {strategy.werGrade?.grade}
                              </td>
                              <td className="p-3 text-right">
                                {strategy.wer.interjectionStats?.dohInCandidate || 0}
                                {strategy.wer.interjectionStats && (
                                  <span className="text-xs text-gray-500 ml-1">
                                    /{strategy.wer.interjectionStats.dohInReference}
                                  </span>
                                )}
                              </td>
                              <td className="p-3 text-right text-gray-400">{strategy.time}</td>
                              <td className="p-3 text-right text-gray-400">{strategy.wordCount}</td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
                {results.summary.bestByWER && (
                  <div className="mt-4 p-4 bg-green-900/30 border border-green-600 rounded">
                    <p className="text-green-300 font-semibold">
                      ✨ Winner: <span className="text-white">{results.summary.bestByWER}</span> with {results.summary.bestWERScore?.toFixed(1)}% WER
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Metrics vs reference */}
            {reference !== 'none' && referenceData && results?.reconciliations && Array.isArray(results.reconciliations) && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Metrics vs Reference</h2>
                <p className="text-xs text-gray-400 mb-3">Reference: {reference === 'homer_short' ? 'Homer (short)' : 'Lil Wayne deposition'}</p>
                {(() => {
                  const refText: string = (referenceData.utterances || []).map((u: any) => u.text).join(' ')
                  const refLower = refText.toLowerCase()
                  const refDoh = (refLower.match(/\bd['’]?oh!?/g) || []).length
                  const hasIdiomRef = refLower.includes("don't panic")
                  const properNouns = reference === 'lil_wayne' ? [
                    'katie couric', 'carter 3', 'virgin mobile'
                  ] : []

                  function dupCount(s: string): number {
                    const single = (s.match(/\b(\w+)\s+\1\b/gi) || []).length
                    const bigram = (s.match(/\b(\w+\s+\w+)\s+\1\b/gi) || []).length
                    return single + bigram
                  }

                  function lenRatio(cand: string): number {
                    if (!refText.length) return 1
                    return cand.length / refText.length
                  }

                  const enriched = results.reconciliations.map((r: any) => {
                    const candText: string = r.text || ''
                    const candLower = candText.toLowerCase()
                    const candDoh = (candLower.match(/\bd['’]?oh!?/g) || []).length
                    const tp = Math.min(candDoh, refDoh)
                    const fp = Math.max(0, candDoh - refDoh)
                    const fn = Math.max(0, refDoh - candDoh)
                    const idiomOk = hasIdiomRef ? candLower.includes("don't panic") : true
                    const dups = dupCount(candText)
                    const ratio = lenRatio(candText)
                    const outOfBounds = ratio < 0.85 || ratio > 1.15
                    const properHits = properNouns.map(p => ({ p, ok: candLower.includes(p) }))
                    const { wer, werPercent } = computeWER(refText, candText)
                    const { pass } = gatesFor(refText, candText)
                    return { method: r.method, tp, fp, fn, idiomOk, dups, ratio, outOfBounds, properHits, wer, werPercent, pass }
                  })
                  const passers = enriched.filter((x: any) => x.pass)
                  const winner = passers.sort((a: any, b: any) => a.wer - b.wer)[0]

                  return (
                    <div className="overflow-x-auto">
                      {winner && (
                        <div className="mb-3 p-2 bg-green-900/30 border border-green-600 rounded text-xs">
                          <span className="text-green-300 font-semibold">Winner:</span>
                          <span className="ml-2">{winner.method}</span>
                          <span className="ml-3 text-gray-300">WER {winner.werPercent.toFixed(1)}%</span>
                        </div>
                      )}
                      <table className="w-full text-xs">
                        <thead className="text-gray-400">
                          <tr>
                            <th className="text-left p-2">Method</th>
                            <th className="text-right p-2">WER %</th>
                            <th className="text-center p-2">Pass</th>
                            <th className="text-right p-2">D’oh TP</th>
                            <th className="text-right p-2">FP</th>
                            <th className="text-right p-2">FN</th>
                            <th className="text-center p-2">Idiom</th>
                            <th className="text-right p-2">Dup n-grams</th>
                            <th className="text-right p-2">Len ratio</th>
                            <th className="text-center p-2">Bounds</th>
                            {reference === 'lil_wayne' && <th className="text-left p-2">Proper nouns</th>}
                          </tr>
                        </thead>
                        <tbody>
                          {enriched.map((row: any) => (
                            <tr key={row.method} className={`border-t border-gray-700 ${winner && winner.method === row.method ? 'bg-green-900/10' : ''}`}>
                              <td className="p-2">{row.method}</td>
                              <td className="p-2 text-right">{row.werPercent.toFixed(1)}</td>
                              <td className="p-2 text-center">{row.pass ? '✓' : '✗'}</td>
                              <td className="p-2 text-right text-green-400">{row.tp}</td>
                              <td className="p-2 text-right text-yellow-400">{row.fp}</td>
                              <td className="p-2 text-right text-red-400">{row.fn}</td>
                              <td className="p-2 text-center">{row.idiomOk ? '✓' : '✗'}</td>
                              <td className="p-2 text-right">{row.dups}</td>
                              <td className="p-2 text-right">{row.ratio.toFixed(2)}</td>
                              <td className="p-2 text-center">{row.outOfBounds ? '✗' : '✓'}</td>
                              {reference === 'lil_wayne' && (
                                <td className="p-2 text-left">
                                  {row.properHits.map((h: any) => (
                                    <span key={h.p} className={`mr-2 ${h.ok ? 'text-green-400' : 'text-red-400'}`}>{h.p}</span>
                                  ))}
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                })()}
              </div>
            )}
            {/* Summary */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>

              {/* Homer Test Summary */}
              {testType === 'homer' && results.summary && (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">Models Run</p>
                      <p className="text-2xl font-bold">{results.summary.modelsRun}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Strategies Tested</p>
                      <p className="text-2xl font-bold text-blue-400">{results.summary.strategiesTested}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Transcription Time</p>
                      <p className="text-2xl font-bold">{(results.summary.transcriptionTime / 1000).toFixed(1)}s</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Best for "D'oh!"</p>
                      <p className="text-lg font-bold text-yellow-400">{results.summary.bestForDoh || 'None'}</p>
                    </div>
                  </div>
                  {results.summary.context && (
                    <div className="bg-gray-700 rounded p-3 mb-4">
                      <p className="text-sm text-gray-400">Gemini Context Analysis:</p>
                      <p className="text-white italic">"{results.summary.context}"</p>
                    </div>
                  )}
                </>
              )}

              {/* Regular Benchmark Summary */}
              {testType === 'benchmark' && results.summary && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Total Models</p>
                    <p className="text-2xl font-bold">{results.summary.totalModels}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Successful</p>
                    <p className="text-2xl font-bold text-green-400">{results.summary.successfulModels}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Failed</p>
                    <p className="text-2xl font-bold text-red-400">{results.summary.failedModels}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Total Time</p>
                    <p className="text-2xl font-bold">{(results.summary.totalProcessingTime / 1000).toFixed(1)}s</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Avg Time</p>
                    <p className="text-2xl font-bold">{(results.summary.averageProcessingTime / 1000).toFixed(1)}s</p>
                  </div>
                </div>
              )}
              
              {/* Quick Comparison */}
              {results.models.filter((m: any) => m.status === 'success').length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Model Performance</h3>
                  <div className="space-y-2">
                    {results.models
                      .filter((m: any) => m.status === 'success')
                      .sort((a: any, b: any) => b.wordCount - a.wordCount)
                      .map((model: any) => (
                        <div key={model.model} className="flex items-center justify-between text-sm">
                          <span className="font-mono">{model.model}</span>
                          <div className="flex gap-4">
                            <span className="text-green-400">{model.wordCount} words</span>
                            <span className="text-blue-400">{model.fullText?.length || 0} chars</span>
                            {model.speakerCount > 0 && (
                              <span className="text-purple-400">{model.speakerCount} speakers</span>
                            )}
                          </div>
                        </div>
                      ))}
                    {results.reconciliation && (
                      <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-700 mt-2">
                        <span className="font-mono font-bold text-purple-400">Reconciled (Best)</span>
                        <div className="flex gap-4">
                          <span className="text-green-400 font-bold">{results.reconciliation.wordCount} words</span>
                          <span className="text-blue-400 font-bold">{results.reconciliation.text?.length || 0} chars</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Homer Test: Reconciliation Strategies Comparison */}
            {testType === 'homer' && results.reconciliations && (
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-600 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">🔬 Reconciliation Strategies Comparison</h2>
                <div className="space-y-4">
                  {results.reconciliations
                    .sort((a: any, b: any) => b.dohCount - a.dohCount)
                    .map((strategy: any, index: number) => (
                    <div key={strategy.method} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold flex items-center gap-2">
                          {index === 0 && <span className="text-yellow-400">🏆</span>}
                          {strategy.method}
                        </h3>
                        <div className="flex gap-4 text-sm">
                          <span className={`font-bold ${
                            strategy.hasDoh ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {strategy.hasDoh ? `✓ ${strategy.dohCount} "D'oh!"s` : '✗ No "D\'oh!"'}
                          </span>
                          <span className="text-blue-400">{strategy.time}ms</span>
                          <span className="text-gray-400">{strategy.wordCount} words</span>
                        </div>
                      </div>

                      {strategy.improvementMetrics && (
                        <div className="flex gap-4 text-xs text-gray-400 mb-2">
                          <span>Disagreements: {strategy.improvementMetrics.disagreements}</span>
                          <span>Corrections: {strategy.improvementMetrics.corrections}</span>
                          <span>Confidence: {strategy.improvementMetrics.confidenceScore}%</span>
                        </div>
                      )}

                      <div className="bg-gray-900 rounded p-3">
                        <p className="text-gray-300 font-mono text-sm">
                          {strategy.first500Chars}
                          {strategy.text?.length > 500 && '...'}
                        </p>
                      </div>

                      <details className="mt-2 cursor-pointer">
                        <summary className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">Show full {strategy.method} transcript ({strategy.text?.length || 0} characters)</summary>
                        <div className="mt-2 bg-gray-900 rounded p-3 max-h-96 overflow-y-auto">
                          <pre className="text-gray-300 font-mono text-xs whitespace-pre-wrap">{strategy.text}</pre>
                        </div>
                      </details>

                      {/* Highlight D'oh occurrences */}
                      {strategy.hasDoh && (
                        <div className="mt-2 text-xs">
                          <span className="text-yellow-400">D'oh! locations: </span>
                          <span className="text-gray-400">
                            {strategy.text?.match(/[Dd]'?oh!?/g)?.join(', ') || 'None found'}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Model Results */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Model Results</h2>
              <div className="space-y-4">
                {results.models?.map((model: any) => (
                  <div key={model.model} className="border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold flex items-center gap-2">
                        {model.status === 'success' ? (
                          <span className="text-green-400">✓</span>
                        ) : (
                          <span className="text-red-400">✗</span>
                        )}
                        {model.model}
                      </h3>
                      {model.status === 'success' && (
                        <div className="flex gap-4 text-sm text-gray-400">
                          <span>{model.wordCount} words</span>
                          <span>{model.processingTime ? `${(model.processingTime / 1000).toFixed(1)}s` : 'N/A'}</span>
                          {model.hasSpeakers && <span className="text-blue-400">👥 {model.speakerCount} speakers</span>}
                          {model.hasWordTimestamps && <span className="text-purple-400">⏱️ timestamps</span>}
                        </div>
                      )}
                    </div>
                    
                    {model.status === 'success' ? (
                      <div>
                        <div className="bg-gray-900 rounded p-3 mb-2">
                          <p className="text-gray-300 font-mono text-sm">{model.first300Chars}...</p>
                        </div>
                        <details className="cursor-pointer">
                          <summary className="text-blue-400 hover:text-blue-300 text-sm">Show full transcript ({model.fullText?.length || 0} characters)</summary>
                          <div className="mt-2 bg-gray-900 rounded p-3 max-h-96 overflow-y-auto">
                            <pre className="text-gray-300 font-mono text-xs whitespace-pre-wrap">{model.fullText}</pre>
                          </div>
                        </details>
                      </div>
                    ) : (
                      <div className="bg-red-900/30 rounded p-3">
                        <p className="text-red-400 text-sm">{model.error}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reconciliation Comparison */}
            {results.reconciliation && (
              <div className="space-y-4">
                {/* GPT Reconciliation */}
                {results.reconciliation.gpt && (
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-600 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">🔮 GPT-4o-mini Reconciliation</h2>
                    <div className="mb-4">
                      <div className="flex gap-4 text-sm text-gray-400 mb-3">
                        <span className="text-yellow-400">Time: {results.reconciliation.gpt.processingTime}ms</span>
                        <span>Words: {results.reconciliation.gpt.wordCount}</span>
                        <span>Characters: {results.reconciliation.gpt.text?.length || 0}</span>
                        <span>Sources: {results.reconciliation.gpt.sourcesUsed?.join(', ')}</span>
                      </div>
                      {results.reconciliation.gpt.improvementMetrics && (
                        <div className="flex gap-4 text-sm mb-3">
                          <span>Disagreements: {results.reconciliation.gpt.improvementMetrics.disagreements}</span>
                          <span>Corrections: {results.reconciliation.gpt.improvementMetrics.corrections}</span>
                          <span>Confidence: {results.reconciliation.gpt.improvementMetrics.confidenceScore}%</span>
                        </div>
                      )}
                      <div className="bg-gray-900 rounded p-3 font-mono text-sm mb-2">
                        <p className="text-gray-300">{results.reconciliation.gpt.first300Chars}...</p>
                      </div>
                      <details className="cursor-pointer">
                        <summary className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                          Show full GPT transcript ({results.reconciliation.gpt.text?.length || 0} characters)
                        </summary>
                        <div className="mt-2 bg-gray-900 rounded p-3 max-h-96 overflow-y-auto">
                          <pre className="text-gray-300 font-mono text-xs whitespace-pre-wrap">{results.reconciliation.gpt.text}</pre>
                        </div>
                      </details>
                    </div>
                  </div>
                )}

                {/* Voting Reconciliation */}
                {results.reconciliation.voting && (
                  <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-600 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">🗳️ Majority Voting Reconciliation</h2>
                    <div className="mb-4">
                      <div className="flex gap-4 text-sm text-gray-400 mb-3">
                        <span className="text-green-400 font-bold">Time: {results.reconciliation.voting.processingTime}ms</span>
                        <span>Words: {results.reconciliation.voting.wordCount}</span>
                        <span>Characters: {results.reconciliation.voting.text?.length || 0}</span>
                        <span>Method: {results.reconciliation.voting.method}</span>
                      </div>
                      {results.reconciliation.voting.improvementMetrics && (
                        <div className="flex gap-4 text-sm mb-3">
                          <span>Disagreements: {results.reconciliation.voting.improvementMetrics.disagreements}</span>
                          <span>Improvements: {results.reconciliation.voting.improvementMetrics.corrections}</span>
                          <span>Agreement: {results.reconciliation.voting.improvementMetrics.confidenceScore}%</span>
                        </div>
                      )}
                      <div className="bg-gray-900 rounded p-3 font-mono text-sm mb-2">
                        <p className="text-gray-300">{results.reconciliation.voting.first300Chars}...</p>
                      </div>
                      <details className="cursor-pointer">
                        <summary className="text-green-400 hover:text-green-300 text-sm font-semibold">
                          Show full voting transcript ({results.reconciliation.voting.text?.length || 0} characters)
                        </summary>
                        <div className="mt-2 bg-gray-900 rounded p-3 max-h-96 overflow-y-auto">
                          <pre className="text-gray-300 font-mono text-xs whitespace-pre-wrap">{results.reconciliation.voting.text}</pre>
                        </div>
                      </details>
                    </div>
                  </div>
                )}

                {/* Comparison */}
                {results.reconciliation.gpt && results.reconciliation.voting && (
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">⚖️ Method Comparison</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">GPT-4o-mini</h4>
                        <ul className="text-sm space-y-1">
                          <li>⏱️ Time: {results.reconciliation.gpt.processingTime}ms</li>
                          <li>📝 Length: {results.reconciliation.gpt.text?.length || 0} chars</li>
                          <li>🔧 Corrections: {results.reconciliation.gpt.improvementMetrics?.corrections || 0}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2">Voting</h4>
                        <ul className="text-sm space-y-1">
                          <li>⏱️ Time: {results.reconciliation.voting.processingTime}ms 
                            <span className="text-green-400 ml-2">
                              ({Math.round(results.reconciliation.voting.processingTime * 100 / results.reconciliation.gpt.processingTime)}% of GPT)
                            </span>
                          </li>
                          <li>📝 Length: {results.reconciliation.voting.text?.length || 0} chars</li>
                          <li>🔧 Improvements: {results.reconciliation.voting.improvementMetrics?.corrections || 0}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Speaker-aware Reconciled Views (AssemblyAI skeleton) */}
            {testType === 'homer' && results.models && (
              (() => {
                const assembly = results.models.find((m: any) => m.model.includes('AssemblyAI') && m.status === 'success')
                if (!assembly || !assembly.utterances) return null
                const utterances = assembly.utterances
                const methods: any[] = []
                if (results.reconciliations && Array.isArray(results.reconciliations)) {
                  methods.push(...results.reconciliations)
                }
                return (
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Speaker-Aware Views</h2>
                    <p className="text-gray-400 text-sm mb-3">Rendered using AssemblyAI speaker segments for readability.</p>
                    <div className="space-y-4 max-h-[28rem] overflow-y-auto">
                      {methods.map((m: any) => (
                        <details key={`spk-${m.method}`} className="cursor-pointer">
                          <summary className="text-sm font-semibold flex items-center gap-3">
                            <span className="text-blue-300">{m.method}</span>
                            <span className="text-gray-500">({m.characterCount || (m.text?.length || 0)} chars)</span>
                          </summary>
                          <div className="mt-2 space-y-1">
                            {utterances.slice(0, 40).map((u: any, idx: number) => (
                              <div key={`${m.method}-${idx}`} className="text-xs">
                                <span className="text-purple-300 mr-2">[{u.speaker}]</span>
                                <span className="text-gray-200">{u.text}</span>
                              </div>
                            ))}
                            <div className="text-gray-500 text-xs mt-2">(Showing first 40 utterances for brevity)</div>
                          </div>
                        </details>
                      ))}
                  </div>
                </div>
                )
              })()
            )}

            {/* Diff Comparison */}
            {results.models && results.reconciliation && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">🔍 Transcript Differences</h2>
                
                {/* Find AssemblyAI result */}
                {(() => {
                  const assemblyResult = results.models.find((m: any) => 
                    m.model.includes('AssemblyAI') && m.status === 'success'
                  );
                  
                  if (!assemblyResult) return null;
                  
                  return (
                    <>
                      {/* GPT vs AssemblyAI Diff */}
                      {results.reconciliation.gpt && (
                        <div className="bg-purple-900/20 border border-purple-600 rounded-lg p-4">
                          <h3 className="font-semibold mb-3">GPT Reconciliation vs AssemblyAI Original</h3>
                          {(() => {
                            const segments = diffTexts(
                              assemblyResult.fullText || assemblyResult.first300Chars,
                              results.reconciliation.gpt.text || results.reconciliation.gpt.first300Chars
                            );
                            const stats = diffStats(segments);
                            const improvements = findImprovements(
                              assemblyResult.fullText || assemblyResult.first300Chars,
                              results.reconciliation.gpt.text || results.reconciliation.gpt.first300Chars
                            );
                            
                            return (
                              <>
                                <DiffStats stats={stats} />
                                {improvements.length > 0 && (
                                  <div className="mt-2 text-sm text-gray-400">
                                    <span className="font-semibold">Improvements found:</span>
                                    <ul className="mt-1 list-disc list-inside">
                                      {improvements.map((imp, i) => (
                                        <li key={i}>{imp}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                <div className="mt-3 max-h-60 overflow-y-auto">
                                  <TranscriptDiff segments={segments.slice(0, 100)} />
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      )}
                      
                      {/* Voting vs AssemblyAI Diff */}
                      {results.reconciliation.voting && (
                        <div className="bg-green-900/20 border border-green-600 rounded-lg p-4">
                          <h3 className="font-semibold mb-3">Voting Reconciliation vs AssemblyAI Original</h3>
                          {(() => {
                            const segments = diffTexts(
                              assemblyResult.fullText || assemblyResult.first300Chars,
                              results.reconciliation.voting.text || results.reconciliation.voting.first300Chars
                            );
                            const stats = diffStats(segments);
                            const improvements = findImprovements(
                              assemblyResult.fullText || assemblyResult.first300Chars,
                              results.reconciliation.voting.text || results.reconciliation.voting.first300Chars
                            );
                            
                            return (
                              <>
                                <DiffStats stats={stats} />
                                {improvements.length > 0 && (
                                  <div className="mt-2 text-sm text-gray-400">
                                    <span className="font-semibold">Improvements found:</span>
                                    <ul className="mt-1 list-disc list-inside">
                                      {improvements.map((imp, i) => (
                                        <li key={i}>{imp}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                <div className="mt-3 max-h-60 overflow-y-auto">
                                  <TranscriptDiff segments={segments.slice(0, 100)} />
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            )}

            {/* Full Comparison */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Side-by-Side Comparison</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {results.models
                  .filter((m: any) => m.status === 'success')
                  .map((model: any) => (
                    <div key={model.model} className="border border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold mb-2 text-sm">{model.model}</h3>
                      <div className="bg-gray-900 rounded p-3 font-mono text-xs leading-relaxed">
                        <p className="text-gray-400">{model.first300Chars}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}