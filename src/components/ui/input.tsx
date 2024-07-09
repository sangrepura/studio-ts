import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "sh-flex sh-h-10 sh-w-full sh-rounded-md sh-border sh-border-slate-200 sh-bg-white sh-px-3 sh-py-2 sh-text-sm sh-ring-offset-white file:sh-border-0 file:sh-bg-transparent file:sh-text-sm file:sh-font-medium placeholder:sh-text-slate-500 focus-visible:sh-outline-none focus-visible:sh-ring-2 focus-visible:sh-ring-slate-950 focus-visible:sh-ring-offset-2 disabled:sh-cursor-not-allowed disabled:sh-opacity-50 dark:sh-border-slate-800 dark:sh-bg-slate-950 dark:sh-ring-offset-slate-950 dark:placeholder:sh-text-slate-400 dark:focus-visible:sh-ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
