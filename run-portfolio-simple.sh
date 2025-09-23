#!/bin/bash

echo "======================================"
echo " Starting Kathya's Portfolio"
echo "======================================"
echo ""
echo "El portafolio estará disponible en: http://localhost:1313"
echo ""
echo "NOTA: El asistente de IA requiere instalación adicional de Ollama."
echo "Por ahora solo se mostrará el portafolio sin el chat."
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Start Hugo
hugo server --bind 0.0.0.0 --port 1313