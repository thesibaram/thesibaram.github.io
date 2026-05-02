import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";
import { PixelCard } from "./ui/PixelCard";
import { PixelBadge } from "./ui/PixelBadge";
import { PixelChip } from "./ui/PixelChip";

const FolderIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="2" y="3" width="6" height="2" />
    <rect x="2" y="5" width="12" height="8" />
  </svg>
);

const projects = [
  {
    id: "p1",
    title: "Intel Image Classification",
    category: "CV" as const,
    description: "CNN transfer learning with MobileNetV2 on Intel Image Classification dataset",
    tech: ["TensorFlow", "Keras", "MobileNetV2", "Python"],
    accuracy: "~94% acc",
    github: "https://github.com/thesibaram",
    expanded: "Built a robust image classifier using MobileNetV2 with transfer learning on TF/Keras. Applied fine-tuning on the Intel Image Classification dataset (6 categories: buildings, forest, glacier, mountain, sea, street). Achieved ~94% test accuracy by unfreezing top layers and using data augmentation."
  },
  {
    id: "p2",
    title: "Flowers102 Classification",
    category: "CV" as const,
    description: "102-category flower classification using functional API with DirectML acceleration",
    tech: ["TensorFlow", "Keras", "DirectML", "Python"],
    status: "In Progress",
    expanded: "Training a 102-class flower classifier using TensorFlow's Functional API with DirectML for Windows GPU acceleration on RTX 3050 Ti. Currently working through a Grad-CAM visualization bug where the gradient graph disconnects from the model — the kind of edge case that doesn't show up in tutorials."
  },
  {
    id: "p3",
    title: "PixelNest",
    category: "Web" as const,
    description: "Personal photo archive with a darkroom aesthetic",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/thesibaram",
    expanded: "A self-hosted personal photo archive built with vanilla HTML/CSS/JS. Designed around a darkroom aesthetic — dark backgrounds, minimal chrome, images as the focus. Built to store and browse personal photography without relying on third-party platforms."
  },
  {
    id: "p4",
    title: "Harmonic Source Identification",
    category: "EE" as const,
    description: "ML-based power system harmonic analysis using current signature patterns",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    expanded: "A research project at PMEC's EE Department analyzing harmonic distortion in power systems using machine learning. Uses current signature analysis to identify harmonic sources — a practical application of ML to electrical engineering problems."
  },
  {
    id: "p5",
    title: "GFG 21 Projects in 21 Days",
    category: "ML" as const,
    description: "Completed 21 ML projects in 21 days through GeeksforGeeks supervised program",
    tech: ["Scikit-learn", "Pandas", "Python", "Matplotlib"],
    expanded: "Completed the GeeksforGeeks 21 Projects in 21 Days Machine Learning Program — a structured sprint building ML projects covering classification, regression, clustering, NLP basics, and model evaluation. Built a strong foundation in Scikit-learn patterns and feature engineering."
  }
];

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Projects" icon={<FolderIcon />} />
      <PixelDivider />
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {projects.map(project => (
          <PixelCard 
            key={project.id}
            isOpen={openId === project.id}
            onToggle={() => toggle(project.id)}
            collapsedContent={
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <PixelBadge category={project.category} />
                  <h3 className="font-mono font-bold text-[var(--px-text)] text-lg">{project.title}</h3>
                </div>
                <p className="text-[var(--px-muted)] text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 items-center">
                  {project.tech.map(t => <PixelChip key={t}>{t}</PixelChip>)}
                  {project.accuracy && <PixelChip color="var(--px-accent)">{project.accuracy}</PixelChip>}
                  {project.status && <PixelChip color="#F59E0B">{project.status}</PixelChip>}
                </div>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 inline-flex items-center justify-center h-8 px-4 border border-[var(--px-border)] font-mono text-xs pixel-hover w-max"
                  >
                    GitHub
                  </a>
                )}
              </div>
            }
            expandedContent={
              <div className="text-[var(--px-text)] text-sm leading-relaxed pb-4">
                {project.expanded}
              </div>
            }
          />
        ))}
      </div>
    </motion.section>
  );
}
