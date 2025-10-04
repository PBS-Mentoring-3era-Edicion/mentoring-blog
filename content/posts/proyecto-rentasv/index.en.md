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

[![GitHub](https://img.shields.io/badge/GitHub-PBS--Mentoring--3era--Edicion%2FRentalKathyaPerez-181717?style=for-the-badge&logo=github)](https://github.com/PBS-Mentoring-3era-Edicion/RentalKathyaPerez)

---

*This project was developed as part of my backend web development training, demonstrating competencies in PHP, MySQL, and web application architecture.*