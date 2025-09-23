#!/bin/bash

# Start Ollama service if not running
if ! pgrep -x "ollama" > /dev/null
then
    echo "Starting Ollama service..."
    ollama serve &
    sleep 5
fi

# Activate virtual environment
source venv/bin/activate

# Start the FastAPI server
echo "Starting AI Assistant API on http://localhost:8000"
uvicorn app:app --reload --host 0.0.0.0 --port 8000