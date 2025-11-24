'use client'

import { useState } from 'react'
import { ScrollingWaveform } from '@/components/ui/waveform'

export default function WaveTestPage() {
  const [mobileActive, setMobileActive] = useState(false)
  const [showTest2, setShowTest2] = useState(false)
  const [showTest4, setShowTest4] = useState(false)

  // Waveform configuration state
  const [speed, setSpeed] = useState(50)
  const [barCount, setBarCount] = useState(60)
  const [barWidth, setBarWidth] = useState(4)
  const [barGap, setBarGap] = useState(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">Wave Animation Debug</h1>
          <p className="text-slate-600">
            Test the wave animation with different triggers and configurations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                setShowTest2(false)
                setShowTest4(false)
              }}
              className={`px-4 py-2 rounded-lg transition ${
                !showTest2 && !showTest4
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
              }`}
            >
              Test 1 & 3
            </button>
            <button
              onClick={() => {
                setShowTest2(true)
                setShowTest4(false)
              }}
              className={`px-4 py-2 rounded-lg transition ${
                showTest2
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
              }`}
            >
              Test 2
            </button>
            <button
              onClick={() => {
                setShowTest2(false)
                setShowTest4(true)
              }}
              className={`px-4 py-2 rounded-lg transition ${
                showTest4
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
              }`}
            >
              Test 4: Canvas Waveform
            </button>
            <button
              onClick={() => setMobileActive(!mobileActive)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Mobile: {mobileActive ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        {showTest4 ? (
          /* TEST 4: Canvas Waveform Comparison */
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Test 4: Canvas Waveform vs CSS Ripple
              </h2>
              <p className="text-slate-600 mb-6">
                Compare the canvas-based ScrollingWaveform with the CSS ripple animation
              </p>

              {/* Configuration Controls */}
              <div className="mb-6 p-4 bg-slate-50 rounded-lg space-y-4">
                <div className="font-bold text-slate-900">Waveform Configuration:</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Speed: {speed} px/s
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      value={speed}
                      onChange={(e) => setSpeed(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Bar Count: {barCount}
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={barCount}
                      onChange={(e) => setBarCount(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Bar Width: {barWidth}px
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="8"
                      value={barWidth}
                      onChange={(e) => setBarWidth(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Bar Gap: {barGap}px
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={barGap}
                      onChange={(e) => setBarGap(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Side-by-side Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* CSS Ripple */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">CSS Ripple Animation</h3>
                  <div className="group relative w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-300 rounded-xl overflow-hidden border-4 border-slate-300">
                    <div className="absolute inset-0 pointer-events-none z-[1]">
                      <div className="wave-container">
                        <div className="wave wave-1" />
                        <div className="wave wave-2" />
                        <div className="wave wave-3" />
                        <div className="wave wave-4" />
                        <div className="wave wave-5" />
                      </div>
                    </div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2" />
                        <div className="text-sm font-medium text-slate-900">Hover to trigger</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-slate-50 rounded text-sm text-slate-600">
                    <div className="font-bold text-slate-900 mb-1">Pros:</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Pure CSS (no JavaScript)</li>
                      <li>Lightweight (no canvas)</li>
                      <li>Simple to implement</li>
                    </ul>
                    <div className="font-bold text-slate-900 mt-2 mb-1">Cons:</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Circular ripples only</li>
                      <li>Less realistic audio aesthetic</li>
                      <li>Limited customization</li>
                    </ul>
                  </div>
                </div>

                {/* Canvas Waveform */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">Canvas Waveform</h3>
                  <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-300 rounded-xl overflow-hidden border-4 border-blue-400">
                    <ScrollingWaveform
                      speed={speed}
                      barCount={barCount}
                      barWidth={barWidth}
                      barGap={barGap}
                      height={400}
                      className="absolute inset-0"
                    />
                    <div className="relative z-10 h-full flex items-center justify-center pointer-events-none">
                      <div className="text-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <div className="text-sm font-medium text-slate-900">Always Animating</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-slate-50 rounded text-sm text-slate-600">
                    <div className="font-bold text-slate-900 mb-1">Pros:</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Realistic audio wave bars</li>
                      <li>Smooth 60fps animation</li>
                      <li>Highly customizable</li>
                      <li>Premium aesthetic</li>
                    </ul>
                    <div className="font-bold text-slate-900 mt-2 mb-1">Cons:</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Requires canvas rendering</li>
                      <li>More complex implementation</li>
                      <li>Slightly higher CPU usage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Background Tests */}
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-3 text-slate-900">Different Backgrounds</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* White BG - Waveform */}
                  <div>
                    <div className="text-xs font-medium text-slate-700 mb-2">White BG</div>
                    <div className="relative w-full h-[200px] bg-white rounded-lg border-2 border-slate-300 overflow-hidden">
                      <ScrollingWaveform
                        speed={speed}
                        barWidth={barWidth}
                        barGap={barGap}
                        height={200}
                        className="absolute inset-0"
                      />
                    </div>
                  </div>

                  {/* Dark BG - Waveform */}
                  <div>
                    <div className="text-xs font-medium text-slate-700 mb-2">Dark BG</div>
                    <div className="relative w-full h-[200px] bg-slate-900 rounded-lg border-2 border-slate-700 overflow-hidden">
                      <ScrollingWaveform
                        speed={speed}
                        barWidth={barWidth}
                        barGap={barGap}
                        height={200}
                        barColor="#3b82f6"
                        className="absolute inset-0"
                      />
                    </div>
                  </div>

                  {/* Gradient BG - Waveform */}
                  <div>
                    <div className="text-xs font-medium text-slate-700 mb-2">Gradient BG</div>
                    <div className="relative w-full h-[200px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg border-2 border-purple-300 overflow-hidden">
                      <ScrollingWaveform
                        speed={speed}
                        barWidth={barWidth}
                        barGap={barGap}
                        height={200}
                        barColor="#8b5cf6"
                        className="absolute inset-0"
                      />
                    </div>
                  </div>

                  {/* Aurora BG - Waveform */}
                  <div>
                    <div className="text-xs font-medium text-slate-700 mb-2">Aurora BG</div>
                    <div className="relative w-full h-[200px] aura-bg rounded-lg border-2 border-purple-500 overflow-hidden">
                      <ScrollingWaveform
                        speed={speed}
                        barWidth={barWidth}
                        barGap={barGap}
                        height={200}
                        barColor="#ffffff"
                        className="absolute inset-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-blue-50 border-4 border-blue-200 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                💡 Recommendation
              </h3>
              <div className="space-y-3 text-sm text-blue-900">
                <p>
                  <strong>For the dropzone hover effect:</strong> The Canvas Waveform provides a more premium,
                  realistic audio aesthetic that better matches the transcription app's purpose.
                </p>
                <p>
                  The scrolling bars immediately communicate "audio processing" to users, while the CSS ripple
                  is more generic and could represent any interaction.
                </p>
                <p>
                  <strong>Suggested integration:</strong> Use ScrollingWaveform with:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>speed: 50-80 (moderate scrolling)</li>
                  <li>barWidth: 3-4 (subtle bars)</li>
                  <li>barGap: 2 (good density)</li>
                  <li>fadeEdges: true (smooth left/right fade)</li>
                  <li>Trigger on hover (desktop) and scroll (mobile)</li>
                </ul>
              </div>
            </div>
          </div>
        ) : !showTest2 ? (
          /* TEST 1: Simplest Possible - Just Hover Trigger */
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Test 1: Simplest Hover Trigger
              </h2>
              <p className="text-slate-600 mb-6">
                Hover over the box below. You should see blue ripples expanding from the center.
              </p>

              {/* Test Container */}
              <div className="group relative w-full h-[600px] bg-slate-200 rounded-2xl overflow-hidden border-4 border-slate-300 flex items-center justify-center">
                {/* Background gradient for visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-300" />

                {/* Wave Container */}
                <div className="absolute inset-0 pointer-events-none z-[1]">
                  <div className="wave-container">
                    <div className="wave wave-1" />
                    <div className="wave wave-2" />
                    <div className="wave wave-3" />
                    <div className="wave wave-4" />
                    <div className="wave wave-5" />
                  </div>
                </div>

                {/* Center indicator */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full animate-pulse" />
                  <div className="text-2xl font-bold text-slate-900">
                    Hover Here
                  </div>
                  <div className="text-slate-600">
                    Desktop: Hover to trigger<br />
                    Mobile: See Test 2
                  </div>
                </div>
              </div>

              {/* Debug Info */}
              <div className="mt-4 p-4 bg-slate-100 rounded-lg space-y-2 text-sm font-mono">
                <div className="text-slate-700">
                  <strong>What to look for:</strong>
                </div>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Blue circular ripples should appear on hover</li>
                  <li>5 waves with staggered timing (0s, 0.6s, 1.2s, 1.8s, 2.4s)</li>
                  <li>Each wave should expand from center and fade out</li>
                  <li>Animation should loop continuously while hovering</li>
                </ul>
              </div>
            </div>

            {/* Color Visibility Test */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Color Visibility Test
              </h3>
              <p className="text-slate-600 mb-4">
                Test on different backgrounds to verify wave visibility
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* White background */}
                <div className="group relative w-full h-[300px] bg-white rounded-xl border-4 border-slate-300 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none z-[1]">
                    <div className="wave-container">
                      <div className="wave wave-1" />
                      <div className="wave wave-2" />
                      <div className="wave wave-3" />
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-slate-900 font-bold">White BG</span>
                  </div>
                </div>

                {/* Dark background */}
                <div className="group relative w-full h-[300px] bg-slate-900 rounded-xl border-4 border-slate-700 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none z-[1]">
                    <div className="wave-container">
                      <div className="wave wave-1" />
                      <div className="wave wave-2" />
                      <div className="wave wave-3" />
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-white font-bold">Dark BG</span>
                  </div>
                </div>

                {/* Gradient background */}
                <div className="group relative w-full h-[300px] bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl border-4 border-purple-300 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none z-[1]">
                    <div className="wave-container">
                      <div className="wave wave-1" />
                      <div className="wave wave-2" />
                      <div className="wave wave-3" />
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-slate-900 font-bold">Gradient BG</span>
                  </div>
                </div>

                {/* Aurora background */}
                <div className="group relative w-full h-[300px] aura-bg rounded-xl border-4 border-purple-500 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none z-[1]">
                    <div className="wave-container">
                      <div className="wave wave-1" />
                      <div className="wave wave-2" />
                      <div className="wave wave-3" />
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-white font-bold drop-shadow-lg">Aurora BG</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* TEST 2: Full Implementation with Data Attributes */
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Test 2: Full Implementation
              </h2>
              <p className="text-slate-600 mb-6">
                Tests both hover (desktop) and data-active trigger (mobile simulation)
              </p>

              {/* Test Container */}
              <div className="group relative w-full h-[600px] bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden border-4 border-indigo-300">
                {/* Wave Container with data-active */}
                <div className="absolute inset-0 pointer-events-none z-[1]">
                  <div
                    className="wave-container"
                    data-active={mobileActive ? "mobile" : "inactive"}
                  >
                    <div className="wave wave-1" />
                    <div className="wave wave-2" />
                    <div className="wave wave-3" />
                    <div className="wave wave-4" />
                    <div className="wave wave-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center space-y-6 p-8 text-center">
                  <div className={`w-20 h-20 rounded-full transition-all duration-300 ${
                    mobileActive ? 'bg-green-500 animate-pulse' : 'bg-purple-600'
                  }`} />

                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-slate-900">
                      Multi-Trigger Test
                    </div>
                    <div className="text-slate-700">
                      Current State: <span className="font-mono font-bold">
                        {mobileActive ? 'MOBILE ACTIVE' : 'INACTIVE'}
                      </span>
                    </div>
                  </div>

                  <div className="max-w-md space-y-3 text-sm text-slate-600 bg-white/80 p-4 rounded-lg backdrop-blur">
                    <div className="font-bold text-slate-900">Test Scenarios:</div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="font-bold">Desktop:</span>
                        <span>Hover anywhere to trigger waves (mobile active should be ignored)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold">Mobile:</span>
                        <span>Toggle "Mobile Active" button to trigger waves</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Debug Info */}
              <div className="mt-4 p-4 bg-slate-100 rounded-lg space-y-3">
                <div className="font-bold text-slate-900">Debug Information:</div>
                <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                  <div>
                    <div className="text-slate-600">data-active:</div>
                    <div className="font-bold text-slate-900">
                      {mobileActive ? 'mobile' : 'inactive'}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600">Screen Width:</div>
                    <div className="font-bold text-slate-900">
                      {typeof window !== 'undefined' ? window.innerWidth : 'N/A'}px
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600">Desktop Breakpoint:</div>
                    <div className="font-bold text-slate-900">≥768px</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Expected Behavior:</div>
                    <div className="font-bold text-slate-900">
                      {typeof window !== 'undefined' && window.innerWidth >= 768
                        ? 'Hover only'
                        : mobileActive ? 'Mobile active' : 'No animation'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CSS Rules Test */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                CSS Rules Verification
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <div className="font-bold text-yellow-900 mb-2">Expected CSS Behavior:</div>
                  <ul className="list-disc list-inside text-yellow-800 space-y-1">
                    <li>Default: No animation (opacity: 0, scale: 0)</li>
                    <li>Mobile (&lt;768px) with data-active="mobile": Waves animate</li>
                    <li>Desktop (≥768px) with data-active="mobile": No animation (override)</li>
                    <li>Desktop (≥768px) on .group:hover: Waves animate</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <div className="font-bold text-blue-900 mb-2">Animation Properties:</div>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>Duration: 3s cubic-bezier(0.4, 0, 0.2, 1)</li>
                    <li>Iteration: infinite</li>
                    <li>Delays: 0s, 0.6s, 1.2s, 1.8s, 2.4s</li>
                    <li>Scale: 0 → 2</li>
                    <li>Opacity: 0 → 0.4 → 0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Manual Inline Test */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-slate-900">
            Test 3: Inline Styles (Bypass CSS)
          </h3>
          <p className="text-slate-600 mb-4">
            Uses inline keyframe animation to verify browser capability
          </p>

          <div className="relative w-full h-[300px] bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center">
            <style jsx>{`
              @keyframes test-ripple {
                0% {
                  transform: translate(-50%, -50%) scale(0);
                  opacity: 0;
                }
                10% {
                  opacity: 0.6;
                }
                100% {
                  transform: translate(-50%, -50%) scale(2);
                  opacity: 0;
                }
              }
              .inline-wave {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 4px solid rgba(59, 130, 246, 0.8);
                animation: test-ripple 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                pointer-events: none;
              }
              .inline-wave:nth-child(2) {
                animation-delay: 0.5s;
                border-color: rgba(147, 51, 234, 0.8);
              }
              .inline-wave:nth-child(3) {
                animation-delay: 1s;
                border-color: rgba(236, 72, 153, 0.8);
              }
            `}</style>

            <div className="inline-wave" />
            <div className="inline-wave" />
            <div className="inline-wave" />

            <div className="relative z-10 text-white text-center">
              <div className="text-xl font-bold mb-2">Inline Animation Test</div>
              <div className="text-sm text-slate-300">
                If you see ripples here, browser supports animations
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting Guide */}
        <div className="bg-amber-50 border-4 border-amber-200 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-amber-900">
            🔍 Troubleshooting Checklist
          </h3>
          <div className="space-y-4 text-sm text-amber-900">
            <div>
              <div className="font-bold mb-2">If you see NO waves at all:</div>
              <ul className="list-decimal list-inside space-y-1 ml-4">
                <li>Check browser console for errors</li>
                <li>Verify globals.css is loading (check Network tab)</li>
                <li>Test inline animation (Test 3) - if it works, CSS issue</li>
                <li>Check if prefers-reduced-motion is enabled in OS</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-2">If waves appear but don't animate:</div>
              <ul className="list-decimal list-inside space-y-1 ml-4">
                <li>Check if .wave elements exist in DOM inspector</li>
                <li>Verify .wave has animation property in computed styles</li>
                <li>Check z-index stacking (waves might be behind content)</li>
                <li>Test different backgrounds (color visibility test)</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-2">If hover doesn't work:</div>
              <ul className="list-decimal list-inside space-y-1 ml-4">
                <li>Check .group class is on parent element</li>
                <li>Verify screen width ≥768px for desktop hover</li>
                <li>Test with browser devtools device emulation off</li>
                <li>Check if pointer-events: none is blocking hover</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-2">If data-active doesn't work:</div>
              <ul className="list-decimal list-inside space-y-1 ml-4">
                <li>Inspect element and verify data-active attribute value</li>
                <li>Check if media query is overriding on desktop</li>
                <li>Test on actual mobile device or use responsive mode</li>
                <li>Verify exact attribute value: data-active="mobile"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expected Results */}
        <div className="bg-green-50 border-4 border-green-200 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-green-900">
            ✅ Expected Results
          </h3>
          <div className="space-y-4 text-sm text-green-900">
            <div>
              <div className="font-bold mb-2">Test 1 - Hover Trigger:</div>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>No animation by default</li>
                <li>Blue ripples appear immediately on hover (desktop)</li>
                <li>5 waves with smooth stagger effect</li>
                <li>Continuous loop while hovering</li>
                <li>Stops when hover ends</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-2">Test 2 - Full Implementation:</div>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Desktop: Only hover triggers (mobile button ignored)</li>
                <li>Mobile: Only mobile button triggers (hover doesn't work)</li>
                <li>Data attribute updates show in debug panel</li>
                <li>Smooth transitions between states</li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-2">Test 3 - Inline Styles:</div>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Should ALWAYS work (no external CSS dependencies)</li>
                <li>If this doesn't work, browser/system issue</li>
                <li>Three colored waves (blue, purple, pink)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
