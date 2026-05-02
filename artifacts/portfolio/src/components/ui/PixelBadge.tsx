import React from "react";

interface PixelBadgeProps {
  category: "CV" | "ML" | "Web" | "Data" | "EE";
  className?: string;
}

const colorMap = {
  CV: "var(--px-accent)",
  ML: "var(--px-accent2)",
  Web: "#22C55E",
  Data: "#F59E0B",
  EE: "#F97316"
};

export function PixelBadge({ category, className = "" }: PixelBadgeProps) {
  return (
    <div 
      className={`flex items-center justify-center w-6 h-6 text-[10px] font-mono font-bold ${className}`}
      style={{ backgroundColor: colorMap[category], color: "#fff" }}
      title={category}
      data-testid={`pixel-badge-${category}`}
    >
      {category.slice(0, 2)}
    </div>
  );
}
