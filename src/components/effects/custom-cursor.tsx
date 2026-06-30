"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const trailY = useSpring(cursorY, { stiffness: 500, damping: 28 });
  const isVisible = useRef(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible.current) isVisible.current = true;
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const magneticElements = document.querySelectorAll("[data-magnetic='true']");

    const handleMagnetic = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const resetMagnetic = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "translate(0, 0)";
    };

    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", handleMagnetic);
      el.addEventListener("mouseleave", resetMagnetic);
    });

    return () => {
      magneticElements.forEach((el) => {
        el.removeEventListener("mousemove", handleMagnetic);
        el.removeEventListener("mouseleave", resetMagnetic);
      });
    };
  }, []);

  if (typeof window !== "undefined") {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 md:block"
        style={{ x: trailX, y: trailY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-lg shadow-accent/50 md:block"
        style={{ x: cursorX, y: cursorY }}
      />
    </>
  );
}
