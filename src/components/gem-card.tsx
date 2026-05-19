import { forwardRef } from "react";
import { cn } from "../lib/utils";

/**
 * GemCard — the PDS gem-cut card with gradient border shimmer.
 * Uses the gem-card CSS utility which must be present via tokens.css.
 */
export const GemCard = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("gem-card rounded-2xl", className)}
      {...props}
    />
  )
);
GemCard.displayName = "GemCard";
