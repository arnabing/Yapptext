#!/bin/bash

echo "==============================================="
echo "Quick YappText System Check"
echo "==============================================="
echo ""

# Check if server is running
echo "1. Checking if server is running..."
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "   ✅ Server is running at http://localhost:3000"
else
    echo "   ❌ Server is not running. Start with: npm run dev"
    exit 1
fi

echo ""
echo "2. Testing health check endpoint..."
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/check-limit)
if [ "$response" = "200" ]; then
    echo "   ✅ API endpoints are accessible"
else
    echo "   ⚠️  API might have issues (HTTP $response)"
fi

echo ""
echo "3. Checking configured API keys..."
echo "   (Not showing actual keys for security)"

# Check .env.local
if [ -f .env.local ]; then
    if grep -q "ASSEMBLYAI_API_KEY=.*[a-zA-Z0-9]" .env.local; then
        echo "   ✅ AssemblyAI API key is configured"
    else
        echo "   ❌ AssemblyAI API key is missing or empty"
    fi
    
    if grep -q "OPENAI_API_KEY=.*[a-zA-Z0-9]" .env.local; then
        echo "   ✅ OpenAI API key is configured"
    else
        echo "   ❌ OpenAI API key is missing or empty"
    fi
    
    if grep -q "GEMINI_API_KEY=.*[a-zA-Z0-9]" .env.local; then
        echo "   ✅ Gemini API key is configured"
    else
        echo "   ❌ Gemini API key is missing or empty"
    fi
else
    echo "   ❌ .env.local file not found!"
fi

echo ""
echo "==============================================="
echo "To test the app:"
echo "1. Open http://localhost:3000 in your browser"
echo "2. Click on a sample audio (bottom of page)"
echo "3. Select 'Standard' mode for basic test"
echo "4. Click 'Transcribe Audio'"
echo ""
echo "For debugging:"
echo "- Check browser console (F12) for detailed logs"
echo "- Check terminal running 'npm run dev' for server logs"
echo "==============================================="