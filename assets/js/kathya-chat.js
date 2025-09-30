(function() {
    console.log('Kathya chat widget loading...');

    function createWidget() {
        const widget = document.createElement('div');
        widget.id = 'kathya-chat';
        widget.innerHTML = `
            <div class="chat-button" onclick="toggleKathyaChat()">💬</div>
            <div class="chat-popup" id="kathya-chat-popup">
                <div class="chat-header">
                    <h4>💬 Pregunta sobre Kathya</h4>
                    <button onclick="toggleKathyaChat()">×</button>
                </div>
                <div class="chat-body">
                    <div class="chat-message">
                        <p>¡Hola! 👋 Puedo responder preguntas sobre Kathya:</p>
                        <div class="quick-questions">
                            <button onclick="askKathyaQuestion('¿Qué estudia Kathya?')">¿Qué estudia?</button>
                            <button onclick="askKathyaQuestion('¿Qué proyectos ha hecho?')">Sus proyectos</button>
                            <button onclick="askKathyaQuestion('¿Cómo contactarla?')">Contacto</button>
                        </div>
                    </div>
                    <div id="kathya-chat-messages"></div>
                </div>
                <div class="chat-input">
                    <input type="text" id="kathya-user-input" placeholder="Escribe tu pregunta..." onkeypress="if(event.key==='Enter') sendKathyaMessage()">
                    <button onclick="sendKathyaMessage()">Enviar</button>
                </div>
            </div>
        `;

        document.body.appendChild(widget);
        console.log('Chat widget created!');
    }

    window.toggleKathyaChat = function() {
        const popup = document.getElementById('kathya-chat-popup');
        if (popup.style.display === 'none' || popup.style.display === '') {
            popup.style.display = 'flex';
        } else {
            popup.style.display = 'none';
        }
    };

    window.askKathyaQuestion = function(question) {
        document.getElementById('kathya-user-input').value = question;
        sendKathyaMessage();
    };

    window.sendKathyaMessage = function() {
        const input = document.getElementById('kathya-user-input');
        const message = input.value.trim();
        if (!message) return;

        const messagesDiv = document.getElementById('kathya-chat-messages');
        const chatBody = document.querySelector('.chat-body');

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'user-message';
        userMsg.textContent = message;
        messagesDiv.appendChild(userMsg);

        // Get and add bot response
        const response = getKathyaResponse(message);
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-message';
        botMsg.innerHTML = response;
        messagesDiv.appendChild(botMsg);

        // Clear input
        input.value = '';

        // Scroll to bottom
        setTimeout(() => {
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 100);
    };

    function getKathyaResponse(message) {
        const msg = message.toLowerCase();

        if (msg.includes('estudia') || msg.includes('universidad') || msg.includes('carrera')) {
            return 'Kathya estudia <strong>Ingeniería en Desarrollo de Software</strong> en la Universidad Católica de El Salvador desde 2024.';
        }
        if (msg.includes('proyecto')) {
            return 'Kathya ha desarrollado:<br>🍰 <strong>Ban Ban</strong> - Sitio web para pastelería<br>🏠 <strong>Renta SV</strong> - Plataforma de alquileres<br>🍽️ <strong>Restaurante Digital</strong> - Sistema completo<br>🎮 <strong>XO Game</strong> - Juego de Tic Tac Toe';
        }
        if (msg.includes('contacto') || msg.includes('email') || msg.includes('correo') || msg.includes('telefono')) {
            return '📧 <strong>Email:</strong> kathyaperez117@gmail.com<br>📱 <strong>Teléfono:</strong> 7691-8430<br>🔗 <strong>LinkedIn:</strong> linkedin.com/in/kathya-perez117';
        }
        if (msg.includes('habilidad') || msg.includes('tecnología') || msg.includes('lenguaje') || msg.includes('programación')) {
            return '<strong>Lenguajes:</strong> C#, PHP, HTML, CSS, JavaScript<br><strong>Herramientas:</strong> Visual Studio, VS Code, MySQL, Git<br><strong>Frameworks:</strong> Bootstrap, ASP.NET';
        }
        if (msg.includes('certificacion') || msg.includes('curso')) {
            return '📜 <strong>Certificaciones:</strong><br>• Desarrollador Back-End (2024)<br>• Desarrollador Front-End (2024)<br>• Programador en C# (2025)<br>Todas por Capacítate para el Empleo';
        }
        if (msg.includes('ingles') || msg.includes('idioma')) {
            return 'Kathya es <strong>bilingüe</strong> (Español/Inglés) con nivel <strong>Upper Intermediate B2</strong> en inglés.';
        }
        if (msg.includes('experiencia') || msg.includes('trabajo')) {
            return 'Kathya es estudiante en formación con múltiples proyectos personales. Busca oportunidades para aplicar sus habilidades en desarrollo full-stack.';
        }
        return 'Pregúntame sobre: <strong>estudios</strong>, <strong>proyectos</strong>, <strong>habilidades</strong>, <strong>contacto</strong>, <strong>certificaciones</strong> o <strong>experiencia</strong> de Kathya 😊';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWidget);
    } else {
        createWidget();
    }
})();