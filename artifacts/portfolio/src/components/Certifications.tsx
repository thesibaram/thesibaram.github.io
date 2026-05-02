import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";
import { PixelChip } from "./ui/PixelChip";

const SealIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="5" y="1" width="6" height="2" />
    <rect x="3" y="3" width="2" height="2" />
    <rect x="11" y="3" width="2" height="2" />
    <rect x="1" y="5" width="2" height="6" />
    <rect x="13" y="5" width="2" height="6" />
    <rect x="3" y="11" width="2" height="2" />
    <rect x="11" y="11" width="2" height="2" />
    <rect x="5" y="13" width="6" height="2" />
    <rect x="6" y="5" width="4" height="6" />
  </svg>
);

const certs = [
  { id: 1, status: "Completed" as const },
  { id: 2, status: "Completed" as const },
  { id: 3, status: "In Progress" as const },
  { id: 4, status: "Completed" as const },
];

export function Certifications() {
  return (
    <motion.section 
      id="certifications"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Certifications" icon={<SealIcon />} />
      <PixelDivider />
      
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {certs.map(cert => (
          <div key={cert.id} className="border border-[var(--px-border)] bg-[var(--px-surface)] p-6 pixel-hover flex flex-col gap-4">
            <div className="w-8 h-8 text-[var(--px-accent)]">
              <SealIcon />
            </div>
            <div>
              <h3 className="font-mono font-bold text-[var(--px-text)] text-lg mb-1">[ Certification Name ]</h3>
              <p className="text-[var(--px-muted)] text-sm mb-1">[ Issuer ]</p>
              <p className="text-[var(--px-muted)] font-mono text-xs">[ Month Year ]</p>
            </div>
            <div className="mt-auto pt-4">
              <PixelChip color={cert.status === "Completed" ? "#22C55E" : "#F59E0B"}>
                [{cert.status}]
              </PixelChip>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-[var(--px-muted)] font-mono text-sm mt-8">
        Tap a card to add your certification details
      </p>
    </motion.section>
  );
}
