import { forwardRef } from "react";
import { cn } from "../lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

const sizeClasses: Record<NonNullable<HeadingProps["size"]>, string> = {
  xs:  "text-lg font-semibold",
  sm:  "text-xl font-semibold",
  md:  "text-2xl font-semibold tracking-tight",
  lg:  "text-3xl font-semibold tracking-tight",
  xl:  "text-4xl font-bold tracking-tight",
  "2xl": "text-5xl font-bold tracking-tight",
  "3xl": "text-6xl font-bold tracking-tight",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = "h2", size = "lg", className, ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn("font-serif text-foreground", sizeClasses[size], className)}
      {...props}
    />
  )
);
Heading.displayName = "Heading";
