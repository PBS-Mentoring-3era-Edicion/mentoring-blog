---
title: "Ban Ban - Modern Website for Pastry Shop"
date: 2024-09-15
draft: false
description: "Development of a responsive website for Ban Ban pastry shop using HTML5, CSS3, and Bootstrap 5, demonstrating front-end web design skills."
tags: ["HTML","CSS","Bootstrap","Web Design","Front-End","UI/UX"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🎂 Project Description

**Ban Ban** is a modern and responsive website developed for the renowned Salvadoran pastry shop "Ban Ban Since 1975". The project demonstrates skills in front-end development, user interface design, and use of modern frameworks like Bootstrap 5.

### 🎯 Objective

Create an attractive digital presence for a traditional pastry shop, showcasing their products, history, and corporate values in a visual and accessible way.

---

## 💻 Technologies Used

- **HTML5** - Semantic and modern structure
- **CSS3** - Custom styling and design
- **Bootstrap 5** - Responsive framework
- **Font Awesome** - Professional iconography
- **Bootstrap Icons** - Complementary icons
- **Google Fonts** - Custom typography

---

## ⭐ Highlighted Skills

### 1. **Responsive Design with Bootstrap Grid System**

Implementation of a responsive card system that adapts to different screen sizes:

**Location:** `assets/kathya-codebase/BanBan/Parcial/index.html:51-79`

```html
<div class="row">
    <div class="col-md-4">
        <div class="card">
            <img src="Imágenes/pastel2.jpg" class="card-img-top" alt="Producto 1">
            <div class="card-body">
                <h5 class="card-title">Tres leches</h5>
                <p class="card-text">Self-love and tres leches cheesecake,
                   the perfect combination for Valentine's Day </p>
            </div>
        </div>
    </div>
    <!-- More cards... -->
</div>
```

**Skills demonstrated:**
- Responsive Grid System
- Bootstrap Components (Cards)
- Mobile-first design
- Semantic HTML structure

---

### 2. **Fixed Navbar with Social Media Integration**

Professional navigation bar with logo, responsive menu, and social media links:

**Location:** `assets/kathya-codebase/BanBan/Parcial/index.html:15-39`

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
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="nosotros.html">About Us</a></li>
                <li class="nav-item"><a class="nav-link" href="productos.html">Products</a></li>
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

**Skills demonstrated:**
- Responsive navigation
- Font Awesome integration
- Bootstrap utility classes
- Accessibility best practices (`rel="noopener noreferrer"`)
- Hamburger menu for mobile

---

### 3. **Contact Section with Bootstrap Icons**

Visually appealing contact section design using Bootstrap icon system:

**Location:** `assets/kathya-codebase/BanBan/Parcial/index.html:86-106`

```html
<div class="container text-center py-5">
    <h2 class="mb-4">Contact Us!</h2>
    <div class="row">
        <div class="col-md-5">
            <i class="bi bi-geo-alt fs-2"></i>
            <h5>Address</h5>
            <p>La Libertad, El Salvador · Santa Ana, El Salvador ·
               Sonsonate, El Salvador · Ahuachapán, El Salvador ·
               San Salvador, El Salvador</p>
        </div>
        <div class="col-md-3">
            <i class="bi bi-telephone fs-2"></i>
            <h5>Phone</h5>
            <p><a href="tel:+503 2441 1569" class="text-dark text-decoration-none">
               +503 2279-4168</a></p>
        </div>
        <div class="col-md-4">
            <i class="bi bi-facebook fs-2"></i>
            <h5>Follow Us</h5>
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

**Skills demonstrated:**
- Bootstrap Icons usage
- Utility classes (spacing, sizing)
- Functional links (`tel:` protocol)
- Centered and balanced design

---

### 4. **Custom CSS with Fixed Navbar**

Implementation of custom styles to enhance user experience:

**Location:** `assets/kathya-codebase/BanBan/Parcial/estilo.css:1-31`

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

**Skills demonstrated:**
- Fixed navbar with `position: fixed` and `z-index`
- Space compensation with `padding-top`
- Cohesive color palette
- Flexbox for vertical centering
- Hero section with defined height

---

### 5. **Products Page with Responsive Grid**

Implementation of an adaptive product gallery with Bootstrap Grid:

**Location:** `assets/kathya-codebase/BanBan/Parcial/productos.html:43-125`

```html
<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col-md-4">
        <div class="card">
            <img src="Imágenes/pastel2.jpg" class="card-img-top" alt="Producto 1">
            <div class="card-body">
                <h5 class="card-title">Tres leches</h5>
                <p class="card-text">Self-love and tres leches cheesecake,
                   the perfect combination for Valentine's Day </p>
            </div>
        </div>
    </div>
    <!-- 8 more products... -->
</div>
```

**Skills demonstrated:**
- Responsive column system (`row-cols-*`)
- Spacing with gap (`g-4`)
- Bootstrap Card components
- Web image optimization

---

### 6. **"About Us" Section with Values Design**

Creative implementation of corporate values using Font Awesome:

**Location:** `assets/kathya-codebase/BanBan/Parcial/nosotros.html:76-95`

```html
<section class="container text-center py-5">
    <h2 class="mb-4">Our Values</h2>
    <div class="row">
        <div class="col-md-4">
            <i class="fas fa-heart fa-3x text-danger"></i>
            <h4 class="mt-3">Passion</h4>
            <p>We love what we do and put our heart into every product.</p>
        </div>
        <div class="col-md-4">
            <i class="fas fa-star fa-3x text-warning"></i>
            <h4 class="mt-3">Quality</h4>
            <p>We select the best ingredients to offer you the best.</p>
        </div>
        <div class="col-md-4">
            <i class="fas fa-users fa-3x text-primary"></i>
            <h4 class="mt-3">Commitment</h4>
            <p>We strive to exceed our customers' expectations.</p>
        </div>
    </div>
</section>
```

**Skills demonstrated:**
- Font Awesome iconography
- Size classes (`fa-3x`)
- Bootstrap color classes (`text-danger`, `text-warning`, `text-primary`)
- Symmetric design with 3-column grid

---

## 🏆 Key Project Features

### ✨ UI/UX Design
- **Coherent color palette** - Pastel pink (#fddfdf) reflecting brand identity
- **Readable typography** - Use of modern web fonts
- **Consistent spacing** - Well-defined padding and margin
- **Clear visual hierarchy** - Well-differentiated titles, subtitles, and content

### 📱 Responsive Design
- **Mobile-first approach** - Adaptable to all devices
- **Efficient breakpoints** - Use of `col-md-*` for tablets and desktop
- **Hamburger menu** - Optimized navigation for mobile

### 🔗 SEO and Accessibility
- **Semantic tags** - `<nav>`, `<section>`, `<footer>`
- **Alt attributes on images** - Improves accessibility
- **Custom favicon** - Brand identity
- **Meta viewport** - Correct responsive configuration

### 🎨 External Resource Integration
- **Bootstrap 5 CDN** - Updated framework
- **Font Awesome 6.4.2** - Modern icon library
- **Bootstrap Icons** - Complementary iconography
- **Google Fonts** - Custom typography

---

## 📂 Project Structure

```
BanBan/Parcial/
├── index.html          # Main page
├── nosotros.html       # History and values
├── productos.html      # Product catalog
├── estilo.css          # Custom styles
└── Imágenes/          # Visual assets
    ├── logo.jpg
    ├── logo.png
    ├── banban.jpg
    └── [products...]
```

---

## 🎓 Key Learnings

1. **Bootstrap 5 Framework** - Mastery of grid system and components
2. **Responsive Design** - Creation of adaptive sites
3. **Semantic HTML5** - Modern web structure
4. **Advanced CSS3** - Flexbox, positioning, and transitions
5. **Library Integration** - CDN and external resources
6. **UI/UX Best Practices** - Interface design principles

---

## 🔗 Project Links

- **Repository:** `assets/kathya-codebase/BanBan/`
- **Ban Ban Facebook:** [BanBanSv](https://www.facebook.com/BanBanSv/)
- **Ban Ban Instagram:** [@banbansv](https://www.instagram.com/banbansv/)

---

## 💡 Conclusion

This project demonstrates competence in modern front-end development, with emphasis on responsive design, use of popular frameworks like Bootstrap 5, and creation of attractive and functional user interfaces. The website successfully reflects Ban Ban's brand identity while providing a seamless user experience across all devices.

Highlighted technical skills include DOM manipulation with semantic HTML, advanced CSS styling, and efficient use of pre-built components to accelerate development without sacrificing customization.