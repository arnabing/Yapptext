"use client";

import { Upload, Mic, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoWidgetProps {
  isDarkMode: boolean;
}

export function DemoWidget({ isDarkMode }: DemoWidgetProps) {
  return (
    <div
      className={`relative rounded-3xl shadow-2xl overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#0A0A0A] border border-white/10' : 'bg-white border border-slate-200'
      }`}
    >
      {/* Dotted grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(#888 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Content */}
      <div className="relative p-12 md:p-16">
        {/* Icon & Text */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          {/* Upload Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-orange-500 flex items-center justify-center shadow-lg">
            <Upload className="h-10 w-10 text-white" />
          </div>

          {/* Text */}
          <div className="text-center space-y-2">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Drop audio file here
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
              wav, mp3, m4a supported up to 50MB
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-8">
          <Button
            size="lg"
            className={`flex-1 rounded-xl shadow-sm ${
              isDarkMode
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            Browse Files
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={`px-6 rounded-xl ${
              isDarkMode
                ? 'border-white/20 hover:bg-white/10'
                : 'border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>

        {/* Divider */}
        <div className={`relative mb-6 ${isDarkMode ? 'text-gray-600' : 'text-slate-400'}`}>
          <div className={`absolute inset-0 flex items-center ${isDarkMode ? '' : 'opacity-50'}`}>
            <div className={`w-full border-t ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`} />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className={`px-2 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
              or try a sample
            </span>
          </div>
        </div>

        {/* Sample Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${
              isDarkMode
                ? 'border-white/20 hover:bg-white/10'
                : 'border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Play className="h-3 w-3 mr-1.5" />
            TED Talk
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${
              isDarkMode
                ? 'border-white/20 hover:bg-white/10'
                : 'border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Play className="h-3 w-3 mr-1.5" />
            Q3 Strategy Sync
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`rounded-full ${
              isDarkMode
                ? 'border-white/20 hover:bg-white/10'
                : 'border-slate-300 hover:bg-slate-100'
            }`}
          >
            <Play className="h-3 w-3 mr-1.5" />
            Customer Support
          </Button>
        </div>
      </div>
    </div>
  );
}
