import { GoogleGenAI } from "@google/genai";

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

// Smart fallback answer generator when API key is missing or service is offline
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

  // Study Mode Fallbacks
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

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST." });
    return;
  }

  try {
    const { message, language = "English", history = [], mode = "study", stream = true } = req.body || {};

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message string is required" });
      return;
    }

    const ai = getGeminiClient();

    // Fallback if no API Key is available
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
      res.status(200).json({ reply: fallbackReply, isFallback: true });
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

    // Check if client supports or requested streaming SSE
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

    // Standard Non-Streaming JSON Response
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: mode === "companion" ? 0.8 : 0.7,
      },
    });

    res.status(200).json({ reply: response.text || "I'm here for you. Could you tell me a bit more?" });
  } catch (error: any) {
    console.error("Error in /api/chat:", error);
    const fallbackReply = getSmartFallbackReply(req.body?.message || "", req.body?.mode || "study", req.body?.language || "English");
    res.status(200).json({ reply: fallbackReply, isFallback: true });
  }
}
