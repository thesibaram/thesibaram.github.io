import { motion } from "framer-motion";
import { type Certification, categoryConfig } from "@/data/certifications";

interface CertCardProps {
  cert: Certification;
  index: number;
}

function statusStyle(status: Certification["status"]) {
  if (status === "completed")   return { label: "COMPLETED",   bg: "#16A34A22", color: "#22C55E", dot: "#22C55E" };
  if (status === "in-progress") return { label: "IN PROGRESS", bg: "#CA8A0422", color: "#F59E0B", dot: "#F59E0B" };
  return                               { label: "PLANNED",     bg: "#6B728022", color: "#6B7280", dot: "#6B7280" };
}

function VerifyIcon() {
  return (
    <svg viewBox="0 0 10 10" width="10" height="10" fill="currentColor" className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="0" y="4" width="4" height="4" /><rect x="4" y="0" width="4" height="4" /><rect x="2" y="2" width="4" height="4" /><rect x="3" y="3" width="2" height="2" fill="var(--px-bg)" />
    </svg>
  );
}

function ShieldIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 16 16" width="28" height="28" fill={color} className="pixel-art" style={{ imageRendering: "pixelated" }}>
      <rect x="4" y="0" width="8" height="2" /><rect x="2" y="2" width="2" height="4" /><rect x="12" y="2" width="2" height="4" /><rect x="4" y="6" width="8" height="2" /><rect x="4" y="8" width="2" height="4" /><rect x="10" y="8" width="2" height="4" /><rect x="6" y="10" width="4" height="2" /><rect x="7" y="12" width="2" height="4" />
    </svg>
  );
}

export function CertCard({ cert, index }: CertCardProps) {
  const cat = categoryConfig[cert.category];
  const st = statusStyle(cert.status);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      style={{
        background: "var(--px-surface)",
        border: "1px solid var(--px-border)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        transition: "all 150ms ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translate(-3px, -3px)";
        el.style.boxShadow = `4px 4px 0px ${cat.color}`;
        el.style.borderColor = cat.color;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "var(--px-border)";
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: "3px", background: cat.color, flexShrink: 0 }} />

      {/* Card body */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
          <ShieldIcon color={cat.color} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            {/* Category badge */}
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                fontWeight: 700,
                color: cat.color,
                border: `1px solid ${cat.color}`,
                padding: "2px 6px",
                letterSpacing: "0.1em",
              }}
            >
              {cat.label}
            </span>
            {/* Status chip */}
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "8px",
                color: st.color,
                background: st.bg,
                padding: "2px 6px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ width: "4px", height: "4px", background: st.dot, display: "inline-block" }} />
              {st.label}
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--px-text)",
              lineHeight: 1.4,
              marginBottom: "6px",
            }}
          >
            {cert.title}
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "var(--px-muted)" }}>
            {cert.issuer}
          </p>
          <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", color: "var(--px-muted)", marginTop: "2px" }}>
            {cert.issuedDate}
          </p>
        </div>

        {/* Skills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {cert.skills.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "8px",
                color: "var(--px-muted)",
                border: "1px solid var(--px-border)",
                padding: "2px 5px",
                background: "var(--px-bg)",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Verify button */}
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "8px 12px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              fontWeight: 600,
              color: cat.color,
              border: `1px solid ${cat.color}`,
              background: "transparent",
              textDecoration: "none",
              letterSpacing: "0.08em",
              transition: "all 100ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = cat.color;
              e.currentTarget.style.color = "#0D0D10";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = cat.color;
            }}
          >
            <VerifyIcon />
            VERIFY CREDENTIAL
          </a>
        ) : (
          <div
            style={{
              padding: "8px 12px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              color: "var(--px-muted)",
              border: "1px dashed var(--px-border)",
              textAlign: "center",
              letterSpacing: "0.06em",
            }}
          >
            {cert.status === "planned" ? "// COMING SOON" : "// NO URL PROVIDED"}
          </div>
        )}
      </div>
    </motion.div>
  );
}
