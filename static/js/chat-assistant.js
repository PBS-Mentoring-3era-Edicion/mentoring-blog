// Kathya's Portfolio AI Chat Assistant
(function() {
    'use strict';

    // Configuration
    const API_URL = 'http://localhost:8000';
    
    // Chat widget HTML template
    const chatWidgetHTML = `
        <div id="chat-widget" class="chat-widget">
            <button id="chat-toggle" class="chat-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span class="chat-toggle-text">Ask about Kathya</span>
            </button>
            
            <div id="chat-container" class="chat-container hidden">
                <div class="chat-header">
                    <h3>Chat with Kathya's Assistant</h3>
                    <button id="chat-close" class="chat-close">&times;</button>
                </div>
                
                <div id="chat-messages" class="chat-messages">
                    <div class="chat-message bot-message">
                        <div class="message-avatar">🤖</div>
                        <div class="message-content">
                            Hi! I'm Kathya's portfolio assistant. Ask me anything about her skills, experience, or education!
                        </div>
                    </div>
                </div>
                
                <div class="chat-input-container">
                    <input 
                        type="text" 
                        id="chat-input" 
                        class="chat-input" 
                        placeholder="Ask about Kathya's experience..."
                        maxlength="500"
                    />
                    <button id="chat-send" class="chat-send">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Chat widget CSS
    const chatWidgetCSS = `
        .chat-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .chat-toggle {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 50px;
            padding: 12px 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .chat-toggle:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }
        
        .chat-container {
            position: absolute;
            bottom: 70px;
            right: 0;
            width: 380px;
            height: 500px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .chat-container.hidden {
            opacity: 0;
            transform: translateY(20px);
            pointer-events: none;
        }
        
        .chat-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 20px;
            border-radius: 12px 12px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .chat-header h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
        }
        
        .chat-close {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: background 0.2s ease;
        }
        
        .chat-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .chat-messages {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: #f7f8fa;
        }
        
        .chat-message {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .message-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 18px;
        }
        
        .bot-message .message-avatar {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .user-message {
            flex-direction: row-reverse;
        }
        
        .user-message .message-avatar {
            background: #e3e8ee;
        }
        
        .message-content {
            background: white;
            padding: 10px 14px;
            border-radius: 12px;
            max-width: 70%;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            line-height: 1.5;
            font-size: 14px;
        }
        
        .user-message .message-content {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .typing-indicator {
            display: inline-block;
        }
        
        .typing-indicator span {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #667eea;
            margin: 0 2px;
            animation: typing 1.4s infinite;
        }
        
        .typing-indicator span:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typing {
            0%, 60%, 100% {
                opacity: 0.3;
                transform: translateY(0);
            }
            30% {
                opacity: 1;
                transform: translateY(-10px);
            }
        }
        
        .chat-input-container {
            padding: 15px;
            border-top: 1px solid #e3e8ee;
            display: flex;
            gap: 10px;
            background: white;
            border-radius: 0 0 12px 12px;
        }
        
        .chat-input {
            flex: 1;
            border: 1px solid #e3e8ee;
            border-radius: 20px;
            padding: 10px 15px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.2s ease;
        }
        
        .chat-input:focus {
            border-color: #667eea;
        }
        
        .chat-send {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        
        .chat-send:hover {
            transform: scale(1.1);
        }
        
        .chat-send:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        @media (max-width: 480px) {
            .chat-container {
                width: calc(100vw - 40px);
                right: 50%;
                transform: translateX(50%);
            }
            
            .chat-container.hidden {
                transform: translateX(50%) translateY(20px);
            }
        }
    `;
    
    // Initialize chat widget
    function initChatWidget() {
        // Inject CSS
        const style = document.createElement('style');
        style.textContent = chatWidgetCSS;
        document.head.appendChild(style);
        
        // Inject HTML
        const container = document.createElement('div');
        container.innerHTML = chatWidgetHTML;
        document.body.appendChild(container.firstElementChild);
        
        // Get elements
        const chatToggle = document.getElementById('chat-toggle');
        const chatContainer = document.getElementById('chat-container');
        const chatClose = document.getElementById('chat-close');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');
        const chatMessages = document.getElementById('chat-messages');
        
        // Toggle chat
        chatToggle.addEventListener('click', () => {
            chatContainer.classList.toggle('hidden');
            if (!chatContainer.classList.contains('hidden')) {
                chatInput.focus();
            }
        });
        
        chatClose.addEventListener('click', () => {
            chatContainer.classList.add('hidden');
        });
        
        // Send message
        async function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;
            
            // Add user message
            addMessage(message, 'user');
            chatInput.value = '';
            chatSend.disabled = true;
            
            // Add typing indicator
            const typingId = addTypingIndicator();
            
            try {
                const response = await fetch(`${API_URL}/chat`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message }),
                });
                
                if (!response.ok) throw new Error('Network response was not ok');
                
                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let botMessage = '';
                
                // Remove typing indicator
                removeTypingIndicator(typingId);
                
                // Create bot message element
                const botMessageId = Date.now();
                const botMessageEl = createMessage('', 'bot', botMessageId);
                chatMessages.appendChild(botMessageEl);
                
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    botMessage += decoder.decode(value);
                    updateMessage(botMessageId, botMessage);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }
            } catch (error) {
                console.error('Error:', error);
                removeTypingIndicator(typingId);
                addMessage('Sorry, I\'m having trouble connecting to the server. Please make sure the AI assistant is running.', 'bot');
            } finally {
                chatSend.disabled = false;
                chatInput.focus();
            }
        }
        
        function addMessage(text, sender) {
            const messageEl = createMessage(text, sender);
            chatMessages.appendChild(messageEl);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function createMessage(text, sender, id) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${sender}-message`;
            if (id) messageDiv.dataset.messageId = id;
            
            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'message-avatar';
            avatarDiv.textContent = sender === 'bot' ? '🤖' : '👤';
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.textContent = text;
            
            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(contentDiv);
            
            return messageDiv;
        }
        
        function updateMessage(id, text) {
            const messageEl = document.querySelector(`[data-message-id="${id}"] .message-content`);
            if (messageEl) {
                messageEl.textContent = text;
            }
        }
        
        function addTypingIndicator() {
            const id = Date.now();
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message bot-message';
            messageDiv.dataset.typingId = id;
            
            const avatarDiv = document.createElement('div');
            avatarDiv.className = 'message-avatar';
            avatarDiv.textContent = '🤖';
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
            
            messageDiv.appendChild(avatarDiv);
            messageDiv.appendChild(contentDiv);
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            return id;
        }
        
        function removeTypingIndicator(id) {
            const indicator = document.querySelector(`[data-typing-id="${id}"]`);
            if (indicator) {
                indicator.remove();
            }
        }
        
        // Event listeners
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatWidget);
    } else {
        initChatWidget();
    }
})();