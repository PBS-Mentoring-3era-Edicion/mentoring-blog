---
title: "XO - Themed Tic-Tac-Toe Game with JavaScript"
date: 2024-09-28
draft: false
description: "Interactive Tic-Tac-Toe game with gothic theme developed with HTML5, CSS3, and vanilla JavaScript."
tags: ["JavaScript","HTML","CSS","DOM Manipulation","Game Development","Front-End","Algorithms"]
showAuthor: true
authors:
    - "kathyaperez"
---

## 🎮 Project Description

**XO - Final Destination** is an interactive tic-tac-toe game with a dark gothic theme. Developed entirely with vanilla JavaScript, HTML5, and CSS3, demonstrating advanced DOM manipulation, game logic, victory detection algorithms, and browser event handling.

---

## 💻 Technologies Used

- JavaScript (ES6)
- HTML5
- CSS3
- Google Fonts (Creepster)
- CSS Grid
- CSS Transitions

---

## ⭐ Highlighted Skills

### 1. Victory Detection Algorithm

**Location:** `XO/XO/XO.js:114-133`

```javascript
function verificarGanador() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8],  // Rows
    [0,3,6],[1,4,7],[2,5,8],  // Columns
    [0,4,8],[2,4,6]           // Diagonals
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
```

**Skills:** Multidimensional arrays, search algorithm, boolean logic

---

### 2. Dynamic DOM Manipulation

**Location:** `XO/XO/XO.js:65-81`

```javascript
function crearTablero() {
  const contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";
  
  for (let i = 0; i < 9; i++) {
    const celda = document.createElement("div");
    celda.className = "celda";
    celda.setAttribute("data-index", i);
    celda.onclick = function () {
      clickCelda(parseInt(this.getAttribute("data-index")), this);
    };
    contenedor.appendChild(celda);
  }
}
```

**Skills:** createElement, event listeners, closures

---

### 3. Animation Effects

**Location:** `XO/XO/XO.js:207-221`

```javascript
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
```

**Skills:** setInterval/setTimeout, clearInterval, CSS manipulation

---

## 🏆 Key Features

### 🎨 Design and UX
- Gothic theme with ☠️💀 emojis
- Dynamic visual feedback by turn
- Smooth animations
- Screen shake effect

### 🎮 Game Logic
- Detection of 8 winning combinations
- Move validation
- Tie detection
- Automatic turn system

### 👥 Customization
- Custom names
- Token selection (X or O)
- 4 available colors
- Automatic color differentiation

---

## 🎓 Key Learnings

1. Vanilla JavaScript - Pure DOM manipulation
2. Game Algorithms
3. Event Handling
4. CSS Grid & Flexbox
5. CSS Animations
6. JS Timers

---

## 🔗 Links

- **Repository:** `assets/kathya-codebase/XO/`
- **Technologies:** HTML5 + CSS3 + JavaScript (ES6)
