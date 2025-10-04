---
title: "Renta SV - Plataforma de Alquileres"
date: 2025-01-22
draft: false
description: "Sistema web completo para gestión de propiedades en alquiler en El Salvador"
tags: ["PHP", "MySQL", "HTML", "CSS", "Backend"]
categories: ["Proyectos"]
authors:
  - "kathyaperez"
showTableOfContents: true
---

## 📋 Descripción del Proyecto

Renta SV es una plataforma web desarrollada para facilitar la gestión y búsqueda de propiedades en alquiler en El Salvador. Este proyecto demuestra mis habilidades en desarrollo backend con PHP y gestión de bases de datos MySQL.

## 🛠️ Tecnologías Utilizadas

- **Backend**: PHP 7.4+
- **Base de Datos**: MySQL
- **Frontend**: HTML5, CSS3, JavaScript
- **Herramientas**: XAMPP, phpMyAdmin
- **Patrón de Diseño**: MVC (Model-View-Controller)

## ✨ Características Principales

### Para Usuarios
- 🔍 **Búsqueda Avanzada**: Filtros por ubicación, precio y tipo de propiedad
- 📱 **Diseño Responsivo**: Adaptable a todos los dispositivos
- 🏠 **Galería de Propiedades**: Vista detallada con múltiples imágenes
- 📞 **Formulario de Contacto**: Comunicación directa con propietarios

### Para Administradores
- 🔐 **Panel Administrativo**: Gestión completa de propiedades
- 📊 **Dashboard**: Estadísticas de visitas y consultas
- ✏️ **CRUD Completo**: Crear, leer, actualizar y eliminar propiedades
- 👥 **Gestión de Usuarios**: Control de accesos y permisos

## 💡 Soluciones Implementadas

### Seguridad
```php
// Prevención de inyección SQL
$stmt = $conexion->prepare("SELECT * FROM propiedades WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
```

### Optimización de Consultas
- Índices en campos de búsqueda frecuente
- Paginación para mejorar el rendimiento
- Caché de resultados frecuentes

## 📂 Estructura del Proyecto

```
RentaSV/
├── controllers/
│   ├── PropiedadController.php
│   └── UsuarioController.php
├── models/
│   ├── Propiedad.php
│   └── Usuario.php
├── views/
│   ├── propiedades/
│   └── admin/
├── config/
│   └── database.php
└── public/
    ├── css/
    ├── js/
    └── images/
```

## 🎯 Aprendizajes Clave

1. **Arquitectura MVC**: Implementación completa del patrón Model-View-Controller
2. **Seguridad Web**: Validación de datos, prevención de SQL injection
3. **Gestión de Sesiones**: Sistema de autenticación y autorización
4. **Optimización de Base de Datos**: Consultas eficientes y normalización

## 🚀 Funcionalidades Futuras

- [ ] Integración con mapas interactivos
- [ ] Sistema de pagos en línea
- [ ] Chat en tiempo real entre inquilinos y propietarios
- [ ] API RESTful para aplicación móvil

## 📸 Capturas de Pantalla

*Las capturas de pantalla del proyecto están disponibles en la carpeta del proyecto*

## 🔗 Enlaces del Proyecto

### 📊 Repositorio de GitHub

<div style="border: 1px solid #d0d7de; border-radius: 6px; padding: 16px; margin: 16px 0;">
  <h4 style="margin-top: 0;">
    <a href="https://github.com/PBS-Mentoring-3era-Edicion/RentalKathyaPerez" target="_blank" style="text-decoration: none; color: #0969da;">
      🏠 PBS-Mentoring-3era-Edicion/RentalKathyaPerez
    </a>
  </h4>
  <p>Plataforma web para gestión de propiedades en alquiler - PHP, MySQL</p>
  <p>
    <img src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white" alt="PHP">
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL">
    <img src="https://img.shields.io/badge/HTML-E34C26?style=flat&logo=html5&logoColor=white" alt="HTML">
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS">
  </p>
  <a href="https://github.com/PBS-Mentoring-3era-Edicion/RentalKathyaPerez" target="_blank" style="display: inline-block; padding: 8px 16px; background-color: #2ea043; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
    Ver en GitHub →
  </a>
</div>

---

*Este proyecto fue desarrollado como parte de mi formación en desarrollo web backend, demostrando competencias en PHP, MySQL y arquitectura de aplicaciones web.*