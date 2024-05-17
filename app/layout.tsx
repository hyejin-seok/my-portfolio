import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-monst'
})

export const metadata: Metadata = {
  title: 'Hyejin Seok | Portfolio',
  description: 'Hyejin Seok | Portfolio Webstie'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
