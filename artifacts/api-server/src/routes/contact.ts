import { Router } from "express";

const contactRouter = Router();

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  receivedAt: string;
}

const inbox: ContactMessage[] = [];

contactRouter.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body as Partial<ContactMessage>;

  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: "Missing required fields" });
    return;
  }

  const entry: ContactMessage = {
    name: String(name).trim(),
    email: String(email).trim(),
    subject: String(subject ?? "Portfolio Contact").trim(),
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  };

  inbox.push(entry);
  req.log.info({ from: entry.email, subject: entry.subject }, "contact message received");

  try {
    const payload = {
      name: entry.name,
      email: entry.email,
      _subject: entry.subject,
      message: entry.message,
      _template: "table",
      _captcha: "false",
    };

    const response = await fetch("https://formsubmit.co/ajax/sibaram.work@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    const data = (await response.json()) as { success?: string };

    if (!response.ok || data.success === "false") {
      req.log.warn({ status: response.status }, "formsubmit relay failed, message stored in inbox");
    } else {
      req.log.info("formsubmit relay succeeded");
    }
  } catch (err) {
    req.log.warn({ err }, "formsubmit relay error, message stored in inbox");
  }

  res.json({ success: true, message: "Message received" });
});

contactRouter.get("/contact/inbox", (_req, res) => {
  res.json({ count: inbox.length, messages: inbox });
});

export default contactRouter;
