import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function PageContainer({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("page-container", className)} {...props}>
      {children}
    </div>
  );
}
