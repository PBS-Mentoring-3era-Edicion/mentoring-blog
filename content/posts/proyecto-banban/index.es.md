---
title: "Ban Ban - Pastelería Digital"
date: 2025-01-23
draft: false
description: "Sitio web elegante para pastelería local con catálogo interactivo"
tags: ["HTML", "CSS", "Bootstrap", "proyecto"]
categories: ["Proyectos"]
authors:
  - "kathyaperez"
showTableOfContents: true
---

## 📋 Descripción del Proyecto

Ban Ban es un sitio web completo desarrollado para una pastelería local en El Salvador. El proyecto demuestra mis habilidades en diseño web responsivo y desarrollo frontend.

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- Bootstrap 5
- Font Awesome Icons
- JavaScript

## ✨ Características Principales

- **Catálogo de Productos**: Presentación visual de pasteles y postres
- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Navegación Intuitiva**: Menú claro y accesible
- **Integración Social**: Enlaces a Facebook e Instagram
- **Galería de Imágenes**: Showcase visual de productos

## 📂 Estructura del Proyecto

```
BanBan/
├── index.html
├── productos.html
├── nosotros.html
├── estilo.css
└── Imágenes/
    ├── pastel.jpg
    ├── tartaleta.jpg
    └── ...
```

## 💻 Código Destacado

### Estructura HTML Principal
{{< highlight html "linenos=table,hl_lines=8 15-17" >}}
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ban Ban - Inicio</title>
    <link rel="icon" href="Imágenes/logo.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <!-- Barra de navegación responsiva -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="Imágenes/logo.jpg" width="110" height="40">
            </a>
        </div>
    </nav>
</body>
</html>
{{< /highlight >}}

### CSS Personalizado
{{< highlight css "linenos=table" >}}
body {
    background-color: #fddfdf;
    padding-top: 50px;
}

.hero {
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.btn {
    color: #000000;
    background-color: #d38080;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #b86a6a;
}
{{< /highlight >}}

## 🎯 Aprendizajes Clave

- Implementación de Bootstrap para diseño responsivo
- Optimización de imágenes para web
- Estructura semántica HTML
- Integración de iconos y fuentes externas

## 🎨 Aspectos de Diseño

### Identidad Visual
El sitio utiliza una paleta de colores cálidos que refleja la naturaleza artesanal de la pastelería:
- Colores primarios: Marrones y dorados cálidos
- Tipografía: Fuentes elegantes y legibles
- Imágenes: Fotografía de productos de alta calidad

### Experiencia de Usuario
- **Enfoque mobile-first**: Optimizado para dispositivos móviles
- **Carga rápida**: Imágenes y código optimizados
- **Navegación clara**: Estructura de menú intuitiva
- **Call-to-action**: Información de contacto directa

## 📱 Características Responsivas

El sitio web se adapta perfectamente a diferentes tamaños de pantalla:
- Desktop: Layout completo con navegación lateral
- Tablet: Layout adaptado con menú colapsable
- Móvil: Experiencia optimizada con menú hamburguesa

## 🚀 Mejoras Futuras

- [ ] Sistema de pedidos online
- [ ] Sección de reseñas de clientes
- [ ] Blog con consejos de repostería
- [ ] Suscripción a newsletter
- [ ] Soporte multiidioma

---

*Este proyecto demuestra mi capacidad para crear sitios web atractivos y funcionales que ayudan a negocios locales a establecer su presencia online.*

## 🔍 Código Fuente

El proyecto completo está disponible en la carpeta de código fuente. Incluye:

- **index.html**: Página principal con navegación responsiva
- **productos.html**: Catálogo de productos de la pastelería
- **nosotros.html**: Información sobre la empresa
- **estilo.css**: Estilos personalizados y tema visual
- **Imágenes/**: Galería de productos y recursos gráficos

## 🔗 Enlaces del Proyecto

### 📊 Repositorio de GitHub

<div style="border: 1px solid #d0d7de; border-radius: 6px; padding: 16px; margin: 16px 0;">
  <h4 style="margin-top: 0;">
    <a href="https://github.com/PBS-Mentoring-3era-Edicion/BanBan" target="_blank" style="text-decoration: none; color: #0969da;">
      📦 PBS-Mentoring-3era-Edicion/BanBan
    </a>
  </h4>
  <p>Sitio web completo para pastelería Ban Ban - HTML, CSS, Bootstrap</p>
  <p>
    <img src="https://img.shields.io/badge/HTML-E34C26?style=flat&logo=html5&logoColor=white" alt="HTML">
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS">
    <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap">
  </p>
  <a href="https://github.com/PBS-Mentoring-3era-Edicion/BanBan" target="_blank" style="display: inline-block; padding: 8px 16px; background-color: #2ea043; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
    Ver en GitHub →
  </a>
</div>