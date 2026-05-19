"use client";

import { cn } from "../lib/utils";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  variant?: "default" | "pill";
}

export function NavLink({ active, variant = "default", className, ...props }: NavLinkProps) {
  return (
    <a
      className={cn(
        "text-sm font-medium transition-colors",
        {
          "relative text-foreground after:absolute after:bottom-[-4px] after:inset-x-0 after:h-px after:bg-primary after:scale-x-100":
            variant === "default" && active,
          "relative text-muted-foreground hover:text-foreground after:absolute after:bottom-[-4px] after:inset-x-0 after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center":
            variant === "default" && !active,
          "rounded-full px-4 py-1.5 bg-primary/10 text-primary": variant === "pill" && active,
          "rounded-full px-4 py-1.5 text-muted-foreground hover:text-foreground hover:bg-accent": variant === "pill" && !active,
        },
        className
      )}
      {...props}
    />
  );
}
