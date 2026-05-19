import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ as: Tag = "section", className, ...props }, ref) => (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("section-padding px-6", className)}
      {...props}
    />
  )
);
Section.displayName = "Section";
