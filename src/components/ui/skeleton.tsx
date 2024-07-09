import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("sh-animate-pulse sh-rounded-md sh-bg-slate-100 dark:sh-bg-slate-800", className)}
      {...props}
    />
  )
}

export { Skeleton }
