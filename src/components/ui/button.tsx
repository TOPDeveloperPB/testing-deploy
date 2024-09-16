import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md  text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-white rounded-full text-base font-bold hover:bg-opacity-70 px-4",
        destructive:
          "bg-white border-secondary border-[1px] text-secondary text-base px-4 font-bold rounded-full hover:bg-secondary hover:text-white",
        outline:
          "border border-[#DA4F00] text-[#DA4F00] hover:bg-[#DA4F00] px-4 hover:text-white rounded-full text-base font-bold duration-200",
        secondary: "bg-[#0e7d7d] text-white w-full px-4",
        ghost: "hover:bg-accent hover:text-accent-foreground px-4",
        link: "text-secondary text-base font-bold p-0 m-0",
        primary:
          "hover:bg-[#E6845C] bg-[#DA4F00] text-white px-4 rounded-full text-white text-base font-bold duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-12 w-full sm:w-max px-7 md:min-w-[172px]",
        md: "h-[50px] w-full md:w-max  md:min-w-[172px]",
        xs: "h-12 w-full lg:w-max sm:min-w-44",
        lg: "h-[56px] min-w-[172px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, icon, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
