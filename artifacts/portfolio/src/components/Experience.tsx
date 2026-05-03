import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="4" y="2" width="8" height="2" />
    <rect x="2" y="4" width="2" height="8" />
    <rect x="12" y="4" width="2" height="8" />
    <rect x="4" y="12" width="8" height="2" />
    <rect x="7" y="5" width="2" height="4" />
    <rect x="7" y="8" width="4" height="2" />
  </svg>
);

const experiences = [
  {
    title: "Smart India Hackathon 2024 — National Finalist",
    date: "2024",
    type: "Achievement",
    typeColor: "var(--px-accent)",
    desc: "Team project, national-level hackathon. One of the top teams selected for the national finals out of thousands of submissions across India.",
    tags: ["Hackathon", "Team", "National"],
  },
  {
    title: "GeeksforGeeks — 21 Projects in 21 Days ML Program",
    date: "2024",
    type: "Program",
    typeColor: "var(--px-accent2)",
    desc: "Participant in GFG's structured ML sprint program. Built 21 machine learning projects covering classification, regression, NLP, and data analysis.",
    tags: ["ML", "Python", "Scikit-learn"],
  },
  {
    title: "PMEC EE Department — Research Contributor",
    date: "2023–2024",
    type: "Research",
    typeColor: "#22C55E",
    desc: "Independent research on harmonic source identification in power systems using ML-based current signature analysis.",
    tags: ["Research", "Power Systems", "ML"],
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-[1360px] mx-auto px-4 md:px-6 py-20 w-full"
    >
      <SectionHeader title="Experience" icon={<ClockIcon />} />
      <PixelDivider />

      <div className="mt-10 grid gap-0 relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[11px] top-4 bottom-4 w-px hidden md:block"
          style={{ background: "var(--px-border)" }}
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.45 }}
            className="relative flex gap-8 md:pl-10 pb-8 last:pb-0"
          >
            {/* Timeline dot */}
            <div
              className="absolute left-0 top-5 w-6 h-6 hidden md:flex items-center justify-center flex-shrink-0 z-10"
              style={{ background: "var(--px-bg)" }}
            >
              <div
                className="w-2.5 h-2.5 pixel-art"
                style={{ background: exp.typeColor }}
              />
            </div>

            {/* Card */}
            <div
              className="flex-1 border border-[var(--px-border)] bg-[var(--px-surface)] overflow-hidden"
              style={{ borderLeft: `3px solid ${exp.typeColor}` }}
            >
              <div className="p-5">
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5"
                      style={{
                        color: exp.typeColor,
                        background: `${exp.typeColor}18`,
                        border: `1px solid ${exp.typeColor}40`,
                      }}
                    >
                      {exp.type}
                    </span>
                    <span
                      className="font-mono text-[10px] px-2 py-0.5"
                      style={{
                        color: "var(--px-muted)",
                        border: "1px solid var(--px-border)",
                      }}
                    >
                      {exp.date}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-mono font-bold text-[var(--px-text)] leading-snug mb-3"
                  style={{ fontSize: "clamp(14px, 2vw, 17px)" }}
                >
                  {exp.title}
                </h3>

                <p className="font-sans text-[13px] text-[var(--px-muted)] leading-relaxed mb-4">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5"
                      style={{
                        color: "var(--px-muted)",
                        border: "1px solid var(--px-border)",
                        background: "var(--px-bg)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
