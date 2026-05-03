import { ContactForm } from "./ContactForm";

export function ContactRight() {
  return (
    <div className="flex flex-col">
      {/* Form label row */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[9px] text-[var(--px-muted)] tracking-[0.25em] uppercase">
          // Message
        </span>
        <div className="h-px flex-1 bg-[var(--px-border)]" />
        <span className="font-mono text-[9px] text-[var(--px-muted)]">
          no spam, just real conversation
        </span>
      </div>

      {/* Form */}
      <ContactForm />
    </div>
  );
}
