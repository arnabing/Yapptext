"use client";

import { useState, useRef, useEffect, ChangeEvent, DragEvent } from "react";
import { upload } from '@vercel/blob/client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Upload,
    Copy,
    AlertCircle,
    FileAudio,
    FileVideo,
    Clock,
    Play,
    PlayCircle,
    Plus,
    MoreVertical,
    Share,
    Languages,
    Check,
    Loader2,
    Mic,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { confettiPresets } from "@/components/confetti";
import { TranscriptView } from "@/components/TranscriptView";
import { LanguageSelector } from "@/components/LanguageSelector";
import { ScrollingWaveform } from "@/components/ui/waveform";
import { AudioControls } from "@/components/AudioControls";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getSampleTranscript } from "@/lib/sample-transcripts";
import { formatTranscriptAsPlainText, formatTranscriptAsHTML } from "@/lib/format-transcript";
import { isVideoFile, extractAudioFromVideo } from "@/lib/extract-audio";
import { PaywallModal } from "@/components/billing/PaywallModal";
import { ReverseTrialPopup } from "@/components/billing/ReverseTrialPopup";
import { useHeader } from "@/lib/header-context";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser, SignUpButton } from '@clerk/nextjs';
import { DotFlow, transcriptionFlowItems } from "@/components/ui/dot-flow";

type AppState = "idle" | "file-selected" | "processing" | "complete" | "error";

interface TranscriptionInterfaceProps {
    isDarkMode?: boolean;
}

export function TranscriptionInterface({ isDarkMode = true }: TranscriptionInterfaceProps = {}) {
    const { toast } = useToast();
    // Optional: Header context might not be available if used outside of the main app layout
    // We'll handle this gracefully
    const headerContext = useHeader();
    const setHeaderActions = headerContext?.setHeaderActions || (() => { });

    const searchParams = useSearchParams();
    const router = useRouter();
    const { isSignedIn } = useUser();
    const transcriptId = searchParams?.get('transcriptId');

    const [state, setState] = useState<AppState>("idle");
    const [file, setFile] = useState<File | null>(null);
    const [transcript, setTranscript] = useState("");
    const [utterances, setUtterances] = useState<any[]>([]);
    const [chapters, setChapters] = useState<any[]>([]);
    const [allWords, setAllWords] = useState<any[]>([]);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [processingTime, setProcessingTime] = useState(0);
    const [minutesUsed, setMinutesUsed] = useState(0);
    const [dailyLimit] = useState(20);
    const [statusMessage, setStatusMessage] = useState("");
    const [audioUrl, setAudioUrl] = useState("");
    const [audioFileName, setAudioFileName] = useState("");
    const [currentPlayTime, setCurrentPlayTime] = useState(0);
    const [isTranslating, setIsTranslating] = useState(false);
    const [originalTranscript, setOriginalTranscript] = useState("");
    const [originalUtterances, setOriginalUtterances] = useState<any[]>([]);
    const [currentLanguage, setCurrentLanguage] = useState("original");
    const [audioDuration, setAudioDuration] = useState(0); // in seconds
    const [estimatedTime, setEstimatedTime] = useState(0); // in seconds
    const [selectedModel, setSelectedModel] = useState<'nano' | 'universal'>('universal'); // Model selection
    const [showPaywall, setShowPaywall] = useState(false); // Paywall modal state
    const [showReverseTrial, setShowReverseTrial] = useState(false); // Reverse trial popup state
    const [remainingMinutes, setRemainingMinutes] = useState<number | null>(null); // User's remaining minutes
    const [copied, setCopied] = useState(false); // Copy button feedback state
    const [showWaveform, setShowWaveform] = useState(false); // Delay-based waveform visibility

    const fileInputRef = useRef<HTMLInputElement>(null);
    const processingTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Sample audio files with preloaded transcripts
    const sampleAudios = [
        {
            name: "I Have a Dream",
            id: "i_have_a_dream",
            file: "/samples/I Have a Dream.mp3",
            duration: "17 min",
            description: "MLK's historic speech",
        },
        {
            name: "Pulp Fiction",
            id: "pulp_fiction",
            file: "/samples/pulp_fiction.mp3",
            duration: "4 min",
            description: "Royale with Cheese scene",
        },
        {
            name: "Lil Wayne Deposition",
            id: "lil_wayne_deposition",
            file: "/samples/lil_wayne_deposition.mp3",
            duration: "5 min",
            description: "Legal deposition excerpt",
        },
    ];

    useEffect(() => {
        // Check usage limit on load
        fetch("/api/check-limit")
            .then((res) => res.json())
            .then((data) => {
                setMinutesUsed(data.minutesUsed || 0);
                setRemainingMinutes(data.remainingMinutes);
            })
            .catch(console.error);
    }, []);

    // Load saved transcript when transcriptId changes
    useEffect(() => {
        if (transcriptId) {
            loadSavedTranscript(transcriptId);
        } else {
            // Don't reset if we just finished processing (state is complete)
            // Only reset if we navigated here without an ID and we're not already showing something
            if (state !== "complete" && state !== "processing") {
                reset();
            }
        }
    }, [transcriptId]);

    // Waveform delay effect - show waveform after 2 seconds on idle state
    useEffect(() => {
        if (state === "idle") {
            const timer = setTimeout(() => {
                setShowWaveform(true);
            }, 2000); // 2 second delay

            return () => clearTimeout(timer);
        } else {
            // Hide waveform when not in idle state
            setShowWaveform(false);
        }
    }, [state]);

    const loadSavedTranscript = async (id: string) => {
        setState("processing");
        setStatusMessage("Loading transcript...");

        try {
            const response = await fetch(`/api/transcripts/${id}`);
            if (response.ok) {
                const data = await response.json();

                // Populate all state with saved data
                setTranscript(data.text);
                setOriginalTranscript(data.text);
                setUtterances(data.utterances || []);
                setOriginalUtterances(data.utterances || []);
                setChapters(data.chapters || []);
                setAllWords(data.words || []);
                setAudioUrl(data.audioUrl || '');
                setAudioDuration(data.duration);
                setAudioFileName(data.fileName || "Audio File");

                // Create a File object for display purposes
                const mockFile = new File([], data.fileName || "audio.mp3", { type: 'audio/mpeg' });
                setFile(mockFile);

                setState("complete");
            } else {
                setError('Transcript not found');
                setState('error');
            }
        } catch (error) {
            console.error('Failed to load transcript:', error);
            setError('Failed to load transcript');
            setState('error');
        }
    };

    // Register header actions when transcript is ready
    useEffect(() => {
        if (transcript && state === "complete") {
            setHeaderActions(
                <>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={copyToClipboard}
                        aria-label="Copy transcript"
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 sm:mr-2" />
                                <span className="hidden sm:inline">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4 sm:mr-2" />
                                <span className="hidden sm:inline">Copy</span>
                            </>
                        )}
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="sm"
                                variant="outline"
                                aria-label="More options"
                            >
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger disabled={isTranslating}>
                                    {isTranslating ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            Translating...
                                        </>
                                    ) : (
                                        <>
                                            <Languages className="h-4 w-4 mr-2" />
                                            Translate
                                        </>
                                    )}
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                    {[
                                        { value: 'original', label: 'Original', flag: '🔄' },
                                        { value: 'spanish', label: 'Spanish', flag: '🇪🇸' },
                                        { value: 'french', label: 'French', flag: '🇫🇷' },
                                        { value: 'german', label: 'German', flag: '🇩🇪' },
                                        { value: 'italian', label: 'Italian', flag: '🇮🇹' },
                                        { value: 'portuguese', label: 'Portuguese', flag: '🇵🇹' },
                                        { value: 'dutch', label: 'Dutch', flag: '🇳🇱' },
                                        { value: 'russian', label: 'Russian', flag: '🇷🇺' },
                                        { value: 'japanese', label: 'Japanese', flag: '🇯🇵' },
                                        { value: 'chinese', label: 'Chinese', flag: '🇨🇳' },
                                        { value: 'korean', label: 'Korean', flag: '🇰🇷' },
                                        { value: 'arabic', label: 'Arabic', flag: '🇸🇦' },
                                        { value: 'hindi', label: 'Hindi', flag: '🇮🇳' },
                                    ].map((language) => (
                                        <DropdownMenuItem
                                            key={language.value}
                                            onClick={() => handleTranslate(language.value)}
                                        >
                                            {currentLanguage === language.value && (
                                                <Check className="h-4 w-4 mr-2" />
                                            )}
                                            {currentLanguage !== language.value && (
                                                <span className="h-4 w-4 mr-2" />
                                            )}
                                            <span className="mr-2">{language.flag}</span>
                                            {language.label}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem onClick={reset}>
                                <Plus className="h-4 w-4 mr-2" />
                                New transcription
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            );
        } else {
            setHeaderActions(null);
        }
    }, [transcript, state, isTranslating, currentLanguage, copied]);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileSelect(files[0]);
        }
    };

    const handleFileSelect = (selectedFile: File) => {
        // Create URL for playback/metadata
        const url = URL.createObjectURL(selectedFile);
        setAudioUrl(url);
        setAudioFileName(selectedFile.name);

        // Detect if this is a video file
        const isVideo = isVideoFile(selectedFile);

        // Use appropriate media element for duration detection
        // Video element is needed for video-only containers like MOV, AVI, MKV
        const mediaElement = isVideo
            ? document.createElement('video')
            : new Audio(url);

        mediaElement.preload = 'metadata';
        if (isVideo) {
            (mediaElement as HTMLVideoElement).src = url;
        }

        mediaElement.addEventListener("loadedmetadata", () => {
            const duration = Math.round(mediaElement.duration); // duration in seconds

            // Check duration (10 hours max for AssemblyAI)
            const maxDurationHours = 10;
            const maxDurationSeconds = maxDurationHours * 3600;
            if (duration > maxDurationSeconds) {
                const durationHours = (duration / 3600).toFixed(1);
                setError(
                    `File duration (${durationHours} hours) exceeds ${maxDurationHours}-hour limit.`
                );
                setState("error");
                return;
            }

            setAudioDuration(duration);
            // Estimate processing time: ~0.5 seconds per minute of audio (based on AssemblyAI benchmarks)
            // Add extra time for video files due to audio extraction
            const extraTime = isVideo ? 10 : 0;
            const estimatedProcessingTime = Math.max(
                10,
                Math.round((duration * 0.5) / 60) + extraTime,
            );
            setEstimatedTime(estimatedProcessingTime);
        });

        // Fallback for files that can't be decoded (e.g., unsupported codecs)
        mediaElement.addEventListener("error", () => {
            console.warn("Could not read media metadata, using file size estimate");
            // Estimate: ~1 min per 10MB for video, ~1 min per 1MB for audio
            const estimatedMinutes = isVideo
                ? Math.ceil(selectedFile.size / (10 * 1024 * 1024))
                : Math.ceil(selectedFile.size / (1024 * 1024));
            setAudioDuration(estimatedMinutes * 60);
            setEstimatedTime(Math.max(10, estimatedMinutes));
        });

        const validTypes = [
            // Audio types
            "audio/mp3",
            "audio/mpeg",
            "audio/wav",
            "audio/wave",
            "audio/x-wav",
            "audio/m4a",
            "audio/x-m4a",
            "audio/webm",
            "audio/mp4",
            // Video types (will be converted to audio)
            "video/mp4",
            "video/webm",
            "video/quicktime",
            "video/x-msvideo",
            "video/x-matroska",
        ];

        if (
            !validTypes.includes(selectedFile.type) &&
            !selectedFile.name.match(/\.(mp3|wav|m4a|webm|mp4|mov|avi|mkv)$/i)
        ) {
            setError(
                "Please upload a valid audio or video file (MP3, WAV, M4A, MP4, MOV, AVI, or MKV)",
            );
            setState("error");
            return;
        }

        // Check file size (2GB limit for AssemblyAI upload endpoint)
        const maxSizeGB = 2;
        const maxSizeBytes = maxSizeGB * 1024 * 1024 * 1024;
        if (selectedFile.size > maxSizeBytes) {
            const fileSizeGB = (selectedFile.size / (1024 * 1024 * 1024)).toFixed(2);
            setError(
                `File size (${fileSizeGB}GB) exceeds ${maxSizeGB}GB limit. Please use a smaller file.`,
            );
            setState("error");
            return;
        }

        setFile(selectedFile);
        setState("file-selected");
        setError("");
    };

    const processFile = async () => {
        if (!file) return;

        console.log("\n=== STARTING FILE PROCESSING ===");
        console.log("File:", file.name);
        console.log("Size:", (file.size / 1024 / 1024).toFixed(2), "MB");
        console.log("Type:", file.type);
        console.log("Audio duration:", audioDuration, "seconds");
        console.log("Estimated processing time:", estimatedTime, "seconds");

        if (minutesUsed >= dailyLimit) {
            setError("Daily limit reached. Please try again tomorrow.");
            setState("error");
            return;
        }

        setState("processing");
        setProgress(0);
        setProcessingTime(0);

        processingTimerRef.current = setInterval(() => {
            setProcessingTime((prev) => prev + 1);
        }, 1000);

        try {
            // Step 0: Extract audio from video files (if applicable)
            let fileToUpload = file;
            const isVideo = isVideoFile(file);

            if (isVideo) {
                setStatusMessage("Extracting audio from video...");
                setProgress(2);

                try {
                    console.log("Extracting audio from video file...");
                    fileToUpload = await extractAudioFromVideo(file, (progress, message) => {
                        // Map extraction progress (0-1) to 2-35%
                        const mappedProgress = 2 + Math.round(progress * 33);
                        setProgress(mappedProgress);
                        setStatusMessage(message);
                    });
                    console.log("Audio extracted:", fileToUpload.name, (fileToUpload.size / 1024 / 1024).toFixed(2), "MB");
                    setProgress(35);
                } catch (extractionError) {
                    console.error("Audio extraction failed:", extractionError);
                    setError("Failed to extract audio from video. Please try uploading an audio file directly.");
                    setState("error");
                    if (processingTimerRef.current) {
                        clearInterval(processingTimerRef.current);
                    }
                    return;
                }
            }

            // Step 1: Upload file to Vercel Blob for fast, direct upload
            setStatusMessage("Uploading audio to cloud storage...");

            // Add timestamp to filename to ensure uniqueness
            const timestamp = Date.now();
            const uniqueFilename = `${timestamp}-${fileToUpload.name}`;

            // Adjust progress range based on whether we extracted audio
            const uploadProgressStart = isVideo ? 35 : 0;
            const uploadProgressEnd = isVideo ? 55 : 40;

            const blob = await upload(uniqueFilename, fileToUpload, {
                access: 'public',
                handleUploadUrl: '/api/upload',
                onUploadProgress: (event) => {
                    if (event.loaded && event.total) {
                        // Map upload progress to appropriate range based on whether we extracted audio
                        const uploadRange = uploadProgressEnd - uploadProgressStart;
                        const percentComplete = uploadProgressStart + Math.round((event.loaded / event.total) * uploadRange);
                        setProgress(percentComplete);
                        console.log(
                            `Upload progress: ${percentComplete}% (${(event.loaded / 1024 / 1024).toFixed(2)}MB / ${(event.total / 1024 / 1024).toFixed(2)}MB)`,
                        );
                    }
                },
            });

            console.log('File uploaded to blob:', blob.url);
            const permanentBlobUrl = blob.url;
            setAudioUrl(permanentBlobUrl);

            setProgress(uploadProgressEnd);
            setStatusMessage("Processing audio with AI...");

            // Step 2: Send the blob URL to our transcribe endpoint
            const formData = new FormData();
            formData.append("audioUrl", blob.url);
            formData.append("fileName", file.name);
            formData.append("fileSize", file.size.toString());
            formData.append("model", selectedModel); // Send model selection
            formData.append("enableSentiment", "false"); // Disabled for speed
            formData.append("enableKeyPhrases", "false"); // Disabled for speed

            // Send duration from metadata for accurate quota checking
            if (audioDuration) {
                const durationMinutes = Math.ceil(audioDuration / 60);
                formData.append("durationMinutes", durationMinutes.toString());
            }

            // Submit transcription job (returns immediately with transcript ID)
            console.log("Submitting transcription job...");
            const submitResponse = await fetch('/api/transcribe', {
                method: 'POST',
                body: formData
            });

            if (!submitResponse.ok) {
                const errorData = await submitResponse.json();
                // Check for usage limit or auth errors (status 429)
                if (submitResponse.status === 429) {
                    if (errorData.requiresAuth) {
                        // Anonymous user hit their limit - need to sign up
                        setShowPaywall(true);
                    } else if (errorData.requiresUpgrade) {
                        // Authenticated user hit their tier limit - show paywall
                        setShowPaywall(true);
                    }
                }
                throw new Error(errorData.error || `Failed to submit job: ${submitResponse.status}`);
            }

            const submitData = await submitResponse.json();
            const transcriptId = submitData.transcriptId;
            console.log("Job submitted with ID:", transcriptId);

            // After upload completes, show processing status
            console.log("Upload complete, polling for transcription status...");
            setProgress(40); // Upload complete, now processing
            setStatusMessage("Processing transcript...");

            // Calculate progress based on estimated time and poll status
            const startProcessingTime = Date.now();
            const progressInterval = setInterval(() => {
                const elapsed = (Date.now() - startProcessingTime) / 1000;
                const progress = Math.min(95, 40 + (elapsed / estimatedTime) * 55); // 40-95% for processing
                setProgress(Math.round(progress));
                console.log(
                    `Processing: ${Math.round(elapsed)}s elapsed, progress: ${Math.round(progress)}%`,
                );
            }, 2000); // Log every 2 seconds

            // Poll for status every 3 seconds
            let data: any = null;
            let pollAttempts = 0;
            const maxPollAttempts = 60; // 3 minutes max (60 * 3 seconds)

            while (!data && pollAttempts < maxPollAttempts) {
                await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
                pollAttempts++;

                console.log(`Polling attempt ${pollAttempts}...`);

                // Build status check URL with metadata for usage logging
                const statusUrl = new URL(`/api/transcribe-status/${transcriptId}`, window.location.origin);
                if (submitData.metadata?.userId) {
                    statusUrl.searchParams.set('userId', submitData.metadata.userId);
                }
                if (submitData.metadata?.isSample !== undefined) {
                    statusUrl.searchParams.set('isSample', String(submitData.metadata.isSample));
                }
                if (submitData.metadata?.audioUrl) {
                    statusUrl.searchParams.set('audioUrl', submitData.metadata.audioUrl);
                }
                if (submitData.model) {
                    statusUrl.searchParams.set('model', submitData.model);
                }

                const statusResponse = await fetch(statusUrl.toString());

                if (!statusResponse.ok) {
                    console.error('Status check failed:', statusResponse.status);
                    continue; // Try again
                }

                const statusData = await statusResponse.json();
                console.log('Current status:', statusData.status);
                console.log('Status response:', JSON.stringify(statusData, null, 2));

                if (statusData.status === 'completed') {
                    data = statusData;
                    break;
                } else if (statusData.status === 'error') {
                    clearInterval(progressInterval);
                    throw new Error(statusData.error || 'Transcription failed');
                }
                // Otherwise keep polling (queued or processing)
            }

            clearInterval(progressInterval);

            if (!data) {
                throw new Error('Transcription timed out after 3 minutes');
            }

            // Validate we got transcript data
            if (!data.text) {
                console.error('ERROR: Polling completed but no text received:', data);
                throw new Error('Transcription completed but no transcript text received');
            }

            const totalTime = (Date.now() - startProcessingTime) / 1000;
            console.log("\n=== TRANSCRIPTION COMPLETE ===");
            console.log("Total processing time:", totalTime.toFixed(1), "seconds");
            console.log("Text length:", data.text?.length || 0, "characters");
            console.log("Words:", data.allWords?.length || 0);
            console.log("Utterances:", data.utterances?.length || 0);
            console.log(
                "Speakers:",
                data.utterances
                    ? new Set(data.utterances.map((u: any) => u.speaker)).size
                    : 0,
            );
            console.log("All words for highlighting:", data.allWords?.length || 0);
            console.log(
                "Sentiment analysis:",
                data.sentimentAnalysis ? "Available" : "Not available",
            );
            console.log("Key phrases:", data.keyPhrases?.length || 0);

            setProgress(100);
            setTranscript(data.text);
            setOriginalTranscript(data.text); // Store original for translation
            setUtterances(data.utterances || []);
            setOriginalUtterances(data.utterances || []); // Store original utterances
            setChapters(data.chapters || []);
            setAllWords(data.allWords || []);
            setMinutesUsed(data.minutesUsed || minutesUsed + data.duration);
            setState("complete");

            // Show success toast for all users
            const speakerCount =
                data.utterances?.length > 0
                    ? new Set(data.utterances.map((u: any) => u.speaker)).size
                    : 0;

            toast({
                title: "✨ Transcript ready!",
                description: `Successfully transcribed ${data.allWords?.length || data.text?.split(" ").length || 0} words${speakerCount > 0 ? ` with ${speakerCount} speaker${speakerCount > 1 ? "s" : ""} detected` : ""}`,
            });

            // Trigger confetti after a short delay
            setTimeout(() => {
                console.log("Triggering confetti...");
                try {
                    confettiPresets.success();
                    console.log("Confetti triggered successfully");
                } catch (error) {
                    console.error("Confetti error:", error);
                }
            }, 100);

            if (processingTimerRef.current) {
                clearInterval(processingTimerRef.current);
            }
        } catch (err) {
            if (processingTimerRef.current) {
                clearInterval(processingTimerRef.current);
            }

            setError(err instanceof Error ? err.message : "Something went wrong");
            setState("error");
            setProgress(0);
        }
    };

    const handleTranslate = async (targetLanguage: string) => {
        if (!originalTranscript) return;

        // Handle returning to original
        if (targetLanguage === "original") {
            setTranscript(originalTranscript);
            setUtterances(originalUtterances);
            setCurrentLanguage("original");
            toast({
                title: "Returned to original",
                description: "Showing original transcript",
            });
            return;
        }

        setIsTranslating(true);

        try {
            const response = await fetch("/api/translate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    text: originalTranscript,
                    utterances: originalUtterances,
                    targetLanguage,
                }),
            });

            const data = await response.json();

            if (data.error) {
                toast({
                    title: "Translation failed",
                    description: data.error,
                    variant: "destructive",
                });
            } else {
                // Update all state together
                setTranscript(data.translatedText);
                setCurrentLanguage(targetLanguage);

                // Use translated utterances if available, otherwise clear
                if (data.translatedUtterances && data.translatedUtterances.length > 0) {
                    // Create new array to ensure React detects the change
                    setUtterances([...data.translatedUtterances]);
                } else {
                    setUtterances([]);
                }
                toast({
                    title: "✨ Translation complete!",
                    description: `Translated to ${targetLanguage} ${data.translatedUtterances ? "with speaker segments preserved" : ""}`,
                });
            }
        } catch (error) {
            console.error("Translation error:", error);
            toast({
                title: "Translation error",
                description: "Failed to translate transcript",
                variant: "destructive",
            });
        } finally {
            setIsTranslating(false);
        }
    };

    const copyToClipboard = async () => {
        try {
            const plainText = utterances && utterances.length > 0
                ? formatTranscriptAsPlainText(utterances, transcript)
                : transcript;

            const htmlText = utterances && utterances.length > 0
                ? formatTranscriptAsHTML(utterances, transcript)
                : `<div>${transcript.replace(/\n/g, '<br>')}</div>`;

            let copySuccess = false;

            // Try modern API with both HTML and plain text formats
            if (navigator.clipboard?.write && window.isSecureContext) {
                try {
                    const htmlBlob = new Blob([htmlText], { type: 'text/html' });
                    const plainBlob = new Blob([plainText], { type: 'text/plain' });

                    await navigator.clipboard.write([
                        new ClipboardItem({
                            'text/html': htmlBlob,
                            'text/plain': plainBlob
                        })
                    ]);
                    copySuccess = true;
                } catch (e) {
                    console.log('ClipboardItem API failed, falling back to writeText:', e);
                }
            }

            // Fallback to writeText for plain text only
            if (!copySuccess && navigator.clipboard?.writeText) {
                try {
                    await navigator.clipboard.writeText(plainText);
                    copySuccess = true;
                } catch (e) {
                    console.log('writeText failed, falling back to execCommand:', e);
                }
            }

            // Legacy fallback for older browsers or non-HTTPS
            if (!copySuccess) {
                const textarea = document.createElement('textarea');
                textarea.value = plainText;
                textarea.style.position = 'fixed';
                textarea.style.left = '-999999px';
                textarea.style.top = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    copySuccess = true;
                } catch (e) {
                    console.error('All copy methods failed:', e);
                    toast({
                        title: "Copy failed",
                        description: "Please try selecting and copying the text manually",
                        variant: "destructive",
                    });
                } finally {
                    textarea.remove();
                }
            }

            if (copySuccess) {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            }
        } catch (err) {
            console.error("Failed to copy:", err);
            toast({
                title: "Copy failed",
                description: "Please try selecting and copying the text manually",
                variant: "destructive",
            });
        }
    };

    const reset = () => {
        setState("idle");
        setFile(null);
        setTranscript("");
        setOriginalTranscript("");
        setUtterances([]);
        setChapters([]);
        setAllWords([]);
        setProgress(0);
        setError("");
        setProcessingTime(0);
        setAudioUrl("");
        setAudioFileName("");
        setCurrentPlayTime(0);
        setIsTranslating(false);
        setCurrentLanguage("original");
        setAudioDuration(0);
        setEstimatedTime(0);
        setStatusMessage("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        // Clear sessionStorage to prevent demo transcript from persisting
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('demoTranscript');
        }
    };

    const getFileSize = (bytes: number) => {
        if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(1)} KB`;
        }
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const handleTimeUpdate = (time: number) => {
        setCurrentPlayTime(time);
    };

    return (
        <>
            {/* Centered content for non-transcript states */}
            {state !== "complete" && (
                <div className="w-full max-w-3xl mx-auto">
                    <Card className="w-full border-0 shadow-none bg-transparent">
                        <CardContent className="p-0 space-y-6">
                            {/* Upload Zone - State-based rendering */}
                            {state === "idle" && (
                                <>
                                    <div
                                        className={`group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${isDarkMode ? 'bg-[#0A0A0A]' : 'bg-white'
                                            } border ${isDragging
                                                ? isDarkMode ? 'border-purple-400/50' : 'border-purple-300/60'
                                                : isDarkMode ? 'border-purple-400/30' : 'border-purple-300/30'
                                            }`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                    >
                                        {/* Aurora effect - fades in with waveform */}
                                        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${showWaveform ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <div className={`absolute inset-0 ${isDarkMode ? 'aura-bg' : 'aura-bg-light'}`} />
                                        </div>

                                        {/* Dotted grid background */}
                                        <div
                                            className="absolute inset-0 opacity-30 pointer-events-none z-[1]"
                                            style={{
                                                backgroundImage: 'radial-gradient(#888 1px, transparent 1px)',
                                                backgroundSize: '20px 20px',
                                            }}
                                        />

                                        {/* Canvas waveform animation - fades in after 2 second delay */}
                                        <div className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000 ${showWaveform ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <ScrollingWaveform
                                                speed={30}
                                                barWidth={3}
                                                barGap={2}
                                                barRadius={2}
                                                height="100%"
                                                barColor={isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}
                                                fadeEdges={true}
                                                fadeWidth={40}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative p-12 md:p-16 z-20">
                                            {/* Icon & Text */}
                                            <div className="flex flex-col items-center space-y-6 mb-8">
                                                {/* Upload Icon */}
                                                <div
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-transform hover:scale-105 duration-300 cursor-pointer ${isDarkMode
                                                        ? 'bg-gradient-to-br from-brand-500 to-orange-500 shadow-lg'
                                                        : 'bg-[#F56040] shadow-[0_10px_40px_-10px_rgba(245,96,64,0.4)]'
                                                        }`}>
                                                    <Upload className="h-10 w-10 text-white" />
                                                </div>

                                                {/* Text */}
                                                <div className="text-center space-y-2">
                                                    <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                                                        Drop audio file here
                                                    </h3>
                                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                                                        wav, mp3, m4a supported up to 50MB
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex gap-4 mb-8">
                                                <button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className={`flex-1 rounded-xl shadow-lg py-3 font-medium text-sm border border-transparent transition-all ${isDarkMode
                                                        ? 'bg-white text-black hover:bg-gray-100'
                                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                                        }`}
                                                >
                                                    Browse Files
                                                </button>
                                                <button className={`px-6 rounded-xl font-medium text-sm border py-3 transition-all flex items-center justify-center ${isDarkMode
                                                    ? 'bg-[#111] text-white border-white/10 hover:bg-[#222]'
                                                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                                                    }`}>
                                                    <Mic className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="audio/*,video/*,.mp3,.wav,.m4a,.webm,.mp4,.mov,.avi,.mkv"
                                                onChange={handleFileInputChange}
                                                className="hidden"
                                            />

                                            {/* Divider */}
                                            <div className="w-full flex items-center gap-4 mb-6 opacity-50">
                                                <div className={`h-px flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
                                                <span className="text-xs uppercase tracking-widest">or try a sample</span>
                                                <div className={`h-px flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
                                            </div>

                                            {/* Sample Buttons */}
                                            <div className="flex flex-wrap justify-center gap-3">
                                                {sampleAudios.map((sample, idx) => (
                                                    <button
                                                        key={idx}
                                                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${isDarkMode
                                                            ? 'bg-[#111] border-white/10 hover:border-brand-500/50 hover:text-brand-400 text-gray-400'
                                                            : 'bg-slate-50 border-slate-200 hover:border-brand-500/50 hover:text-brand-600 text-slate-600'
                                                            }`}
                                                        onClick={async () => {
                                                            console.log("Loading sample:", sample.name);

                                                            // Check if we have a preloaded transcript for this sample
                                                            const sampleTranscript = getSampleTranscript(
                                                                sample.id,
                                                            );

                                                            if (sampleTranscript) {
                                                                // Use preloaded transcript for a seamless experience
                                                                setState("processing");
                                                                setProgress(0);
                                                                setStatusMessage("Loading sample...");
                                                                setProcessingTime(0);

                                                                // Start processing timer for realism
                                                                processingTimerRef.current = setInterval(() => {
                                                                    setProcessingTime((prev) => prev + 1);
                                                                }, 1000);

                                                                // Create a File object for the sample to show filename
                                                                const sampleFile = new File(
                                                                    [],
                                                                    `${sample.name}.mp3`,
                                                                    { type: "audio/mpeg" }
                                                                );
                                                                setFile(sampleFile);

                                                                // Set audio URL for playback
                                                                setAudioUrl(sample.file);
                                                                setAudioFileName(sampleFile.name);
                                                                setAudioDuration(
                                                                    sampleTranscript.transcript.duration,
                                                                );

                                                                // Simulate processing with realistic progress
                                                                let currentProgress = 0;
                                                                const progressInterval = setInterval(() => {
                                                                    currentProgress += 20;
                                                                    setProgress(Math.min(currentProgress, 90));

                                                                    if (currentProgress >= 40) {
                                                                        setStatusMessage(
                                                                            "Processing transcript...",
                                                                        );
                                                                    }
                                                                    if (currentProgress >= 70) {
                                                                        setStatusMessage("Analyzing speakers...");
                                                                    }

                                                                    if (currentProgress >= 100) {
                                                                        clearInterval(progressInterval);
                                                                        if (processingTimerRef.current) {
                                                                            clearInterval(processingTimerRef.current);
                                                                        }

                                                                        setProgress(100);

                                                                        // Store sample data in sessionStorage for all users
                                                                        if (typeof window !== 'undefined') {
                                                                            sessionStorage.setItem('demoTranscript', JSON.stringify({
                                                                                title: sample.name,
                                                                                text: sampleTranscript.transcript.text,
                                                                                fileName: `${sample.name}.mp3`,
                                                                                duration: sampleTranscript.transcript.duration,
                                                                                audioUrl: sample.file,
                                                                                utterances: sampleTranscript.transcript.utterances || [],
                                                                                chapters: sampleTranscript.transcript.chapters || [],
                                                                                words: sampleTranscript.transcript.allWords || [],
                                                                            }));
                                                                        }

                                                                        // If user is signed in, save to database and redirect
                                                                        if (isSignedIn) {
                                                                            (async () => {
                                                                                try {
                                                                                    setStatusMessage("Saving transcript...");

                                                                                    const response = await fetch('/api/transcripts', {
                                                                                        method: 'POST',
                                                                                        headers: {
                                                                                            'Content-Type': 'application/json',
                                                                                        },
                                                                                        body: JSON.stringify({
                                                                                            title: sample.name,
                                                                                            text: sampleTranscript.transcript.text,
                                                                                            fileName: `${sample.name}.mp3`,
                                                                                            duration: sampleTranscript.transcript.duration,
                                                                                            audioUrl: sample.file,
                                                                                            utterances: sampleTranscript.transcript.utterances || [],
                                                                                            chapters: sampleTranscript.transcript.chapters || [],
                                                                                            words: sampleTranscript.transcript.allWords || [],
                                                                                        }),
                                                                                    });

                                                                                    if (response.ok) {
                                                                                        const savedTranscript = await response.json();

                                                                                        toast({
                                                                                            title: "✨ Sample loaded!",
                                                                                            description: "Explore the transcript features.",
                                                                                        });

                                                                                        confettiPresets.success();

                                                                                        // Redirect to the saved transcript view in the app
                                                                                        router.push(`/t/${savedTranscript.id}`);
                                                                                    }
                                                                                } catch (error) {
                                                                                    console.error('Failed to save sample transcript:', error);
                                                                                }
                                                                            })();
                                                                        } else {
                                                                            // Guest user - redirect to /new to show sample in app with sidebar
                                                                            toast({
                                                                                title: "✨ Sample loaded!",
                                                                                description: "Sign up to save this transcript.",
                                                                            });

                                                                            confettiPresets.success();

                                                                            router.push(`/new?sample=${sample.id}`);
                                                                        }
                                                                    }
                                                                }, 500);
                                                            }
                                                        }}
                                                    >
                                                        <Play size={10} fill="currentColor" />
                                                        {sample.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* File Selected State */}
                            {state === "file-selected" && file && (
                                <div className="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm text-center">
                                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        {isVideoFile(file) ? (
                                            <FileVideo className="h-8 w-8 text-primary" />
                                        ) : (
                                            <FileAudio className="h-8 w-8 text-primary" />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">{file.name}</h3>
                                    <p className="text-sm text-gray-400 mb-6">
                                        {getFileSize(file.size)} • {estimatedTime > 0 ? `~${Math.ceil(estimatedTime / 60)} min processing` : 'Calculating...'}
                                    </p>

                                    <div className="flex gap-3 justify-center">
                                        <Button
                                            variant="outline"
                                            onClick={reset}
                                            className="border-white/10 text-white hover:bg-white/10"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={processFile}
                                            className="bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20"
                                        >
                                            Start Transcription
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Processing State */}
                            {state === "processing" && (
                                <div className="flex flex-col items-center gap-6 py-8">
                                    <DotFlow
                                        items={transcriptionFlowItems}
                                        isPlaying={true}
                                    />

                                    <div className="w-full max-w-xs space-y-3">
                                        <Progress value={progress} className="h-2" />
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>
                                                    {processingTime > 0 && `${processingTime}s elapsed`}
                                                </span>
                                            </div>
                                            {estimatedTime > 0 && processingTime < estimatedTime && (
                                                <span>
                                                    ~{Math.max(0, estimatedTime - processingTime)}s remaining
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Error State */}
                            {state === "error" && (
                                <div className="border border-red-500/20 rounded-xl p-8 bg-red-500/5 backdrop-blur-sm text-center">
                                    <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                                        <AlertCircle className="h-8 w-8 text-red-500" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">Transcription Failed</h3>
                                    <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
                                        {error}
                                    </p>

                                    <Button
                                        onClick={reset}
                                        variant="outline"
                                        className="border-white/10 text-white hover:bg-white/10"
                                    >
                                        Try Again
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Completed State - Full Width Transcript View */}
            {state === "complete" && (
                <div className="space-y-6 animate-in fade-in duration-500">
                    {/* Audio Player */}
                    <div className="sticky top-14 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b pb-4 pt-2 -mx-4 px-4 md:-mx-8 md:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="font-semibold truncate pr-4 text-foreground">
                                    {audioFileName}
                                </h2>
                                <Badge variant="secondary" className="shrink-0">
                                    {utterances.length > 0
                                        ? `${new Set(utterances.map((u: any) => u.speaker)).size} Speakers`
                                        : 'No speakers detected'}
                                </Badge>
                            </div>
                            <AudioControls
                                audioUrl={audioUrl}
                                fileName={audioFileName}
                                onTimeUpdate={handleTimeUpdate}
                            />
                        </div>
                    </div>

                    {/* Transcript Content */}
                    <div className="max-w-4xl mx-auto pb-20">
                        <TranscriptView
                            fullText={transcript}
                            utterances={utterances}
                            currentTime={currentPlayTime}
                            chapters={chapters}
                            words={allWords}
                        />

                        {/* Sign up CTA for guest users */}
                        {!isSignedIn && (
                            <div className="mt-8">
                                <Alert className="border-primary/50 bg-primary/5">
                                    <AlertDescription className="flex items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <p className="font-medium text-foreground mb-1">Love what you see?</p>
                                            <p className="text-sm text-muted-foreground">Sign up to save this transcript and create your own</p>
                                        </div>
                                        <SignUpButton mode="modal">
                                            <Button className="shrink-0">
                                                Sign Up to Save
                                            </Button>
                                        </SignUpButton>
                                    </AlertDescription>
                                </Alert>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <PaywallModal
                open={showPaywall}
                onOpenChange={setShowPaywall}
            />

            <ReverseTrialPopup
                open={showReverseTrial}
                onOpenChange={setShowReverseTrial}
            />
        </>
    );
}
