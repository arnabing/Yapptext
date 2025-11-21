"use client";

import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { Footer } from "@/components/landing/Footer";

export default function AppPage() {
  return (
    <main className="min-h-screen bg-black text-foreground dark">
      <Hero />
      <SocialProof />
      <Footer />
    </main>
  );
}
