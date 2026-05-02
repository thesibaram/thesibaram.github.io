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
    desc: "Team project, national-level hackathon. One of the top teams selected for the national finals out of thousands of submissions across India."
  },
  {
    title: "GeeksforGeeks — 21 Projects in 21 Days ML Program",
    date: "2024",
    desc: "Participant in GFG's structured ML sprint program. Built 21 machine learning projects covering classification, regression, NLP, and data analysis."
  },
  {
    title: "PMEC EE Department — Research Contributor",
    date: "2023–2024",
    desc: "Independent research on harmonic source identification in power systems using ML-based current signature analysis."
  }
];

export function Experience() {
  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Experience" icon={<ClockIcon />} />
      <PixelDivider />
      
      <div className="mt-8 ml-4 border-l-2 border-[var(--px-border)] pl-8 relative space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Pixel Dot */}
            <div className="absolute -left-[41px] top-1 w-4 h-4 bg-[var(--px-accent)] pixel-art" />
            
            <h3 className="text-xl font-bold font-mono text-[var(--px-text)] mb-1">{exp.title}</h3>
            <span className="inline-block text-[var(--px-accent2)] font-mono text-sm mb-4">{exp.date}</span>
            <p className="text-[var(--px-muted)] leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
