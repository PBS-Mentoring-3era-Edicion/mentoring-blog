(function() {
    console.log('Kathya chat widget loading...');

    function createWidget() {
        const widget = document.createElement('div');
        widget.id = 'kathya-chat';
        widget.innerHTML = '<div class="chat-button" onclick="toggleKathyaChat()">💬</div>' +
            '<div class="chat-popup" id="kathya-chat-popup" style="display: none;">' +
                '<div class="chat-header">' +
                    '<h4>💬 Pregunta sobre Kathya</h4>' +
                    '<button onclick="toggleKathyaChat()">×</button>' +
                '</div>' +
                '<div class="chat-body">' +
                    '<div class="chat-message">' +
                        '<p>¡Hola! 👋 Puedo responder preguntas sobre Kathya:</p>' +
                        '<div class="quick-questions">' +
                            '<button onclick="askKathyaQuestion(\'¿Qué estudia Kathya?\')">¿Qué estudia?</button>' +
                            '<button onclick="askKathyaQuestion(\'¿Qué proyectos ha hecho?\')">Sus proyectos</button>' +
                            '<button onclick="askKathyaQuestion(\'¿Cómo contactarla?\')">Contacto</button>' +
                        '</div>' +
                    '</div>' +
                    '<div id="kathya-chat-messages"></div>' +
                '</div>' +
                '<div class="chat-input">' +
                    '<input type="text" id="kathya-user-input" placeholder="Escribe tu pregunta..." onkeypress="if(event.key===\'Enter\') sendKathyaMessage()">' +
                    '<button onclick="sendKathyaMessage()">Enviar</button>' +
                '</div>' +
            '</div>';

        document.body.appendChild(widget);
        console.log('Chat widget created!');
    }

    window.toggleKathyaChat = function() {
        const popup = document.getElementById('kathya-chat-popup');
        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
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
        messagesDiv.innerHTML += '<div class="user-message">' + message + '</div>';

        const response = getKathyaResponse(message);
        messagesDiv.innerHTML += '<div class="bot-message">' + response + '</div>';

        input.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };

    function getKathyaResponse(message) {
        const msg = message.toLowerCase();

        if (msg.includes('estudia')) {
            return 'Kathya estudia Ingeniería en Desarrollo de Software en la Universidad Católica de El Salvador desde 2024.';
        }
        if (msg.includes('proyecto')) {
            return 'Kathya ha desarrollado: Ban Ban (pastelería), Renta SV (alquileres), sistema para restaurante, y juego XO.';
        }
        if (msg.includes('contacto') || msg.includes('email')) {
            return 'Contacto:<br>📧 kathyaperez117@gmail.com<br>📱 7691-8430<br>🔗 linkedin.com/in/kathya-perez117';
        }
        if (msg.includes('habilidad') || msg.includes('tecnología')) {
            return 'Domina: HTML, CSS, PHP, C#, JavaScript, Visual Studio, MySQL, Git.';
        }
        return 'Pregúntame sobre estudios, proyectos, habilidades o contacto de Kathya 😊';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createWidget);
    } else {
        createWidget();
    }
})();