"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function EasterEgg() {
  const [activated, setActivated] = useState(false);
  const [sequence, setSequence] = useState("");

  useEffect(() => {
    const konami = "build";

    const handleKeyDown = (e: KeyboardEvent) => {
      const next = (sequence + e.key).slice(-konami.length);
      setSequence(next);
      if (next === konami) {
        setActivated(true);
        setTimeout(() => setActivated(false), 3000);
        setSequence("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequence]);

  if (!activated) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9997] flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div className="glass-card max-w-md p-8 text-center">
        <p className="text-4xl">🚀</p>
        <h3 className="mt-4 font-display text-2xl font-bold text-white">
          You found the easter egg!
        </h3>
        <p className="mt-2 text-text-muted">
          Builders recognize builders. Let&apos;s create something amazing together.
        </p>
      </div>
    </motion.div>
  );
}
