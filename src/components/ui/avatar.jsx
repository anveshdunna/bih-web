"use client";

import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full outline outline-1 -outline-offset-1 outline-grayA-6 font-display",
  {
    variants: {
      size: {
        default: "h-10 w-10 text-body",
        sm: "h-8 w-8 text-subheadline",
        md: "h-[4.5rem] w-[4.5rem] text-largetitle",
        lg: "h-36 w-36 text-[4.5rem]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Avatar = React.forwardRef(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, className }))}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex w-full items-center justify-center rounded-full bg-yellow-3 text-yellow-11",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
