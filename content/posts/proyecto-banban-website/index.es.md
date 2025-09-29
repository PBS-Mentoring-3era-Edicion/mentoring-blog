---
title: "Ban Ban - Sitio Web Moderno para Pastelería"
date: 2024-09-15
draft: false
description: "Desarrollo de un sitio web responsive para la pastelería Ban Ban utilizando HTML5, CSS3 y Bootstrap 5, demostrando habilidades en diseño web front-end."
tags: ["HTML","CSS","Bootstrap","Web Design","Front-End","UI/UX"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🎂 Descripción del Proyecto

**Ban Ban** es un sitio web moderno y responsive desarrollado para la reconocida pastelería salvadoreña "Ban Ban Desde 1975". El proyecto demuestra habilidades en desarrollo front-end, diseño de interfaces de usuario y uso de frameworks modernos como Bootstrap 5.

### 🎯 Objetivo

Crear una presencia digital atractiva para una pastelería tradicional, mostrando sus productos, historia y valores corporativos de manera visual y accesible.

---

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica y moderna
- **CSS3** - Estilización y diseño personalizado
- **Bootstrap 5** - Framework responsive
- **Font Awesome** - Iconografía profesional
- **Bootstrap Icons** - Iconos complementarios
- **Google Fonts** - Tipografías personalizadas

---

## ⭐ Habilidades Destacadas

### 1. **Diseño Responsive con Bootstrap Grid System**

Implementación de un sistema de tarjetas (cards) responsive que se adapta a diferentes tamaños de pantalla:

**Ubicación:** `assets/kathya-codebase/BanBan/Parcial/index.html:51-79`

```html
<div class="row">
    <div class="col-md-4">
        <div class="card">
            <img src="Imágenes/pastel2.jpg" class="card-img-top" alt="Producto 1">
            <div class="card-body">
                <h5 class="card-title">Tres leches</h5>
                <p class="card-text">Amor propio y tres leches de cheesecake la combinación perfecta para San Valentín </p>
            </div>
        </div>
    </div>
    <!-- Más tarjetas... -->
</div>
```

**Skills demostradas:**
- Sistema de rejilla responsive (Grid System)
- Componentes Bootstrap (Cards)
- Diseño mobile-first
- Estructura HTML semántica

---

### 2. **Navbar Fija con Integración de Redes Sociales**

Barra de navegación profesional con logo, menú responsive y enlaces a redes sociales:

**Ubicación:** `assets/kathya-codebase/BanBan/Parcial/index.html:15-39`

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img src="Imágenes/logo.jpg" width="110" height="40">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="nosotros.html">Sobre Nosotros</a></li>
                <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                <li class="nav-item d-flex align-items-center">
                    <a href="https://www.facebook.com/BanBanSv/" class="nav-link"
                       target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/banbansv/" class="nav-link"
                       target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Skills demostradas:**
- Navegación responsive
- Integración de Font Awesome
- Uso de clases utilitarias de Bootstrap
- Buenas prácticas de accesibilidad (`rel="noopener noreferrer"`)
- Hamburger menu para móviles

---

### 3. **Sección de Contacto con Bootstrap Icons**

Diseño de una sección de contacto visualmente atractiva usando el sistema de iconos de Bootstrap:

**Ubicación:** `assets/kathya-codebase/BanBan/Parcial/index.html:86-106`

```html
<div class="container text-center py-5">
    <h2 class="mb-4">¡Contáctanos!</h2>
    <div class="row">
        <div class="col-md-5">
            <i class="bi bi-geo-alt fs-2"></i>
            <h5>Dirección</h5>
            <p>La Libertad, El Salvador · Santa Ana, El Salvador ·
               Sonsonate, El Salvador · Ahuachapán, El Salvador ·
               San Salvador, El Salvador</p>
        </div>
        <div class="col-md-3">
            <i class="bi bi-telephone fs-2"></i>
            <h5>Teléfono</h5>
            <p><a href="tel:+503 2441 1569" class="text-dark text-decoration-none">
               +503 2279-4168</a></p>
        </div>
        <div class="col-md-4">
            <i class="bi bi-facebook fs-2"></i>
            <h5>Síguenos</h5>
            <a href="https://www.facebook.com/BanBanSv/" class="text-dark me-2">
                <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/BanBanSv/" class="text-dark me-2">
                <i class="bi bi-instagram"></i>
            </a>
        </div>
    </div>
</div>
```

**Skills demostradas:**
- Uso de Bootstrap Icons
- Clases utilitarias (spacing, sizing)
- Enlaces funcionales (`tel:` protocol)
- Diseño centrado y balanceado

---

### 4. **CSS Personalizado con Navbar Fija**

Implementación de estilos personalizados para mejorar la experiencia de usuario:

**Ubicación:** `assets/kathya-codebase/BanBan/Parcial/estilo.css:1-31`

```css
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
}
```

**Skills demostradas:**
- Navbar fija con `position: fixed` y `z-index`
- Compensación de espacio con `padding-top`
- Paleta de colores cohesiva
- Flexbox para centrado vertical
- Hero section con altura definida

---

### 5. **Página de Productos con Grid Responsive**

Implementación de una galería de productos adaptable con Bootstrap Grid:

**Ubicación:** `assets/kathya-codebase/BanBan/Parcial/productos.html:43-125`

```html
<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col-md-4">
        <div class="card">
            <img src="Imágenes/pastel2.jpg" class="card-img-top" alt="Producto 1">
            <div class="card-body">
                <h5 class="card-title">Tres leches</h5>
                <p class="card-text">Amor propio y tres leches de cheesecake
                   la combinación perfecta para San Valentín </p>
            </div>
        </div>
    </div>
    <!-- 8 productos más... -->
</div>
```

**Skills demostradas:**
- Sistema de columnas responsive (`row-cols-*`)
- Espaciado con gap (`g-4`)
- Componentes Card de Bootstrap
- Optimización de imágenes para web

---

### 6. **Sección "Sobre Nosotros" con Diseño de Valores**

Implementación creativa de valores corporativos usando Font Awesome:

**Ubicación:** `assets/kathya-codebase/BanBan/Parcial/nosotros.html:76-95`

```html
<section class="container text-center py-5">
    <h2 class="mb-4">Nuestros Valores</h2>
    <div class="row">
        <div class="col-md-4">
            <i class="fas fa-heart fa-3x text-danger"></i>
            <h4 class="mt-3">Pasión</h4>
            <p>Amamos lo que hacemos y ponemos el corazón en cada producto.</p>
        </div>
        <div class="col-md-4">
            <i class="fas fa-star fa-3x text-warning"></i>
            <h4 class="mt-3">Calidad</h4>
            <p>Seleccionamos los mejores ingredientes para ofrecerte lo mejor.</p>
        </div>
        <div class="col-md-4">
            <i class="fas fa-users fa-3x text-primary"></i>
            <h4 class="mt-3">Compromiso</h4>
            <p>Nos esforzamos por superar las expectativas de nuestros clientes.</p>
        </div>
    </div>
</section>
```

**Skills demostradas:**
- Iconografía de Font Awesome
- Clases de tamaño (`fa-3x`)
- Clases de color de Bootstrap (`text-danger`, `text-warning`, `text-primary`)
- Diseño simétrico con grid de 3 columnas

---

## 🏆 Características Clave del Proyecto

### ✨ Diseño UI/UX
- **Paleta de colores coherente** - Rosa pastel (#fddfdf) reflejando la identidad de marca
- **Tipografía legible** - Uso de fuentes web modernas
- **Espaciado consistente** - Padding y margin bien definidos
- **Jerarquía visual clara** - Títulos, subtítulos y contenido bien diferenciados

### 📱 Responsive Design
- **Mobile-first approach** - Adaptable a todos los dispositivos
- **Breakpoints eficientes** - Uso de `col-md-*` para tablets y desktop
- **Menú hamburguesa** - Navegación optimizada para móviles

### 🔗 SEO y Accesibilidad
- **Etiquetas semánticas** - `<nav>`, `<section>`, `<footer>`
- **Atributos alt en imágenes** - Mejora accesibilidad
- **Favicon personalizado** - Identidad de marca
- **Meta viewport** - Configuración responsive correcta

### 🎨 Integración de Recursos Externos
- **CDN de Bootstrap 5** - Framework actualizado
- **Font Awesome 6.4.2** - Librería de iconos moderna
- **Bootstrap Icons** - Complemento de iconografía
- **Google Fonts** - Tipografías personalizadas (Creepster en proyecto XO)

---

## 📂 Estructura del Proyecto

```
BanBan/Parcial/
├── index.html          # Página principal
├── nosotros.html       # Historia y valores
├── productos.html      # Catálogo de productos
├── estilo.css          # Estilos personalizados
└── Imágenes/          # Assets visuales
    ├── logo.jpg
    ├── logo.png
    ├── banban.jpg
    └── [productos...]
```

---

## 🎓 Aprendizajes Clave

1. **Bootstrap 5 Framework** - Dominio del sistema de grid y componentes
2. **Diseño Responsive** - Creación de sitios adaptables
3. **HTML5 Semántico** - Estructura web moderna
4. **CSS3 Avanzado** - Flexbox, positioning, y transiciones
5. **Integración de Librerías** - CDN y recursos externos
6. **UI/UX Best Practices** - Principios de diseño de interfaz

---

## 🔗 Enlaces del Proyecto

- **Repositorio:** `assets/kathya-codebase/BanBan/`
- **Facebook Ban Ban:** [BanBanSv](https://www.facebook.com/BanBanSv/)
- **Instagram Ban Ban:** [@banbansv](https://www.instagram.com/banbansv/)

---

## 💡 Conclusión

Este proyecto demuestra competencia en desarrollo front-end moderno, con énfasis en diseño responsive, uso de frameworks populares como Bootstrap 5, y creación de interfaces de usuario atractivas y funcionales. El sitio web refleja exitosamente la identidad de marca de Ban Ban mientras proporciona una experiencia de usuario fluida en todos los dispositivos.

Las habilidades técnicas destacadas incluyen manipulación del DOM con HTML semántico, estilización avanzada con CSS, y uso eficiente de componentes pre-construidos para acelerar el desarrollo sin sacrificar la personalización.