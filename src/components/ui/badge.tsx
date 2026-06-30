import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-white/5 text-text-muted",
        variant === "accent" && "bg-accent/10 text-accent",
        variant === "outline" && "border border-border text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
