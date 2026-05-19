import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "default", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full",
        {
          "max-w-7xl px-6 lg:px-12": size === "default",
          "max-w-3xl px-6": size === "narrow",
          "max-w-screen-2xl px-6 lg:px-12": size === "wide",
        },
        className
      )}
      {...props}
    />
  )
);
Container.displayName = "Container";
