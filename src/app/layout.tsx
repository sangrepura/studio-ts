import '@/styles/global.css'

import clsx from 'clsx'
import { type Metadata } from 'next'
import React from 'react'
import { Toaster } from 'sonner'

import { RootLayout } from '@/components/RootLayout'
import recoleta from '@/lib/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s - Coastal Sites',
    default:
      'Award winning developer studio and digital marketing agency based in Gulf Shores',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        recoleta.variable,
        'h-full text-pretty bg-sky-950 font-sans text-base antialiased',
      )}
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
        <Toaster />
      </body>
    </html>
  )
}
