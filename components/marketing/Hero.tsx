"use client";

import { useState } from "react";
import Link from "next/link";
import { Command, Moon, Sun } from "lucide-react";
import { DemoWidget } from "./DemoWidget";

export function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-black text-white' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 md:px-12 border-b border-transparent transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-lg ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <Command size={16} strokeWidth={3} />
          </div>
          <span className="text-lg font-bold tracking-tight">YappText</span>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-slate-100 text-slate-600'}`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link href="/app">
            <button className={`px-5 py-2 text-sm font-bold rounded-full transition-transform active:scale-95 ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-slate-800'}`}>
              Get Started
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Content */}
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

        {/* Demo Widget */}
        <div className="max-w-3xl mx-auto">
          <DemoWidget isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}
