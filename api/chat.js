import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const KATHYA_CONTEXT = `You are an AI assistant for Kathya Pérez's professional portfolio website.

ABOUT KATHYA:
- Name: Kathya Pérez
- Title: Software Engineering Student
- Email: kathyaperez117@gmail.com
- Phone: 7691-8430
- Location: Santa Ana, El Salvador

EDUCATION:
- Ingeniería en Desarrollo de Software at Universidad Católica de El Salvador (2024 - Present)
- Bachillerato General at Instituto Nacional de El Congo (2022 - 2023)

TECHNICAL SKILLS:
- Programming Languages: HTML, CSS, PHP, C#, JavaScript
- Databases: SQL, MySQL, Database Design
- Tools: Visual Studio, Visual Studio Code, Git, Bootstrap, ASP.NET
- Languages: Spanish (Native), English (Upper Intermediate B2)

PROJECTS:
- Ban Ban: Website for a pastry shop
- Renta SV: Rental platform
- Restaurante Digital: Complete restaurant system
- XO Game: Tic Tac Toe game

CERTIFICATIONS:
1. Desarrollador Back-End (2024) - Capacítate para el Empleo
2. Desarrollador Front-End (2024) - Capacítate para el Empleo
3. Programador en C# (2025) - Capacítate para el Empleo

SOFT SKILLS:
- Problem Solving, Teamwork, Responsibility, Leadership

BIO:
Student of Software Engineering passionate about programming and creating innovative technological solutions. Known for responsibility, leadership, and teamwork capabilities.

INSTRUCTIONS:
- Answer questions about Kathya's profile, skills, education, and projects
- Be friendly, professional, and concise
- Respond in Spanish (the user's preferred language)
- If you don't have specific information, suggest contacting Kathya directly
- Keep responses brief (2-4 sentences) unless asked for more detail`;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Call Groq API
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: KATHYA_CONTEXT
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
      top_p: 0.9
    });

    const assistantMessage = chatCompletion.choices[0].message.content;

    return res.status(200).json({
      response: assistantMessage,
      success: true
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Lo siento, hubo un error al procesar tu mensaje. Por favor intenta de nuevo.',
      success: false
    });
  }
}
