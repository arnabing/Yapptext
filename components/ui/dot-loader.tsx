"use client";

import { ComponentProps, useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type DotLoaderProps = {
    frames: number[][];
    dotClassName?: string;
    isPlaying?: boolean;
    duration?: number;
    repeatCount?: number;
    onComplete?: () => void;
} & ComponentProps<"div">;

export const DotLoader = ({
    frames,
    isPlaying = true,
    duration = 100,
    dotClassName,
    className,
    repeatCount = -1,
    onComplete,
    ...props
}: DotLoaderProps) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const currentIndex = useRef(0);
    const repeats = useRef(0);
    const interval = useRef<NodeJS.Timeout | null>(null);

    const applyFrameToDots = useCallback(
        (dots: HTMLDivElement[], frameIndex: number) => {
            const frame = frames[frameIndex];
            if (!frame) return;

            dots.forEach((dot, index) => {
                dot.classList.toggle("active", frame.includes(index));
            });
        },
        [frames],
    );

    useEffect(() => {
        currentIndex.current = 0;
        repeats.current = 0;
    }, [frames]);

    useEffect(() => {
        if (isPlaying) {
            if (currentIndex.current >= frames.length) {
                currentIndex.current = 0;
            }
            const dotElements = gridRef.current?.children;
            if (!dotElements) return;
            const dots = Array.from(dotElements) as HTMLDivElement[];
            interval.current = setInterval(() => {
                applyFrameToDots(dots, currentIndex.current);
                if (currentIndex.current + 1 >= frames.length) {
                    if (repeatCount != -1 && repeats.current + 1 >= repeatCount) {
                        clearInterval(interval.current!);
                        onComplete?.();
                    }
                    repeats.current++;
                }
                currentIndex.current = (currentIndex.current + 1) % frames.length;
            }, duration);
        } else {
            if (interval.current) clearInterval(interval.current);
        }

        return () => {
            if (interval.current) clearInterval(interval.current);
        };
    }, [frames, isPlaying, applyFrameToDots, duration, repeatCount, onComplete]);

    return (
        <div {...props} ref={gridRef} className={cn("grid w-fit grid-cols-7 gap-0.5", className)}>
            {Array.from({ length: 49 }).map((_, i) => (
                <div key={i} className={cn("h-1.5 w-1.5 rounded-sm", dotClassName)} />
            ))}
        </div>
    );
};

// Loading animation frames - a circular spinner pattern
export const loadingFrames: number[][] = [
    [3, 4, 10, 11],
    [4, 5, 11, 12],
    [5, 6, 12, 13],
    [12, 13, 19, 20],
    [19, 20, 26, 27],
    [26, 27, 33, 34],
    [33, 34, 40, 41],
    [32, 33, 39, 40],
    [31, 32, 38, 39],
    [30, 31, 37, 38],
    [23, 24, 30, 31],
    [16, 17, 23, 24],
    [9, 10, 16, 17],
    [2, 3, 9, 10],
    [3, 4, 10, 11],
];
