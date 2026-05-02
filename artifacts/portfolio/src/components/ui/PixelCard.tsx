import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface PixelCardProps {
  collapsedContent: React.ReactNode;
  expandedContent: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function PixelCard({ collapsedContent, expandedContent, isOpen, onToggle }: PixelCardProps) {
  return (
    <div className="border border-[var(--px-border)] bg-[var(--px-surface)] pixel-hover">
      <div 
        className="p-4 cursor-pointer flex items-start justify-between gap-4"
        onClick={onToggle}
        data-testid="pixel-card-header"
      >
        <div className="flex-1">{collapsedContent}</div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1 flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[var(--px-muted)]" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-[var(--px-border)] mt-2">
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
