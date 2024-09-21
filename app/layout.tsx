import './globals.css'
import type { Metadata, Viewport } from 'next'
import NavBar from '@/src/components/navbar/NavBar'
import { AppWrapper } from '@/src/components/context'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

const APP_NAME = 'Training Tracker'
const APP_DEFAULT_TITLE = 'Training Tracker'
const APP_TITLE_TEMPLATE = '%s - Training Tracker'
const APP_DESCRIPTION = 'By Nadir Mansouri :)'

export const viewport: Viewport = {
  themeColor: '#AC9BEF',
}

export const metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.ts',
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_DEFAULT_TITLE} />
        <meta name="description" content={APP_DESCRIPTION} />
      </Head>
      <body>
        <SessionProvider>
          <AppWrapper>
            <div className="pagesContent"> {children}</div>
            <NavBar />
          </AppWrapper>
        </SessionProvider>
      </body>
    </html>
  )
}
