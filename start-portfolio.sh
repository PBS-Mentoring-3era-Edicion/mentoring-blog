#!/bin/bash

echo "======================================"
echo " Kathya's Portfolio with AI Assistant"
echo "======================================"

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "Installing Hugo..."
    wget -O hugo.deb https://github.com/gohugoio/hugo/releases/download/v0.120.4/hugo_extended_0.120.4_linux-amd64.deb
    sudo dpkg -i hugo.deb
    rm hugo.deb
fi

# Start AI Assistant in background
echo "Starting AI Assistant..."
cd ai-assistant
chmod +x setup.sh run.sh

# Check if setup is needed
if [ ! -d "venv" ]; then
    echo "Running first-time setup..."
    ./setup.sh
fi

# Start AI assistant in background
./run.sh &
AI_PID=$!
cd ..

echo "AI Assistant started (PID: $AI_PID)"

# Start Hugo server
echo ""
echo "Starting Hugo server..."
echo "Portfolio will be available at: http://localhost:1313"
echo "AI Assistant API: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop both services"
echo ""

# Trap to kill both processes on exit
trap "kill $AI_PID 2>/dev/null; exit" INT TERM

# Start Hugo
hugo server --bind 0.0.0.0 --buildDrafts --buildFuture

# Kill AI assistant when Hugo stops
kill $AI_PID 2>/dev/null