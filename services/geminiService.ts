
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateBlogPost = async (title: string): Promise<string> => {
    if (!process.env.API_KEY) {
        return "La funzionalità AI è disabilitata. Per favore, imposta la variabile d'ambiente API_KEY.";
    }
    
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Genera un articolo di blog per un sito di benessere aziendale sul seguente argomento: "${title}".

Struttura richiesta:
- Titolo accattivante all'inizio.
- Paragrafi di testo scorrevole.

Regole di formattazione:
- Inizia direttamente con il titolo dell'articolo. NON includere prefissi come "Certamente" o "Ecco una bozza".
- Separa i paragrafi con un doppio a capo.
- NON usare markdown (es. #, *, -).
- Il tono deve essere professionale, autorevole e incoraggiante per manager e HR.

Esempio di output:

Titolo Dell'Articolo Fantastico

Questo è il primo paragrafo dell'articolo, che introduce l'argomento in modo coinvolgente.

Questo è un secondo paragrafo, che approfondisce i dettagli con consigli pratici e utili.

Questo è il paragrafo conclusivo, che riassume i benefici e lascia il lettore con una nota positiva.`,
            config: {
                systemInstruction: "Sei un esperto di benessere aziendale e mindfulness, scrivi contenuti per un blog destinato a manager e responsabili delle risorse umane.",
                temperature: 0.7,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error generating blog post with Gemini:", error);
        return "Siamo spiacenti, si è verificato un errore durante la generazione dell'articolo. Riprova più tardi.";
    }
};