import { useEffect } from 'react'
import Script from 'next/script'

interface AdProps {
  adClient: string
  adSlot: string
  width?: string
  height?: string
}

const AdsenseAd: React.FC<AdProps> = ({
  adClient,
  adSlot,
  width = '100vw',
  height = '320',
}) => {
  useEffect(() => {
    ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
    ;(window as any).adsbygoogle.push({})
  }, [])

  return (
    <>
      {/* Charger le script adsense */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}
        strategy="afterInteractive"
      />

      {/* Div pour l'ad */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-auto-format="mcrspv"
        data-full-width="true"
        data-adtest="on" // À retirer en production
      />

      <style jsx>{`
        .adsbygoogle {
          width: ${width};
          height: ${height}px;
        }
      `}</style>
    </>
  )
}

export default AdsenseAd
