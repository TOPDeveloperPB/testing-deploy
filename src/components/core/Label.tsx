import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { Text } from "./Text";
import { cn } from "@/lib/utils";

interface Props
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  text: string;
}

export function Label({ text, children, className, ...props }: Props) {
  return (
    <label className={cn("grid gap-0.5", className)} {...props}>
      <Text variant="Heading/Heading-5" className="text-121212">
        {text}
      </Text>
      {children}
    </label>
  );
}
