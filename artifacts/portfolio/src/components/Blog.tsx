import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";
import { PixelCard } from "./ui/PixelCard";
import { PixelChip } from "./ui/PixelChip";

const PencilIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="11" y="1" width="4" height="4" />
    <rect x="9" y="3" width="2" height="2" />
    <rect x="7" y="5" width="2" height="2" />
    <rect x="5" y="7" width="2" height="2" />
    <rect x="3" y="9" width="2" height="2" />
    <rect x="1" y="11" width="2" height="4" />
    <rect x="3" y="13" width="2" height="2" />
  </svg>
);

const posts = [
  {
    id: "b1",
    title: "Fixing Grad-CAM on a Functional API Model",
    date: "May 2025",
    status: "In Progress",
    preview: "Tracking down a gradient tape disconnection bug that breaks Grad-CAM visualization with TensorFlow's Functional API.",
    tags: ["TensorFlow", "Grad-CAM", "Debugging", "Python"],
    expanded: "Coming soon — this is actively being debugged. The issue is that when using the Functional API instead of Sequential, the gradient computation graph can disconnect, causing Grad-CAM to produce blank or incorrect heatmaps. Working through it layer by layer."
  },
  {
    id: "b2",
    title: "Transfer Learning on Intel Image Dataset — What Actually Worked",
    date: "April 2025",
    preview: "Not every trick in the tutorial works. Here's what actually improved accuracy on the Intel Image Classification dataset.",
    tags: ["MobileNetV2", "Transfer Learning", "TensorFlow", "CNN"],
    expanded: "After getting baseline accuracy with frozen MobileNetV2 weights, the real gains came from strategic layer unfreezing, careful learning rate tuning with ReduceLROnPlateau, and heavier data augmentation than tutorials suggest. The fine-tuning phase is more sensitive than it looks."
  },
  {
    id: "b3",
    title: "Setting Up TensorFlow with DirectML on Windows",
    date: "March 2025",
    preview: "Getting TF working with AMD/NVIDIA GPU on Windows without WSL2 gymnastics — a step-by-step that actually works.",
    tags: ["DirectML", "TensorFlow", "Windows", "GPU"],
    expanded: "DirectML lets you use your Windows GPU with TensorFlow without the full WSL2 setup. The install order matters more than the docs suggest, and the version pinning is non-obvious. This is the guide I wish existed when I started."
  },
  {
    id: "b4",
    title: "SIH 2024: What We Built and What Broke",
    date: "December 2024",
    preview: "Honest account of what worked, what didn't, and what we learned at the SIH 2024 national finals.",
    tags: ["SIH2024", "Hackathon", "Team"],
    expanded: "We made it to the national finals with a project in the smart systems track. Two all-nighters, one broken API, and one presentation that somehow came together. Breakdown of our tech stack, what broke at the worst moment, and what I'd do differently."
  }
];

export function Blog() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <motion.section 
      id="blog"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Blog" icon={<PencilIcon />} />
      <PixelDivider />
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {posts.map(post => (
          <PixelCard 
            key={post.id}
            isOpen={openId === post.id}
            onToggle={() => setOpenId(prev => prev === post.id ? null : post.id)}
            collapsedContent={
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-mono font-bold text-[var(--px-text)] text-lg leading-tight">{post.title}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[var(--px-muted)]">{post.date}</span>
                  {post.status && <PixelChip color="#F59E0B" className="!px-1 !py-0 !text-[10px]">{post.status}</PixelChip>}
                </div>
                <p className="text-[var(--px-muted)] text-sm mt-2">{post.preview}</p>
              </div>
            }
            expandedContent={
              <div className="flex flex-col gap-4 pt-2">
                <div className="text-[var(--px-text)] leading-relaxed pb-2 border-b border-[var(--px-border)]">
                  {post.expanded}
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => <PixelChip key={tag}>{tag}</PixelChip>)}
                </div>
              </div>
            }
          />
        ))}
      </div>
    </motion.section>
  );
}
