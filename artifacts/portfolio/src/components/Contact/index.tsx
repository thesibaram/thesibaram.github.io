import { motion } from "framer-motion";
import { ContactLeft } from "./ContactLeft";
import { ContactRight } from "./ContactRight";

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
      style={{
        background: "var(--px-surface)",
        borderTop: "1px solid var(--px-border)",
        borderBottom: "1px solid var(--px-border)",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-4 md:px-6 py-20 w-full"
      >
        {/* Section label row */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                color: "var(--px-accent)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              05 ——
            </span>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                color: "var(--px-muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              CONTACT.SYS
            </span>
          </div>
          <div style={{ flex: 1, height: "1px", background: "var(--px-border)" }} />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              color: "var(--px-muted)",
              letterSpacing: "0.1em",
            }}
          >
            // OPEN TO CONNECTIONS
          </span>
        </div>

        {/* Two-column grid */}
        <div
          className="grid gap-8 lg:gap-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}
        >
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </motion.section>
  );
}
