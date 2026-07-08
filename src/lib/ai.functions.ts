import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  system: z.string(),
  prompt: z.string().min(1),
  model: z.string().optional(),
});

export type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

const ChatInput = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    }),
  ),
  system: z.string().optional(),
});

async function callGateway(body: unknown): Promise<string> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) throw new Error("Missing LOVABLE_API_KEY");
  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(body),
  });
  if (res.status === 429) throw new Error("Rate limit reached. Please try again in a moment.");
  if (res.status === 402) throw new Error("AI credits exhausted. Please add credits to continue.");
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`AI request failed (${res.status}): ${text.slice(0, 200)}`);
  }
  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return data.choices?.[0]?.message?.content ?? "";
}

export const generateAI = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => Input.parse(data))
  .handler(async ({ data }) => {
    const content = await callGateway({
      model: data.model ?? "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: data.system },
        { role: "user", content: data.prompt },
      ],
    });
    return { content };
  });

export const chatAI = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ChatInput.parse(data))
  .handler(async ({ data }) => {
    const system =
      data.system ??
      "You are a helpful, professional AI workplace productivity assistant. Be concise, actionable, and format with markdown when useful.";
    const content = await callGateway({
      model: "google/gemini-2.5-flash",
      messages: [{ role: "system", content: system }, ...data.messages],
    });
    return { content };
  });