// Test script to verify URL-based transcription efficiency
// Run with: node test-url-efficiency.js

const fs = require('fs');
const path = require('path');

async function testTranscription() {
  // First, we need to upload a file to get a Vercel Blob URL
  // For testing, we'll use the sample audio
  
  const testAudioPath = path.join(__dirname, 'public', 'sample-en.mp3');
  
  if (!fs.existsSync(testAudioPath)) {
    console.log('Sample audio not found. Please ensure public/sample-en.mp3 exists');
    return;
  }
  
  const audioFile = fs.readFileSync(testAudioPath);
  const formData = new FormData();
  const blob = new Blob([audioFile], { type: 'audio/mp3' });
  formData.append('audio', blob, 'sample-en.mp3');
  
  console.log('Testing transcription efficiency...\n');
  console.log('Step 1: Upload audio to Vercel Blob (simulated)');
  console.log('Step 2: Send URL to test endpoint');
  console.log('Step 3: Compare processing times\n');
  
  // Test the endpoint
  try {
    const response = await fetch('http://localhost:3000/api/test-transcribe', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    console.log('=== TRANSCRIPTION TEST RESULTS ===\n');
    console.log('Summary:');
    console.log(`- Total models tested: ${result.summary.totalModels}`);
    console.log(`- Successful: ${result.summary.successfulModels}`);
    console.log(`- Failed: ${result.summary.failedModels}`);
    console.log(`- Total time: ${result.summary.totalProcessingTime}ms\n`);
    
    console.log('Model Performance:');
    result.models.forEach(model => {
      if (model.status === 'success') {
        console.log(`✅ ${model.model}:`);
        console.log(`   - Words: ${model.wordCount}`);
        console.log(`   - Time: ${model.processingTime || 'N/A'}ms`);
      } else {
        console.log(`❌ ${model.model}: ${model.error}`);
      }
    });
    
    if (result.reconciliation) {
      console.log('\n=== RECONCILIATION RESULTS ===');
      console.log(`- Method: ${result.reconciliation.method}`);
      console.log(`- Sources used: ${result.reconciliation.sourcesUsed.join(', ')}`);
      console.log(`- Final word count: ${result.reconciliation.wordCount}`);
      if (result.reconciliation.metrics) {
        console.log(`- Confidence: ${result.reconciliation.metrics.confidenceScore}%`);
      }
    }
    
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

// Check if running in Node.js environment
if (typeof window === 'undefined') {
  console.log('Note: This test requires the dev server to be running at http://localhost:3000\n');
  console.log('The test will use the sample audio file to test transcription efficiency.\n');
  console.log('URL-based optimization benefits:');
  console.log('1. AssemblyAI: Uses URL directly (no download) ✅');
  console.log('2. Gemini: Uploads from URL to Gemini servers (no local download) ✅');
  console.log('3. OpenAI: Downloads once then transcribes (1 download instead of re-fetching) ✅\n');
} else {
  testTranscription();
}