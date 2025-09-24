# 🌍 Simple Bilingual Setup for GitHub Pages

## The Problem
Complex Hugo multilingual configurations often break on GitHub Pages due to URL routing issues.

## The Solution
Simple manual bilingual approach with direct links:

### Current Structure ✅
```
posts/
├── kathya-perez-journey/
│   ├── index.md      ← Spanish (primary)
│   └── index.en.md   ← English version
├── proyecto-rentasv/
│   ├── index.md      ← Spanish
│   └── index.en.md   ← English
```

### How It Works
- **Spanish**: `https://site.com/posts/kathya-perez-journey/`
- **English**: `https://site.com/posts/kathya-perez-journey/index.en/`

## Quick Fix Options

### Option 1: Single Language (Simplest)
Keep only one language version (Spanish or English) to avoid complexity.

### Option 2: Manual Language Links
Add manual language links in each post:

```markdown
---
title: "Post Title"
---

**🌍 Read in:** [English](/posts/kathya-perez-journey/index.en/) | [Español](/posts/kathya-perez-journey/)

Content here...
```

### Option 3: Separate Sections
Create separate content sections:

```
content/
├── posts/          ← Spanish posts
└── posts-en/       ← English posts
```

## Recommendation
For GitHub Pages stability, I recommend **Option 2** - manual language links in each post. It's:
- ✅ Simple and reliable
- ✅ Works perfectly on GitHub Pages
- ✅ Easy to maintain
- ✅ No complex configuration needed

## Implementation
Add this to the top of each Spanish post:

```markdown
**🌍 También disponible en:** [English 🇺🇸](/posts/post-name/index.en/)
```

Add this to the top of each English post:

```markdown
**🌍 También disponible en:** [Español 🇪🇸](/posts/post-name/)
```