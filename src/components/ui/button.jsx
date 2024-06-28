import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-full transition font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-fill-brand text-text-inverse hover:bg-fill-brand-hover active:bg-fill-brand-active",
        secondary:
          "bg-fill text-text hover:bg-fill-hover active:bg-fill-active",
        critical:
          "bg-fill-critical text-text-contrast hover:bg-fill-critical-hover active:bg-fill-critical-active",
        ghost:
          "bg-fill-secondary hover:bg-fill-secondary-hover active:bg-fill-secondary-active text-text",
        outline:
          "bg-fill-secondary hover:bg-fill-secondary-hover active:bg-fill-secondary-active text-text border-border border",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        md: "h-8 px-3 text-subheadline",
        sm: "h-7 px-3 text-sm",
        lg: "h-10 px-8 text-subheadline",
        icon: "h-8 w-8 text-icon-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
