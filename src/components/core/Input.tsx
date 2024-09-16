import { cn } from "@/lib/utils";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: JSX.Element;
}

export function Input({ icon, className, ...props }: Props) {
  return icon ? (
    <div className="relative grid">
      <div className="absolute z-10 top-1/2 left-4 -translate-y-1/2">
        {icon}
      </div>
      <input
        className={cn(
          "p-4 h-[56px] border border-[#DADADA] rounded-[6px] outline-none focus-visible:border-da5001 w-full",
          !!icon && "pl-12",
          className
        )}
        {...props}
      />
    </div>
  ) : (
    <input
      className={cn(
        "p-4 h-[56px] border border-[#DADADA] rounded-[6px] outline-none focus-visible:border-da5001 w-full",
        !!icon && "pl-12",
        className
      )}
      {...props}
    />
  );
}
