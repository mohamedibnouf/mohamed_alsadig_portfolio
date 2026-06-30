"use client";

import { useEffect, useState } from "react";
import { shouldUseLiteMode } from "@/lib/device";

export function useLiteMode(): boolean {
  const [lite, setLite] = useState(() => {
    if (typeof window === "undefined") return true;
    return shouldUseLiteMode();
  });

  useEffect(() => {
    const update = () => setLite(shouldUseLiteMode());

    update();

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const widthQuery = window.matchMedia("(max-width: 767px)");

    motionQuery.addEventListener("change", update);
    widthQuery.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      motionQuery.removeEventListener("change", update);
      widthQuery.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return lite;
}
