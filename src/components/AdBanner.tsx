'use client'

import React, { useEffect } from 'react'

// Étendre l'interface Window pour inclure adsbygoogle
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

const AdBanner = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4847656285495869'
    script.async = true
    script.crossOrigin = 'anonymous'
    document.body.appendChild(script)

    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4847656285495869"
      data-ad-slot="4148087087"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default AdBanner
