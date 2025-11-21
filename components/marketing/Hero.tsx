"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Aurora gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            backgroundSize: '400% 400%',
            animation: 'aurora 15s ease infinite',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 md:px-12">
        <div className="flex items-center gap-2">
          <Command className="h-6 w-6 text-white" />
          <span className="font-display text-xl font-bold">YappText</span>
        </div>
        <Link href="/app">
          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
            Get Started
          </Button>
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Your voice, perfectly typed
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Enterprise-grade AI transcription. 99% accuracy. No setup.
        </p>
        <Link href="/app">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6">
            Try it free
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
