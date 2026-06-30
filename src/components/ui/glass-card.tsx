import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  className,
  hover = true,
  glow = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-4 sm:rounded-2xl sm:p-6",
        hover &&
          "transition-all duration-500 hover:border-white/15 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1",
        glow && "shadow-lg shadow-accent/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
