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

type AppState = "idle" | "file-selected" | "processing" | "complete" | "error";

export default function Home() {
  const { toast } = useToast();
  const { setHeaderActions } = useHeader();
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
        <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
              <CardContent className="p-6 space-y-6">
                {/* Upload Zone - State-based rendering */}
                {state === "idle" && (
                  <>
                    <div
                      className={`border-4 border-dashed rounded-lg transition-colors ${
                        isDragging
                          ? "border-primary bg-primary/5"
                          : "border-gray-300"
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <div className="p-8 md:p-16 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-xl font-semibold mb-2">
                          Drag and drop an audio file
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          or <span className="text-primary font-medium cursor-pointer">browse to upload</span>
                        </p>
                        <Button 
                          onClick={() => fileInputRef.current?.click()}
                          className="mt-4"
                        >
                          Upload your audio
                        </Button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="audio/*,.mp3,.wav,.m4a,.webm,.mp4"
                          onChange={handleFileInputChange}
                          className="hidden"
                        />
                        <p className="text-xs text-muted-foreground mt-6">
                          Supports MP3, WAV, M4A, WebM, MP4
                        </p>
                      </div>
                    </div>

                    {/* Sample Audio Pills */}
                    <div className="mt-6">
                      <p className="text-sm text-muted-foreground mb-3">
                        Or try a sample:
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sampleAudios.map((sample, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="cursor-pointer hover:bg-primary/10 transition-colors py-2 px-3"
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
                                }, 200);

                                // After a brief delay, load the preloaded data
                                setTimeout(() => {
                                  clearInterval(progressInterval);
                                  if (processingTimerRef.current) {
                                    clearInterval(processingTimerRef.current);
                                  }

                                  setProgress(100);
                                  setTranscript(
                                    sampleTranscript.transcript.text,
                                  );
                                  setOriginalTranscript(
                                    sampleTranscript.transcript.text,
                                  );
                                  setUtterances(
                                    sampleTranscript.transcript.utterances,
                                  );
                                  setOriginalUtterances(
                                    sampleTranscript.transcript.utterances,
                                  );
                                  setChapters(
                                    sampleTranscript.transcript.chapters,
                                  );
                                  setAllWords(
                                    sampleTranscript.transcript.allWords,
                                  );
                                  setState("complete");

                                  // Trigger success animation
                                  confettiPresets.success();

                                  toast({
                                    title: "Sample loaded!",
                                    description: `${sample.name} transcript ready`,
                                  });
                                }, 1500); // Brief delay for realism
                              } else {
                                // Fallback: load the audio file normally (for files without preloaded transcripts)
                                try {
                                  const response = await fetch(sample.file);
                                  const blob = await response.blob();
                                  const file = new File(
                                    [blob],
                                    sample.name + ".mp3",
                                    { type: "audio/mpeg" },
                                  );
                                  handleFileSelect(file);
                                  console.log(
                                    "Sample loaded for processing:",
                                    sample.name,
                                  );
                                } catch (error) {
                                  console.error(
                                    "Failed to load sample:",
                                    error,
                                  );
                                  setError("Failed to load sample audio");
                                  setState("error");
                                }
                              }
                            }}
                          >
                            <PlayCircle className="h-3 w-3 mr-1" />
                            <span className="font-medium">{sample.name}</span>
                            <span className="ml-2 text-xs text-muted-foreground">
                              {sample.duration}
                            </span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {state === "file-selected" && file && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <FileAudio className="h-8 w-8 text-primary" />
                        <div className="flex-1">
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {getFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      
                      {/* Model Selection */}
                      <div className="mb-4">
                        <Label className="text-sm font-medium mb-3 block">Model</Label>
                        <RadioGroup value={selectedModel} onValueChange={(value) => setSelectedModel(value as 'nano' | 'universal')}>
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="universal" id="universal" />
                            <Label htmlFor="universal" className="text-sm font-normal cursor-pointer">
                              Standard (Universal): Balanced quality, multi-language
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="nano" id="nano" />
                            <Label htmlFor="nano" className="text-sm font-normal cursor-pointer">
                              Fast (Nano): 3x cheaper, good for drafts
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button onClick={processFile} className="flex-1">
                          Transcribe
                        </Button>
                        <Button variant="outline" onClick={reset}>
                          Remove
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {state === "processing" && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-medium">
                              {statusMessage}
                            </p>
                            <span className="text-sm text-muted-foreground">
                              {progress}%
                            </span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>
                              {processingTime > 0 &&
                                `${processingTime}s elapsed`}
                            </span>
                          </div>
                          {estimatedTime > 0 &&
                            processingTime < estimatedTime && (
                              <span>
                                ~{Math.max(0, estimatedTime - processingTime)}s
                                remaining
                              </span>
                            )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {state === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

              </CardContent>
            </Card>
        </div>
      )}

      {/* Transcript Display */}
      {transcript && state === "complete" && (
        <>
          <TranscriptView
            key={`transcript-${currentLanguage}-${utterances.length}`}
            utterances={utterances}
            chapters={chapters}
            fullText={transcript}
            currentTime={currentPlayTime * 1000}
            words={allWords}
          />
        </>
      )}

      {/* Paywall Modal */}
      <PaywallModal
        open={showPaywall}
        onOpenChange={setShowPaywall}
        onClose={() => {
          // When user closes paywall without upgrading, show reverse trial offer
          setShowReverseTrial(true);
        }}
      />

      {/* Reverse Trial Popup */}
      <ReverseTrialPopup
        open={showReverseTrial}
        onOpenChange={setShowReverseTrial}
      />

      {/* Audio Player */}
      {state === "complete" && (
        <div className="sticky bottom-0 shrink-0 bg-background">
          <AudioControls
            audioUrl={audioUrl}
            fileName={audioFileName}
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
      )}
    </>
  );
}
