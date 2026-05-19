import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "muted" | "lead";
  size?: "sm" | "base" | "lg";
  as?: "p" | "span" | "div";
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = "default", size = "base", as: Tag = "p", className, ...props }, ref) => (
    <Tag
      ref={ref as React.Ref<HTMLParagraphElement>}
      className={cn(
        {
          "text-foreground": variant === "default",
          "text-muted-foreground": variant === "muted",
          "text-lg text-muted-foreground leading-relaxed": variant === "lead",
        },
        {
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg",
        },
        className
      )}
      {...props}
    />
  )
);
Text.displayName = "Text";
