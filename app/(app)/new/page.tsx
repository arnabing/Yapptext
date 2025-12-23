"use client";

import { useState, useRef, useEffect, ChangeEvent, DragEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser, SignUpButton } from '@clerk/nextjs';
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
import { ChatGPTIcon } from "@/components/icons/chatgpt-icon";
import { Icon } from "@iconify/react";
import { AI_ACTIONS, openChatGPT } from "@/lib/chatgpt-actions";
import { ReverseTrialPopup } from "@/components/billing/ReverseTrialPopup";
import { useHeader } from "@/lib/header-context";
import { useTranscriptContext } from "@/lib/transcript-context";
import { useSidebar } from "@/components/ui/sidebar";
import { DotFlow, transcriptionFlowItems } from "@/components/ui/dot-flow";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";
import { isVideoFile, extractAudioFromVideo } from "@/lib/extract-audio";
import { useUsage } from "@/hooks/use-usage";
import { PAYWALL_CONFIG } from "@/lib/constants";

type AppState = "idle" | "file-selected" | "processing" | "complete" | "error";

function NewTranscriptContent() {
  const { toast } = useToast();
  const { setHeaderActions } = useHeader();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isSignedIn } = useUser();
  const { transcriptData, clearTranscriptData, setTranscriptData, triggerSidebarRefresh } = useTranscriptContext();
  const { state: sidebarState } = useSidebar();
  const sidebarOpen = sidebarState === 'expanded';

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
  // Model is always 'universal' (maps to AssemblyAI 'best' model)
  const [showPaywall, setShowPaywall] = useState(false); // Paywall modal state
  const [paywallReason, setPaywallReason] = useState<string>(""); // Reason for showing paywall
  const [showReverseTrial, setShowReverseTrial] = useState(false); // Reverse trial popup state
  const [copied, setCopied] = useState(false); // Copy button feedback state

  // Consolidated usage tracking hook - replaces manual fetch logic
  const { usage, canTranscribe, addUsage } = useUsage();

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

  // Usage data is now fetched via useUsage() hook - no manual fetch needed

  // Load transcript from context (set by sidebar) or sessionStorage (for page reloads)
  useEffect(() => {
    // Check for reset param - if present, reset all local state and clear URL
    const resetParam = searchParams?.get('reset');
    if (resetParam) {
      // Reset all local state
      setState("idle");
      setFile(null);
      setTranscript("");
      setOriginalTranscript("");
      setUtterances([]);
      setOriginalUtterances([]);
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
      // Clean up URL
      router.replace('/new', { scroll: false });
      return;
    }

    // First check context (set by sidebar clicks)
    if (transcriptData) {
      // Populate state with transcript data from context
      setTranscript(transcriptData.text);
      setOriginalTranscript(transcriptData.text);
      setUtterances(transcriptData.utterances || []);
      setOriginalUtterances(transcriptData.utterances || []);
      setChapters(transcriptData.chapters || []);
      setAllWords(transcriptData.words || []);
      setAudioUrl(transcriptData.audioUrl);
      setAudioFileName(transcriptData.fileName);
      setAudioDuration(transcriptData.duration);

      // Create mock file for display
      const mockFile = new File([], transcriptData.fileName, { type: 'audio/mpeg' });
      setFile(mockFile);

      setState("complete");
      return;
    }

    // Fallback: check sessionStorage on initial mount (for page reloads)
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('demoTranscript');
      if (storedData) {
        try {
          const data = JSON.parse(storedData);

          // Populate state with transcript data
          setTranscript(data.text);
          setOriginalTranscript(data.text);
          setUtterances(data.utterances || []);
          setOriginalUtterances(data.utterances || []);
          setChapters(data.chapters || []);
          setAllWords(data.words || []);
          setAudioUrl(data.audioUrl);
          setAudioFileName(data.fileName);
          setAudioDuration(data.duration);

          // Create mock file for display
          const mockFile = new File([], data.fileName, { type: 'audio/mpeg' });
          setFile(mockFile);

          setState("complete");

          // Also sync to context for consistency
          setTranscriptData(data);

          // Clean up URL parameter if present (sample)
          const sampleId = searchParams?.get('sample');
          if (sampleId) {
            router.replace('/new', { scroll: false });
          }
        } catch (error) {
          console.error('Failed to load transcript from sessionStorage:', error);
        }
      }
    }
  }, [transcriptData, searchParams, router, setTranscriptData]);

  // Register header actions when transcript is ready
  useEffect(() => {
    if (transcript && state === "complete") {
      setHeaderActions(
        <>
          <Button
            size="sm"
            variant="ghost"
            onClick={copyToClipboard}
            aria-label="Copy transcript"
            className="text-foreground hover:bg-white/20 dark:hover:bg-white/10"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>

          {/* ChatGPT AI Actions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                aria-label="AI Actions"
                className="text-foreground hover:bg-white/20 dark:hover:bg-white/10"
              >
                <ChatGPTIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {AI_ACTIONS.map((action) => (
                <DropdownMenuItem
                  key={action.id}
                  onClick={() => {
                    const { success, url } = openChatGPT(action.id, transcript)
                    if (success) {
                      toast({
                        title: "ChatGPT opened",
                        description: "Press Enter to send your prompt",
                      })
                    } else {
                      toast({
                        title: "Popup blocked",
                        description: (
                          <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-primary">
                            Click here to open ChatGPT
                          </a>
                        ),
                      })
                    }
                  }}
                >
                  <Icon icon={action.icon} className="h-4 w-4 mr-2" />
                  {action.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                aria-label="More options"
                className="text-foreground hover:bg-white/20 dark:hover:bg-white/10"
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
    // Create URL for playback
    const url = URL.createObjectURL(selectedFile);
    setAudioUrl(url);

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
      const durationMinutes = Math.ceil(duration / 60); // Convert to minutes, round up

      // Check duration (10 hours max for AssemblyAI)
      const maxDurationHours = 10;
      const maxDurationSeconds = maxDurationHours * 3600;
      if (duration > maxDurationSeconds) {
        const durationHours = (duration / 3600).toFixed(1);
        setError(
          `Media duration (${durationHours} hours) exceeds ${maxDurationHours}-hour limit.`
        );
        setState("error");
        return;
      }

      // Pre-transcription quota check using consolidated hook
      const quotaCheck = canTranscribe(durationMinutes);
      if (!quotaCheck.allowed) {
        setPaywallReason(quotaCheck.reason || "You've reached your usage limit");
        setShowPaywall(true);
        return;
      }

      setAudioDuration(duration);
      // Estimate processing time: ~0.5 seconds per minute of audio (based on AssemblyAI benchmarks)
      // Add extra time for video extraction if needed
      const baseProcessingTime = Math.max(10, Math.round((duration * 0.5) / 60));
      const estimatedProcessingTime = isVideo ? baseProcessingTime + 10 : baseProcessingTime;
      setEstimatedTime(estimatedProcessingTime);
    });

    // Validate file type - support both audio and video
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
      // Video types
      "video/mp4",
      "video/webm",
      "video/quicktime",  // .mov (iOS default)
      "video/x-msvideo",  // .avi
      "video/x-matroska", // .mkv
      "video/hevc",       // HEVC/H.265 (iOS)
      "video/x-m4v",      // .m4v (Apple)
      "video/3gpp",       // .3gp (mobile)
      "video/3gpp2",      // .3g2 (mobile)
    ];

    if (
      !validTypes.includes(selectedFile.type) &&
      !selectedFile.name.match(/\.(mp3|wav|m4a|webm|mp4|mov|avi|mkv|m4v|hevc|3gp|3g2)$/i)
    ) {
      setError(
        "Please upload a valid audio or video file (MP3, WAV, M4A, MP4, MOV, etc.)",
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

    setState("processing");
    setProgress(0);
    setProcessingTime(0);
    setStatusMessage("Preparing file...");

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

      // Progress mapping depends on whether we did video extraction
      // Video: extraction used 0-35%, upload uses 35-70%
      // Audio: upload uses 0-40%
      const uploadProgressStart = isVideo ? 35 : 0;
      const uploadProgressEnd = isVideo ? 70 : 40;

      const blob = await upload(uniqueFilename, fileToUpload, {
        access: 'public',
        handleUploadUrl: '/api/upload',
        onUploadProgress: (event) => {
          if (event.loaded && event.total) {
            const uploadPercent = event.loaded / event.total;
            const percentComplete = Math.round(uploadProgressStart + uploadPercent * (uploadProgressEnd - uploadProgressStart));
            setProgress(percentComplete);
            console.log(
              `Upload progress: ${percentComplete}% (${(event.loaded / 1024 / 1024).toFixed(2)}MB / ${(event.total / 1024 / 1024).toFixed(2)}MB)`,
            );
          }
        },
      });

      console.log('File uploaded to blob:', blob.url);

      // Store the permanent Vercel Blob URL
      const permanentBlobUrl = blob.url;

      // Update audioUrl with the permanent Vercel Blob URL
      setAudioUrl(permanentBlobUrl);
      setAudioFileName(file.name); // Keep original file name for display

      setProgress(isVideo ? 70 : 40);
      setStatusMessage("Processing audio with AI...");

      // Step 2: Send the blob URL to our transcribe endpoint
      const formData = new FormData();
      formData.append("audioUrl", blob.url);
      formData.append("fileName", file.name);
      formData.append("fileSize", file.size.toString());
      formData.append("model", "universal"); // Always use best quality model
      formData.append("enableSentiment", "false"); // Disabled for speed
      formData.append("enableKeyPhrases", "false"); // Disabled for speed

      // Send duration from metadata for accurate quota checking
      if (audioDuration) {
        const durationMinutes = Math.ceil(audioDuration / 60);
        formData.append("durationMinutes", durationMinutes.toString());
        console.log(`Sending duration from metadata: ${durationMinutes} minutes (${audioDuration} seconds)`);
      }

      // Submit transcription job - returns immediately with transcript ID
      console.log("Submitting transcription job...");
      const submitResponse = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      if (!submitResponse.ok) {
        const errorData = await submitResponse.json().catch(() => ({}));

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
      // Update local usage state for immediate UI feedback
      if (data.duration) {
        addUsage(data.duration);
      }
      setState("complete");

      // Trigger sidebar refresh after delay to capture async usage logging
      // The usage is logged via fire-and-forget in transcribe-status endpoint
      setTimeout(() => {
        triggerSidebarRefresh();
      }, 2000);

      // Generate title from filename
      const baseTitle = file?.name.replace(/\.[^/.]+$/, '') || 'Untitled'; // Remove extension
      const title = baseTitle.length > 50 ? baseTitle.slice(0, 50) + '...' : baseTitle;

      // Store in sessionStorage for all users (guests + authenticated)
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('demoTranscript', JSON.stringify({
          title,
          text: data.text,
          fileName: file.name,
          duration: Math.floor(audioDuration),
          audioUrl: permanentBlobUrl,
          utterances: data.utterances || [],
          chapters: data.chapters || [],
          words: data.allWords || [],
        }));
      }

      // Only save to database for authenticated users
      if (isSignedIn) {
        try {
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
                description: "This file was recently transcribed. Showing existing transcript.",
              });
            }

            // Trigger sidebar refresh to show new transcript in history
            triggerSidebarRefresh();
          }
        } catch (error) {
          console.error('Failed to save transcript:', error);
          // Don't show error to user - this is a background operation
        }
      }
      // For guests, transcript stays on /new page with sign-up banner

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
    setCurrentPlayTime(0);
    setIsTranslating(false);
    setCurrentLanguage("original");
    setAudioDuration(0);
    setEstimatedTime(0);
    setStatusMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Clear transcript data via context (also clears sessionStorage)
    clearTranscriptData();
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
    <div className="flex flex-col min-h-full">
      {/* Centered content for non-transcript states */}
      {state !== "complete" && (
        <div className="flex-1 flex items-center justify-center p-4">
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
                          Drag and drop your file
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          or <span className="text-primary font-medium cursor-pointer">browse to upload</span>
                        </p>
                        <Button
                          onClick={() => fileInputRef.current?.click()}
                          className="mt-4"
                        >
                          Upload your file
                        </Button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="audio/*,video/*,.mp3,.wav,.m4a,.webm,.mp4,.mov,.avi,.mkv,.m4v,.hevc,.3gp"
                          onChange={handleFileInputChange}
                          className="hidden"
                        />
                        <p className="text-xs text-muted-foreground mt-6">
                          Supports audio &amp; video: MP3, WAV, M4A, MP4, MOV
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
                                setTimeout(async () => {
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

                                  // Save sample transcript to database and redirect to proper view
                                  try {
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
                                      // Trigger sidebar refresh to show new transcript in history
                                      triggerSidebarRefresh();
                                    }
                                  } catch (error) {
                                    console.error('Failed to save sample transcript:', error);
                                    // Don't block the user - they can still see the transcript on this page
                                  }
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
                  <div className="flex flex-col items-center gap-6 py-8">
                    <DotFlow
                      items={transcriptionFlowItems}
                      isPlaying={true}
                      className="shadow-lg shadow-black/20"
                    />

                    <div className="w-full max-w-xs space-y-3">
                      <Progress value={progress} className="h-2" />
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
                  </div>
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
        <div className="pt-16 pb-28">
          <TranscriptView
            key={`transcript-${currentLanguage}-${utterances.length}`}
            utterances={utterances}
            chapters={chapters}
            fullText={transcript}
            currentTime={currentPlayTime * 1000}
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
      )}

      {/* Paywall Modal */}
      <PaywallModal
        open={showPaywall}
        onOpenChange={setShowPaywall}
        onClose={() => {
          // Show reverse trial when user closes paywall without upgrading
          if (PAYWALL_CONFIG.enableReverseTrial && isSignedIn) {
            setShowReverseTrial(true);
          }
        }}
        usageData={usage || undefined}
        reason={paywallReason}
      />

      {/* Reverse Trial Popup */}
      <ReverseTrialPopup
        open={showReverseTrial}
        onOpenChange={setShowReverseTrial}
      />

      {/* Audio Player - fixed to bottom of viewport */}
      {state === "complete" && (
        <div className={`fixed bottom-0 right-0 z-20 transition-[left] duration-200 ${sidebarOpen ? 'md:left-[16rem]' : 'left-0'}`}>
          <AudioControls
            audioUrl={audioUrl}
            fileName={audioFileName}
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
      )}
    </div>
  );
}

export default function NewTranscript() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader2 className="h-8 w-8 animate-spin" /></div>}>
      <NewTranscriptContent />
    </Suspense>
  );
}
