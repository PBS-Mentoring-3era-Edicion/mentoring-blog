---
title: "Renta SV - Calculadora de Nómina en C#"
date: 2024-09-20
draft: false
description: "Aplicación de consola en C# para calcular salarios, deducciones de ley (ISSS, AFP, Renta) y horas extras."
tags: ["C#",".NET","Console Application","Programming Logic","Algorithms","Back-End"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 💼 Descripción del Proyecto

**Renta SV** es una aplicación de consola en C# que automatiza el cálculo de nómina para empleados en El Salvador, aplicando deducciones legales (ISSS, AFP) y cálculo de renta por tramos.

---

## 💻 Tecnologías

- C# (C Sharp)
- .NET 8.0
- Console Application

---

## ⭐ Habilidades Destacadas

### 1. Cálculo de ISSS

**Ubicación:** `RentaKathyaPérez/Renta SV/Program.cs:17-26`

```csharp
double descuentoISSS;
if (salarioBruto >= 1000)
{
    descuentoISSS = 30.00; // ISSS fijo
}
else
{
    descuentoISSS = salarioBruto * 0.03; // 3%
}
```

**Skills:** Condicionales, leyes laborales

---

### 2. Sistema de Renta Progresiva

**Ubicación:** `RentaKathyaPérez/Renta SV/Program.cs:48-76`

```csharp
if (salarioNeto <= 472.00)
{
    tramo = "Tramo 1 (No aplica renta)";
}
else if (salarioNeto <= 895.24)
{
    tramo = "Tramo 2";
    renta = (salarioNeto - 472.00) * 0.10 + 17.67;
}
else if (salarioNeto <= 2038.10)
{
    tramo = "Tramo 3";
    renta = (salarioNeto - 895.24) * 0.20 + 60.00;
}
else
{
    tramo = "Tramo 4";
    renta = (salarioNeto - 2038.10) * 0.30 + 288.57;
}
```

**Skills:** Cálculos matemáticos complejos, sistema progresivo

---

### 3. Cálculo de Horas Extras

**Ubicación:** `RentaKathyaPérez/Renta SV/Program.cs:34-46`

```csharp
double salarioHora = salarioBruto / 30 / 8;

Console.Write("Horas extras diurnas: ");
int horasExtrasDiurnas = Convert.ToInt32(Console.ReadLine());

Console.Write("Horas extras nocturnas: ");
int horasExtrasNocturnas = Convert.ToInt32(Console.ReadLine());

double pagoHorasExtrasDiurnas = horasExtrasDiurnas * (salarioHora * 2);
double pagoHorasExtrasNocturnas = horasExtrasNocturnas * (salarioHora * 2.25);
```

**Skills:** Operaciones aritméticas, conversión de tipos

---

### 4. Boleta de Pago Formateada

**Ubicación:** `RentaKathyaPérez/Renta SV/Program.cs:82-103`

```csharp
Console.WriteLine("----------------------");
Console.WriteLine("      BOLETA DE PAGO     ");
Console.WriteLine("----------------------");
Console.WriteLine($"Salario bruto:      ${salarioBruto:F2}");
Console.WriteLine($"Descuento ISSS:     -${descuentoISSS:F2}");
Console.WriteLine($"Descuento AFP:      -${descuentoAFP:F2}");
Console.WriteLine($"Salario final:      ${salarioFinal:F2}");
Console.WriteLine("----------------------");
```

**Skills:** String interpolation, formato de moneda

---

## 🏆 Características

- Cálculo de ISSS (3% hasta $1000, tope $30)
- AFP (7.25% sobre salario bruto)
- Renta (Sistema progresivo de 4 tramos)
- Horas extras (Diurnas 200%, Nocturnas 225%)
- Boleta de pago opcional
- Bucle de repetición

---

## 🎓 Aprendizajes

1. Lógica de Programación
2. Algoritmos Matemáticos
3. Manejo de Tipos de Datos
4. Control de Flujo
5. I/O de Consola
6. Formateo de Strings

---

## 🔗 Enlaces

- **Repositorio:** `assets/kathya-codebase/RentaKathyaPérez/`
- **Framework:** .NET 8.0
