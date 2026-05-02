import React from "react";

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      {icon && <div className="text-[var(--px-accent)] w-8 h-8 flex-shrink-0">{icon}</div>}
      <h2 className="text-3xl font-mono font-bold text-[var(--px-text)]">{title}</h2>
    </div>
  );
}
