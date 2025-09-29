---
title: "Renta SV - Calculadora de Nómina en C#"
date: 2024-09-20
draft: false
description: "Aplicación de consola en C# para calcular salarios, deducciones de ley (ISSS, AFP, Renta) y horas extras, demostrando lógica de programación y manejo de estructuras de control."
tags: ["C#",".NET","Console Application","Programming Logic","Algorithms","Back-End"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 💼 Descripción del Proyecto

**Renta SV** es una aplicación de consola desarrollada en C# que automatiza el cálculo de nómina para empleados en El Salvador, aplicando las leyes laborales locales de deducciones (ISSS, AFP) y cálculo de renta por tramos. El proyecto demuestra competencia en programación backend, lógica condicional compleja y manejo de datos numéricos.

### 🎯 Objetivo

Crear una herramienta práctica que permita a empleados calcular su salario neto después de deducciones legales, incluyendo el cálculo de horas extras diurnas y nocturnas según la legislación salvadoreña.

---

## 💻 Tecnologías Utilizadas

- **C# (C Sharp)** - Lenguaje de programación principal
- **.NET 8.0** - Framework de desarrollo
- **Console Application** - Interfaz de línea de comandos
- **Visual Studio** - IDE de desarrollo

---

## ⭐ Habilidades Destacadas

### 1. **Lógica Condicional Compleja - Cálculo de ISSS**

Implementación de lógica para calcular el descuento del ISSS según tramos de salario:

**Ubicación:** `assets/kathya-codebase/RentaKathyaPérez/Renta SV/Renta SV/Program.cs:17-26`

```csharp
// Calcular ISSS
double descuentoISSS;
if (salarioBruto >= 1000)
{
    descuentoISSS = 30.00; // ISSS fijo para salarios de $1000 o más
}
else
{
    descuentoISSS = salarioBruto * 0.03; // 3% para salarios menores a $1000
}
```

**Skills demostradas:**
- Estructuras condicionales (`if-else`)
- Conocimiento de leyes laborales salvadoreñas
- Manejo de constantes y porcentajes
- Lógica de negocio aplicada

---

### 2. **Cálculo Matemático de Tramos de Renta (Sistema Progresivo)**

Implementación del sistema de impuesto sobre la renta de El Salvador con 4 tramos progresivos:

**Ubicación:** `assets/kathya-codebase/RentaKathyaPérez/Renta SV/Renta SV/Program.cs:48-76`

```csharp
double renta = 0;
string tramo = "";

if (salarioNeto <= 472.00)
{
    tramo = "Tramo 1 (No aplica renta)";
    Console.WriteLine("Estás en el Tramo 1, lo que significa que no se te descontará renta.");
}
else if (salarioNeto <= 895.24)
{
    tramo = "Tramo 2";
    renta = (salarioNeto - 472.00) * 0.10 + 17.67;
    Console.WriteLine("Estás en el Tramo 2. Se aplicará una tasa del 10% sobre el excedente de $472.00 más una cuota fija de $17.67.");
}
else if (salarioNeto <= 2038.10)
{
    tramo = "Tramo 3";
    renta = (salarioNeto - 895.24) * 0.20 + 60.00;
    Console.WriteLine("Estás en el Tramo 3. Se aplicará una tasa del 20% sobre el excedente de $895.24 más una cuota fija de $60.00.");
}
else
{
    tramo = "Tramo 4";
    renta = (salarioNeto - 2038.10) * 0.30 + 288.57;
    Console.WriteLine("Estás en el Tramo 4. Se aplicará una tasa del 30% sobre el excedente de $2038.10 más una cuota fija de $288.57.");
}
```

**Skills demostradas:**
- Lógica condicional encadenada (`if-else if-else`)
- Cálculos matemáticos complejos con múltiples variables
- Sistema de impuestos progresivo
- Feedback informativo al usuario
- Manejo preciso de decimales con `double`

---

### 3. **Cálculo de Horas Extras con Recargo Legal**

Algoritmo para calcular el pago de horas extras diurnas (100% adicional) y nocturnas (125% adicional):

**Ubicación:** `assets/kathya-codebase/RentaKathyaPérez/Renta SV/Renta SV/Program.cs:34-46`

```csharp
// Determinar el salario por hora
double salarioHora = salarioBruto / 30 / 8; // Suponiendo 30 días y 8 horas por día

// Pedir al usuario las horas extras diurnas y nocturnas
Console.Write("\nIngresa la cantidad de horas extras diurnas trabajadas: ");
int horasExtrasDiurnas = Convert.ToInt32(Console.ReadLine());

Console.Write("Ingresa la cantidad de horas extras nocturnas trabajadas: ");
int horasExtrasNocturnas = Convert.ToInt32(Console.ReadLine());

// Calcular pago por horas extras
double pagoHorasExtrasDiurnas = horasExtrasDiurnas * (salarioHora * 2); // 100% adicional
double pagoHorasExtrasNocturnas = horasExtrasNocturnas * (salarioHora * 2.25); // 100% + 25% adicional
```

**Skills demostradas:**
- Cálculos salariales basados en ley laboral
- Operaciones aritméticas anidadas
- Conversión de tipos (`Convert.ToInt32`)
- Input/output de consola
- Variables con nombres descriptivos

---

### 4. **Bucle While para Repetición de Proceso**

Implementación de un ciclo de repetición para procesar múltiples salarios en una sola sesión:

**Ubicación:** `assets/kathya-codebase/RentaKathyaPérez/Renta SV/Renta SV/Program.cs:5-117`

```csharp
static void Main()
{
    bool continuar = true;

    while (continuar)
    {
        Console.WriteLine("\n¡Hola! Soy tu asistente de nómina. Te ayudaré a calcular tu salario retenido, la renta a pagar y el pago por horas extras.\n");

        // ... todo el proceso de cálculo ...

        // Preguntar si desea calcular otro salario
        Console.Write("\n¿Deseas calcular otro salario? (Sí/No): ");
        string continuarRespuesta = Console.ReadLine().Trim().ToLower();
        if (continuarRespuesta != "sí" && continuarRespuesta != "si")
        {
            continuar = false;
            Console.WriteLine("\nGracias por usar el sistema. ¡Hasta pronto!");
        }
    }
}
```

**Skills demostradas:**
- Estructuras de control de flujo (`while` loop)
- Banderas booleanas para control de flujo
- Manejo de strings (`.Trim()`, `.ToLower()`)
- UX amigable con opciones de repetición
- Validación de entrada de usuario

---

### 5. **Generación de Boleta de Pago Formateada**

Creación de una boleta de pago visualmente organizada con formato de moneda:

**Ubicación:** `assets/kathya-codebase/RentaKathyaPérez/Renta SV/Renta SV/Program.cs:82-103`

```csharp
if (respuesta == "sí" || respuesta == "si")
{
    // Imprimir boleta de pago
    Console.WriteLine("\n----------------------");
    Console.WriteLine("      BOLETA DE PAGO     ");
    Console.WriteLine("----------------------");
    Console.WriteLine($"Salario bruto:      ${salarioBruto:F2}");
    Console.WriteLine($"Descuento ISSS:     -${descuentoISSS:F2}");
    Console.WriteLine($"Descuento AFP:      -${descuentoAFP:F2}");
    Console.WriteLine($"Salario retenido:   ${salarioNeto:F2}");
    Console.WriteLine($"Tramo:              {tramo}");
    Console.WriteLine($"Renta aplicada:     -${renta:F2}");
    Console.WriteLine($"Pago horas extras diurnas ({horasExtrasDiurnas}h): +${pagoHorasExtrasDiurnas:F2}");
    Console.WriteLine($"Pago horas extras nocturnas ({horasExtrasNocturnas}h): +${pagoHorasExtrasNocturnas:F2}");
    Console.WriteLine($"Salario final:      ${salarioFinal:F2}");
    Console.WriteLine("----------------------");
    Console.WriteLine("Gracias por usar el sistema.");
}
```

**Skills demostradas:**
- String interpolation con `$""`
- Formato de números como moneda (`:F2` para 2 decimales)
- Diseño de output ASCII para consola
- Presentación clara de información compleja
- Concatenación de strings y variables

---

### 6. **Validación de Entrada con Control de Flujo**

Sistema de validación que garantiza que el pago sea suficiente antes de continuar:

**Ubicación:** `assets/kathya-codebase/RentaKathyaPérez/Renta SV/Renta SV/Program.cs:95-102`

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
- Validación de entrada en bucle
- Feedback de error al usuario
- Cálculo de cambio (vuelto)
- Control de flujo con condiciones

---

### 7. **Comentarios Técnicos y Documentación de Código**

Documentación interna destacando correcciones y lógica de negocio:

**Ubicación:** `assets/kathya-codebase/RentaKathyaPérez/Renta SV/Renta SV/Program.cs:30-32`

```csharp
// Restar AFP (7.25%) -> ERROR AQUÍ (antes se hacía sobre salario después de ISSS)
double descuentoAFP = salarioBruto * 0.0725;  // CORRECCIÓN: Se calcula sobre el bruto
double salarioNeto = salarioDespuesISSS - descuentoAFP;
```

**Skills demostradas:**
- Documentación clara de código
- Identificación y corrección de errores de lógica
- Comentarios explicativos para mantenimiento
- Buenas prácticas de programación

---

## 🏆 Características Clave del Proyecto

### 🧮 Cálculos Precisos
- **ISSS (Seguro Social)** - 3% hasta $1000, tope de $30
- **AFP (Pensiones)** - 7.25% sobre salario bruto
- **Renta (Impuesto)** - Sistema progresivo de 4 tramos
- **Horas extras** - Diurnas (200%) y nocturnas (225%)

### 💬 Interfaz de Usuario Amigable
- **Mensajes interactivos** - Guía paso a paso
- **Explicaciones contextuales** - Información sobre cada tramo de renta
- **Validación de entrada** - Prevención de errores
- **Bucle de repetición** - Permite múltiples cálculos

### 📊 Funcionalidades Avanzadas
- **Boleta de pago opcional** - Generación de resumen detallado
- **Formato de moneda** - Presentación profesional con 2 decimales
- **Cálculo de cambio** - Simulación de sistema de pago
- **Ciclo de vida completo** - Desde input hasta output final

---

## 📂 Estructura del Proyecto

```
RentaKathyaPérez/Renta SV/
└── Renta SV/
    ├── Program.cs          # Lógica principal de la aplicación
    ├── Renta SV.csproj     # Archivo de proyecto .NET
    └── obj/                # Archivos de compilación
```

---

## 🎓 Aprendizajes Clave

1. **Lógica de Programación** - Estructuras condicionales complejas anidadas
2. **Algoritmos Matemáticos** - Cálculos financieros precisos
3. **Manejo de Tipos de Datos** - `double`, `int`, `string`, `bool`
4. **Control de Flujo** - `while`, `if-else`, validaciones
5. **I/O de Consola** - `Console.ReadLine()`, `Console.WriteLine()`
6. **Formateo de Strings** - Interpolación y formato de números
7. **Buenas Prácticas** - Comentarios, nombres descriptivos, validación

---

## 🔧 Conceptos Técnicos Aplicados

### Variables y Tipos de Datos
```csharp
double salarioBruto;      // Tipo numérico con decimales
int horasExtras;          // Tipo numérico entero
string respuesta;         // Tipo cadena de texto
bool continuar = true;    // Tipo booleano
```

### Conversión de Tipos
```csharp
Convert.ToDouble(Console.ReadLine())  // String → Double
Convert.ToInt32(Console.ReadLine())   // String → Integer
```

### Operadores Matemáticos
```csharp
salarioBruto * 0.03       // Multiplicación (porcentaje)
salarioBruto / 30 / 8     // División múltiple
salarioNeto - renta       // Resta
pago - total              // Cálculo de cambio
```

---

## 💡 Solución a Problema Real

Este proyecto resuelve un problema cotidiano para trabajadores salvadoreños: **entender cuánto dinero recibirán después de las deducciones de ley**. La aplicación:

- ✅ Aplica la legislación laboral de El Salvador correctamente
- ✅ Explica cada deducción al usuario
- ✅ Calcula horas extras según normativa legal
- ✅ Genera una boleta de pago comprensible
- ✅ Permite múltiples cálculos en una sesión

---

## 🔗 Enlaces del Proyecto

- **Repositorio:** `assets/kathya-codebase/RentaKathyaPérez/`
- **Framework:** .NET 8.0
- **Lenguaje:** C#

---

## 📈 Posibles Mejoras Futuras

1. **Interfaz Gráfica** - Migrar a Windows Forms o WPF
2. **Base de Datos** - Guardar historial de cálculos
3. **Validación Robusta** - Manejo de excepciones con `try-catch`
4. **Exportación** - Generar PDF de boleta de pago
5. **Multi-usuario** - Sistema con login para empresas
6. **Reportes** - Estadísticas mensuales/anuales

---

## 💡 Conclusión

Este proyecto demuestra sólidas habilidades en programación backend con C#, incluyendo lógica condicional compleja, manejo de datos numéricos, y creación de aplicaciones de consola funcionales. La implementación correcta de las leyes laborales salvadoreñas muestra capacidad para traducir requisitos del mundo real en código funcional.

Las competencias técnicas destacadas incluyen manejo de estructuras de control, algoritmos matemáticos, formateo de datos, y diseño de interfaces de usuario de consola intuitivas. El proyecto es un ejemplo práctico de cómo la programación puede automatizar y simplificar procesos administrativos complejos.