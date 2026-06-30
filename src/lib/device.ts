export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function isIOS(): boolean {
  if (typeof window === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Lite mode: disable WebGL, Lenis, heavy blur & infinite animations (fixes iOS Safari crashes). */
export function shouldUseLiteMode(): boolean {
  if (typeof window === "undefined") return true;
  return (
    isTouchDevice() ||
    isIOS() ||
    prefersReducedMotion() ||
    window.innerWidth < 768
  );
}
