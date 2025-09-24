class KathyaChatWidget {
    constructor() {
        this.isOpen = false;
        this.knowledgeBase = null;
        this.chatHistory = [];
        this.init();
    }

    async init() {
        await this.loadKnowledgeBase();
        this.createChatWidget();
        this.attachEventListeners();
    }

    async loadKnowledgeBase() {
        try {
            const response = await fetch('/js/kathya-knowledge.json');
            this.knowledgeBase = await response.json();
        } catch (error) {
            console.error('Error loading knowledge base:', error);
            this.knowledgeBase = { faq: [] };
        }
    }

    createChatWidget() {
        const widgetHTML = `
            <div id="kathya-chat-widget" class="chat-widget">
                <button id="chat-toggle" class="chat-toggle" aria-label="Chat sobre Kathya">
                    <svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <svg class="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div id="chat-popup" class="chat-popup">
                    <div class="chat-header">
                        <h3>💬 Pregunta sobre Kathya</h3>
                        <button id="chat-minimize" class="chat-minimize" aria-label="Minimizar">_</button>
                    </div>

                    <div id="chat-messages" class="chat-messages">
                        <div class="chat-message bot-message">
                            <p>¡Hola! 👋 Soy un asistente virtual. Puedo responder preguntas sobre Kathya Pérez, sus proyectos, habilidades y experiencia. ¿En qué puedo ayudarte?</p>
                        </div>
                    </div>

                    <div class="suggested-questions">
                        <button class="suggestion-chip" data-question="¿Qué estudia Kathya?">¿Qué estudia?</button>
                        <button class="suggestion-chip" data-question="¿Qué proyectos ha desarrollado?">Sus proyectos</button>
                        <button class="suggestion-chip" data-question="¿Cómo contactar a Kathya?">Contacto</button>
                    </div>

                    <div class="chat-input-container">
                        <input
                            type="text"
                            id="chat-input"
                            class="chat-input"
                            placeholder="Escribe tu pregunta aquí..."
                            autocomplete="off"
                        >
                        <button id="chat-send" class="chat-send" aria-label="Enviar">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('chat-toggle');
        const minimizeBtn = document.getElementById('chat-minimize');
        const sendBtn = document.getElementById('chat-send');
        const input = document.getElementById('chat-input');
        const suggestionChips = document.querySelectorAll('.suggestion-chip');

        toggleBtn.addEventListener('click', () => this.toggleChat());
        minimizeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        suggestionChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const question = chip.getAttribute('data-question');
                this.processMessage(question);
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const widget = document.getElementById('kathya-chat-widget');
        const popup = document.getElementById('chat-popup');

        if (this.isOpen) {
            widget.classList.add('open');
            popup.style.display = 'flex';
            document.getElementById('chat-input').focus();
        } else {
            widget.classList.remove('open');
            setTimeout(() => {
                popup.style.display = 'none';
            }, 300);
        }
    }

    sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (!message) return;

        this.processMessage(message);
        input.value = '';
    }

    processMessage(message) {
        this.addMessage(message, 'user');

        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 500);
    }

    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;

        const messageContent = document.createElement('p');
        messageContent.innerHTML = text;
        messageDiv.appendChild(messageContent);

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        this.chatHistory.push({ text, sender, timestamp: new Date() });
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Buscar en FAQ
        const faqMatch = this.knowledgeBase.faq.find(item =>
            lowerMessage.includes(item.question.toLowerCase()) ||
            item.question.toLowerCase().includes(lowerMessage)
        );

        if (faqMatch) {
            return faqMatch.answer;
        }

        // Respuestas basadas en palabras clave
        if (lowerMessage.includes('proyecto')) {
            const projects = this.knowledgeBase.projects.map(p =>
                `<br>• <strong>${p.name}</strong>: ${p.description}`
            ).join('');
            return `Kathya ha desarrollado ${this.knowledgeBase.projects.length} proyectos principales:${projects}`;
        }

        if (lowerMessage.includes('habilidad') || lowerMessage.includes('skill')) {
            const skills = this.knowledgeBase.skills.programming.join(', ');
            return `Kathya domina las siguientes tecnologías: ${skills}. También maneja herramientas como ${this.knowledgeBase.skills.tools.join(', ')}.`;
        }

        if (lowerMessage.includes('contacto') || lowerMessage.includes('email') || lowerMessage.includes('teléfono')) {
            return `Puedes contactar a Kathya por:<br>
                📧 Email: ${this.knowledgeBase.personal.email}<br>
                📱 Teléfono: ${this.knowledgeBase.personal.phone}<br>
                🔗 LinkedIn: <a href="https://${this.knowledgeBase.personal.linkedin}" target="_blank">${this.knowledgeBase.personal.linkedin}</a>`;
        }

        if (lowerMessage.includes('educación') || lowerMessage.includes('universidad')) {
            return `Kathya estudia ${this.knowledgeBase.education.current.degree} en la ${this.knowledgeBase.education.current.university} desde ${this.knowledgeBase.education.current.startYear}.`;
        }

        if (lowerMessage.includes('certificación') || lowerMessage.includes('curso')) {
            const certs = this.knowledgeBase.certifications.map(c =>
                `<br>• ${c.name} (${c.institution})`
            ).join('');
            return `Kathya ha completado las siguientes certificaciones:${certs}`;
        }

        if (lowerMessage.includes('inglés') || lowerMessage.includes('idioma')) {
            return `Kathya habla español (nativo) e inglés con nivel ${this.knowledgeBase.personal.languages.english}.`;
        }

        if (lowerMessage.includes('meta') || lowerMessage.includes('objetivo')) {
            const goals = this.knowledgeBase.goals.shortTerm.join(', ');
            return `Los objetivos de Kathya incluyen: ${goals}. A largo plazo busca especializarse en desarrollo full-stack y crear soluciones tecnológicas innovadoras.`;
        }

        // Respuesta por defecto
        return `Disculpa, no tengo información específica sobre "${message}". Puedes preguntarme sobre:
            <br>• Educación y estudios
            <br>• Proyectos desarrollados
            <br>• Habilidades técnicas
            <br>• Certificaciones
            <br>• Información de contacto
            <br>• Metas profesionales`;
    }
}

// Inicializar el widget cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new KathyaChatWidget();
    });
} else {
    new KathyaChatWidget();
}