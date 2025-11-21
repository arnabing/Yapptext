import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
    </main>
  );
}
