import './globals.css'
import React from 'react'
import TawkToChat from '@/components/TawkToChat'
import TawkErrorBoundary from '@/components/TawkErrorBoundary'
import TawkErrorSuppressor from '@/components/TawkErrorSuppressor'

export const metadata = {
  title: 'LivQuiz',
  description: 'Make learning interactive, engaging, and accessible for everyone',
  generator: 'Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased pb-16 md:pb-0">
        {children}
        <TawkErrorBoundary>
          <TawkToChat />
        </TawkErrorBoundary>
        <TawkErrorSuppressor />
      </body>
    </html>
  )
}