import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "sh-peer sh-h-4 sh-w-4 sh-shrink-0 sh-rounded-sm sh-border sh-border-slate-200 sh-border-slate-900 sh-ring-offset-white focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-slate-950 focus-visible:sh-ring-offset-2 disabled:sh-cursor-not-allowed disabled:sh-opacity-50 data-[state=checked]:sh-bg-slate-900 data-[state=checked]:sh-text-slate-50 dark:sh-border-slate-800 dark:sh-border-slate-50 dark:sh-ring-offset-slate-950 dark:focus-visible:sh-ring-slate-300 dark:data-[state=checked]:sh-bg-slate-50 dark:data-[state=checked]:sh-text-slate-900",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("sh-flex sh-items-center sh-justify-center sh-text-current")}
    >
      <Check className="sh-h-4 sh-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
