import { cn } from "../lib/utils";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export function FooterColumn({ title, links, className }: FooterColumnProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
