# 📜 Guía para Agregar Certificados

## Certificados a Agregar (según tus imágenes)

### Estructura de Carpeta Recomendada:
```
content/posts/mis-habilidades-tecnicas/
├── index.es.md
├── index.en.md
├── certificados/
│   ├── google-it-support.png
│   ├── cybersecurity-cisco.png
│   ├── modern-ai-cisco.png
│   ├── python-udemy.png
│   ├── ef-set.png
│   └── ...más certificados
```

## Certificados que Tienes:

### Google/Coursera:
1. ✅ Google IT Support Professional Certificate (certificado principal)
2. ✅ Technical Support Fundamentals
3. ✅ Computer Hardware Basics
4. ✅ Operating Systems and You: Becoming a Power User
5. ✅ System Administration and IT Infrastructure Services
6. ✅ IT Security: Defense against the Digital Dark Arts
7. ✅ The Bits and Bytes of Computer Networking

### Cisco Networking Academy:
8. ✅ Introduction to Cybersecurity
9. ✅ Introduction to Modern AI
10. ✅ Introduction to IoT

### Otros:
11. ✅ EF SET English Certificate
12. ✅ Python TOTAL (Udemy)
13. ✅ Digital Awareness
14. ✅ Accelerate Your Job Search with AI
15. ✅ Descubre Tu Vocación
16. ✅ Using Computer and Mobile Devices

## Cómo Agregar los Certificados:

### Opción 1: En el mismo post (más visual)

1. Crea una carpeta `certificados/` dentro de `content/posts/mis-habilidades-tecnicas/`
2. Guarda las imágenes de tus certificados ahí
3. Agrégalos al markdown con:

```markdown
### Google IT Support Professional Certificate (2025)

![Google IT Support Certificate](certificados/google-it-support.png)

Certificación profesional compuesta por 6 cursos especializados...
```

### Opción 2: Crear una galería al final del post

```markdown
## 📸 Galería de Certificados

<div class="certificate-gallery">

![Google IT Support](certificados/google-it-support.png)
![Cybersecurity](certificados/cybersecurity-cisco.png)
![Modern AI](certificados/modern-ai-cisco.png)

</div>
```

### Opción 3: Enlazar a una página de certificados separada

Crear un nuevo post: `content/posts/mis-certificados/index.es.md`

## Recomendación:

**Para mejor presentación**, te recomiendo:
1. Optimizar las imágenes a un tamaño razonable (800x600px aprox)
2. Usar formato PNG o JPG optimizado
3. Agregar alt text descriptivo para accesibilidad
4. Crear una sección de galería al final del post actual

## Código Sugerido para Agregar:

Agrega esto al final de `index.es.md` antes de la sección "Mi Filosofía de Desarrollo":

```markdown
## 📸 Certificados Verificables

### Certificaciones Principales

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0;">

#### Google IT Support Professional
![Google IT Support Certificate](certificados/google-it-support.png)
*Certificación profesional de 6 cursos - Enero 2025*

#### Introduction to Cybersecurity
![Cisco Cybersecurity](certificados/cybersecurity-cisco.png)
*Cisco Networking Academy - Enero 2025*

#### Introduction to Modern AI
![Cisco AI](certificados/modern-ai-cisco.png)
*Cisco Networking Academy - Enero 2025*

</div>

### Certificados Complementarios

<details>
<summary>Ver todos los certificados (13 más)</summary>

- Technical Support Fundamentals (Google)
- Computer Hardware Basics (Google)
- Operating Systems (Google)
- System Administration (Google)
- IT Security (Google)
- Computer Networking (Google)
- Python TOTAL (Udemy)
- EF SET English Certificate
- Digital Awareness
- IoT Introduction
- Using Computer and Mobile Devices

</details>
```

## Pasos para Implementar:

1. Crea la carpeta: `mkdir certificados`
2. Copia tus imágenes de certificados a esa carpeta
3. Renombra los archivos con nombres descriptivos sin espacios
4. Agrega el código markdown sugerido
5. Regenera el sitio con Hugo

## Alternativa: Links a Coursera/Cisco

Si prefieres no subir las imágenes, puedes agregar links:

```markdown
### Certificados Verificables

🔗 [Verificar Google IT Support Certificate](https://coursera.org/verify/TUCODIGOAQUI)
🔗 [Verificar Cisco Cybersecurity](https://cisco.com/verify/TUCODIGOAQUI)
```
