import clsx from 'clsx'
import React from 'react'

interface ContainerProps<T extends React.ElementType> {
  as?: T
  className?: string
  children: React.ReactNode
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  const Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto text-pretty">{children}</div>
    </Component>
  )
}
