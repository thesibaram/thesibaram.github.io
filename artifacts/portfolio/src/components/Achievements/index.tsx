import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { PixelDivider } from "../pixels/PixelDivider";
import { achievements } from "../../data/achievements";
import { AchievementCard } from "./AchievementCard";

function TrophyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
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

export function Achievements() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[1360px] mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="Achievements" icon={<TrophyIcon />} />
      <PixelDivider />

      {/* Count line */}
      <div className="flex items-center gap-3 mb-8">
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            color: "var(--px-muted)",
            letterSpacing: "0.1em",
          }}
        >
          // {achievements.length} RECOGNITION{achievements.length !== 1 ? "S" : ""} LOGGED
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--px-border)" }} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <AchievementCard key={a.id} achievement={a} index={i} />
        ))}
      </div>

      {/* CTA footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex items-center gap-4"
      >
        <div style={{ flex: 1, height: "1px", background: "var(--px-border)" }} />
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            color: "var(--px-muted)",
            letterSpacing: "0.1em",
          }}
        >
          MORE IN PROGRESS
        </span>
        <div style={{ flex: 1, height: "1px", background: "var(--px-border)" }} />
      </motion.div>
    </motion.section>
  );
}
