#!/bin/bash

echo "==================================="
echo "YappText Multi-Model Testing Suite"
echo "==================================="
echo ""

# Test 1: Compare all models with a sample file
echo "Test 1: Multi-Model Comparison (AssemblyAI, Gemini, OpenAI)"
echo "-------------------------------------------------------------"
echo "This will run all available models and show performance metrics"
echo ""
echo "Command:"
echo 'curl -X POST http://localhost:3000/api/test-transcribe \
  -F "audio=@public/samples/pulp_fiction.mp3" \
  | jq ".summary, (.models[] | {model: .model, status: .status, wordCount: .wordCount, time: .processingTime})"'
echo ""
echo "Press Enter to run this test..."
read

curl -X POST http://localhost:3000/api/test-transcribe \
  -F "audio=@public/samples/pulp_fiction.mp3" \
  | jq ".summary, (.models[] | {model: .model, status: .status, wordCount: .wordCount, time: .processingTime})"

echo ""
echo "============================================"
echo ""

# Test 2: Reasoning Mode with Reconciliation
echo "Test 2: Reasoning Mode (Multi-Model + AI Reconciliation)"
echo "---------------------------------------------------------"
echo "This uses multiple models and AI to reconcile differences"
echo ""
echo "Command:"
echo 'curl -X POST http://localhost:3000/api/transcribe \
  -F "audio=@public/samples/lil_wayne_deposition.mp3" \
  -F "transcriptionMode=reasoning" \
  | jq "{text: .text[0:500], words: .words, duration: .duration, minutesUsed: .minutesUsed}"'
echo ""
echo "Press Enter to run this test..."
read

curl -X POST http://localhost:3000/api/transcribe \
  -F "audio=@public/samples/lil_wayne_deposition.mp3" \
  -F "transcriptionMode=reasoning" \
  | jq "{text: .text[0:500], words: .words, duration: .duration, minutesUsed: .minutesUsed}"

echo ""
echo "============================================"
echo ""

# Test 3: Turbo Mode (Fast)
echo "Test 3: Turbo Mode (AssemblyAI Nano - 3x faster)"
echo "--------------------------------------------------"
echo "Fast transcription, single speaker only"
echo ""
echo "Command:"
echo 'curl -X POST http://localhost:3000/api/transcribe \
  -F "audio=@public/samples/I Have a Dream.mp3" \
  -F "transcriptionMode=turbo" \
  | jq "{text: .text[0:500], words: .words, duration: .duration}"'
echo ""
echo "Press Enter to run this test..."
read

curl -X POST http://localhost:3000/api/transcribe \
  -F "audio=@public/samples/I Have a Dream.mp3" \
  -F "transcriptionMode=turbo" \
  | jq "{text: .text[0:500], words: .words, duration: .duration}"

echo ""
echo "============================================"
echo "All tests complete!"
echo ""
echo "What to look for:"
echo "1. Compare word counts between models"
echo "2. Check processing times"
echo "3. Look at the reconciled text quality in reasoning mode"
echo "4. Check console logs at http://localhost:3000 for detailed info"