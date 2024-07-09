import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "sh-inline-flex sh-items-center sh-justify-center sh-whitespace-nowrap sh-rounded-md sh-text-sm sh-font-medium sh-ring-offset-white sh-transition-colors focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-slate-950 focus-visible:sh-ring-offset-2 disabled:sh-pointer-events-none disabled:sh-opacity-50 dark:sh-ring-offset-slate-950 dark:focus-visible:sh-ring-slate-300",
  {
    variants: {
      variant: {
        default: "sh-bg-slate-900 sh-text-slate-50 hover:sh-bg-slate-900/90 dark:sh-bg-slate-50 dark:sh-text-slate-900 dark:hover:sh-bg-slate-50/90",
        destructive:
          "sh-bg-red-500 sh-text-slate-50 hover:sh-bg-red-500/90 dark:sh-bg-red-900 dark:sh-text-slate-50 dark:hover:sh-bg-red-900/90",
        outline:
          "sh-border sh-border-slate-200 sh-bg-white hover:sh-bg-slate-100 hover:sh-text-slate-900 dark:sh-border-slate-800 dark:sh-bg-slate-950 dark:hover:sh-bg-slate-800 dark:hover:sh-text-slate-50",
        secondary:
          "sh-bg-slate-100 sh-text-slate-900 hover:sh-bg-slate-100/80 dark:sh-bg-slate-800 dark:sh-text-slate-50 dark:hover:sh-bg-slate-800/80",
        ghost: "hover:sh-bg-slate-100 hover:sh-text-slate-900 dark:hover:sh-bg-slate-800 dark:hover:sh-text-slate-50",
        link: "sh-text-slate-900 sh-underline-offset-4 hover:sh-underline dark:sh-text-slate-50",
      },
      size: {
        default: "sh-h-10 sh-px-4 sh-py-2",
        sm: "sh-h-9 sh-rounded-md sh-px-3",
        lg: "sh-h-11 sh-rounded-md sh-px-8",
        icon: "sh-h-10 sh-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
