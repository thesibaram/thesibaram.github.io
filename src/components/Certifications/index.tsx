import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PixelDivider } from "@/components/pixels/PixelDivider";
import { certifications, categoryConfig, type Certification } from "@/data/certifications";
import { CertCard } from "./CertCard";

const SealIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="5" y="1" width="6" height="2" />
    <rect x="3" y="3" width="2" height="2" /><rect x="11" y="3" width="2" height="2" />
    <rect x="1" y="5" width="2" height="6" /><rect x="13" y="5" width="2" height="6" />
    <rect x="3" y="11" width="2" height="2" /><rect x="11" y="11" width="2" height="2" />
    <rect x="5" y="13" width="6" height="2" />
    <rect x="6" y="5" width="4" height="6" />
  </svg>
);

type FilterKey = "all" | Certification["category"];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all",   label: "ALL"   },
  { key: "ML",    label: "ML"    },
  { key: "DL",    label: "DL"    },
  { key: "CV",    label: "CV"    },
  { key: "Dev",   label: "DEV"   },
  { key: "Cloud", label: "CLOUD" },
];

export function Certifications() {
  const [active, setActive] = useState<FilterKey>("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "all"
    ? certifications
    : certifications.filter((c) => c.category === active);

  const VISIBLE_COUNT = 3;
  const displayed = showAll ? filtered : filtered.slice(0, VISIBLE_COUNT);
  const hasMore = filtered.length > VISIBLE_COUNT;

  const completed  = certifications.filter((c) => c.status === "completed").length;
  const inProgress = certifications.filter((c) => c.status === "in-progress").length;
  const planned    = certifications.filter((c) => c.status === "planned").length;

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[1360px] mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="Certifications" icon={<SealIcon />} />
      <PixelDivider />

      {/* Stats row */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { label: "Completed",   value: completed,  color: "#22C55E" },
          { label: "In Progress", value: inProgress, color: "#F59E0B" },
          { label: "Planned",     value: planned,    color: "var(--px-muted)" },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid var(--px-border)",
              padding: "6px 14px",
              background: "var(--px-surface)",
            }}
          >
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "20px", fontWeight: 800, color }}>
              {value}
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "var(--px-muted)" }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {FILTERS.map(({ key, label }) => {
          const isActive = active === key;
          const color =
            key === "all"
              ? "var(--px-accent)"
              : (categoryConfig[key as Certification["category"]]?.color ?? "var(--px-accent)");
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                padding: "6px 14px",
                border: `1px solid ${isActive ? color : "var(--px-border)"}`,
                background: isActive ? color : "var(--px-surface)",
                color: isActive ? "#0D0D10" : "var(--px-muted)",
                cursor: "pointer",
                transition: "all 120ms ease",
                borderRadius: 0,
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {displayed.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>

      {/* View More button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((v) => !v)}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              padding: "10px 28px",
              border: "1px solid var(--px-border)",
              background: "var(--px-surface)",
              color: "var(--px-muted)",
              cursor: "pointer",
              transition: "all 150ms ease",
              borderRadius: 0,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--px-accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--px-accent)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--px-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--px-muted)";
            }}
          >
            {showAll ? "[ SHOW LESS ↑ ]" : `[ VIEW MORE CERTIFICATIONS (${filtered.length - VISIBLE_COUNT}) → ]`}
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div
          style={{
            padding: "60px 20px",
            textAlign: "center",
            border: "1px dashed var(--px-border)",
            color: "var(--px-muted)",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "12px",
          }}
        >
          // no certifications in this category yet
        </div>
      )}
    </motion.section>
  );
}
