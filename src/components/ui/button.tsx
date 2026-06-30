import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110",
        secondary:
          "glass-card text-white hover:bg-card-hover",
        ghost: "text-text-muted hover:text-white hover:bg-white/5",
        outline:
          "border border-border text-white hover:bg-white/5 hover:border-accent/50",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, magnetic, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          magnetic && "magnetic-btn",
          className
        )}
        ref={ref}
        data-magnetic={magnetic ? "true" : undefined}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
