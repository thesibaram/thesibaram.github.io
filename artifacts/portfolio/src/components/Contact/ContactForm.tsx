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
  if (!fields.name || fields.name.trim().length < 2) errors.name = "Min 2 characters required";
  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Enter a valid email address";
  if (!fields.subject || fields.subject.trim().length < 4) errors.subject = "Min 4 characters required";
  if (!fields.message || fields.message.trim().length < 20) errors.message = "Min 20 characters required";
  if (fields.message && fields.message.length > 500) errors.message = "Max 500 characters";
  return errors;
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
      <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <FormField name="name" label="NAME" value={fields.name} onChange={setField("name")} error={errors.name} />
        <FormField name="email" label="EMAIL" type="email" value={fields.email} onChange={setField("email")} error={errors.email} />
      </div>
      <FormField name="subject" label="SUBJECT" value={fields.subject} onChange={setField("subject")} error={errors.subject} />
      <FormField name="message" label="MESSAGE" value={fields.message} onChange={setField("message")} error={errors.message} multiline maxLength={500} />

      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-3 font-mono uppercase"
        style={{
          background: status === "loading" ? "var(--px-border)" : "var(--px-accent)",
          color: "#0D0D10",
          border: "none",
          padding: "15px 24px",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          borderRadius: 0,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          marginTop: "4px",
          position: "relative",
          overflow: "hidden",
        }}
        whileHover={status !== "loading" ? { y: -3, x: -3, boxShadow: "6px 6px 0px rgba(0,180,216,0.35)" } : {}}
        transition={{ duration: 0.1 }}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-1.5">
            <span>TRANSMITTING</span>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ animation: `typing-dot 0.9s step-start ${i * 0.3}s infinite`, display: "inline-block" }}>█</span>
            ))}
          </span>
        ) : (
          <span>[ TRANSMIT MESSAGE &nbsp;→→→ ]</span>
        )}
      </motion.button>
    </form>
  );
}
