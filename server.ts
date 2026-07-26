import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

function getSmartFallbackReply(message: string, mode: string, language: string): string {
  const query = message.toLowerCase();
  
  if (mode === "companion") {
    if (language === "Urdu") {
      return "میں آپ کی بات سمجھ رہا ہوں۔ مینڈورا میں ہم ہر جذبے کا احترام کرتے ہیں۔ اگر آپ مزید بات کرنا چاہتے ہیں تو بلا جھجھک شیئر کریں، میں یہاں سن رہا ہوں۔\n\n(نوٹ: Gemini API Key کنفیگر کرنے کے لیے Settings میں GEMINI_API_KEY شامل کریں۔)";
    } else if (language === "Roman Urdu") {
      return "Main aap ki baat samajh raha hoon. Mindora mein hum har emotion ki respect karte hain. Aap freely apni baat share kar sakte hain, main sun raha hoon.\n\n(Note: Complete AI experience ke liye GEMINI_API_KEY set karein.)";
    } else {
      return "I hear you and I'm right here with you. Mindora Companion is dedicated to providing a safe, supportive space for your thoughts. Feel free to tell me more about how you're feeling right now.\n\n(Note: Set GEMINI_API_KEY in environment variables for custom AI responses.)";
    }
  }

  if (query.includes("ocd") || query.includes("obsessive")) {
    return "Obsessive-Compulsive Disorder (OCD) involves repetitive, unwanted thoughts (obsessions) and irrational behaviors or rituals (compulsions) performed to reduce anxiety.\n\nKey Examples:\n- Excessive hand-washing due to contamination fear\n- Repeatedly checking if doors are locked or stove is off\n\nTherapy: Cognitive Behavioral Therapy (CBT) and Exposure & Response Prevention (ERP).";
  } else if (query.includes("anxiety") || query.includes("stress")) {
    return "Anxiety is the body's natural response to stress, characterized by worry, nervousness, or physical symptoms like a racing heart and muscle tension.\n\nKey Strategies:\n1. Diaphragmatic deep breathing (4-7-8 method)\n2. Grounding techniques (5-4-3-2-1 sensory observation)\n3. Progressive muscle relaxation";
  } else if (query.includes("cbt") || query.includes("cognitive")) {
    return "Cognitive Behavioral Therapy (CBT) focuses on identifying negative or distorted thought patterns and reshaping them into healthier, constructive beliefs.";
  } else if (query.includes("pavlov") || query.includes("conditioning")) {
    return "Classical Conditioning (discovered by Ivan Pavlov) is a learning process where an unconditioned stimulus is paired with a conditioned stimulus to produce a voluntary or involuntary response (e.g., Pavlov's dogs salivating at the sound of a bell).";
  }

  if (language === "Urdu") {
    return "مینڈورا اسٹڈی بڈی: آپ کا سوال موصول ہوا۔ نفسیات کے بنیادی اصولوں اور تصورات کو سمجھنے کے لیے آپ لائبریری ایکسپلورر بھی دیکھ سکتے ہیں۔\n\n(Gemini AI فعال کرنے کے لیے GEMINI_API_KEY کنفیگر کریں۔)";
  } else if (language === "Roman Urdu") {
    return "Mindora Study Buddy: Aap ka psychology question mil gaya hai. Aap library explore kar sakte hain ya different topics ke baare mein pooch sakte hain.\n\n(Gemini AI ke liye GEMINI_API_KEY configure karein.)";
  }

  return "Mindora AI Study Buddy: Psychology is the scientific study of mind and behavior. You can explore our library or ask about specific concepts like CBT, Anxiety, OCD, or Pavlovian Conditioning!\n\n(Note: To unlock live Gemini responses, configure GEMINI_API_KEY in Vercel Environment Variables.)";
}

// Health check route
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", appName: "Mindora AI" });
});

// Chat endpoint for Study AI Assistant and AI Companion
app.post("/api/chat", async (req, res) => {
  try {
    const { message, language = "English", history = [], mode = "study", stream = true } = req.body || {};

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message string is required" });
      return;
    }

    const ai = getGeminiClient();

    if (!ai) {
      const fallbackReply = getSmartFallbackReply(message, mode, language);
      if (stream) {
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.write(`data: ${JSON.stringify({ text: fallbackReply })}\n\n`);
        res.write("data: [DONE]\n\n");
        res.end();
        return;
      }
      res.json({ reply: fallbackReply, isFallback: true });
      return;
    }

    let languageInstruction = "Respond in clear, accessible English.";
    if (language === "Urdu") {
      languageInstruction = "Respond entirely in Urdu language (اردو text). Use warm, respectful, natural, and easy-to-understand Urdu vocabulary.";
    } else if (language === "Roman Urdu") {
      languageInstruction = "Respond in Roman Urdu (Urdu written in Latin script, e.g., 'Aap kaise hain? Main aap ki baat samajh sakta hoon...'). Keep the tone friendly, clear, and empathetic.";
    }

    let systemInstruction = "";

    if (mode === "companion") {
      systemInstruction = `You are "Mindora AI Companion", a warm, empathetic, respectful, and supportive AI companion for general conversation, emotional support, guidance, and friendly dialogue.
Language Rule: ${languageInstruction}

Key Behaviors & Personality:
1. Conversation Style: Conversational, friendly, natural, and engaging like a helpful friend.
2. Active Listener: Acknowledge feelings with genuine empathy.
3. Language Adaptability: Flawlessly converse in English, Urdu, or Roman Urdu as selected by the user.
4. Supportive Disclaimer: Be a compassionate sounding board. Clarify gently if needed that you are an AI companion, not a licensed therapist.`;
    } else {
      systemInstruction = `You are "Mindora AI Study Buddy", a knowledgeable, friendly, and structured psychology tutor and learning assistant.
Language Rule: ${languageInstruction}

Key Behaviors:
1. Focus strictly on psychology education (explaining concepts, disorders, experiments, theories, therapies).
2. Explain complex psychological concepts in simple, student-friendly language.
3. Provide concrete real-life examples.
4. Format answers cleanly with clear bullet points or short paragraphs.`;
    }

    const formattedHistory = (history || []).map((item: { role: string; text: string }) => ({
      role: item.role === "user" ? "user" : "model",
      parts: [{ text: item.text }],
    }));

    const contents = [
      ...formattedHistory,
      { role: "user", parts: [{ text: message }] }
    ];

    const isSse = stream && (req.headers.accept?.includes("text/event-stream") || true);

    if (isSse) {
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");

      try {
        const responseStream = await ai.models.generateContentStream({
          model: "gemini-3.6-flash",
          contents,
          config: {
            systemInstruction,
            temperature: mode === "companion" ? 0.8 : 0.7,
          },
        });

        for await (const chunk of responseStream) {
          if (chunk.text) {
            res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
          }
        }
        res.write("data: [DONE]\n\n");
        res.end();
        return;
      } catch (streamErr: any) {
        console.error("Stream generation error:", streamErr);
        const fallbackReply = getSmartFallbackReply(message, mode, language);
        res.write(`data: ${JSON.stringify({ text: `\n\n[Note: Switched to offline response due to connection limit]\n${fallbackReply}` })}\n\n`);
        res.write("data: [DONE]\n\n");
        res.end();
        return;
      }
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: mode === "companion" ? 0.8 : 0.7,
      },
    });

    res.json({ reply: response.text || "I'm here for you. Could you tell me a bit more?" });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    const fallbackReply = getSmartFallbackReply(req.body?.message || "", req.body?.mode || "study", req.body?.language || "English");
    res.json({ reply: fallbackReply, isFallback: true });
  }
});

// AI Assessment Endpoint
app.post("/api/assessment/analyze", async (req, res) => {
  try {
    const { dominantCategory, scoreSummary, language = "English" } = req.body || {};

    const ai = getGeminiClient();

    if (!ai) {
      res.status(500).json({ error: "Gemini API key not configured" });
      return;
    }

    let languageInstruction = "Write the explanation in English.";
    if (language === "Urdu") {
      languageInstruction = "Write the explanation in Urdu (اردو text).";
    } else if (language === "Roman Urdu") {
      languageInstruction = "Write the explanation in Roman Urdu (Latin script).";
    }

    const prompt = `Analyze these psychological screening self-assessment answers and provide a gentle, educational breakdown.
Primary identified screening pattern: ${dominantCategory || "General Wellness"}
Score Summary: ${JSON.stringify(scoreSummary || {})}
Language requirement: ${languageInstruction}

Return a valid JSON object with the following fields:
{
  "summary": "1-2 sentence empathetic summary of screening findings.",
  "possibleConcern": "Title of the primary pattern identified (e.g. 'Anxiety Pattern' or 'Normal Range')",
  "whyIdentified": "3-4 bullet points explaining which answer patterns led to this observation in simple language.",
  "aboutCondition": "2-3 paragraphs explaining the condition in clear, non-jargon educational terms.",
  "examples": ["Daily life scenario 1", "Daily life scenario 2", "Daily life scenario 3"],
  "treatment": "General evidence-based information regarding managing this pattern.",
  "therapy": "Common therapy approaches (like CBT, Mindfulness, Exposure Therapy, etc.)."
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.3,
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    res.json({ analysis: parsed });
  } catch (error: any) {
    console.error("Error in /api/assessment/analyze:", error);
    res.status(500).json({ error: "Analysis service unavailable", details: error?.message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Mindora AI server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
