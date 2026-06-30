import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
      {...props}
    >
      {label && (
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted md:text-xl">{subtitle}</p>
      )}
    </div>
  );
}
