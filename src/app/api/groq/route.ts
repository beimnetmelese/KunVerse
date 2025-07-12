import { Groq } from 'groq-sdk';
import { NextResponse } from 'next/server';

const groq = new Groq({
  apiKey: "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"
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are Beimnet's AI assistant. Answer questions about his skills, projects, and experience in a friendly but professional tone. Keep responses concise but informative. Highlight his strengths and unique qualities."
        },
        ...messages
      ],
      model: "llama3-70b-8192",
      temperature: 0.7,
      max_tokens: 1024,
      stream: false
    });

    return NextResponse.json(completion.choices[0]?.message?.content || "I couldn't generate a response.");
  } catch (error) {
    console.error("Groq API error:", error);
    return NextResponse.json({ error: "Error processing your request" }, { status: 500 });
  }
}