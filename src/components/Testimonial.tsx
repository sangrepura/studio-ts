import clsx from 'clsx'
import React, { type ReactElement } from 'react'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { name: string; logo: ReactElement }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-sky-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 size-full fill-sky-100 stroke-sky-950/5
          [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote
              className="font-display relative text-3xl font-medium tracking-tight text-sky-950
                sm:text-4xl"
            >
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              {client.logo}
              <cite className="mt-2 block text-base text-neutral-600">
                {client.name}
              </cite>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
