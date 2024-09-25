'use client'

import AdsenseAd from '@/src/components/ads/Multplex'
import Index from '@/src/components/Index'

const Home = () => {
  return (
    <>
      <Index />
      <AdsenseAd adClient="ca-pub-4847656285495869" adSlot="9820050311" />
    </>
  )
}

export default Home
