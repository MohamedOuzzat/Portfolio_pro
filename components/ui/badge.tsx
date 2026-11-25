import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-medium font-mono transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary-500/30 bg-primary-500/10 text-primary-400",
        violet:
          "border-violet-500/30 bg-violet-500/10 text-violet-400",
        aqua: "border-aqua-400/30 bg-aqua-400/10 text-aqua-400",
        outline: "border-line bg-overlay text-mist-400",
        surface: "border-line bg-ink-800/60 text-mist-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
