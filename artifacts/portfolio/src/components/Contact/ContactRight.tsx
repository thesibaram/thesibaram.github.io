import { ContactForm } from "./ContactForm";

export function ContactRight() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "14px", color: "var(--px-text)", fontWeight: 600 }}>
          Send a message
        </p>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)" }}>
          // no spam, just real conversation
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
