"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLiteMode } from "@/hooks/use-lite-mode";

export function HeroPortrait() {
  const lite = useLiteMode();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: lite ? 16 : 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: lite ? 0.15 : 4,
        duration: lite ? 0.5 : 1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-[380px] xl:max-w-[420px]"
    >
      {/* Glow */}
      <div
        className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl sm:-inset-6 sm:rounded-[2.5rem]"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.15) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Ring accent */}
      <div
        className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-accent/40 via-white/10 to-accent-secondary/40 sm:rounded-[2rem]"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0B1220] shadow-2xl shadow-accent/10 sm:rounded-[2rem]">
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent z-10 pointer-events-none" />

        <Image
          src="/images/hero-portrait.png"
          alt="Mohamed Al-Sadig Ibnouf — Software Engineer"
          width={840}
          height={1050}
          priority
          className="h-auto w-full object-cover object-top"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 420px"
        />
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: lite ? 0 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: lite ? 0.4 : 4.6, duration: 0.6 }}
        className="absolute -bottom-3 start-4 z-20 glass-card rounded-full px-4 py-2 sm:-bottom-4 sm:start-6 sm:px-5 sm:py-2.5"
      >
        <p className="text-xs font-medium text-white sm:text-sm">
          Mohamed Al-Sadig
        </p>
        <p className="text-[10px] text-accent sm:text-xs">Software Engineer</p>
      </motion.div>

      {!lite && (
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -end-3 z-20 hidden h-14 w-14 rounded-2xl border border-accent/20 bg-accent/10 backdrop-blur-sm sm:block"
          aria-hidden
        />
      )}
    </motion.div>
  );
}
