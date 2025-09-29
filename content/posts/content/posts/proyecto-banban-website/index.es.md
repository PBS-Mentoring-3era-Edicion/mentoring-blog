---
title: "Ban Ban - Sitio Web Moderno para Pastelería"
date: 2024-09-15
draft: false
description: "Desarrollo de un sitio web responsive para la pastelería Ban Ban utilizando HTML5, CSS3 y Bootstrap 5."
tags: ["HTML","CSS","Bootstrap","Web Design","Front-End","UI/UX"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🎂 Descripción del Proyecto

**Ban Ban** es un sitio web moderno y responsive desarrollado para la pastelería salvadoreña "Ban Ban Desde 1975". El proyecto demuestra habilidades en desarrollo front-end, diseño de interfaces y uso de Bootstrap 5.

---

## 💻 Tecnologías Utilizadas

- HTML5 - Estructura semántica
- CSS3 - Estilos personalizados
- Bootstrap 5 - Framework responsive
- Font Awesome - Iconografía
- Bootstrap Icons

---

## ⭐ Habilidades Destacadas

### 1. Diseño Responsive con Bootstrap Grid

**Ubicación:** `BanBan/Parcial/index.html:51-79`

```html
<div class="row">
    <div class="col-md-4">
        <div class="card">
            <img src="Imágenes/pastel2.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Tres leches</h5>
                <p class="card-text">Amor propio y tres leches de cheesecake</p>
            </div>
        </div>
    </div>
</div>
```

**Skills:** Grid System, Cards, diseño mobile-first

---

### 2. Navbar Fija con Redes Sociales

**Ubicación:** `BanBan/Parcial/index.html:15-39`

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <img src="Imágenes/logo.jpg" width="110" height="40">
        </a>
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
            <li class="nav-item">
                <a href="https://www.facebook.com/BanBanSv/" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
            </li>
        </ul>
    </div>
</nav>
```

**Skills:** Navegación responsive, Font Awesome, accesibilidad

---

### 3. CSS Personalizado con Navbar Fija

**Ubicación:** `BanBan/Parcial/estilo.css:1-31`

```css
body {
    background-color: #fddfdf;
    padding-top: 50px;
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

**Skills:** Fixed positioning, z-index, paleta de colores

---

## 🏆 Características Clave

- **Responsive Design** - Adaptable a todos los dispositivos
- **Navegación intuitiva** - Menú hamburguesa para móviles
- **Integración de redes sociales**
- **Bootstrap Icons** para contacto

---

## 🎓 Aprendizajes

1. Bootstrap 5 Framework
2. Diseño Responsive
3. HTML5 Semántico
4. CSS3 Avanzado
5. UI/UX Best Practices

---

## 🔗 Enlaces

- **Repositorio:** `assets/kathya-codebase/BanBan/`
- **Facebook:** [BanBanSv](https://www.facebook.com/BanBanSv/)
