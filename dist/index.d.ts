import { ClassValue } from 'clsx';
import * as react from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare function cn(...inputs: ClassValue[]): string;

type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "destructive";
type ButtonSize = "sm" | "default" | "lg" | "icon";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const Card: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardHeader: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardTitle: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardFooter: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

/**
 * GemCard — the PDS gem-cut card with gradient border shimmer.
 * Uses the gem-card CSS utility which must be present via tokens.css.
 */
declare const GemCard: react.ForwardRefExoticComponent<react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

type BadgeVariant = "default" | "secondary" | "outline" | "destructive";
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}
declare function Badge({ variant, className, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const Label: react.ForwardRefExoticComponent<LabelProps & react.RefAttributes<HTMLLabelElement>>;

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
    orientation?: "horizontal" | "vertical";
}
declare const Separator: react.ForwardRefExoticComponent<SeparatorProps & react.RefAttributes<HTMLHRElement>>;

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    as?: "section" | "div" | "article";
}
declare const Section: react.ForwardRefExoticComponent<SectionProps & react.RefAttributes<HTMLElement>>;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "default" | "narrow" | "wide";
}
declare const Container: react.ForwardRefExoticComponent<ContainerProps & react.RefAttributes<HTMLDivElement>>;

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: HeadingLevel;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}
declare const Heading: react.ForwardRefExoticComponent<HeadingProps & react.RefAttributes<HTMLHeadingElement>>;

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: "default" | "muted" | "lead";
    size?: "sm" | "base" | "lg";
    as?: "p" | "span" | "div";
}
declare const Text: react.ForwardRefExoticComponent<TextProps & react.RefAttributes<HTMLParagraphElement>>;

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    variant?: "default" | "pill";
}
declare function NavLink({ active, variant, className, ...props }: NavLinkProps): react_jsx_runtime.JSX.Element;

interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}
interface FooterColumnProps {
    title: string;
    links: FooterLink[];
    className?: string;
}
declare function FooterColumn({ title, links, className }: FooterColumnProps): react_jsx_runtime.JSX.Element;

export { Badge, type BadgeProps, type BadgeVariant, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Container, type ContainerProps, FooterColumn, type FooterColumnProps, type FooterLink, GemCard, Heading, type HeadingProps, Input, type InputProps, Label, type LabelProps, NavLink, type NavLinkProps, Section, type SectionProps, Separator, type SeparatorProps, Text, type TextProps, cn };
