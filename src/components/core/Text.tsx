import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { createElement, HTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  variant?:
    | "Heading/Heading-1"
    | "Heading/Heading-2"
    | "Heading/Heading-3"
    | "Heading/Heading-4"
    | "Heading/Heading-5"
    | "Heading/Heading-6"
    | "Paragraph/Paragraph-1"
    | "Paragraph/Paragraph-2"
    | "Paragraph/Paragraph-3";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
}

export function Text({
  as = "p",
  variant = "Paragraph/Paragraph-3",
  className,
  ...props
}: Props) {
  return createElement(as, {
    className: cn(styleBy[variant], className),
    ...props,
  });
}

const styleBy: Record<Required<Props>["variant"], ClassValue> = {
  "Paragraph/Paragraph-1": `
    text-[18px]
    leading-[27px]
    font-caption
    text-7e7e7e
  `,

  "Paragraph/Paragraph-2": `
    text-[16px]
    leading-[24px]
    font-caption
    text-121212
    [&>span]:text-da5001
  `,

  "Paragraph/Paragraph-3": `
    text-[14px]
    leading-[21px]
    font-caption
    text-7e7e7e
  `,

  "Heading/Heading-1": `
    text-[52px]
    leading-[67.6px]
    font-bold
    text-1d1c19
    uppercase
    [&>span]:text-da5001
  `,

  "Heading/Heading-2": `
    text-[48px]
    leading-[72px]
    tracking-[0.01em]
    font-bold
    text-1d1c19
    uppercase
    [&>span]:text-da5001
  `,

  "Heading/Heading-3": `
    text-[32px]
    leading-[48px]
    tracking-[0.01em]
    font-bold
    text-121212
    [&>span]:text-589999
  `,

  "Heading/Heading-4": `
    text-[20px]
    leading-[30px]
    font-caption
    font-bold
    text-589999
  `,

  "Heading/Heading-5": `
    text-[16px]
    leading-[24px]
    font-caption
    font-bold
    text-121212
  `,

  "Heading/Heading-6": `
    text-[14px]
    leading-[21px]
    font-caption
    font-bold
    text-121212
  `,
};
