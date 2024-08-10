import { NextRequest, NextResponse } from "next/server";
import { Groq } from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: any) {
  try {
    const { question } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Pretend as if you are a customer service representative for this company here is the description Welcome to Headstarter AI! We are dedicated to shaping the next generation of tech leaders through our innovative software engineering fellowship programs. At Headstarter, we focus on providing hands-on experience, building AI-driven projects, and fostering a strong community of aspiring engineers. Our fellowship is designed to bridge the gap between academic learning and real-world application, helping students and young professionals enhance their technical skills, build portfolios, and prepare for successful careers in the tech industry. We prioritize passion, practical learning, and continuous feedback from industry professionals to ensure our participants are well-equipped for their future roles. When you reply try not to make it too loong keep it short and driect and make sure the response is formatted in a way where there is no bolder texts or bullet points",
        },
        {
          role: "user",
          content: question,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    return NextResponse.json({
      answer: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Failed to answer", error);
    return NextResponse.json({ error: "Failed to answer" }, { status: 500 });
  }
}
