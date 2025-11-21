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
    Clock,
    PlayCircle,
    Plus,
    MoreVertical,
    Share,
    Languages,
    Check,
    Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { confettiPresets } from "@/components/confetti";
import { TranscriptView } from "@/components/TranscriptView";
import { LanguageSelector } from "@/components/LanguageSelector";
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
import { PaywallModal } from "@/components/billing/PaywallModal";
import { ReverseTrialPopup } from "@/components/billing/ReverseTrialPopup";
import { useHeader } from "@/lib/header-context";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from '@clerk/nextjs';

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
    const [hasScrolled, setHasScrolled] = useState(false); // Track if user has scrolled (for mobile aurora effect)

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

    // Scroll detection for mobile aurora effect
    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (!isMobile) return; // Only track on mobile

        const handleScroll = () => {
            if (!hasScrolled && window.scrollY > 0) {
                setHasScrolled(true);
                // Remove listener after first scroll
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

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
        // Create audio URL for playback
        const url = URL.createObjectURL(selectedFile);
        setAudioUrl(url);
        setAudioFileName(selectedFile.name);

        // Get audio duration for time estimation
        const audio = new Audio(url);
        audio.addEventListener("loadedmetadata", () => {
            const duration = Math.round(audio.duration); // duration in seconds

            // Check duration (10 hours max for AssemblyAI)
            const maxDurationHours = 10;
            const maxDurationSeconds = maxDurationHours * 3600;
            if (duration > maxDurationSeconds) {
                const durationHours = (duration / 3600).toFixed(1);
                setError(
                    `Audio duration (${durationHours} hours) exceeds ${maxDurationHours}-hour limit.`
                );
                setState("error");
                return;
            }

            setAudioDuration(duration);
            // Estimate processing time: ~0.5 seconds per minute of audio (based on AssemblyAI benchmarks)
            const estimatedProcessingTime = Math.max(
                10,
                Math.round((duration * 0.5) / 60),
            );
            setEstimatedTime(estimatedProcessingTime);
        });

        const validTypes = [
            "audio/mp3",
            "audio/mpeg",
            "audio/wav",
            "audio/wave",
            "audio/x-wav",
            "audio/m4a",
            "audio/x-m4a",
            "audio/webm",
            "audio/mp4",
        ];

        if (
            !validTypes.includes(selectedFile.type) &&
            !selectedFile.name.match(/\.(mp3|wav|m4a|webm|mp4)$/i)
        ) {
            setError(
                "Please upload a valid audio file (MP3, WAV, M4A, WebM, or MP4)",
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
        setStatusMessage("Uploading audio...");

        processingTimerRef.current = setInterval(() => {
            setProcessingTime((prev) => prev + 1);
        }, 1000);

        try {
            // Step 1: Upload file to Vercel Blob for fast, direct upload
            setStatusMessage("Uploading audio to cloud storage...");

            // Add timestamp to filename to ensure uniqueness
            const timestamp = Date.now();
            const uniqueFilename = `${timestamp}-${file.name}`;

            const blob = await upload(uniqueFilename, file, {
                access: 'public',
                handleUploadUrl: '/api/upload',
                onUploadProgress: (event) => {
                    if (event.loaded && event.total) {
                        const percentComplete = Math.round((event.loaded / event.total) * 40); // 0-40% for upload
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

            setProgress(40);
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

            // Use XMLHttpRequest for processing progress
            const xhr = new XMLHttpRequest();

            const uploadPromise = new Promise<any>((resolve, reject) => {
                // No need for upload progress here since blob upload handles it

                xhr.addEventListener("load", () => {
                    if (xhr.status === 200) {
                        try {
                            const data = JSON.parse(xhr.responseText);
                            resolve(data);
                        } catch (e) {
                            reject(new Error("Invalid response format"));
                        }
                    } else {
                        try {
                            const errorData = JSON.parse(xhr.responseText);
                            // Check for usage limit or auth errors (status 429)
                            if (xhr.status === 429) {
                                if (errorData.requiresAuth) {
                                    // Anonymous user hit their limit - need to sign up
                                    setShowPaywall(true);
                                } else if (errorData.requiresUpgrade) {
                                    // Authenticated user hit their tier limit - show paywall
                                    setShowPaywall(true);
                                }
                            }
                            reject(
                                new Error(
                                    errorData.error || `Request failed with status ${xhr.status}`,
                                ),
                            );
                        } catch {
                            reject(new Error(`Request failed with status ${xhr.status}`));
                        }
                    }
                });

                xhr.addEventListener("error", () => {
                    reject(new Error("Network error occurred. Please try again."));
                });

                xhr.addEventListener("timeout", () => {
                    reject(
                        new Error("Request timed out. Please try with a smaller file."),
                    );
                });

                xhr.open("POST", "/api/transcribe");
                xhr.timeout = 120000; // 2 minutes timeout
                xhr.send(formData);
            });

            // After upload completes, show processing status
            console.log("Upload complete, starting transcription processing...");
            setProgress(40); // Upload complete, now processing
            setStatusMessage("Processing transcript...");

            // Calculate progress based on estimated time
            const startProcessingTime = Date.now();
            const progressInterval = setInterval(() => {
                const elapsed = (Date.now() - startProcessingTime) / 1000;
                const progress = Math.min(95, 40 + (elapsed / estimatedTime) * 55); // 40-95% for processing
                setProgress(Math.round(progress));
                console.log(
                    `Processing: ${Math.round(elapsed)}s elapsed, progress: ${Math.round(progress)}%`,
                );
            }, 2000); // Log every 2 seconds

            const data = await uploadPromise;
            clearInterval(progressInterval);

            const totalTime = (Date.now() - startProcessingTime) / 1000;
            console.log("\n=== TRANSCRIPTION COMPLETE ===");
            console.log("Total processing time:", totalTime.toFixed(1), "seconds");
            console.log("Text length:", data.text?.length || 0, "characters");
            console.log("Words:", data.words || 0);
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

            // Save transcript to database
            try {
                // Generate title from filename instead of transcript text
                const baseTitle = file?.name.replace(/\.[^/.]+$/, '') || 'Untitled'; // Remove extension
                const title = baseTitle.length > 50 ? baseTitle.slice(0, 50) + '...' : baseTitle;
                const response = await fetch('/api/transcripts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title,
                        text: data.text,
                        fileName: file.name,
                        duration: Math.floor(audioDuration),
                        audioUrl: permanentBlobUrl,
                        utterances: data.utterances || [],
                        chapters: data.chapters || [],
                        words: data.allWords || [],
                    }),
                });

                if (response.ok) {
                    const savedTranscript = await response.json();

                    // Check if this was a duplicate
                    if (savedTranscript.isDuplicate) {
                        toast({
                            title: "Duplicate file detected",
                            description: "This file was recently transcribed. Opening existing transcript.",
                        });
                    }

                    // Navigate to the saved transcript to update sidebar and URL
                    // But since we are in the landing page component, we might want to just update the URL without full nav
                    // Or if we are in the app, we push.
                    // For now, let's push to the query param
                    router.push(`/?transcriptId=${savedTranscript.id}`);
                }
            } catch (error) {
                console.error('Failed to save transcript:', error);
                // Don't show error to user - this is a background operation
            }

            // Show success toast
            const speakerCount =
                data.utterances?.length > 0
                    ? new Set(data.utterances.map((u: any) => u.speaker)).size
                    : 0;

            toast({
                title: "✨ Transcript ready!",
                description: `Successfully transcribed ${data.words || data.text.split(" ").length} words${speakerCount > 0 ? ` with ${speakerCount} speaker${speakerCount > 1 ? "s" : ""} detected` : ""}`,
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
                                        className={`group relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 border ${isDragging
                                                ? "border-brand-500/50 bg-[#0A0A0A]"
                                                : "bg-[#0A0A0A] border-white/10"
                                            }`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                    >
                                        {/* Aurora background effect */}
                                        <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${hasScrolled ? 'opacity-100 animate-pulse md:opacity-0' : 'opacity-0'} md:group-hover:opacity-100`}>
                                            <div className="absolute inset-0 aura-bg animate-aurora" />
                                        </div>

                                        {/* Dotted grid background */}
                                        <div
                                            className="absolute inset-0 opacity-30 pointer-events-none z-10"
                                            style={{
                                                backgroundImage: 'radial-gradient(#888 1px, transparent 1px)',
                                                backgroundSize: '20px 20px',
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative p-12 md:p-16 z-20">
                                            {/* Icon & Text */}
                                            <div className="flex flex-col items-center space-y-6 mb-8">
                                                {/* Upload Icon */}
                                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-orange-500 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                                                    <Upload className="h-10 w-10 text-white" />
                                                </div>

                                                {/* Text */}
                                                <div className="text-center space-y-2">
                                                    <h3 className="text-2xl font-bold text-white">
                                                        Drop audio file here
                                                    </h3>
                                                    <p className="text-sm text-gray-400">
                                                        wav, mp3, m4a supported up to 50MB
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex gap-4 mb-8">
                                                <button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="flex-1 rounded-xl shadow-sm bg-white text-black hover:bg-gray-100 py-3 font-medium text-sm border border-transparent transition-all"
                                                >
                                                    Browse Files
                                                </button>
                                                <button className="px-6 rounded-xl font-medium text-sm border bg-[#111] text-white border-white/10 hover:bg-[#222] py-3 transition-all flex items-center justify-center">
                                                    <Upload className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="audio/*,.mp3,.wav,.m4a,.webm,.mp4"
                                                onChange={handleFileInputChange}
                                                className="hidden"
                                            />

                                            {/* Divider */}
                                            <div className="relative mb-6 text-gray-600">
                                                <div className="absolute inset-0 flex items-center">
                                                    <div className="w-full border-t border-white/10" />
                                                </div>
                                                <div className="relative flex justify-center text-xs">
                                                    <span className="px-2 bg-[#0A0A0A]">or try a sample</span>
                                                </div>
                                            </div>

                                            {/* Sample Buttons */}
                                            <div className="flex flex-wrap justify-center gap-3">
                                                {sampleAudios.map((sample, idx) => (
                                                    <button
                                                        key={idx}
                                                        className="px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border bg-[#111] border-white/10 hover:border-brand-500/50 hover:text-brand-400 text-gray-400"
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

                                                                    setTranscript(sampleTranscript.transcript.text);
                                                                    setOriginalTranscript(sampleTranscript.transcript.text);
                                                                    setUtterances(sampleTranscript.transcript.utterances);
                                                                    setOriginalUtterances(sampleTranscript.transcript.utterances);
                                                                    setChapters(sampleTranscript.transcript.chapters || []);
                                                                    setAllWords(sampleTranscript.transcript.allWords || []);
                                                                    setState("complete");

                                                                    toast({
                                                                        title: "✨ Sample loaded!",
                                                                        description: "Explore the transcript features.",
                                                                    });
                                                                }
                                                            }, 500);
                                                        }
                                                    }}
                                                >
                                                    <PlayCircle className="w-3 h-3" fill="currentColor" />
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
                                        <FileAudio className="h-8 w-8 text-primary" />
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
                                <div className="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm text-center">
                                    <div className="relative w-20 h-20 mx-auto mb-6">
                                        <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                                        <div
                                            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
                                        ></div>
                                        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                                            {progress}%
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2 text-white">{statusMessage}</h3>
                                    <p className="text-sm text-gray-400 mb-6">
                                        <Clock className="inline-block w-4 h-4 mr-1" />
                                        {processingTime}s elapsed
                                    </p>

                                    <div className="w-full bg-white/10 rounded-full h-2 mb-2 overflow-hidden">
                                        <div
                                            className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Please don't close this tab while we process your audio.
                                    </p>
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
