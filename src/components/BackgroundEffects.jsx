"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Lightly smooth or update position
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Top Ambient Violet Orb */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-900/20 blur-[160px] animate-pulse-glow" />

      {/* Left Deep Purple Glow */}
      <div className="absolute top-[35%] -left-48 w-[550px] h-[550px] rounded-full bg-purple-950/25 blur-[180px]" />

      {/* Right Neon Violet Glow */}
      <div className="absolute top-[65%] -right-48 w-[600px] h-[600px] rounded-full bg-violet-950/25 blur-[180px]" />

      {/* Interactive Cursor Spotlight (subtle flashlight effect) */}
      <div
        className="hidden md:block absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-100 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.07) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
