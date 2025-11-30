import { GoogleGenAI, Type } from "@google/genai";
import { TransactionAnalysis } from "../types";

// Initialize Gemini Client
// NOTE: Ensure process.env.API_KEY is set in your environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeTransaction = async (rawTransaction: string): Promise<TransactionAnalysis> => {
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
    throw new Error("No response text from Gemini");

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    throw error;
  }
};