import React from "react";

interface PixelChipProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export function PixelChip({ children, color, className = "" }: PixelChipProps) {
  return (
    <span 
      className={`inline-block px-2 py-1 text-xs font-mono border border-[var(--px-border)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[var(--px-accent)]/15 ${className}`}
      style={{ color: color || "var(--px-text)" }}
      data-testid={`pixel-chip-${typeof children === 'string' ? children.replace(/\s+/g, '-').toLowerCase() : 'chip'}`}
    >
      {children}
    </span>
  );
}
