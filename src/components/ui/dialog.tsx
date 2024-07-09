import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "sh-fixed sh-inset-0 sh-z-50 sh-bg-black/80 sh- data-[state=open]:sh-animate-in data-[state=closed]:sh-animate-out data-[state=closed]:sh-fade-out-0 data-[state=open]:sh-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "sh-fixed sh-left-[50%] sh-top-[50%] sh-z-50 sh-grid sh-w-full sh-max-w-lg sh-translate-x-[-50%] sh-translate-y-[-50%] sh-gap-4 sh-border sh-border-slate-200 sh-bg-white sh-p-6 sh-shadow-lg sh-duration-200 data-[state=open]:sh-animate-in data-[state=closed]:sh-animate-out data-[state=closed]:sh-fade-out-0 data-[state=open]:sh-fade-in-0 data-[state=closed]:sh-zoom-out-95 data-[state=open]:sh-zoom-in-95 data-[state=closed]:sh-slide-out-to-left-1/2 data-[state=closed]:sh-slide-out-to-top-[48%] data-[state=open]:sh-slide-in-from-left-1/2 data-[state=open]:sh-slide-in-from-top-[48%] sm:sh-rounded-lg dark:sh-border-slate-800 dark:sh-bg-slate-950",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="sh-absolute sh-right-4 sh-top-4 sh-rounded-sm sh-opacity-70 sh-ring-offset-white sh-transition-opacity hover:sh-opacity-100 focus:sh-outline-none focus:sh-ring-2 focus:sh-ring-slate-950 focus:sh-ring-offset-2 disabled:sh-pointer-events-none data-[state=open]:sh-bg-slate-100 data-[state=open]:sh-text-slate-500 dark:sh-ring-offset-slate-950 dark:focus:sh-ring-slate-300 dark:data-[state=open]:sh-bg-slate-800 dark:data-[state=open]:sh-text-slate-400">
        <X className="sh-h-4 sh-w-4" />
        <span className="sh-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sh-flex sh-flex-col sh-space-y-1.5 sh-text-center sm:sh-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "sh-flex sh-flex-col-reverse sm:sh-flex-row sm:sh-justify-end sm:sh-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "sh-text-lg sh-font-semibold sh-leading-none sh-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("sh-text-sm sh-text-slate-500 dark:sh-text-slate-400", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
