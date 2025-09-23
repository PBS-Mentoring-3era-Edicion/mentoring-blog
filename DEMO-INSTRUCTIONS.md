# 🚀 INSTRUCCIONES PARA VER EL DEMO

## Opción 1: Ejecutar Todo Automáticamente (Recomendado)

Abre una terminal en WSL y ejecuta:

```bash
cd /root/kathya-portfolio/mentoring-blog
chmod +x start-portfolio.sh
./start-portfolio.sh
```

Luego abre tu navegador en:
- **Portafolio**: http://localhost:1313
- **API del Asistente**: http://localhost:8000

## Opción 2: Ejecutar Por Separado

### Paso 1: Instalar Hugo (si no está instalado)
```bash
# Descargar e instalar Hugo
wget -O hugo.deb https://github.com/gohugoio/hugo/releases/download/v0.120.4/hugo_extended_0.120.4_linux-amd64.deb
sudo dpkg -i hugo.deb
rm hugo.deb
```

### Paso 2: Iniciar el Asistente de IA
```bash
# En una terminal
cd ai-assistant
chmod +x setup.sh run.sh
./setup.sh  # Solo la primera vez
./run.sh    # Inicia el servidor del asistente
```

### Paso 3: Iniciar el Portafolio
```bash
# En otra terminal
cd /root/kathya-portfolio/mentoring-blog
hugo server --bind 0.0.0.0
```

## 📝 Notas Importantes

1. **Primera vez**: La instalación de Ollama y el modelo puede tardar 5-10 minutos
2. **Puerto 1313**: El portafolio estará en http://localhost:1313
3. **Puerto 8000**: La API del asistente estará en http://localhost:8000
4. **Chat Widget**: Aparecerá un botón morado en la esquina inferior derecha del sitio

## 🎯 Características del Demo

- ✅ Portafolio con toda la información de Kathya
- ✅ Chat interactivo con IA que responde sobre su perfil
- ✅ Diseño responsive y moderno
- ✅ Tema oscuro/claro automático
- ✅ Totalmente en español

## 🛠️ Solución de Problemas

### Si el chat no funciona:
1. Verifica que el servidor del asistente esté corriendo (puerto 8000)
2. Revisa la consola del navegador (F12) para ver errores
3. Asegúrate de que Ollama esté instalado: `ollama list`

### Si el portafolio no carga:
1. Verifica que Hugo esté instalado: `hugo version`
2. Revisa que estés en el directorio correcto
3. Prueba con: `hugo server -D`

## 💡 Para Detener los Servicios

Presiona `Ctrl+C` en las terminales donde están corriendo los servicios.

---

**¿Necesitas ayuda?** El código está listo para ejecutarse. Solo sigue las instrucciones de la Opción 1 para ver el demo completo.