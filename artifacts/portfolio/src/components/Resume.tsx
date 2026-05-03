import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";

const DocumentIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="3" y="1" width="8" height="14" />
    <rect x="11" y="3" width="2" height="12" />
    <rect x="5" y="3" width="4" height="2" fill="var(--px-surface)" />
    <rect x="5" y="7" width="6" height="2" fill="var(--px-surface)" />
    <rect x="5" y="11" width="4" height="2" fill="var(--px-surface)" />
  </svg>
);

export function Resume() {
  return (
    <motion.section 
      id="resume"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Resume" icon={<DocumentIcon />} />
      <PixelDivider />
      
      <div className="flex flex-col items-center justify-center mt-12 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 text-[var(--px-accent)] w-32 h-32"
        >
          <svg viewBox="0 0 32 40" fill="currentColor" className="w-full h-full pixel-art">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 0H20V8H28V40H4V0ZM22 2V6H26V2H22ZM8 12H24V14H8V12ZM8 18H24V20H8V18ZM8 24H18V26H8V24ZM8 30H20V32H8V30Z" />
          </svg>
        </motion.div>
        
        <a 
          href="https://drive.google.com/file/d/1gIDOSyr4AREiWYphSNtrWcClJyslWeVk/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 items-center justify-center border-2 border-[var(--px-accent)] bg-transparent text-[var(--px-accent)] font-mono px-8 text-lg pixel-hover uppercase font-bold"
          data-testid="btn-download-resume-large"
        >
          Download Resume PDF
        </a>
        
        <p className="mt-6 text-[var(--px-muted)] font-mono text-sm">
          Last updated: May 2026
        </p>
      </div>
    </motion.section>
  );
}
