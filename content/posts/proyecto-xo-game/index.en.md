---
title: "XO Game - Interactive Tic Tac Toe"
date: 2025-01-20
draft: false
description: "Tic Tac Toe game developed with pure JavaScript, demonstrating programming logic and DOM manipulation"
tags: ["JavaScript", "HTML", "CSS", "Game Development", "DOM"]
categories: ["Projects"]
authors:
  - "kathyaperez"
showTableOfContents: true
---

## 🎮 Project Description

XO Game is a modern implementation of the classic Tic Tac Toe game, developed entirely with vanilla JavaScript. This project demonstrates my skills in programming logic, DOM manipulation, and creating interactive interfaces without external dependencies.

## 🎯 Project Objectives

- Implement complex game logic with pure JavaScript
- Create an intuitive and attractive user interface
- Demonstrate understanding of algorithms and data structures
- Practice event-driven programming

## 🛠️ Technologies and Concepts

### Core Technologies
- **JavaScript ES6+**: Arrow functions, destructuring, template literals
- **HTML5**: Semantic structure
- **CSS3**: Smooth animations and transitions
- **LocalStorage**: Score persistence

### Implemented Concepts
```javascript
// Minimax algorithm for AI (next version)
const minimax = (board, depth, isMaximizing) => {
    const result = checkWinner();
    if (result !== null) {
        return scores[result];
    }
    // Recursive algorithm logic
}
```

## ✨ Game Features

### 🎲 Game Mechanics
- **2 Player Mode**: Local matches between two people
- **Automatic Winner Detection**: Efficient verification algorithm
- **Turn System**: Visual indicator of current player
- **Quick Reset**: New game with one click

### 🎨 User Interface
```css
/* Smooth animations for better UX */
.cell {
    transition: all 0.3s ease;
    transform-style: preserve-3d;
}

.cell:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.winning-cell {
    animation: pulse 0.5s infinite;
    background: linear-gradient(45deg, #4CAF50, #8BC34A);
}
```

## 🧠 Game Logic

### Data Structure
```javascript
// Board representation
const gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Winning combinations
const winPatterns = [
    // Horizontal
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    // Vertical
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    // Diagonal
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]]
];
```

### Verification Algorithm
```javascript
function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a[0]][a[1]] &&
            gameBoard[a[0]][a[1]] === gameBoard[b[0]][b[1]] &&
            gameBoard[a[0]][a[1]] === gameBoard[c[0]][c[1]]) {
            return gameBoard[a[0]][a[1]];
        }
    }
    return null;
}
```

## 📊 Statistics and Scoring

### Point System
- **Victory**: +10 points
- **Draw**: +5 points for both
- **Win Streak**: Point multiplier
- **Leaderboard**: Top 10 best scores

## 🎮 Planned Game Modes

### Current Version (v1.0)
- ✅ Local 2-player mode
- ✅ Winner detection
- ✅ Responsive interface
- ✅ Smooth animations

### Next Versions
- [ ] **AI Mode**: Three difficulty levels
- [ ] **Online Mode**: Real-time multiplayer
- [ ] **Tournament**: Bracket system
- [ ] **Customization**: Themes and avatars

## 🚀 Implemented Optimizations

### Performance
- Event delegation for efficient click handling
- RequestAnimationFrame for smooth animations
- Resource lazy loading
- Minimized reflows and repaints

### Accessibility
- Keyboard navigation
- Screen reader announcements
- Adequate color contrast
- Clear visual indicators

## 📱 Responsive Design

```css
/* Mobile-first approach */
.game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
}

@media (max-width: 480px) {
    .game-board {
        max-width: 90vw;
    }
}
```

## 🏆 Technical Achievements

1. **Clean Code**: Pure functions and modularization
2. **No Dependencies**: 100% vanilla JavaScript
3. **Cross-browser**: Compatible with all modern browsers
4. **PWA Ready**: Can be installed as an app

## 📈 Project Metrics

- **Lines of Code**: ~500
- **Final Size**: < 50KB
- **Load Time**: < 1s
- **Lighthouse Score**: 100/100

## 🎓 Key Learnings

- **Algorithms**: Efficient game logic implementation
- **Event Handling**: Advanced DOM event management
- **State Management**: State control without frameworks
- **Clean Code**: Readable and maintainable code

---

*This project demonstrates my ability to create complete interactive applications with pure JavaScript, focusing on user experience and development best practices.*