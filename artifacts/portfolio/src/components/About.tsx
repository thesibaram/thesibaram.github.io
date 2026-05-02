import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";

const PersonIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="5" y="2" width="6" height="6" />
    <rect x="3" y="9" width="10" height="7" />
  </svg>
);

export function About() {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="About" icon={<PersonIcon />} />
      <PixelDivider />
      
      <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
        <div className="text-[var(--px-text)] text-lg leading-relaxed space-y-6">
          <p>
            I study Electrical Engineering but spend most of my time training neural networks on my RTX 3050 Ti. Currently debugging a Grad-CAM visualization issue on the Flowers102 dataset — the kind of bug that teaches you more than any tutorial. From Sanakholi, Ganjam, Odisha. SIH 2024 National Finalist.
          </p>
        </div>

        <div className="border border-[var(--px-border)] bg-[var(--px-surface)] p-6 font-mono text-sm w-full overflow-x-auto pixel-hover">
          <pre className="text-[var(--px-text)] leading-[1.8] min-w-max">
{`┌─ SIBARAM.EXE ──────────────┐
│ LOCATION  Berhampur, Odisha │
│ BRANCH    Electrical Eng.   │
│ FOCUS     ML + CV           │
│ STATUS    Internship hunting│
│ CURR BUG  Grad-CAM graph    │
│ HP        `}
<span className="text-[var(--px-accent)]">██████████</span>{` 99/100 │
└────────────────────────────┘`}
          </pre>
        </div>
      </div>
    </motion.section>
  );
}
