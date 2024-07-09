import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "sh-inline-flex sh-items-center sh-justify-center sh-rounded-md sh-text-sm sh-font-medium sh-ring-offset-white sh-transition-colors hover:sh-bg-slate-100 hover:sh-text-slate-500 focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-slate-950 focus-visible:sh-ring-offset-2 disabled:sh-pointer-events-none disabled:sh-opacity-50 data-[state=on]:sh-bg-slate-100 data-[state=on]:sh-text-slate-900 dark:sh-ring-offset-slate-950 dark:hover:sh-bg-slate-800 dark:hover:sh-text-slate-400 dark:focus-visible:sh-ring-slate-300 dark:data-[state=on]:sh-bg-slate-800 dark:data-[state=on]:sh-text-slate-50",
  {
    variants: {
      variant: {
        default: "sh-bg-transparent",
        outline:
          "sh-border sh-border-slate-200 sh-bg-transparent hover:sh-bg-slate-100 hover:sh-text-slate-900 dark:sh-border-slate-800 dark:hover:sh-bg-slate-800 dark:hover:sh-text-slate-50",
      },
      size: {
        default: "sh-h-10 sh-px-3",
        sm: "sh-h-9 sh-px-2.5",
        lg: "sh-h-11 sh-px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
