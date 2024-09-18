import './globals.css'
import type { Metadata, Viewport } from 'next'
import NavBar from '@/src/components/navbar/NavBar'
import { AppWrapper } from '@/src/components/context'

const APP_NAME = 'Training Tracker'
const APP_DEFAULT_TITLE = 'Training Tracker'
const APP_TITLE_TEMPLATE = '%s - Training Tracker'
const APP_DESCRIPTION = 'By Nadir Mansouri :)'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.ts',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
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

export const viewport: Viewport = {
  themeColor: '#AC9BEF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <div className="pagesContent"> {children}</div>
          <NavBar />
        </AppWrapper>
      </body>
    </html>
  )
}
