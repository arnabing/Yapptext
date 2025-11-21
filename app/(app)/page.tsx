"use client";

import { Suspense } from "react";
import { TranscriptionInterface } from "@/components/TranscriptionInterface";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Your voice,{' '}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              perfectly typed.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400">
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
            <TranscriptionInterface />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
