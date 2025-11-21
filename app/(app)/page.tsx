"use client";

import { useState } from "react";
import { Suspense } from "react";
import { Moon, Sun } from "lucide-react";
import { TranscriptionInterface } from "@/components/TranscriptionInterface";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-slate-900" />}
      </button>

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Your voice,{' '}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              perfectly typed.
            </span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
            Enterprise-grade AI transcription. 99% accuracy. No setup.
          </p>
        </div>

        {/* Main Interface */}
        <div className="max-w-6xl mx-auto">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          }>
            <TranscriptionInterface isDarkMode={isDarkMode} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
