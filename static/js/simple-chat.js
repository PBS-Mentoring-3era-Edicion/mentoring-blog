// Simple Chat Widget for Kathya's Blog
(function() {
    'use strict';

    console.log('Simple chat widget loading...');

    // Create widget HTML
    function createWidget() {
        const widget = document.createElement('div');
        widget.id = 'kathya-chat';
        widget.innerHTML = `
            <div class="chat-button" onclick="toggleChat()">
                💬
            </div>
            <div class="chat-popup" id="chat-popup" style="display: none;">
                <div class="chat-header">
                    <h4>💬 Pregunta sobre Kathya</h4>
                    <button onclick="toggleChat()">×</button>
                </div>
                <div class="chat-body">
                    <div class="chat-message">
                        <p>¡Hola! 👋 Puedo responder preguntas sobre Kathya:</p>
                        <div class="quick-questions">
                            <button onclick="askQuestion('¿Qué estudia Kathya?')">¿Qué estudia?</button>
                            <button onclick="askQuestion('¿Qué proyectos ha hecho?')">Sus proyectos</button>
                            <button onclick="askQuestion('¿Cómo contactarla?')">Contacto</button>
                        </div>
                    </div>
                    <div id="chat-messages"></div>
                </div>
                <div class="chat-input">
                    <input type="text" id="user-input" placeholder="Escribe tu pregunta..." onkeypress="if(event.key==='Enter') sendMessage()">
                    <button onclick="sendMessage()">Enviar</button>
                </div>
            </div>
        `;

        document.body.appendChild(widget);
        console.log('Chat widget created');
    }

    // Toggle chat visibility
    window.toggleChat = function() {
        const popup = document.getElementById('chat-popup');
        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    };

    // Ask predefined question
    window.askQuestion = function(question) {
        document.getElementById('user-input').value = question;
        sendMessage();
    };

    // Send message
    window.sendMessage = function() {
        const input = document.getElementById('user-input');
        const message = input.value.trim();
        if (!message) return;

        const messagesDiv = document.getElementById('chat-messages');

        // Add user message
        messagesDiv.innerHTML += `<div class="user-message">${message}</div>`;

        // Add bot response
        const response = getResponse(message);
        messagesDiv.innerHTML += `<div class="bot-message">${response}</div>`;

        input.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };

    // Get response based on message
    function getResponse(message) {
        const msg = message.toLowerCase();

        if (msg.includes('estudia')) {
            return 'Kathya estudia Ingeniería en Desarrollo de Software en la Universidad Católica de El Salvador.';
        }
        if (msg.includes('proyecto')) {
            return 'Kathya ha desarrollado varios proyectos: Ban Ban (pastelería), Renta SV (alquileres), un sistema para restaurante y un juego XO.';
        }
        if (msg.includes('contacto') || msg.includes('email')) {
            return 'Puedes contactar a Kathya por email: kathyaperez117@gmail.com o teléfono: 7691-8430';
        }
        if (msg.includes('habilidad') || msg.includes('tecnología')) {
            return 'Kathya domina HTML, CSS, PHP, C# y JavaScript. También maneja Visual Studio, MySQL y Git.';
        }

        return 'Puedes preguntarme sobre los estudios de Kathya, sus proyectos, habilidades técnicas o información de contacto.';
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWidget);
    } else {
        createWidget();
    }

})();