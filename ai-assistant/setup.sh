#!/bin/bash

echo "Setting up Kathya's Portfolio AI Assistant..."

# Install Ollama for WSL/Linux
if ! command -v ollama &> /dev/null
then
    echo "Installing Ollama..."
    curl -fsSL https://ollama.com/install.sh | sh
fi

# Pull a lightweight model (Phi-2 is small and efficient)
echo "Pulling lightweight AI model (phi)..."
ollama pull phi

# Alternative lightweight models:
# ollama pull tinyllama  # Even smaller
# ollama pull mistral    # More capable but larger

# Create Python virtual environment
echo "Creating Python virtual environment..."
python3 -m venv venv
source venv/bin/activate

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Setup complete! Run './run.sh' to start the AI assistant server."