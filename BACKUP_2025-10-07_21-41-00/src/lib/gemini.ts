import { GoogleGenerativeAI } from '@google/generative-ai';

// Acceder a la API Key de forma segura desde las variables de entorno
const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error('GOOGLE_API_KEY is not defined in .env.local');
}

// Inicializar el cliente de Google AI
export const genAI = new GoogleGenerativeAI(apiKey);

// Seleccionar el modelo a utilizar
export const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
