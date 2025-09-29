---
title: "XO - Juego de Tres en Raya Temático con JavaScript"
date: 2024-09-28
draft: false
description: "Juego interactivo de Tic-Tac-Toe con temática gótica desarrollado con HTML5, CSS3 y JavaScript vanilla, demostrando manipulación del DOM, algoritmos de juego y manejo de eventos."
tags: ["JavaScript","HTML","CSS","DOM Manipulation","Game Development","Front-End","Algorithms"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🎮 Descripción del Proyecto

**XO - Destino Final** es un juego interactivo de tres en raya (Tic-Tac-Toe) con una temática gótica y oscura. Desarrollado completamente con JavaScript vanilla, HTML5 y CSS3, demuestra competencias avanzadas en manipulación del DOM, lógica de juego, algoritmos de detección de victorias y manejo de eventos del navegador.

### 🎯 Objetivo

Crear una experiencia de juego completa e inmersiva con personalización de jugadores, sistema de puntuación, efectos visuales dinámicos y una interfaz de usuario pulida con temática única.

---

## 💻 Tecnologías Utilizadas

- **JavaScript (ES6)** - Lógica del juego y manipulación del DOM
- **HTML5** - Estructura semántica
- **CSS3** - Estilización avanzada con animaciones
- **Google Fonts (Creepster)** - Tipografía temática
- **CSS Grid** - Layout del tablero
- **CSS Transitions** - Efectos de hover y animaciones

---

## ⭐ Habilidades Destacadas

### 1. **Algoritmo de Detección de Victoria**

Implementación de un algoritmo eficiente para detectar combinaciones ganadoras:

**Ubicación:** `assets/kathya-codebase/XO/XO/XO.js:114-133`

\`\`\`javascript
// Revisar si hay un ganador en el tablero
function verificarGanador() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],  // Filas
    [0,3,6],[1,4,7],[2,5,8],  // Columnas
    [0,4,8],[2,4,6]           // Diagonales
  ];

  for (let i = 0; i < combos.length; i++) {
    const a = combos[i][0];
    const b = combos[i][1];
    const c = combos[i][2];

    if (tablero[a] !== "" && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return true;
    }
  }
  return false;
}
\`\`\`

**Skills demostradas:**
- Arrays multidimensionales
- Algoritmo de búsqueda
- Lógica booleana
- Optimización

---

### 2. **Manipulación Dinámica del DOM**

Creación dinámica de elementos del tablero:

**Ubicación:** `assets/kathya-codebase/XO/XO/XO.js:65-81`

\`\`\`javascript
function crearTablero() {
  const contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";
  tablero = ["", "", "", "", "", "", "", "", ""];

  for (let i = 0; i < 9; i++) {
    const celda = document.createElement("div");
    celda.className = "celda";
    celda.setAttribute("data-index", i);
    celda.onclick = function () {
      const indice = parseInt(this.getAttribute("data-index"));
      clickCelda(indice, this);
    };
    contenedor.appendChild(celda);
  }
}
\`\`\`

**Skills demostradas:**
- `document.getElementById()`, `createElement()`
- Event listeners inline
- Closures
- Data attributes

---

### 3. **Efecto Visual de Animación**

Implementación de efectos usando `setInterval` y `setTimeout`:

**Ubicación:** `assets/kathya-codebase/XO/XO/XO.js:207-221`

\`\`\`javascript
function sacudirPantalla() {
  const body = document.body;
  let pos = 0;

  const intervalo = setInterval(function () {
    pos = (pos === 0) ? 5 : 0;
    body.style.marginLeft = pos + "px";
  }, 50);

  setTimeout(function () {
    clearInterval(intervalo);
    body.style.marginLeft = "0px";
  }, 500);
}
\`\`\`

**Skills demostradas:**
- `setInterval()` / `setTimeout()`
- `clearInterval()`
- Manipulación de estilos CSS
- Efectos visuales

---

## 🏆 Características Clave

### 🎨 Diseño y UX
- Temática gótica inmersiva con emojis ☠️💀
- Feedback visual dinámico según turno
- Animaciones suaves
- Efecto de pantalla sacudida

### 🎮 Lógica de Juego
- Detección de 8 combinaciones ganadoras
- Validación de movimientos
- Detección de empate
- Sistema de turnos automático

### 👥 Personalización
- Nombres personalizados
- Selección de ficha (X o O)
- 4 colores disponibles
- Evitación de conflictos de color

---

## 🎓 Aprendizajes Clave

1. **JavaScript Vanilla** - DOM manipulation sin frameworks
2. **Algoritmos de Juego** - Lógica de victoria y empate
3. **Event Handling** - Gestión de eventos del DOM
4. **CSS Grid & Flexbox** - Layouts modernos
5. **CSS Animations** - Transitions y transforms
6. **Timers en JS** - `setInterval`, `setTimeout`

---

## 🔗 Enlaces del Proyecto

- **Repositorio:** `assets/kathya-codebase/XO/`
- **Tecnologías:** HTML5 + CSS3 + JavaScript (ES6)

---

## 💡 Conclusión

Este proyecto demuestra dominio completo del stack front-end clásico sin frameworks externos. Destaca en manipulación del DOM, algoritmos de juego, event-driven programming, y CSS moderno.
