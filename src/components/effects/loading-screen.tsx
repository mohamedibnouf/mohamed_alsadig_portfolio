"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState<"name" | "particles" | "done">("name");

  useEffect(() => {
    const nameTimer = setTimeout(() => setPhase("particles"), 1800);
    const particleTimer = setTimeout(() => {
      setPhase("done");
      setIsLoading(false);
    }, 3200);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(particleTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-primary"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              {phase === "name" && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="text-center"
                >
                  <motion.p
                    className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-text-muted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Portfolio
                  </motion.p>
                  <h1 className="font-display text-3xl font-bold text-white md:text-5xl">
                    Mohamed Al-Sadig
                  </h1>
                  <motion.div
                    className="mx-auto mt-6 h-px w-0 bg-gradient-to-r from-transparent via-accent to-transparent"
                    animate={{ width: "200px" }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </motion.div>
              )}

              {phase === "particles" && (
                <motion.div
                  key="particles"
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-1 w-1 rounded-full bg-accent"
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{
                        x: (Math.random() - 0.5) * 300,
                        y: (Math.random() - 0.5) * 300,
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.03,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            className="absolute bottom-12 left-1/2 h-1 -translate-x-1/2 overflow-hidden rounded-full bg-white/5"
            style={{ width: 120 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
