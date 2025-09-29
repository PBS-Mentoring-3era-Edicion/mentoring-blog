---
title: "Renta SV - Payroll Calculator in C#"
date: 2024-09-20
draft: false
description: "Console application in C# to calculate salaries, legal deductions (ISSS, AFP, Income Tax) and overtime hours."
tags: ["C#",".NET","Console Application","Programming Logic","Algorithms","Back-End"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 💼 Project Description

**Renta SV** is a C# console application that automates payroll calculation for employees in El Salvador, applying legal deductions (ISSS, AFP) and income tax calculation by brackets.

---

## 💻 Technologies

- C# (C Sharp)
- .NET 8.0
- Console Application

---

## ⭐ Highlighted Skills

### 1. ISSS Calculation

**Location:** `RentaKathyaPérez/Renta SV/Program.cs:17-26`

```csharp
double descuentoISSS;
if (salarioBruto >= 1000)
{
    descuentoISSS = 30.00; // Fixed ISSS
}
else
{
    descuentoISSS = salarioBruto * 0.03; // 3%
}
```

**Skills:** Conditionals, labor laws

---

### 2. Progressive Tax System

**Location:** `RentaKathyaPérez/Renta SV/Program.cs:48-76`

```csharp
if (salarioNeto <= 472.00)
{
    tramo = "Bracket 1 (No tax)";
}
else if (salarioNeto <= 895.24)
{
    tramo = "Bracket 2";
    renta = (salarioNeto - 472.00) * 0.10 + 17.67;
}
```

**Skills:** Complex math calculations, progressive system

---

### 3. Overtime Calculation

**Location:** `RentaKathyaPérez/Renta SV/Program.cs:34-46`

```csharp
double salarioHora = salarioBruto / 30 / 8;

double pagoHorasExtrasDiurnas = horasExtrasDiurnas * (salarioHora * 2);
double pagoHorasExtrasNocturnas = horasExtrasNocturnas * (salarioHora * 2.25);
```

**Skills:** Arithmetic operations, type conversion

---

## 🏆 Features

- ISSS calculation (3% up to $1000, cap $30)
- AFP (7.25% on gross salary)
- Income tax (4-bracket progressive system)
- Overtime (Day 200%, Night 225%)
- Optional pay stub
- Repeat loop

---

## 🎓 Key Learnings

1. Programming Logic
2. Mathematical Algorithms
3. Data Types Handling
4. Flow Control
5. Console I/O
6. String Formatting

---

## 🔗 Links

- **Repository:** `assets/kathya-codebase/RentaKathyaPérez/`
