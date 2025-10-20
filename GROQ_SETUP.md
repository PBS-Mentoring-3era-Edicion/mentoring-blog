# Groq AI Chat Integration Setup

This guide will help you deploy the AI-powered chat widget using Groq and Vercel.

## Prerequisites

1. A Groq API key (free at [console.groq.com](https://console.groq.com))
2. A Vercel account (free at [vercel.com](https://vercel.com))
3. Your GitHub repository connected to Vercel

## Step 1: Get Your Groq API Key

1. Go to [https://console.groq.com/keys](https://console.groq.com/keys)
2. Sign up or log in
3. Click "Create API Key"
4. Copy your API key (keep it safe!)

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New Project"
3. Import your GitHub repository
4. Before deploying, add your environment variable:
   - Go to "Environment Variables"
   - Add: `GROQ_API_KEY` = `your_groq_api_key_here`
5. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variable
vercel env add GROQ_API_KEY
# Paste your Groq API key when prompted
# Select: Production, Preview, and Development

# Redeploy with the environment variable
vercel --prod
```

## Step 3: Verify Deployment

1. Once deployed, Vercel will give you a URL (e.g., `your-site.vercel.app`)
2. Visit your site and click the chat button
3. Ask a question about Kathya
4. You should get AI-powered responses!

## Step 4: Update GitHub Pages (Optional)

If you want to keep using GitHub Pages:

1. Add Vercel as your custom domain in GitHub Pages settings
2. Or update your chat widget to point to your Vercel deployment:

```javascript
// In assets/js/kathya-chat.js, change the API endpoint:
const response = await fetch('https://your-site.vercel.app/api/chat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: message })
});
```

## Files Added/Modified

- `api/chat.js` - Vercel serverless function that proxies requests to Groq
- `vercel.json` - Vercel configuration
- `package.json` - Added groq-sdk dependency
- `assets/js/kathya-chat.js` - Updated to make API calls instead of static responses
- `assets/css/kathya-chat.css` - Added loading and error state styles

## How It Works

1. User types a message in the chat widget
2. Frontend sends the message to `/api/chat` (Vercel serverless function)
3. Serverless function adds Kathya's profile context and calls Groq API
4. Groq processes the request using LLaMA 3.3 70B model
5. Response is sent back to the frontend and displayed

## Groq Rate Limits (Free Tier)

- 14,400 requests per day
- 30 requests per minute
- More than enough for a personal portfolio!

## Troubleshooting

### Chat shows "error de conexión"
- Check that your Vercel deployment is successful
- Verify the API endpoint URL is correct
- Check browser console for detailed errors

### Groq API errors
- Verify your API key is correctly set in Vercel environment variables
- Check your Groq dashboard for rate limit issues
- Ensure your API key has not expired

### Environment variable not working
- Redeploy after adding environment variables
- Make sure the variable name is exactly `GROQ_API_KEY`
- Check it's enabled for Production, Preview, and Development

## Cost

Everything is FREE:
- Groq API: Free tier with generous limits
- Vercel: Free tier for personal projects
- GitHub Pages: Free

## Support

If you have issues:
1. Check the browser console for errors
2. Check Vercel deployment logs
3. Verify your Groq API key is valid
4. Check network tab to see if requests are being made

Enjoy your AI-powered chat! 🚀
