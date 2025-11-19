"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useUser } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Copy,
  AlertCircle,
  Plus,
  MoreVertical,
  Languages,
  Check,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { TranscriptView } from "@/components/TranscriptView";
import { AudioControls } from "@/components/AudioControls";
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
import { formatTranscriptAsPlainText, formatTranscriptAsHTML } from "@/lib/format-transcript";
import { useHeader } from "@/lib/header-context";
import { Skeleton } from "@/components/ui/skeleton";

export default function ViewTranscript() {
  const { toast } = useToast();
  const { setHeaderActions } = useHeader();
  const router = useRouter();
  const params = useParams();
  const transcriptId = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [transcript, setTranscript] = useState("");
  const [utterances, setUtterances] = useState<any[]>([]);
  const [chapters, setChapters] = useState<any[]>([]);
  const [allWords, setAllWords] = useState<any[]>([]);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentPlayTime, setCurrentPlayTime] = useState(0);
  const [isTranslating, setIsTranslating] = useState(false);
  const [originalTranscript, setOriginalTranscript] = useState("");
  const [originalUtterances, setOriginalUtterances] = useState<any[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState("original");
  const [copied, setCopied] = useState(false);

  // Load transcript on mount
  useEffect(() => {
    if (!transcriptId) {
      setError("No transcript ID provided");
      setLoading(false);
      return;
    }

    const loadTranscript = async () => {
      setLoading(true);

      try {
        const response = await fetch(`/api/transcripts/${transcriptId}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError('Transcript not found');
          } else {
            setError('Failed to load transcript');
          }
          setLoading(false);
          return;
        }

        const data = await response.json();

        // Populate all state with saved data
        setTranscript(data.text);
        setOriginalTranscript(data.text);
        setUtterances(data.utterances || []);
        setOriginalUtterances(data.utterances || []);
        setChapters(data.chapters || []);
        setAllWords(data.words || []);
        setAudioUrl(data.audioUrl || '');
        setFileName(data.fileName || 'audio');
        setAudioDuration(data.duration || 0);

        setLoading(false);
      } catch (error) {
        console.error('Failed to load transcript:', error);
        setError('Failed to load transcript');
        setLoading(false);
      }
    };

    loadTranscript();
  }, [transcriptId]);

  // Register header actions when transcript is ready
  useEffect(() => {
    if (transcript && !loading) {
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

              <DropdownMenuItem onClick={() => router.push('/new')}>
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
  }, [transcript, loading, isTranslating, currentLanguage, copied]);

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

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] p-8 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <>
      {/* Audio not available notice */}
      {!audioUrl && (
        <div className="bg-muted/50 border-b px-4 py-2">
          <p className="text-xs text-muted-foreground text-center">
            Audio playback not available for this transcript
          </p>
        </div>
      )}

      <TranscriptView
        key={`transcript-${currentLanguage}-${utterances.length}`}
        utterances={utterances}
        chapters={chapters}
        fullText={transcript}
        currentTime={currentPlayTime * 1000}
        words={allWords}
      />

      {/* Audio Player at bottom */}
      {audioUrl && (
        <AudioControls
          audioUrl={audioUrl}
          onTimeUpdate={setCurrentPlayTime}
          fileName={fileName}
          className="sticky bottom-0 z-40"
        />
      )}
    </>
  );
}
