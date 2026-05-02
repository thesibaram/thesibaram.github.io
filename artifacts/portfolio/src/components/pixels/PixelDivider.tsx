import React from "react";

export function PixelDivider() {
  return (
    <div className="flex items-center gap-2 py-8 opacity-20 justify-center">
      {[...Array(8)].map((_, i) => (
        <svg key={i} width="4" height="4" className="pixel-art" viewBox="0 0 4 4">
          <rect width="4" height="4" fill="var(--px-text)" />
        </svg>
      ))}
    </div>
  );
}
