import '@/styles/global.css'

import { type Metadata } from 'next'
import React from 'react'

import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: {
    template: '%s - Coastal Sites',
    default:
      'Award winning developer studio and digital marketing agency based in Gulf Shores',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-sky-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
