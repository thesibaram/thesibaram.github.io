import { useState } from "react";
import { motion } from "framer-motion";
import { FormField } from "./FormField";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { contact } from "../../data/contact";

interface Fields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name || fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Valid email required";
  }
  if (!fields.subject || fields.subject.trim().length < 4) {
    errors.subject = "Subject must be at least 4 characters";
  }
  if (!fields.message || fields.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters";
  }
  if (fields.message && fields.message.length > 500) {
    errors.message = "Message cannot exceed 500 characters";
  }
  return errors;
}

function SendIcon() {
  return (
    <svg viewBox="0 0 8 8" width="8" height="8" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="3" width="6" height="2" />
      <rect x="4" y="1" width="2" height="2" />
      <rect x="4" y="5" width="2" height="2" />
      <rect x="6" y="2" width="2" height="4" />
    </svg>
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const setField = (key: keyof Fields) => (val: string) => {
    setFields((prev) => ({ ...prev, [key]: val }));
    const newErrors = validate({ ...fields, [key]: val });
    setErrors((prev) => ({ ...prev, [key]: newErrors[key] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      if (contact.formEndpoint) {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fields),
        });
        if (!res.ok) throw new Error("Failed");
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <FormSuccess onReset={() => { setStatus("idle"); setFields({ name: "", email: "", subject: "", message: "" }); }} />;
  }
  if (status === "error") {
    return <FormError onReset={() => setStatus("idle")} />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormField name="name" label="NAME" value={fields.name} onChange={setField("name")} error={errors.name} />
      <FormField name="email" label="EMAIL" type="email" value={fields.email} onChange={setField("email")} error={errors.email} />
      <FormField name="subject" label="SUBJECT" value={fields.subject} onChange={setField("subject")} error={errors.subject} />
      <FormField name="message" label="MESSAGE" value={fields.message} onChange={setField("message")} error={errors.message} multiline maxLength={500} />

      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 font-mono uppercase tracking-widest"
        style={{
          background: "var(--px-accent)",
          color: "#0D0D10",
          border: "2px solid var(--px-accent)",
          padding: "14px",
          fontSize: "13px",
          borderRadius: 0,
          opacity: status === "loading" ? 0.8 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
        whileHover={status !== "loading" ? { y: -3, x: -3, boxShadow: "6px 6px 0px rgba(0,180,216,0.4)" } : {}}
        transition={{ duration: 0.1 }}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-1">
            {"[ SENDING"}
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ animation: `blink ${0.9}s step-start ${i * 0.3}s infinite` }}>.</span>
            ))}
            {" ]"}
          </span>
        ) : (
          <>[ SEND MESSAGE ] <SendIcon /></>
        )}
      </motion.button>
    </form>
  );
}
