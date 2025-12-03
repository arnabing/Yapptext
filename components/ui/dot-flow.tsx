"use client";

import { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { DotLoader } from "@/components/ui/dot-loader";
import { cn } from "@/lib/utils";

export type DotFlowProps = {
    items: {
        title: string;
        frames: number[][];
        duration?: number;
        repeatCount?: number;
    }[];
    isPlaying?: boolean;
    className?: string;
    dotClassName?: string;
    textClassName?: string;
};

export const DotFlow = ({
    items,
    isPlaying = true,
    className,
    dotClassName,
    textClassName,
}: DotFlowProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const { contextSafe } = useGSAP();

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const newWidth = textRef.current.offsetWidth + 1;

        gsap.to(containerRef.current, {
            width: newWidth,
            duration: 0.5,
            ease: "power2.out",
        });
    }, [textIndex, items]);

    useEffect(() => {
        setIndex(0);
        setTextIndex(0);
    }, [items]);

    const next = contextSafe(() => {
        const el = containerRef.current;
        if (!el) return;
        gsap.to(el, {
            y: 20,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                setTextIndex((prev) => (prev + 1) % items.length);
                gsap.fromTo(
                    el,
                    { y: -20, opacity: 0, filter: "blur(4px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 0.7,
                        ease: "power2.out",
                    },
                );
            },
        });

        setIndex((prev) => (prev + 1) % items.length);
    });

    return (
        <div className={cn("flex items-center gap-4 px-4 py-3", className)}>
            <DotLoader
                frames={items[index]?.frames ?? []}
                onComplete={next}
                className="gap-px"
                isPlaying={isPlaying}
                repeatCount={items[index]?.repeatCount ?? 1}
                duration={items[index]?.duration ?? 150}
                dotClassName={cn("bg-muted-foreground/20 [&.active]:bg-primary size-1", dotClassName)}
            />
            <div ref={containerRef} className="relative overflow-hidden">
                <div ref={textRef} className={cn("inline-block text-sm font-medium whitespace-nowrap text-foreground", textClassName)}>
                    {items[textIndex]?.title}
                </div>
            </div>
        </div>
    );
};

// ============================================
// Pre-built frame animations for transcription
// ============================================

// Microphone / audio wave pattern
const microphoneFrames: number[][] = [
    [3, 10, 17, 24, 31, 38, 45],
    [3, 10, 17, 24, 31, 38, 45, 16, 18, 30, 32],
    [3, 10, 17, 24, 31, 38, 45, 9, 11, 23, 25, 37, 39],
    [3, 10, 17, 24, 31, 38, 45, 2, 4, 16, 18, 30, 32, 44, 46],
    [3, 10, 17, 24, 31, 38, 45, 1, 5, 9, 11, 23, 25, 37, 39, 43, 47],
    [3, 10, 17, 24, 31, 38, 45, 0, 6, 2, 4, 16, 18, 30, 32, 44, 46, 42, 48],
    [3, 10, 17, 24, 31, 38, 45, 1, 5, 9, 11, 23, 25, 37, 39, 43, 47],
    [3, 10, 17, 24, 31, 38, 45, 2, 4, 16, 18, 30, 32, 44, 46],
    [3, 10, 17, 24, 31, 38, 45, 9, 11, 23, 25, 37, 39],
    [3, 10, 17, 24, 31, 38, 45, 16, 18, 30, 32],
];

// Brain/thinking pattern
const brainFrames: number[][] = [
    [24],
    [17, 23, 25, 31],
    [10, 16, 18, 24, 30, 32, 38],
    [3, 9, 11, 17, 23, 25, 31, 37, 39, 45],
    [2, 4, 10, 16, 18, 24, 30, 32, 38, 44, 46],
    [1, 3, 5, 9, 11, 17, 23, 25, 31, 37, 39, 43, 45, 47],
    [0, 2, 4, 6, 10, 16, 18, 24, 30, 32, 38, 42, 44, 46, 48],
    [1, 3, 5, 9, 11, 17, 23, 25, 31, 37, 39, 43, 45, 47],
    [2, 4, 10, 16, 18, 24, 30, 32, 38, 44, 46],
    [3, 9, 11, 17, 23, 25, 31, 37, 39, 45],
    [10, 16, 18, 24, 30, 32, 38],
    [17, 23, 25, 31],
];

// Typing/writing pattern
const typingFrames: number[][] = [
    [42],
    [42, 43],
    [42, 43, 44],
    [43, 44, 45],
    [44, 45, 46],
    [45, 46, 47],
    [46, 47, 48],
    [47, 48],
    [48],
    [],
    [42],
];

// Magic sparkle pattern
const sparkleFrames: number[][] = [
    [24],
    [16, 18, 24, 30, 32],
    [8, 10, 12, 24, 36, 38, 40],
    [0, 2, 4, 6, 14, 20, 24, 28, 34, 42, 44, 46, 48],
    [8, 10, 12, 24, 36, 38, 40],
    [16, 18, 24, 30, 32],
    [24],
    [],
];

// Speech bubble expanding
const speechFrames: number[][] = [
    [3, 4, 5],
    [2, 3, 4, 5, 6, 10, 11, 12],
    [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 17, 18, 19],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 24, 25, 26],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 31, 32, 33],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 38, 39, 40, 45],
];

// Checkmark drawing
const checkmarkFrames: number[][] = [
    [35],
    [28, 35],
    [21, 28, 35],
    [14, 21, 28, 35],
    [14, 21, 28, 35, 22],
    [14, 21, 28, 35, 22, 15],
    [14, 21, 28, 35, 22, 15, 8],
    [14, 21, 28, 35, 22, 15, 8, 1],
];

// Rotating dots (loading spinner)
const spinnerFrames: number[][] = [
    [3, 4],
    [4, 5],
    [5, 12],
    [12, 19],
    [19, 26],
    [26, 33],
    [33, 40],
    [40, 39],
    [39, 38],
    [38, 31],
    [31, 24],
    [24, 17],
    [17, 10],
    [10, 3],
];

// DNA helix / double spiral pattern
const dnaFrames: number[][] = [
    [0, 6, 10, 12, 17, 24, 31, 36, 38, 42, 48],
    [1, 5, 9, 13, 18, 24, 30, 35, 39, 43, 47],
    [2, 4, 8, 14, 19, 24, 29, 34, 40, 44, 46],
    [3, 7, 15, 20, 24, 28, 33, 41, 45],
    [2, 4, 8, 14, 21, 24, 27, 34, 40, 44, 46],
    [1, 5, 9, 13, 22, 24, 26, 35, 39, 43, 47],
    [0, 6, 10, 12, 23, 24, 25, 36, 38, 42, 48],
];

// Waveform / equalizer bars
const waveformFrames: number[][] = [
    [42, 35, 28, 43, 36, 44, 37, 30, 45],
    [35, 28, 21, 36, 29, 22, 37, 30, 38],
    [28, 21, 14, 29, 22, 15, 30, 23, 31],
    [21, 14, 7, 22, 15, 8, 23, 16, 24],
    [14, 7, 0, 15, 8, 1, 16, 9, 17],
    [21, 14, 7, 22, 15, 8, 23, 16, 24],
    [28, 21, 14, 29, 22, 15, 30, 23, 31],
    [35, 28, 21, 36, 29, 22, 37, 30, 38],
];

// Heartbeat / pulse pattern
const pulseFrames: number[][] = [
    [21, 22, 23],
    [21, 22, 23, 14, 30],
    [21, 22, 23, 7, 14, 30, 37],
    [21, 22, 23, 0, 7, 14, 30, 37, 44],
    [21, 22, 23, 1, 8, 15, 29, 36, 43],
    [21, 22, 23, 2, 16, 28, 42],
    [21, 22, 23, 3, 17, 27, 41],
    [21, 22, 23],
];

// Radar sweep
const radarFrames: number[][] = [
    [24, 17, 10, 3],
    [24, 18, 12, 6],
    [24, 25, 26, 27],
    [24, 32, 40, 48],
    [24, 31, 38, 45],
    [24, 30, 36, 42],
    [24, 23, 22, 21],
    [24, 16, 8, 0],
];

// Export pre-built transcription flow items
export const transcriptionFlowItems: DotFlowProps["items"] = [
    {
        title: "Uploading audio...",
        frames: spinnerFrames,
        duration: 80,
        repeatCount: 3,
    },
    {
        title: "Analyzing audio frequencies...",
        frames: microphoneFrames,
        duration: 120,
        repeatCount: 2,
    },
    {
        title: "Running speech recognition...",
        frames: brainFrames,
        duration: 100,
        repeatCount: 2,
    },
    {
        title: "Identifying speakers...",
        frames: sparkleFrames,
        duration: 150,
        repeatCount: 3,
    },
    {
        title: "Processing neural network...",
        frames: speechFrames,
        duration: 200,
        repeatCount: 2,
    },
    {
        title: "Aligning word timestamps...",
        frames: spinnerFrames,
        duration: 100,
        repeatCount: 3,
    },
    {
        title: "Generating transcript...",
        frames: typingFrames,
        duration: 120,
        repeatCount: 4,
    },
    {
        title: "Formatting output...",
        frames: brainFrames,
        duration: 80,
        repeatCount: 2,
    },
    {
        title: "Adding punctuation...",
        frames: sparkleFrames,
        duration: 100,
        repeatCount: 4,
    },
    {
        title: "Almost done...",
        frames: microphoneFrames,
        duration: 100,
        repeatCount: 2,
    },
];

// Shorter flow for quick operations
export const quickFlowItems: DotFlowProps["items"] = [
    {
        title: "Processing...",
        frames: spinnerFrames,
        duration: 60,
        repeatCount: 2,
    },
    {
        title: "Almost ready...",
        frames: brainFrames,
        duration: 80,
        repeatCount: 1,
    },
];

// ============================================
// Phase-specific flow items with witty messages
// ============================================

// Video extraction phase
export const videoExtractionFlowItems: DotFlowProps["items"] = [
    {
        title: "Unwrapping your video...",
        frames: radarFrames,
        duration: 100,
        repeatCount: 2,
    },
    {
        title: "Separating the audio layer...",
        frames: waveformFrames,
        duration: 120,
        repeatCount: 2,
    },
    {
        title: "FFmpeg doing its magic...",
        frames: sparkleFrames,
        duration: 150,
        repeatCount: 2,
    },
    {
        title: "Almost extracted...",
        frames: pulseFrames,
        duration: 100,
        repeatCount: 2,
    },
];

// Upload phase
export const uploadFlowItems: DotFlowProps["items"] = [
    {
        title: "Beaming to the cloud...",
        frames: spinnerFrames,
        duration: 80,
        repeatCount: 3,
    },
    {
        title: "Uploading at the speed of WiFi...",
        frames: radarFrames,
        duration: 100,
        repeatCount: 2,
    },
    {
        title: "Almost there...",
        frames: pulseFrames,
        duration: 100,
        repeatCount: 2,
    },
];

// AI Processing phase (main transcription) - with witty messages
export const processingFlowItems: DotFlowProps["items"] = [
    {
        title: "Waking up the AI...",
        frames: brainFrames,
        duration: 100,
        repeatCount: 2,
    },
    {
        title: "Listening very carefully...",
        frames: microphoneFrames,
        duration: 120,
        repeatCount: 2,
    },
    {
        title: "Teaching robots to understand humans...",
        frames: dnaFrames,
        duration: 150,
        repeatCount: 2,
    },
    {
        title: "Who said what? Figuring it out...",
        frames: sparkleFrames,
        duration: 120,
        repeatCount: 3,
    },
    {
        title: "Connecting the neural dots...",
        frames: brainFrames,
        duration: 100,
        repeatCount: 2,
    },
    {
        title: "Adding commas, because grammar matters...",
        frames: typingFrames,
        duration: 100,
        repeatCount: 3,
    },
    {
        title: "Almost done, pinky promise...",
        frames: checkmarkFrames,
        duration: 120,
        repeatCount: 2,
    },
    {
        title: "Final touches...",
        frames: sparkleFrames,
        duration: 100,
        repeatCount: 2,
    },
];
