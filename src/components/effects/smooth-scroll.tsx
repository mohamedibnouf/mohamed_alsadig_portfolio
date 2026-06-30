"use client";

import { useEffect } from "react";
import { useLiteMode } from "@/hooks/use-lite-mode";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lite = useLiteMode();

  useEffect(() => {
    if (lite) return;

    let rafId = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, [lite]);

  return <>{children}</>;
}
