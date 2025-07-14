import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: "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", // Store this in `.env.local`
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid or missing 'messages' array in body" },
        { status: 400 }
      );
    }

    const response = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages,
      temperature: 0.7,
      max_tokens: 512,
    });

    const reply = response.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json({ error: "Groq did not return a reply" }, { status: 500 });
    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json(
      { error: "Chat failed", details: (error as Error).message },
      { status: 500 }
    );
  }
}
