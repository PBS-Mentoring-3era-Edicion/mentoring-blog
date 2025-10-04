---
title: "Renta SV - Rental Platform"
date: 2025-01-22
draft: false
description: "Complete web system for rental property management in El Salvador"
tags: ["PHP", "MySQL", "HTML", "CSS", "Backend"]
categories: ["Projects"]
authors:
  - "kathyaperez"
showTableOfContents: true
---

## 📋 Project Description

Renta SV is a web platform developed to facilitate the management and search of rental properties in El Salvador. This project demonstrates my skills in backend development with PHP and MySQL database management.

## 🛠️ Technologies Used

- **Backend**: PHP 7.4+
- **Database**: MySQL
- **Frontend**: HTML5, CSS3, JavaScript
- **Tools**: XAMPP, phpMyAdmin
- **Design Pattern**: MVC (Model-View-Controller)

## ✨ Main Features

### For Users
- 🔍 **Advanced Search**: Filters by location, price, and property type
- 📱 **Responsive Design**: Adaptable to all devices
- 🏠 **Property Gallery**: Detailed view with multiple images
- 📞 **Contact Form**: Direct communication with owners

### For Administrators
- 🔐 **Admin Panel**: Complete property management
- 📊 **Dashboard**: Visit and inquiry statistics
- ✏️ **Complete CRUD**: Create, read, update, and delete properties
- 👥 **User Management**: Access and permission control

## 💡 Implemented Solutions

### Security
```php
// SQL injection prevention
$stmt = $connection->prepare("SELECT * FROM properties WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
```

### Query Optimization
- Indexes on frequently searched fields
- Pagination for improved performance
- Cache for frequent results

## 📂 Project Structure

```
RentaSV/
├── controllers/
│   ├── PropertyController.php
│   └── UserController.php
├── models/
│   ├── Property.php
│   └── User.php
├── views/
│   ├── properties/
│   └── admin/
├── config/
│   └── database.php
└── public/
    ├── css/
    ├── js/
    └── images/
```

## 🎯 Key Learnings

1. **MVC Architecture**: Complete implementation of Model-View-Controller pattern
2. **Web Security**: Data validation, SQL injection prevention
3. **Session Management**: Authentication and authorization system
4. **Database Optimization**: Efficient queries and normalization

## 🚀 Future Features

- [ ] Integration with interactive maps
- [ ] Online payment system
- [ ] Real-time chat between tenants and owners
- [ ] RESTful API for mobile application

## 📸 Screenshots

*Project screenshots are available in the project folder*

## 🔗 Project Links

### 📊 GitHub Repository

<div style="border: 1px solid #d0d7de; border-radius: 6px; padding: 16px; margin: 16px 0;">
  <h4 style="margin-top: 0;">
    <a href="https://github.com/PBS-Mentoring-3era-Edicion/RentalKathyaPerez" target="_blank" style="text-decoration: none; color: #0969da;">
      🏠 PBS-Mentoring-3era-Edicion/RentalKathyaPerez
    </a>
  </h4>
  <p>Web platform for rental property management - PHP, MySQL</p>
  <p>
    <img src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white" alt="PHP">
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL">
    <img src="https://img.shields.io/badge/HTML-E34C26?style=flat&logo=html5&logoColor=white" alt="HTML">
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS">
  </p>
  <a href="https://github.com/PBS-Mentoring-3era-Edicion/RentalKathyaPerez" target="_blank" style="display: inline-block; padding: 8px 16px; background-color: #2ea043; color: white; text-decoration: none; border-radius: 6px; font-weight: 500;">
    View on GitHub →
  </a>
</div>

---

*This project was developed as part of my backend web development training, demonstrating competencies in PHP, MySQL, and web application architecture.*