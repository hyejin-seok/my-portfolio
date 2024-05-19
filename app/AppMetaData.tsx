import type { Metadata } from 'next'

const author = 'Hyejin Seok'
const description =
  'Single-page Portfolio website of Hyejin Seok, dedicated full stack developer'
const url = '' // 수정하기

export const AppMetadata: Metadata = {
  // metadataBase: new URL(''), 수정하기
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
  // colorScheme: 'dark',
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: '', // 수정
        width: 800,
        height: 600,
        alt: 'My personal portfolio website'
      },
      {
        url: '', // 수정
        width: 1800,
        height: 1600,
        alt: 'My personal portfolio website'
      }
    ],
    locale: 'en-US',
    type: 'website'
  }
}
