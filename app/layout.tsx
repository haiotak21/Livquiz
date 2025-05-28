import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import FloatingHelpButton from "@/components/ui/floating-help-button";

export const metadata: Metadata = {
  title: 'LivQuiz',
  description: 'Make learning interactive, engaging, and accessible for everyone',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <FloatingHelpButton />
      </body>
    </html>
  )
}
