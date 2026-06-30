"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLiteMode } from "@/hooks/use-lite-mode";

export function LoadingScreen() {
  const lite = useLiteMode();
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"name" | "particles" | "done">("name");

  useEffect(() => {
    if (lite) {
      const timer = setTimeout(() => {
        setPhase("done");
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }

    const nameTimer = setTimeout(() => setPhase("particles"), 1800);
    const particleTimer = setTimeout(() => {
      setPhase("done");
      setIsLoading(false);
    }, 3200);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(particleTimer);
    };
  }, [lite]);

  if (lite && !isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: lite ? 0.3 : 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative text-center">
            <motion.p
              className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Portfolio
            </motion.p>
            <h1 className="font-display text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Mohamed Al-Sadig
            </h1>

            {!lite && phase === "particles" && (
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-accent"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: (Math.random() - 0.5) * 200,
                      y: (Math.random() - 0.5) * 200,
                      opacity: 0,
                    }}
                    transition={{ duration: 1, delay: i * 0.04 }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
