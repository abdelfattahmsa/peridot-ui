'use strict';

var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/lib/utils.ts
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var Button = react.forwardRef(
  ({ variant = "default", size = "default", className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        ref,
        className: cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm": variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "bg-destructive text-white hover:bg-destructive/90 shadow-sm": variant === "destructive"
          },
          {
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-4 text-sm": size === "default",
            "h-12 px-6 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon"
          },
          className
        ),
        ...props
      }
    );
  }
);
Button.displayName = "Button";
var Card = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        "rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className
      ),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    {
      ref,
      className: cn("font-serif text-xl font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
var CardDescription = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
var GemCard = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn("gem-card rounded-2xl", className),
      ...props
    }
  )
);
GemCard.displayName = "GemCard";
function Badge({ variant = "default", className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "border border-border text-foreground": variant === "outline",
          "bg-destructive text-white": variant === "destructive"
        },
        className
      ),
      ...props
    }
  );
}
var Input = react.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      type,
      ref,
      className: cn(
        "flex h-10 w-full rounded-md border border-border bg-surface-elevated px-3 py-2",
        "text-sm text-foreground placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-colors",
        className
      ),
      ...props
    }
  )
);
Input.displayName = "Input";
var Label = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "label",
    {
      ref,
      className: cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      ),
      ...props
    }
  )
);
Label.displayName = "Label";
var Separator = react.forwardRef(
  ({ orientation = "horizontal", className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "hr",
    {
      ref,
      className: cn(
        "shrink-0 border-none bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = "Separator";
var Section = react.forwardRef(
  ({ as: Tag = "section", className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Tag,
    {
      ref,
      className: cn("section-padding px-6", className),
      ...props
    }
  )
);
Section.displayName = "Section";
var Container = react.forwardRef(
  ({ size = "default", className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ref,
      className: cn(
        "mx-auto w-full",
        {
          "max-w-7xl px-6 lg:px-12": size === "default",
          "max-w-3xl px-6": size === "narrow",
          "max-w-screen-2xl px-6 lg:px-12": size === "wide"
        },
        className
      ),
      ...props
    }
  )
);
Container.displayName = "Container";
var sizeClasses = {
  xs: "text-lg font-semibold",
  sm: "text-xl font-semibold",
  md: "text-2xl font-semibold tracking-tight",
  lg: "text-3xl font-semibold tracking-tight",
  xl: "text-4xl font-bold tracking-tight",
  "2xl": "text-5xl font-bold tracking-tight",
  "3xl": "text-6xl font-bold tracking-tight"
};
var Heading = react.forwardRef(
  ({ as: Tag = "h2", size = "lg", className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Tag,
    {
      ref,
      className: cn("font-serif text-foreground", sizeClasses[size], className),
      ...props
    }
  )
);
Heading.displayName = "Heading";
var Text = react.forwardRef(
  ({ variant = "default", size = "base", as: Tag = "p", className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Tag,
    {
      ref,
      className: cn(
        {
          "text-foreground": variant === "default",
          "text-muted-foreground": variant === "muted",
          "text-lg text-muted-foreground leading-relaxed": variant === "lead"
        },
        {
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-lg": size === "lg"
        },
        className
      ),
      ...props
    }
  )
);
Text.displayName = "Text";
function NavLink({ active, variant = "default", className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      className: cn(
        "text-sm font-medium transition-colors",
        {
          "relative text-foreground after:absolute after:bottom-[-4px] after:inset-x-0 after:h-px after:bg-primary after:scale-x-100": variant === "default" && active,
          "relative text-muted-foreground hover:text-foreground after:absolute after:bottom-[-4px] after:inset-x-0 after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center": variant === "default" && !active,
          "rounded-full px-4 py-1.5 bg-primary/10 text-primary": variant === "pill" && active,
          "rounded-full px-4 py-1.5 text-muted-foreground hover:text-foreground hover:bg-accent": variant === "pill" && !active
        },
        className
      ),
      ...props
    }
  );
}
function FooterColumn({ title, links, className }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("space-y-3", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-xs font-semibold uppercase tracking-[0.15em] text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "space-y-2", children: links.map((link) => /* @__PURE__ */ jsxRuntime.jsx("li", { children: link.external ? /* @__PURE__ */ jsxRuntime.jsx(
      "a",
      {
        href: link.href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
        children: link.label
      }
    ) : /* @__PURE__ */ jsxRuntime.jsx(
      "a",
      {
        href: link.href,
        className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
        children: link.label
      }
    ) }, link.label)) })
  ] });
}

exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Container = Container;
exports.FooterColumn = FooterColumn;
exports.GemCard = GemCard;
exports.Heading = Heading;
exports.Input = Input;
exports.Label = Label;
exports.NavLink = NavLink;
exports.Section = Section;
exports.Separator = Separator;
exports.Text = Text;
exports.cn = cn;
