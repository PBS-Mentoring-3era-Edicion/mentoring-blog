---
title: "Restaurant System - Order Management in C#"
date: 2024-09-25
draft: false
description: "Restaurant order management system in C# with interactive menu, price calculation, and payment system."
tags: ["C#",".NET","Console Application","Data Structures","Collections","Business Logic"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🍽️ Description

**Restaurant System** is a C# console application that simulates a complete order management system. It includes interactive menu, automatic price calculation, delivery, preparation time, and payment with change.

---

## 💻 Technologies

- C# (C Sharp)
- .NET 8.0
- Collections (Dictionary, List)

---

## ⭐ Highlighted Skills

### 1. Dictionary for Menu Management

**Location:** `RestauranteKathyaPérez/Restaurante/Program.cs:8-17`

```csharp
Dictionary<string, double> menu = new Dictionary<string, double>()
{
    {"1. Pancakes", 5.00}, {"2. Omelette", 6.00},
    {"4. Burger", 8.99}, {"5. Caesar Salad", 7.49},
    {"10. Pupusa", 0.50}, {"15. Coffee", 1.50}
};
```

**Skills:** Dictionary<TKey, TValue>, collection initialization

---

### 2. Order Processing

**Location:** `RestauranteKathyaPérez/Restaurante/Program.cs:32-57`

```csharp
foreach (string opcion in opciones)
{
    if (item.Key.Contains("Pupusa"))
    {
        Console.Write($"How many {item.Key}?: ");
        int cantidad = Convert.ToInt32(Console.ReadLine());
        orden.Add($"{cantidad}x {item.Key}");
        total += cantidad * item.Value;
    }
}
```

**Skills:** foreach, string manipulation, conditional logic

---

### 3. Dynamic Time Calculation

**Location:** `RestauranteKathyaPérez/Restaurante/Program.cs:59-87`

```csharp
int tiempoPreparacion = orden.Count * 5;

if (paraLlevar) { tiempoPreparacion += 5; }

if (delivery)
{
    total += 3.00;
    tiempoPreparacion += 10;
}
```

**Skills:** Calculation algorithms, boolean variables

---

## 🏆 Features

- Dictionary for menu
- List for order
- Automatic total calculation
- Optional extras (Delivery $3, Speed up $5)
- Rewards program (>$20)
- Estimated time system
- Payment validation

---

## 🎓 Key Learnings

1. Data Structures (Dictionary, List)
2. Search Algorithms
3. String Manipulation
4. Conditional Logic
5. Loops (foreach, while)
6. Type Conversion

---

## 🔗 Links

- **Repository:** `assets/kathya-codebase/RestauranteKathyaPérez/`
