"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mic, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Crystal Clear Accuracy",
    description: "99% transcription accuracy powered by advanced AI models trained on millions of hours of audio.",
  },
  {
    icon: Users,
    title: "Speaker Detection",
    description: "Automatically identify and label different speakers in your audio recordings.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your transcripts in seconds, not minutes. Process hours of audio in moments.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption. Your data stays yours.",
  },
];

export function Features() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Built for professionals
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to transform audio into text with precision and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
