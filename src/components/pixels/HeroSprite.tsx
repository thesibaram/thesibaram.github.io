import React from "react";

export function HeroSprite({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`pixel-art ${className}`} 
      width="64" 
      height="96" 
      viewBox="0 0 16 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <rect x="6" y="2" width="4" height="4" fill="var(--px-accent)" />
      
      {/* Body */}
      <rect x="6" y="6" width="4" height="6" fill="var(--px-ink)" />
      
      {/* Left Arm */}
      <rect x="4" y="6" width="2" height="6" fill="var(--px-ink)" />
      
      {/* Right Arm */}
      <rect x="10" y="6" width="2" height="6" fill="var(--px-ink)" />
      
      {/* Left Leg */}
      <rect x="6" y="12" width="2" height="6" fill="var(--px-ink)" />
      
      {/* Right Leg */}
      <rect x="8" y="12" width="2" height="6" fill="var(--px-ink)" />
    </svg>
  );
}
