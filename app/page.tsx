'use client'

import { useAppContext } from '@/src/components/context'
import Index from '@/src/components/Index'
import Loading from '@/src/components/Loading'

const Home = () => {
  const { isLoading } = useAppContext()

  return (
    <>
      <Index />
      <Loading isLoading={isLoading} />
    </>
  )
}

export default Home
