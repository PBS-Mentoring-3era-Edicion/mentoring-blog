# 🚀 Deployment Guide - Kathya's Mentoring Blog

## Overview
This blog showcases Kathya Pérez's journey as a Software Development Engineering student, featuring her projects and an interactive AI chat assistant.

## 🌟 Key Features
- **Portfolio Showcase**: Detailed posts about Kathya's projects (Ban Ban, Renta SV, Restaurant, XO Game)
- **AI Chat Assistant**: Interactive popup chat that answers questions about Kathya
- **Responsive Design**: Blowfish theme with mobile-friendly layout
- **GitHub Pages Ready**: Pre-configured for free hosting

## 📦 Components Created

### Content
- `content/posts/kathya-perez-journey/index.md` - Main blog post about Kathya
- `content/posts/proyecto-banban/index.md` - Ban Ban project showcase

### AI Chat System
- `static/js/chat-widget.js` - Interactive chat functionality
- `static/css/chat-widget.css` - Chat widget styling
- `static/js/kathya-knowledge.json` - Knowledge base for AI responses
- `layouts/partials/extend-footer.html` - Chat integration

## 🛠️ Local Development

### Prerequisites
- [Hugo Extended](https://gohugo.io/getting-started/installing/) v0.140.0+
- Git

### Running Locally
```bash
# Install Hugo (macOS)
brew install hugo

# Install Hugo (Windows)
choco install hugo-extended

# Clone and run
git clone [your-repo-url]
cd mentoring-blog
hugo server -D
```

Visit `http://localhost:1313/mentoring-blog/` to view the site.

## 🌐 Deployment Options

### Option 1: GitHub Pages (FREE - Recommended)
1. Push code to GitHub repository
2. Enable GitHub Pages in Settings → Pages
3. Select "GitHub Actions" as source
4. The site will deploy automatically on push to master

**Live URL**: `https://pbs-mentoring-3era-edicion.github.io/mentoring-blog/`

### Option 2: Netlify (FREE Tier)
1. Connect GitHub repo to Netlify
2. Build command: `hugo --minify`
3. Publish directory: `public`
4. Deploy automatically on push

### Option 3: Vercel (FREE Tier)
1. Import GitHub repo to Vercel
2. Framework preset: Hugo
3. Build command: `hugo --minify`
4. Output directory: `public`

## 💬 AI Chat Features

The chat assistant can answer questions about:
- Kathya's education and studies
- Programming skills and technologies
- Completed projects with descriptions
- Contact information
- Professional goals
- Certifications and courses

### Customizing Responses
Edit `static/js/kathya-knowledge.json` to update:
- Personal information
- Project details
- Skills and certifications
- FAQ responses

## 📝 Adding Content

### New Blog Posts
```bash
hugo new posts/my-new-post/index.md
```

### Project Showcases
Create posts in `content/posts/` with front matter:
```yaml
---
title: "Project Name"
date: 2025-01-24
tags: ["HTML", "CSS", "JavaScript"]
categories: ["Projects"]
---
```

## 🔧 Configuration

### Base URL
Update in `config/_default/hugo.toml`:
```toml
baseURL = "https://your-domain.com/"
```

### Chat Widget Styling
Modify `static/css/chat-widget.css` for:
- Colors and gradients
- Popup dimensions
- Mobile responsiveness

## 📊 Performance Tips

1. **Image Optimization**: Use WebP format for images
2. **Lazy Loading**: Enabled by default in Blowfish theme
3. **Minification**: Hugo minifies assets automatically
4. **CDN**: GitHub Pages includes CDN by default

## 🐛 Troubleshooting

### Chat Widget Not Appearing
- Check browser console for errors
- Verify `/js/kathya-knowledge.json` is accessible
- Ensure JavaScript is enabled

### Build Failures
- Verify Hugo Extended version: `hugo version`
- Check for syntax errors in markdown files
- Ensure all image paths are correct

## 📚 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Blowfish Theme Guide](https://blowfish.page/)
- [GitHub Pages Docs](https://docs.github.com/pages)

## 🤝 Support

For issues or questions:
- Email: kathyaperez117@gmail.com
- LinkedIn: [linkedin.com/in/kathya-perez117](https://linkedin.com/in/kathya-perez117)

---

**Last Updated**: January 2025
**Mentor**: Josué Solares