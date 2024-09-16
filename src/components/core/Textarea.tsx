import { cn } from "@/lib/utils";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        "p-4 h-[56px] border border-[#DADADA] rounded-[6px] resize-none outline-none focus-visible:border-da5001",
        className
      )}
      {...props}
    />
  );
}
