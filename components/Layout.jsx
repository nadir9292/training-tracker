'use client'

import NavBar from '@/components/NavBar'
import getConfig from 'next/config'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/logo-192.png"
        />
        <meta name="theme-color" content="#26757a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title key="title">Training tracker</title>
      </Head>
      <main>
        <NavBar />
        {children}
      </main>
    </>
  )
}

export default Layout
