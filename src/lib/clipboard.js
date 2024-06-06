import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-full transition font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gray-12 text-white shadow-button hover:bg-black hover:shadow-buttonHover active:shadow-buttonActive",
        destructive: "bg-red-10 text-white shadow-sm hover:bg-red-12",
        outline:
          "bg-white active:bg-gray-4 shadow-button hover:shadow-buttonHover active:shadow-buttonActive",
        ghost: "hover:bg-gray-3 active:bg-gray-4 text-gray-12",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-4 py-2 text-subheadline",
        sm: "h-7 px-3 text-sm",
        lg: "h-10 px-8 text-subheadline",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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

// boxShadow: {
//         button:
//           "0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
//         buttonHover:
//           "0 0 0 1px rgba(0, 0, 0, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
//         buttonActive:
//           "0 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 1px 0px rgba(0, 0, 0, 0.1) inset, 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
//         borderBottom: "0 1px 0 0 rgba(0, 0, 0, 0.3)",
//         borderRight: "1px 0 0 0 rgba(0, 0, 0, 0.3)",
//         borderTop: "0 -1px 0 0 rgba(0, 0, 0, 0.3)",
//         borderLeft: "-1px 0 0 0 rgba(0, 0, 0, 0.3)",
//       },
