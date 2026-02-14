import Script from 'next/script';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculator',
  description: 'Simple Next.js Calculator'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<Script src="/__inspector__.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
