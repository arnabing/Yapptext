"use client";

import { Suspense, useState } from "react";
import { TranscriptionInterface } from "@/components/TranscriptionInterface";
import { AudioWaveform } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type InterfaceState = "idle" | "file-selected" | "processing" | "complete" | "error";

function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        {/* Left: Branding */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <AudioWaveform className="h-4 w-4 text-primary-foreground" />
          </div>
          <span
            className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            style={{ fontFamily: "'Sixtyfour Convergence Variable', sans-serif" }}
          >
            YappText
          </span>
        </div>

        {/* Right: CTA */}
        <SignUpButton mode="modal">
          <Button size="sm" className="rounded-full">
            Sign up free
          </Button>
        </SignUpButton>
      </div>
    </header>
  );
}

export default function LandingPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [interfaceState, setInterfaceState] = useState<InterfaceState>("idle");

  // Redirect authenticated users to /new (ChatGPT-style)
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/new");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading while checking auth
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
      </div>
    );
  }

  // Don't render landing page if user is signed in (will redirect)
  if (isSignedIn) {
    return null;
  }

  return (
    <div className="transition-colors duration-500 bg-white text-slate-900">
      {/* Header */}
      <LandingHeader />

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4">
        {/* Hero text - only show when idle */}
        {interfaceState === "idle" && (
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Your voice,{' '}
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                perfectly typed.
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-500 font-light">
              Enterprise-grade AI transcription. 99% accuracy. No setup.
            </p>
          </div>
        )}

        {/* Main Interface */}
        <div className="max-w-6xl mx-auto">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          }>
            <TranscriptionInterface
              isDarkMode={false}
              onStateChange={setInterfaceState}
              onComplete={(data) => {
                // Store transcript data in sessionStorage for /new page to read
                sessionStorage.setItem('demoTranscript', JSON.stringify({
                  title: data.fileName,
                  text: data.transcript,
                  fileName: data.fileName,
                  duration: data.duration,
                  audioUrl: data.audioUrl,
                  utterances: data.utterances,
                  chapters: data.chapters,
                  words: data.words,
                }));
                // Redirect to main app
                router.push('/new');
              }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
