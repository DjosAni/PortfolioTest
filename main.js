import { GoogleGenAI } from "@google/genai";

/* -------------------------------------------------------------------------- */
/*                                GEMINI CHATBOT                              */
/* -------------------------------------------------------------------------- */

(async function initChatbot() {
    try {
        console.log("Chatbot: Initialisation...");

        // DOM Elements Check
        const chatToggle = document.getElementById('chat-toggle');
        const chatWindow = document.getElementById('chat-window');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');
        const chatMessages = document.getElementById('chat-messages');

        if (!chatToggle || !chatWindow || !chatInput || !chatSend || !chatMessages) {
            console.log("Chatbot elements not found in DOM");
            return;
        }

        // Configuration
        const SYSTEM_INSTRUCTION = `
        Tu es l'assistant virtuel intelligent du portfolio d'un développeur React Senior.
        Ton rôle est de répondre aux questions des recruteurs ou visiteurs sur l'expérience, les compétences et les projets du développeur.
        Sois professionnel, concis, élégant dans tes réponses, et un peu charmant.
        Réponds toujours en Français.
        Le développeur s'appelle "Alex".
        Ses compétences principales : React, TypeScript, Tailwind, Node.js, AI Integration.
        Il cherche des opportunités en freelance ou CDI.
        `;

        // Safe API Key Access
        let apiKey = '';
        try {
            if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
                apiKey = process.env.API_KEY;
            }
        } catch (e) {
            console.warn("API Key warning: process.env access failed.");
        }

        // Initialisation de l'IA seulement si possible, mais on garde le chat actif pour afficher un message d'erreur si l'utilisateur essaie de parler
        let ai = null;
        if (apiKey) {
            ai = new GoogleGenAI({ apiKey });
        }

        // State
        let isChatOpen = false;
        let isLoading = false;
        let chatHistory = [
            { role: 'model', parts: [{ text: "Bonjour ! Je suis l'assistant IA d'Alex. Posez-moi des questions sur ses compétences ou son expérience." }] }
        ];

        const toggleIcon = chatToggle.querySelector('i');

        // Toggle Chat
        chatToggle.addEventListener('click', () => {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWindow.classList.remove('chat-hidden');
                chatWindow.classList.add('chat-visible');
                chatToggle.classList.remove('bg-accent', 'animate-pulse-slow');
                chatToggle.classList.add('bg-slate-700');
                if(toggleIcon) {
                    toggleIcon.classList.remove('fa-comment-dots');
                    toggleIcon.classList.add('fa-times', 'rotate-90');
                }
                
                // Focus input
                setTimeout(() => chatInput.focus(), 300);
            } else {
                chatWindow.classList.remove('chat-visible');
                chatWindow.classList.add('chat-hidden');
                chatToggle.classList.remove('bg-slate-700');
                chatToggle.classList.add('bg-accent', 'animate-pulse-slow');
                if(toggleIcon) {
                    toggleIcon.classList.remove('fa-times', 'rotate-90');
                    toggleIcon.classList.add('fa-comment-dots');
                }
            }
        });

        // Helper: Add Message to UI
        function addMessageToUI(text, role) {
            const wrapper = document.createElement('div');
            wrapper.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
            
            const bubble = document.createElement('div');
            bubble.className = `max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                role === 'user' 
                ? 'bg-accent text-white rounded-br-none' 
                : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
            }`;
            bubble.textContent = text;
            
            wrapper.appendChild(bubble);
            chatMessages.appendChild(wrapper);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Helper: Add Loading Indicator
        function addLoadingIndicator() {
            const wrapper = document.createElement('div');
            wrapper.id = 'loading-indicator';
            wrapper.className = 'flex justify-start';
            wrapper.innerHTML = `
                <div class="bg-slate-800 border border-slate-700 p-3 rounded-2xl rounded-bl-none flex space-x-2 items-center">
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
            `;
            chatMessages.appendChild(wrapper);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeLoadingIndicator() {
            const el = document.getElementById('loading-indicator');
            if (el) el.remove();
        }

        // Send Message Logic
        async function handleSend() {
            const text = chatInput.value.trim();
            if (!text || isLoading) return;

            // UI Updates
            addMessageToUI(text, 'user');
            chatInput.value = '';
            isLoading = true;
            chatSend.disabled = true;
            addLoadingIndicator();

            // Prepare History
            chatHistory.push({ role: 'user', parts: [{ text: text }] });

            try {
                if (!ai) {
                    throw new Error("Clé API non configurée");
                }

                const model = 'gemini-3-flash-preview';
                const response = await ai.models.generateContent({
                    model: model,
                    contents: chatHistory,
                    config: {
                        systemInstruction: SYSTEM_INSTRUCTION
                    }
                });

                const responseText = response.text || "Désolé, je n'ai pas pu répondre.";
                
                removeLoadingIndicator();
                addMessageToUI(responseText, 'model');
                
                // Update History
                chatHistory.push({ role: 'model', parts: [{ text: responseText }] });

            } catch (error) {
                console.error(error);
                removeLoadingIndicator();
                addMessageToUI("Désolé, je ne peux pas répondre pour le moment (Clé API manquante ou erreur réseau).", 'model');
            } finally {
                isLoading = false;
                chatSend.disabled = false;
                chatInput.focus();
            }
        }

        // Event Listeners for Chat
        chatSend.addEventListener('click', handleSend);
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleSend();
        });

    } catch (globalError) {
        console.error("Erreur fatale dans le module Chatbot:", globalError);
    }
})();
