import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "sh-fixed sh-top-0 sh-z-[100] sh-flex sh-max-h-screen sh-w-full sh-flex-col-reverse sh-p-4 sm:sh-bottom-0 sm:sh-right-0 sm:sh-top-auto sm:sh-flex-col md:sh-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "sh-group sh-pointer-events-auto sh-relative sh-flex sh-w-full sh-items-center sh-justify-between sh-space-x-4 sh-overflow-hidden sh-rounded-md sh-border sh-border-slate-200 sh-p-6 sh-pr-8 sh-shadow-lg sh-transition-all data-[swipe=cancel]:sh-translate-x-0 data-[swipe=end]:sh-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:sh-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:sh-transition-none data-[state=open]:sh-animate-in data-[state=closed]:sh-animate-out data-[swipe=end]:sh-animate-out data-[state=closed]:sh-fade-out-80 data-[state=closed]:sh-slide-out-to-right-full data-[state=open]:sh-slide-in-from-top-full data-[state=open]:sm:sh-slide-in-from-bottom-full dark:sh-border-slate-800",
  {
    variants: {
      variant: {
        default: "sh-border sh-bg-white sh-text-slate-950 dark:sh-bg-slate-950 dark:sh-text-slate-50",
        destructive:
          "sh-destructive sh-group sh-border-red-500 sh-bg-red-500 sh-text-slate-50 dark:sh-border-red-900 dark:sh-bg-red-900 dark:sh-text-slate-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "sh-inline-flex sh-h-8 sh-shrink-0 sh-items-center sh-justify-center sh-rounded-md sh-border sh-border-slate-200 sh-bg-transparent sh-px-3 sh-text-sm sh-font-medium sh-ring-offset-white sh-transition-colors hover:sh-bg-slate-100 focus:sh-outline-none focus:sh-ring-2 focus:sh-ring-slate-950 focus:sh-ring-offset-2 disabled:sh-pointer-events-none disabled:sh-opacity-50 group-[.destructive]:sh-border-slate-100/40 group-[.destructive]:hover:sh-border-red-500/30 group-[.destructive]:hover:sh-bg-red-500 group-[.destructive]:hover:sh-text-slate-50 group-[.destructive]:focus:sh-ring-red-500 dark:sh-border-slate-800 dark:sh-ring-offset-slate-950 dark:hover:sh-bg-slate-800 dark:focus:sh-ring-slate-300 dark:group-[.destructive]:sh-border-slate-800/40 dark:group-[.destructive]:hover:sh-border-red-900/30 dark:group-[.destructive]:hover:sh-bg-red-900 dark:group-[.destructive]:hover:sh-text-slate-50 dark:group-[.destructive]:focus:sh-ring-red-900",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "sh-absolute sh-right-2 sh-top-2 sh-rounded-md sh-p-1 sh-text-slate-950/50 sh-opacity-0 sh-transition-opacity hover:sh-text-slate-950 focus:sh-opacity-100 focus:sh-outline-none focus:sh-ring-2 group-hover:sh-opacity-100 group-[.destructive]:sh-text-red-300 group-[.destructive]:hover:sh-text-red-50 group-[.destructive]:focus:sh-ring-red-400 group-[.destructive]:focus:sh-ring-offset-red-600 dark:sh-text-slate-50/50 dark:hover:sh-text-slate-50",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="sh-h-4 sh-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("sh-text-sm sh-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("sh-text-sm sh-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
