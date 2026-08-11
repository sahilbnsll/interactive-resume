import type { Metadata } from 'next'

import './globals.css'

import { GeistSans } from 'geist/font'

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Sahil Bansal — Resume',
  description: 'Interactive resume of Sahil Bansal — DevOps & Cloud Engineer. Built with Next.js and Tailwind CSS.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
