---
title: "Sistema de Restaurante - Gestión de Pedidos en C#"
date: 2024-09-25
draft: false
description: "Sistema de gestión de pedidos para restaurante desarrollado en C# con menú interactivo, cálculo de precios, tiempo de preparación y sistema de pago, demostrando uso de colecciones y lógica de negocio."
tags: ["C#",".NET","Console Application","Data Structures","Collections","Business Logic","Back-End"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🍽️ Descripción del Proyecto

**Sistema de Restaurante** es una aplicación de consola en C# que simula un sistema completo de gestión de pedidos para un restaurante. El proyecto incluye menú interactivo, cálculo automático de precios, manejo de cantidades, opciones de delivery, tiempo de preparación y sistema de pago con cambio. Demuestra uso avanzado de estructuras de datos como `Dictionary` y `List`.

### 🎯 Objetivo

Crear un sistema funcional de punto de venta para restaurantes que automatice la toma de pedidos, cálculo de totales, gestión de opciones especiales (delivery, para llevar, aceleración) y generación de tickets.

---

## 💻 Tecnologías Utilizadas

- **C# (C Sharp)** - Lenguaje de programación orientado a objetos
- **.NET 8.0** - Framework de desarrollo
- **Console Application** - Interfaz de línea de comandos
- **Collections (Dictionary, List)** - Estructuras de datos

---

## ⭐ Habilidades Destacadas

### 1. **Uso de Dictionary para Gestión de Menú**

Implementación de un menú de restaurante usando `Dictionary<string, double>` para mapear productos con precios:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:8-17`

```csharp
// Menú del restaurante con precios
Dictionary<string, double> menu = new Dictionary<string, double>()
{
    {"1. Pancakes", 5.00}, {"2. Omelette", 6.00}, {"3. Tostadas Francesas", 5.70},
    {"4. Hamburguesa", 8.99}, {"5. Ensalada César", 7.49}, {"6. Pasta Alfredo", 9.99},
    {"7. Sopa de Mariscos", 10.00}, {"8. Filete de Res", 12.00}, {"9. Pollo a la Parrilla", 12.50},
    {"10. Pupusa Revueltas", 0.50}, {"11. Pupusa Frijol con Queso", 0.50}, {"12. Pupusa Queso", 0.50},
    {"13. Pupusa Chicharrón", 0.50}, {"14. Pupusa Loroco", 0.50},
    {"15. Café", 1.50}, {"16. Jugo de Naranja", 2.50}, {"17. Agua", 1.00}
};
```

**Skills demostradas:**
- Uso de colecciones genéricas (`Dictionary<TKey, TValue>`)
- Inicialización de colecciones con valores
- Estructuración de datos clave-valor
- Organización de menú por categorías (desayunos, almuerzos, comida típica, bebidas)

---

### 2. **Algoritmo de Procesamiento de Pedidos con Lógica Condicional**

Sistema inteligente que diferencia entre pupusas (con cantidad) y otros platillos:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:32-57`

```csharp
// Procesar la orden
foreach (string opcion in opciones)
{
    string clave = opcion.Trim() + ".";
    foreach (var item in menu)
    {
        if (item.Key.StartsWith(clave))
        {
            if (item.Key.Contains("Pupusa")) // Si es una pupusa, preguntar cuántas quiere
            {
                Console.Write($"¿Cuántas {item.Key.Substring(3)} desea?: ");
                int cantidad = Convert.ToInt32(Console.ReadLine());
                if (cantidad > 0)
                {
                    orden.Add($"{cantidad}x {item.Key.Substring(3)}");
                    total += cantidad * item.Value;
                }
            }
            else // Para otros platillos, solo agregar al pedido
            {
                orden.Add(item.Key);
                total += item.Value;
            }
        }
    }
}
```

**Skills demostradas:**
- Iteración sobre colecciones (`foreach`)
- Búsqueda en strings (`.StartsWith()`, `.Contains()`)
- Manipulación de strings (`.Substring()`, `.Trim()`)
- Lógica condicional basada en contenido
- Acumulación de totales
- Uso de `List<string>` para almacenar orden

---

### 3. **Cálculo Dinámico de Tiempo de Preparación**

Sistema que calcula el tiempo estimado basado en cantidad de platillos y opciones adicionales:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:59-87`

```csharp
// Calcular tiempo de espera base
int tiempoPreparacion = orden.Count * 5;

// ¿Para llevar?
Console.Write("\n¿Desea su pedido para llevar? (si/no): ");
bool paraLlevar = Console.ReadLine().ToLower() == "si";
if (paraLlevar) { tiempoPreparacion += 5; }

// ¿Delivery?
bool delivery = false;
if (paraLlevar)
{
    Console.Write("¿Quiere servicio de delivery? (costo adicional $3.00) (si/no): ");
    delivery = Console.ReadLine().ToLower() == "si";
    if (delivery)
    {
        total += 3.00;
        tiempoPreparacion += 10;
    }
}

// ¿Acelerar la orden?
Console.Write("¿Quiere acelerar su pedido por $5? (Reduce el tiempo un 50%) (si/no): ");
bool acelerar = Console.ReadLine().ToLower() == "si";
if (acelerar)
{
    total += 5.00;
    tiempoPreparacion /= 2; // Reducir el tiempo a la mitad
}
```

**Skills demostradas:**
- Algoritmo de cálculo de tiempo basado en variables
- Operaciones matemáticas sobre enteros
- Variables booleanas para opciones
- Lógica condicional anidada
- Modificación de precios según opciones
- Comparación de strings con `.ToLower()`

---

### 4. **Validación de Pago con Bucle While**

Sistema de validación que asegura pago suficiente antes de continuar:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:95-107`

```csharp
// Pago
double pago = 0;
while (pago < total)
{
    Console.Write("\nIngrese el monto de pago: ");
    pago = Convert.ToDouble(Console.ReadLine());
    if (pago < total) { Console.WriteLine("Monto insuficiente. Intente de nuevo."); }
}

// Cambio y despedida
double cambio = pago - total;
Console.WriteLine($"Pago recibido. Su cambio: ${cambio:F2}");
```

**Skills demostradas:**
- Bucle de validación con `while`
- Control de flujo condicional
- Feedback inmediato al usuario
- Cálculo de vuelto/cambio
- Formato de moneda con `:F2`

---

### 5. **Sistema de Recompensas con Condicional**

Implementación de programa de lealtad que otorga cupones por compras superiores:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:118-122`

```csharp
// Regalar cupón si el total supera $20
if (total > 20)
{
    Console.WriteLine("Gracias por su compra. Ha recibido un cupón de 10% de descuento para su próxima visita.");
}
```

**Skills demostradas:**
- Lógica de negocio para programa de fidelización
- Condiciones basadas en umbrales de compra
- Gamificación de la experiencia de usuario

---

### 6. **Procesamiento de Input con Split y Trim**

Manejo de entrada múltiple del usuario para selección de varios platillos:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:28-30`

```csharp
// Selección del pedido
Console.WriteLine("\nIngrese los números de los platillos que desea (separados por comas):");
string input = Console.ReadLine();
string[] opciones = input.Split(',');
```

**Skills demostradas:**
- Parsing de strings con `.Split()`
- Manejo de arrays de strings
- Procesamiento de input delimitado por comas
- UX intuitiva para múltiples selecciones

---

### 7. **Lógica Condicional Compleja para Confirmación**

Sistema de mensajes personalizados según el tipo de pedido:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:108-116`

```csharp
// Confirmación del pedido
if (paraLlevar)
{
    Console.WriteLine(delivery ? "Su pedido será entregado a domicilio." : "Su pedido estará listo para recoger.");
}
else
{
    Console.WriteLine("Puede disfrutar su comida en el restaurante.");
}
```

**Skills demostradas:**
- Operador ternario (`? :`)
- Lógica condicional anidada
- Mensajes contextuales basados en estado
- Experiencia de usuario personalizada

---

### 8. **Sistema de Encuesta de Satisfacción**

Implementación de feedback del cliente con respuesta adaptativa:

**Ubicación:** `assets/kathya-codebase/RestauranteKathyaPérez/Restaurante/Restaurante/Program.cs:124-127`

```csharp
// Encuesta de satisfacción
Console.Write("\n¿Cómo calificaría nuestro servicio? (1-5 estrellas): ");
int estrellas = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(estrellas >= 4 ? "Gracias por su excelente calificación." : "Lamentamos no haber cumplido sus expectativas.");
```

**Skills demostradas:**
- Conversión de tipos (`Convert.ToInt32`)
- Operador ternario para respuestas condicionales
- Sistema de calificación numérica
- Gamificación y engagement del usuario

---

## 🏆 Características Clave del Proyecto

### 🗂️ Gestión de Datos
- **Dictionary para menú** - Mapeo eficiente de productos y precios
- **List para orden** - Almacenamiento dinámico de items seleccionados
- **Variables de estado** - Tracking de opciones del usuario

### 💰 Sistema de Precios Inteligente
- **Cálculo automático** - Suma de items según cantidad
- **Extras opcionales** - Delivery ($3), aceleración ($5)
- **Programa de recompensas** - Cupón por compras >$20
- **Formato de moneda** - Presentación profesional con 2 decimales

### ⏱️ Gestión de Tiempo
- **Cálculo base** - 5 minutos por platillo
- **Tiempo para llevar** - +5 minutos adicionales
- **Delivery** - +10 minutos extra
- **Opción express** - Reduce tiempo al 50%

### 🎯 Lógica de Negocio
- **Manejo especial de pupusas** - Permite especificar cantidad
- **Validación de pago** - No permite continuar sin pago suficiente
- **Opciones condicionales** - Delivery solo si es para llevar
- **Encuesta de satisfacción** - Recolección de feedback

---

## 📂 Estructura del Proyecto

```
RestauranteKathyaPérez/Restaurante/
└── Restaurante/
    ├── Program.cs          # Lógica completa del sistema
    ├── Logica.csproj       # Archivo de proyecto .NET
    └── obj/                # Archivos de compilación
```

---

## 🎓 Aprendizajes Clave

1. **Estructuras de Datos** - `Dictionary<TKey, TValue>` y `List<T>`
2. **Algoritmos de Búsqueda** - `.StartsWith()`, `.Contains()`
3. **Manipulación de Strings** - `.Split()`, `.Substring()`, `.Trim()`, `.ToLower()`
4. **Lógica Condicional** - `if-else`, operador ternario, condiciones anidadas
5. **Bucles** - `foreach`, `while` con validación
6. **Conversión de Tipos** - `Convert.ToInt32()`, `Convert.ToDouble()`
7. **Formateo de Output** - String interpolation, formato de moneda

---

## 🔧 Conceptos Técnicos Aplicados

### Colecciones Genéricas
```csharp
Dictionary<string, double> menu = new Dictionary<string, double>();  // Menú
List<string> orden = new List<string>();                            // Orden
```

### Iteración y Búsqueda
```csharp
foreach (var item in menu)              // Iterar diccionario
foreach (string opcion in opciones)     // Iterar array
if (item.Key.StartsWith(clave))        // Búsqueda por prefijo
if (item.Key.Contains("Pupusa"))       // Búsqueda por substring
```

### Operadores Lógicos y Ternarios
```csharp
bool paraLlevar = respuesta.ToLower() == "si";           // Comparación
tiempoPreparacion /= 2;                                   // División asignación
delivery ? "Entrega" : "Recoger"                         // Operador ternario
```

---

## 💡 Solución a Problema Real

Este proyecto automatiza el proceso de toma de pedidos en restaurantes, incluyendo:

- ✅ **Menú digital interactivo** con precios actualizados
- ✅ **Cálculo automático de totales** sin errores humanos
- ✅ **Estimación de tiempo de preparación** para mejor planificación
- ✅ **Opciones de servicio** (comer ahí, para llevar, delivery)
- ✅ **Sistema de pago** con validación y cálculo de cambio
- ✅ **Programa de lealtad** para retener clientes
- ✅ **Feedback del cliente** para mejorar servicio

---

## 🔗 Enlaces del Proyecto

- **Repositorio:** `assets/kathya-codebase/RestauranteKathyaPérez/`
- **Framework:** .NET 8.0
- **Lenguaje:** C#

---

## 📈 Posibles Mejoras Futuras

1. **Persistencia de Datos** - Guardar órdenes en base de datos
2. **Sistema Multi-mesa** - Manejo de múltiples mesas simultáneamente
3. **Interfaz Gráfica** - Migrar a Windows Forms o WPF
4. **Impresión de Tickets** - Generar recibos físicos
5. **Inventario** - Control de ingredientes disponibles
6. **Reportes** - Estadísticas de ventas y productos más vendidos
7. **Sistema de Propinas** - Cálculo y distribución de propinas
8. **Descuentos** - Sistema de cupones y promociones

---

## 💡 Conclusión

Este proyecto demuestra competencia avanzada en programación orientada a datos con C#, destacando el uso de colecciones genéricas (`Dictionary` y `List`), algoritmos de búsqueda y procesamiento, y lógica de negocio compleja. La aplicación simula exitosamente un sistema real de punto de venta con múltiples opciones y validaciones.

Las habilidades técnicas incluyen manipulación de estructuras de datos, procesamiento de strings, control de flujo avanzado, y diseño de experiencia de usuario para aplicaciones de consola. El proyecto es escalable y podría servir como base para un sistema POS (Point of Sale) completo con interfaz gráfica y persistencia de datos.