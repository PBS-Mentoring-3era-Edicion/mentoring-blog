---
title: "Sistema de Restaurante - Gestión de Pedidos en C#"
date: 2024-09-25
draft: false
description: "Sistema de gestión de pedidos para restaurante en C# con menú interactivo, cálculo de precios y sistema de pago."
tags: ["C#",".NET","Console Application","Data Structures","Collections","Business Logic"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🍽️ Descripción

**Sistema de Restaurante** es una aplicación de consola en C# que simula un sistema completo de gestión de pedidos. Incluye menú interactivo, cálculo automático de precios, delivery, tiempo de preparación y pago con cambio.

---

## 💻 Tecnologías

- C# (C Sharp)
- .NET 8.0
- Collections (Dictionary, List)

---

## ⭐ Habilidades Destacadas

### 1. Dictionary para Gestión de Menú

**Ubicación:** `RestauranteKathyaPérez/Restaurante/Program.cs:8-17`

```csharp
Dictionary<string, double> menu = new Dictionary<string, double>()
{
    {"1. Pancakes", 5.00}, {"2. Omelette", 6.00},
    {"4. Hamburguesa", 8.99}, {"5. Ensalada César", 7.49},
    {"10. Pupusa Revueltas", 0.50}, {"11. Pupusa Queso", 0.50},
    {"15. Café", 1.50}, {"16. Jugo", 2.50}
};
```

**Skills:** Dictionary<TKey, TValue>, inicialización de colecciones

---

### 2. Procesamiento de Pedidos

**Ubicación:** `RestauranteKathyaPérez/Restaurante/Program.cs:32-57`

```csharp
foreach (string opcion in opciones)
{
    if (item.Key.Contains("Pupusa"))
    {
        Console.Write($"¿Cuántas {item.Key.Substring(3)} desea?: ");
        int cantidad = Convert.ToInt32(Console.ReadLine());
        orden.Add($"{cantidad}x {item.Key.Substring(3)}");
        total += cantidad * item.Value;
    }
    else
    {
        orden.Add(item.Key);
        total += item.Value;
    }
}
```

**Skills:** foreach, string manipulation, lógica condicional

---

### 3. Cálculo de Tiempo Dinámico

**Ubicación:** `RestauranteKathyaPérez/Restaurante/Program.cs:59-87`

```csharp
int tiempoPreparacion = orden.Count * 5;

if (paraLlevar) { tiempoPreparacion += 5; }

if (delivery)
{
    total += 3.00;
    tiempoPreparacion += 10;
}

if (acelerar)
{
    total += 5.00;
    tiempoPreparacion /= 2;
}
```

**Skills:** Algoritmos de cálculo, variables booleanas

---

### 4. Validación de Pago

**Ubicación:** `RestauranteKathyaPérez/Restaurante/Program.cs:95-107`

```csharp
double pago = 0;
while (pago < total)
{
    Console.Write("Ingrese el monto de pago: ");
    pago = Convert.ToDouble(Console.ReadLine());
    if (pago < total) { 
        Console.WriteLine("Monto insuficiente.");
    }
}

double cambio = pago - total;
Console.WriteLine($"Su cambio: ${cambio:F2}");
```

**Skills:** Bucle while, validación, formato de moneda

---

## 🏆 Características

- Dictionary para menú
- List para orden
- Cálculo automático de totales
- Extras opcionales (Delivery $3, Acelerar $5)
- Programa de recompensas (>$20)
- Sistema de tiempo estimado
- Validación de pago

---

## 🎓 Aprendizajes

1. Estructuras de Datos (Dictionary, List)
2. Algoritmos de Búsqueda
3. Manipulación de Strings
4. Lógica Condicional
5. Bucles (foreach, while)
6. Conversión de Tipos

---

## 🔗 Enlaces

- **Repositorio:** `assets/kathya-codebase/RestauranteKathyaPérez/`
