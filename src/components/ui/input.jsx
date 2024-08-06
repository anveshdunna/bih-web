import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "focus-visible:ring-ring input-border flex h-10 w-full rounded-xl bg-transparent px-3 py-2 text-bodyLg transition file:border-0 file:bg-transparent file:text-bodyLg file:font-semibold placeholder:text-fg-tertiary focus-visible:ring-2 focus-visible:ring-offset-[3px] focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
