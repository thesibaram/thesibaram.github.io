import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";
import { buildDodoContext } from "../lib/aiContext.js";

const chatRouter = Router();
const sessionCounts = new Map<string, number>();
const MAX_MESSAGES = 20;

const client = new Anthropic({
  apiKey: process.env["AI_INTEGRATIONS_ANTHROPIC_API_KEY"] || "dummy",
  baseURL: process.env["AI_INTEGRATIONS_ANTHROPIC_BASE_URL"],
});

chatRouter.post("/chat", async (req, res) => {
  try {
    const { messages, sessionId } = req.body as {
      messages: Array<{ role: "user" | "assistant"; content: string }>;
      sessionId: string;
    };

    if (!sessionId || !Array.isArray(messages)) {
      res.status(400).json({ message: "Invalid request" });
      return;
    }

    const count = sessionCounts.get(sessionId) ?? 0;
    if (count >= MAX_MESSAGES) {
      res.json({ message: "MESSAGE_LIMIT" });
      return;
    }
    sessionCounts.set(sessionId, count + 1);

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      system: buildDodoContext(),
      messages: messages.slice(-10).map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const text =
      response.content[0]?.type === "text"
        ? response.content[0].text
        : "I could not generate a response.";

    res.json({ message: text });
  } catch (err) {
    req.log.error({ err }, "Chat error");
    res.status(500).json({ message: "ERROR_STATE" });
  }
});

export default chatRouter;
