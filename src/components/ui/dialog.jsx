"use client";

// Import necessary libraries and icons
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

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
        <DialogClose className="focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground ring-offset-background absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <Cross2Icon className="h-4 w-4" />
          <span className="sr-only">Close</span>
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
