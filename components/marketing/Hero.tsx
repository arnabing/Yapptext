"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Command, Moon, Sun } from "lucide-react";
import { DemoWidget } from "./DemoWidget";

export function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-black text-white' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <Command className="h-5 w-5 text-black" />
            </div>
            <span className="font-display text-xl font-bold">YappText</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <Link href="/app">
              <Button
                size="sm"
                className={`rounded-xl ${
                  isDarkMode
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

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
