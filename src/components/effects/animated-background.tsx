"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function Particle({ index }: { index: number }) {
  const size = 1 + (index % 3);
  const left = `${(index * 7.3) % 100}%`;
  const top = `${(index * 11.7) % 100}%`;
  const duration = 15 + (index % 10);
  const delay = (index % 20) * 0.5;

  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{ width: size, height: size, left, top }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.5, 0.1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const gradientX = useTransform(mouseX, [0, 1], ["30%", "70%"]);
  const gradientY = useTransform(mouseY, [0, 1], ["20%", "80%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />

      <motion.div
        className="absolute h-[280px] w-[280px] rounded-full opacity-20 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[100px] md:h-[600px] md:w-[600px] md:blur-[120px]"
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
          left: gradientX,
          top: gradientY,
          x: "-50%",
          y: "-50%",
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 h-[200px] w-[200px] rounded-full opacity-15 blur-[60px] sm:h-[350px] sm:w-[350px] sm:blur-[80px] md:h-[500px] md:w-[500px] md:blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full opacity-10 blur-[80px]"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 grid-overlay opacity-50" />

      {Array.from({ length: 40 }).map((_, i) => (
        <Particle key={i} index={i} />
      ))}

      <div className="absolute top-[15%] right-[10%] hidden h-20 w-20 animate-float rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm sm:block sm:h-32 sm:w-32" />
      <div
        className="absolute bottom-[20%] left-[8%] hidden h-16 w-16 animate-float rounded-full border border-accent/10 bg-accent/5 sm:block sm:h-24 sm:w-24"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-[60%] right-[25%] hidden h-12 w-12 animate-float border border-white/5 sm:block sm:h-16 sm:w-16"
        style={{ animationDelay: "4s", transform: "rotate(45deg)" }}
      />
    </div>
  );
}
