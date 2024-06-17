import type { Metadata } from 'next'

const author = 'Hyejin Seok'
const description =
  'Single-page Portfolio website of Hyejin Seok, dedicated full stack developer'
const url = 'https://hyejinseok.com'

export const AppMetadata: Metadata = {
  metadataBase: new URL('https://hyejinseok.com'),
  title: {
    default: `Portfolio | ${author}`,
    template: `%s | ${author}`
  },
  description: description,
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'Hyejin Seok',
    'Hyejin Seok - full stack web developer',
    'Frontend developer',
    'Portfolio website',
    'Full stack Developer'
  ],
  creator: author,
  authors: [{ name: author, url: url }],
  colorScheme: 'dark',
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: 'portfolio-4.webp',
        width: 1600,
        height: 835,
        alt: 'My Portfolio Website, Hyejin Seok'
      }
    ],
    locale: 'en-US',
    type: 'website'
  }
}
