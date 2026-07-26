import { GoogleGenAI } from "@google/genai";

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not configured.");
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
    const { answers, dominantCategory, scoreSummary, language = "English" } = req.body || {};

    const ai = getGeminiClient();

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
    res.status(200).json({ analysis: parsed });
  } catch (error: any) {
    console.error("Error in /api/assessment/analyze:", error);
    res.status(500).json({ error: "Analysis service unavailable", details: error?.message });
  }
}
