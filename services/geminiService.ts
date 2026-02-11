import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini client
// Note: In a real production app, you might proxy this through a backend to hide the key,
// but for this demo architecture, we use process.env.API_KEY directly as per instructions.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Tu es l'assistant virtuel intelligent du portfolio d'un développeur React Senior.
Ton rôle est de répondre aux questions des recruteurs ou visiteurs sur l'expérience, les compétences et les projets du développeur.
Sois professionnel, concis, élégant dans tes réponses, et un peu charmant.
Réponds toujours en Français.
Le développeur s'appelle "Alex".
Ses compétences principales : React, TypeScript, Tailwind, Node.js, AI Integration.
Il cherche des opportunités en freelance ou CDI.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  if (!apiKey) {
    return "Je suis désolé, ma clé API n'est pas configurée. Je ne peux pas répondre pour le moment.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the chat history format for the API if needed, 
    // or just use generateContent for a simple Q&A if not maintaining deep state.
    // Here we use generateContent with system instruction for simplicity in a single turn context usually,
    // but let's do it properly with a stateless request containing context if we want "memory" 
    // or just simple generation. 
    // For this simple portfolio widget, we will treat each message as a fresh query with context 
    // or use a chat session if we persisted the object. 
    // Let's use generateContent for simplicity and robustness.

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'IA. Veuillez réessayer plus tard.";
  }
};
