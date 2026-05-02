import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";
import { PixelChip } from "./ui/PixelChip";

const LightningIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="8" y="1" width="4" height="6" />
    <rect x="4" y="5" width="4" height="4" />
    <rect x="6" y="9" width="4" height="6" />
  </svg>
);

const skillCategories = [
  {
    name: "ML/DL",
    skills: ["TensorFlow", "Keras", "MobileNetV2", "Transfer Learning", "Grad-CAM"]
  },
  {
    name: "Computer Vision",
    skills: ["Image Classification", "Feature Extraction", "Data Augmentation"]
  },
  {
    name: "Languages",
    skills: ["Python", "JavaScript"]
  },
  {
    name: "Data Science",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"]
  },
  {
    name: "Dev Tools",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "DirectML", "WSL2"]
  },
  {
    name: "Web",
    skills: ["React", "Next.js", "Tailwind CSS"]
  }
];

export function Skills() {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Skills" icon={<LightningIcon />} />
      <PixelDivider />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {skillCategories.map((category, i) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-mono font-bold text-[var(--px-accent)] text-lg border-b border-[var(--px-border)] pb-2 inline-block max-w-max">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <PixelChip key={skill}>{skill}</PixelChip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
