import clsx from 'clsx'
import React from 'react'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function SectionIntro({
  title,
  eyebrow,
  children,
  invert = false,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Container>,
  'title' | 'children'
> & {
  title: string
  eyebrow?: string
  children?: React.ReactNode
  invert?: boolean
}) {
  return (
    <Container {...props}>
      <FadeIn className="">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  'mb-6 block text-2xl font-semibold tracking-wide md:text-3xl lg:text-4xl xl:text-5xl',
                  invert ? 'text-white' : 'text-sky-950',
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'mb-6 block text-balance text-xl font-semibold tracking-wide md:text-2xl lg:text-3xl xl:text-4xl ',
              invert ? 'text-white' : 'text-',
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              'mt-6 text-balance text-lg text-xl font-normal leading-snug tracking-wide md:text-xl lg:text-2xl xl:text-3xl',
              invert ? 'text-white' : 'text-sky-800',
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}
