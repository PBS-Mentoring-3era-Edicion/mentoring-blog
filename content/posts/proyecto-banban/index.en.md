---
title: "Ban Ban - Digital Bakery"
date: 2025-01-23
draft: false
description: "Elegant website for local bakery with interactive catalog"
tags: ["HTML", "CSS", "Bootstrap", "project"]
categories: ["Projects"]
authors:
  - "kathyaperez"
showTableOfContents: true
---

## 📋 Project Description

Ban Ban is a complete website developed for a local bakery in El Salvador. The project demonstrates skills in responsive web design and frontend development.

## 🛠️ Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- Font Awesome Icons
- JavaScript

## ✨ Main Features

- **Product Catalog**: Visual presentation of cakes and desserts
- **Responsive Design**: Adaptable to all devices
- **Intuitive Navigation**: Clear and accessible menu
- **Social Integration**: Links to Facebook and Instagram
- **Image Gallery**: Visual showcase of products

## 📂 Project Structure

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

## 🎯 Key Learnings

- Bootstrap implementation for responsive design
- Image optimization for web
- Semantic HTML structure
- Integration of external icons and fonts

## 🎨 Design Highlights

### Visual Identity
The site uses a warm color palette that reflects the artisanal nature of the bakery:
- Primary colors: Warm browns and golds
- Typography: Elegant and readable fonts
- Images: High-quality product photography

### User Experience
- **Mobile-first approach**: Optimized for mobile devices
- **Fast loading**: Optimized images and code
- **Clear navigation**: Intuitive menu structure
- **Call-to-action**: Direct contact information

## 📱 Responsive Features

The website adapts perfectly to different screen sizes:
- Desktop: Full layout with sidebar navigation
- Tablet: Adapted layout with collapsible menu
- Mobile: Streamlined experience with hamburger menu

## 🚀 Future Enhancements

- [ ] Online ordering system
- [ ] Customer review section
- [ ] Blog with baking tips
- [ ] Newsletter subscription
- [ ] Multi-language support

---

*This project showcases my ability to create attractive and functional websites that help local businesses establish their online presence.*

## 🔍 Explore Source Code

### Main Page Structure (index.html)
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
    <!-- Responsive navigation bar -->
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

### Interactive Project Browser
{{< project-tree project="BanBan" >}}

[📂 View complete project →](/assets/kathya-codebase/BanBan)