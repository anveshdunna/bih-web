"use client";

// Import necessary libraries and icons
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import IcClose24 from "@/assets/icons/Close24";
import { Button } from "./button";

// Dialog components
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

// DialogOverlay component using forwardRef
const DialogOverlay = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...otherProps}
    />
  );
});
DialogOverlay.displayName = "DialogOverlay";

// DialogContent component using forwardRef
const DialogContent = React.forwardRef((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid h-dvh w-full translate-x-[-50%] translate-y-[-50%] bg-surface shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] md:max-w-lg md:rounded-3xl",
          className,
        )}
        {...otherProps}
      >
        {children}

        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-2 text-icon md:left-auto md:right-2"
          >
            <IcClose24 />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = "DialogContent";

// Other Dialog components as functional components
const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

// DialogTitle component using forwardRef
const DialogTitle = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-body font-semibold", className)}
      {...otherProps}
    />
  );
});
DialogTitle.displayName = "DialogTitle";

// DialogDescription component using forwardRef
const DialogDescription = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn("text-muted-foreground text-sm", className)}
      {...otherProps}
    />
  );
});
DialogDescription.displayName = "DialogDescription";

// Export components
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
