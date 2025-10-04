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

[![GitHub](https://img.shields.io/badge/GitHub-PBS--Mentoring--3era--Edicion%2FRentalKathyaPerez-181717?style=for-the-badge&logo=github)](https://github.com/PBS-Mentoring-3era-Edicion/RentalKathyaPerez)

---

*Este proyecto fue desarrollado como parte de mi formación en desarrollo web backend, demostrando competencias en PHP, MySQL y arquitectura de aplicaciones web.*