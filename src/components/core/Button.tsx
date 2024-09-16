import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "filled" | "outlined" | "ghost" | "filledBlack" | "outlinedBlack";
}

const styleBy: Record<Required<Props>["variant"], ClassValue> = {
  filled: `
    bg-da5001
    text-ffffff
    px-4
    hover:opacity-70
  `,
  outlined: `
    border
    border-da5001
    text-da5001
    px-4
    hover:bg-da5001
    hover:text-ffffff
  `,
  ghost: `
    h-[50px]
    text-da5001
    hover:opacity-70
  `,
  filledBlack: `
    bg-1d1c19
    text-ffffff
    rounded-[8px]
    hover:opacity-70
  `,
  outlinedBlack: `
    border
    border-1d1c19
    text-1d1c19
    rounded-[8px]
    hover:opacity-70
  `,
};

export function Button({ variant = "filled", className, ...props }: Props) {
  return (
    <button
      className={cn(
        "text-[16px] leading-[24px] h-[50px] font-bold font-caption py-[13px] rounded-[40px] grid grid-flow-col items-center justify-center gap-2 transition-all active:scale-95",
        styleBy[variant],
        className
      )}
      {...props}
    />
  );
}
