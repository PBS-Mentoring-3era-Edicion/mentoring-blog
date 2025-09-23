from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import json
import requests
from typing import Optional
import asyncio
from pathlib import Path
import PyPDF2
import os

app = FastAPI()

# Enable CORS for the portfolio website
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    message: str
    context: Optional[str] = None

class KathyaAssistant:
    def __init__(self):
        self.profile_data = self.load_profile_data()
        self.ollama_url = "http://localhost:11434/api/generate"
        self.model = "phi"  # Lightweight model
        
    def load_profile_data(self):
        """Load Kathya's profile information from CV and other sources"""
        profile = {
            "name": "Kathya Pérez",
            "title": "Software Engineering Student",
            "email": "kathyaperez117@gmail.com",
            "phone": "7691-8430",
            "location": "Santa Ana, El Salvador",
            "linkedin": "https://www.linkedin.com/in/kathya-perez117",
            "github": "https://github.com/kathyaperez",
            
            "education": [
                {
                    "institution": "Universidad Católica de El Salvador",
                    "degree": "Ingeniería en Desarrollo de Software",
                    "period": "2024 - Present"
                },
                {
                    "institution": "Instituto Nacional de El Congo",
                    "degree": "Bachillerato General",
                    "period": "2022 - 2023"
                }
            ],
            
            "skills": {
                "programming": ["HTML", "CSS", "PHP", "C#"],
                "databases": ["SQL", "Database Design"],
                "tools": ["Visual Studio", "Visual Studio Code"],
                "languages": ["Spanish (Native)", "English (Upper Intermediate B2)"]
            },
            
            "certifications": [
                {
                    "name": "Desarrollador Back-End",
                    "provider": "Capacítate para el empleo",
                    "period": "February 2024 - June 2024",
                    "description": "Web page creation, programming, PHP usage, and database creation"
                },
                {
                    "name": "Desarrollador Front-End",
                    "provider": "Capacítate para el empleo",
                    "period": "May 2024 - June 2024",
                    "description": "Web design and development, HTML and CSS usage, navigation maps and wireframes"
                },
                {
                    "name": "Programador en C#",
                    "provider": "Capacítate para el empleo",
                    "period": "May 2025 - June 2025",
                    "description": "Desktop, web, and mobile applications running on different operating systems"
                }
            ],
            
            "soft_skills": [
                "Problem Solving",
                "Teamwork",
                "Responsibility",
                "Leadership"
            ],
            
            "bio": "Student of Software Engineering passionate about programming and creating innovative technological solutions. Proficient in HTML, PHP, CSS, and C#, with experience using Visual Studio and Visual Studio Code for developing applications, sites, and web pages. Known for responsibility, leadership, and teamwork capabilities."
        }
        
        # Try to load additional data from CV if exists
        cv_path = Path(__file__).parent.parent / "assets" / "CV-extracted.txt"
        if cv_path.exists():
            with open(cv_path, 'r', encoding='utf-8') as f:
                profile['cv_raw'] = f.read()
        
        return profile
    
    def create_context(self):
        """Create a context string from Kathya's profile"""
        context = f"""
        You are an AI assistant representing Kathya Pérez's professional portfolio.
        
        PROFILE INFORMATION:
        Name: {self.profile_data['name']}
        Title: {self.profile_data['title']}
        Email: {self.profile_data['email']}
        Location: {self.profile_data['location']}
        LinkedIn: {self.profile_data['linkedin']}
        GitHub: {self.profile_data['github']}
        
        BIO: {self.profile_data['bio']}
        
        EDUCATION:
        {json.dumps(self.profile_data['education'], indent=2)}
        
        TECHNICAL SKILLS:
        Programming Languages: {', '.join(self.profile_data['skills']['programming'])}
        Databases: {', '.join(self.profile_data['skills']['databases'])}
        Tools: {', '.join(self.profile_data['skills']['tools'])}
        
        CERTIFICATIONS:
        {json.dumps(self.profile_data['certifications'], indent=2)}
        
        SOFT SKILLS: {', '.join(self.profile_data['soft_skills'])}
        
        LANGUAGES: {', '.join(self.profile_data['skills']['languages'])}
        
        Instructions:
        - Answer questions about Kathya's professional profile, skills, and experience
        - Be friendly and professional
        - If asked about specific projects, mention that Kathya has worked on web applications and desktop applications
        - Emphasize her passion for backend development and innovative solutions
        - If you don't have specific information, suggest contacting Kathya directly via email or LinkedIn
        """
        return context
    
    async def generate_response(self, message: str):
        """Generate response using Ollama"""
        context = self.create_context()
        prompt = f"{context}\n\nUser Question: {message}\n\nAssistant Response:"
        
        try:
            response = requests.post(
                self.ollama_url,
                json={
                    "model": self.model,
                    "prompt": prompt,
                    "stream": True,
                    "options": {
                        "temperature": 0.7,
                        "top_p": 0.9,
                    }
                },
                stream=True
            )
            
            for line in response.iter_lines():
                if line:
                    data = json.loads(line)
                    if 'response' in data:
                        yield data['response']
                        
        except Exception as e:
            yield f"I'm having trouble connecting to the AI service. Please try again later or contact Kathya directly at kathyaperez117@gmail.com"

assistant = KathyaAssistant()

@app.get("/")
async def root():
    return {
        "message": "Kathya's Portfolio AI Assistant API",
        "endpoints": {
            "/chat": "POST - Send a message to the assistant",
            "/profile": "GET - Get Kathya's profile information"
        }
    }

@app.get("/profile")
async def get_profile():
    """Return Kathya's profile information"""
    return assistant.profile_data

@app.post("/chat")
async def chat(message: ChatMessage):
    """Chat with the AI assistant about Kathya's profile"""
    async def generate():
        async for chunk in assistant.generate_response(message.message):
            yield chunk
    
    return StreamingResponse(generate(), media_type="text/plain")

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "model": assistant.model}