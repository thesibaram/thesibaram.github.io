import { motion } from "framer-motion";
import type { Achievement } from "../../data/achievements";

const TYPE_CONFIG: Record<string, { label: string; color: string }> = {
  hackathon: { label: "HACKATHON", color: "var(--px-accent)" },
  award:     { label: "AWARD",     color: "#F59E0B" },
  competition:{ label: "COMPETITION", color: "#7B2FBE" },
  recognition:{ label: "RECOGNITION", color: "#22C55E" },
  program:   { label: "PROGRAM",   color: "#9B4FE8" },
};

function TrophyIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className="pixel-art">
      <rect x="4" y="0" width="8" height="2" />
      <rect x="2" y="2" width="12" height="6" />
      <rect x="0" y="2" width="2" height="4" />
      <rect x="14" y="2" width="2" height="4" />
      <rect x="3" y="8" width="10" height="2" />
      <rect x="5" y="10" width="6" height="2" />
      <rect x="4" y="12" width="8" height="2" />
      <rect x="3" y="14" width="10" height="2" />
    </svg>
  );
}

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const type = TYPE_CONFIG[achievement.type] ?? TYPE_CONFIG.recognition;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      style={{
        border: "1px solid var(--px-border)",
        background: "var(--px-surface)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: "3px", background: type.color, flexShrink: 0 }} />

      <div style={{ padding: "20px 20px 16px" }}>
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span style={{ color: type.color }}>
              <TrophyIcon />
            </span>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: type.color,
                border: `1px solid ${type.color}`,
                padding: "2px 6px",
              }}
            >
              {type.label}
            </span>
          </div>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              color: "var(--px-muted)",
              flexShrink: 0,
            }}
          >
            {achievement.year}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "15px",
            fontWeight: 800,
            color: "var(--px-text)",
            letterSpacing: "0.02em",
            marginBottom: "4px",
            lineHeight: 1.3,
          }}
        >
          {achievement.title}
        </h3>

        {/* Event name */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            color: "var(--px-accent)",
            fontWeight: 600,
            marginBottom: "4px",
          }}
        >
          {achievement.event}
        </p>

        {/* Organizer */}
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            color: "var(--px-muted)",
            letterSpacing: "0.05em",
            marginBottom: "12px",
          }}
        >
          {achievement.organizer}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "var(--px-text)",
            lineHeight: 1.65,
            opacity: 0.85,
            marginBottom: "16px",
          }}
        >
          {achievement.description}
        </p>

        {/* Result badge + link */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#0D0D10",
              background: type.color,
              padding: "3px 8px",
            }}
          >
            ◆ {achievement.result.toUpperCase()}
          </span>
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                color: "var(--px-muted)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                borderBottom: "1px solid var(--px-border)",
                transition: "color 120ms, border-color 120ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--px-accent)";
                e.currentTarget.style.borderColor = "var(--px-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--px-muted)";
                e.currentTarget.style.borderColor = "var(--px-border)";
              }}
            >
              ↗ VIEW
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
