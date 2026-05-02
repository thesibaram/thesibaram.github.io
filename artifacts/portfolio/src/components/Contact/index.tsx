import { motion } from "framer-motion";
import { ContactLeft } from "./ContactLeft";
import { ContactRight } from "./ContactRight";

function SatelliteIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="6" y="0" width="4" height="2" />
      <rect x="4" y="2" width="8" height="2" />
      <rect x="2" y="4" width="12" height="4" />
      <rect x="4" y="8" width="8" height="2" />
      <rect x="6" y="10" width="4" height="2" />
      <rect x="7" y="12" width="2" height="4" />
      <rect x="0" y="6" width="4" height="2" />
      <rect x="12" y="6" width="4" height="2" />
    </svg>
  );
}

export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
      style={{ padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 48px)" }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-3">
            <div style={{ color: "var(--px-accent)", width: "16px", height: "16px" }}>
              <SatelliteIcon />
            </div>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "var(--px-muted)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              CONTACT
            </span>
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "var(--px-muted)", fontStyle: "italic" }}>
            // let's build something together
          </p>
          <div style={{ borderTop: "1px dashed var(--px-border)", marginTop: "8px" }} />
        </div>

        <div
          className="grid gap-16"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </motion.section>
  );
}
