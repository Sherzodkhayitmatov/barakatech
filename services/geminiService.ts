import { GoogleGenAI, Type } from "@google/genai";
import { TransactionAnalysis } from "../types";

export const analyzeTransaction = async (rawTransaction: string): Promise<TransactionAnalysis> => {
  // Check for API Key availability inside the function to prevent module-level errors
  // NOTE: When running locally or sharing, ensure a .env file exists with API_KEY=...
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("API Kaliti topilmadi. Dastur to'g'ri ishlashi uchun .env faylida API_KEY bo'lishi shart.");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze this bank transaction string and extract structured data: "${rawTransaction}"`,
      config: {
        systemInstruction: `You are a financial data expert. Your job is to clean, categorize, and analyze raw bank transaction strings. 
        Determine the real merchant name, a high-level category (e.g., Food, Transport, Utilities), a detailed sub-category, 
        whether it looks like a recurring subscription, and a confidence score (0-100).`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            merchantName: { type: Type.STRING, description: "The clean, human-readable name of the merchant" },
            category: { type: Type.STRING, description: "High-level category" },
            subCategory: { type: Type.STRING, description: "Detailed sub-category" },
            isSubscription: { type: Type.BOOLEAN, description: "True if this looks like a recurring payment" },
            sentiment: { type: Type.STRING, description: "Brief analysis of the spending (e.g., 'Essential', 'Discretionary')" },
            confidenceScore: { type: Type.NUMBER, description: "Confidence score between 0 and 100" }
          },
          required: ["merchantName", "category", "subCategory", "isSubscription", "sentiment", "confidenceScore"]
        }
      }
    });

    if (response.text) {
      // Sanitize the text to remove potential markdown code blocks (```json ... ```)
      const cleanText = response.text.replace(/```json|```/g, '').trim();
      return JSON.parse(cleanText) as TransactionAnalysis;
    }
    throw new Error("Gemini javob qaytarmadi.");

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    throw error;
  }
};