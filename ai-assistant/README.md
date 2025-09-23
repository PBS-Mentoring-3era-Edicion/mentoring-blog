# AI Assistant para el Portafolio de Kathya

Este es un asistente de IA ligero que responde preguntas sobre el perfil profesional de Kathya Pérez.

## Características

- 🤖 Modelo de IA local usando Ollama
- 💬 Chat interactivo en el sitio web
- 📊 Información extraída del CV de Kathya
- 🚀 Ligero y eficiente en costos
- 🔒 Privacidad total (corre localmente)

## Instalación

1. **Instalar dependencias del sistema:**
```bash
# Actualizar paquetes
sudo apt-get update

# Instalar Python y pip si no están instalados
sudo apt-get install python3 python3-pip python3-venv

# Instalar curl para descargar Ollama
sudo apt-get install curl
```

2. **Ejecutar el script de configuración:**
```bash
cd ai-assistant
chmod +x setup.sh
./setup.sh
```

## Estructura de Datos

El asistente tiene acceso a la siguiente información de Kathya:

- **Información Personal**: Nombre, email, teléfono, ubicación
- **Educación**: Universidad Católica de El Salvador, Instituto Nacional de El Congo
- **Habilidades Técnicas**: HTML, CSS, PHP, C#, SQL
- **Certificaciones**: Desarrollador Back-End, Front-End, y próximamente C#
- **Idiomas**: Español (Nativo), Inglés (B2)
- **Enlaces**: LinkedIn, GitHub

## API Endpoints

- `GET /` - Información de la API
- `GET /profile` - Obtener información completa del perfil
- `POST /chat` - Enviar mensaje al asistente
- `GET /health` - Estado del servicio

## Personalización

Para actualizar la información de Kathya, edita la función `load_profile_data()` en `app.py`.

## Solución de Problemas

Si el asistente no responde:
1. Verifica que Ollama esté corriendo: `ollama list`
2. Verifica que el servidor FastAPI esté activo: `curl http://localhost:8000/health`
3. Revisa los logs en la terminal donde ejecutaste `./run.sh`