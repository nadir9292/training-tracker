'use client'

import Typewriter from '@/src/components/Typewriter'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function Index({}: Props) {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleWindowResize = () => setWindowWidth(window.innerWidth)

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="py-4 w-80 md:w-192 mx-auto mt-4 md:mt-24">
      <h1 className="text-center font-passion text-offWhite text-6xl font-extrabold -mb-8 text-shadow-sm shadow-gray-900/50">
        TRAINING
      </h1>
      <h1 className="text-center text-4xl text-offWhite font-orbitron mb-16 text-shadow-sm shadow-gray-900/50">
        <Typewriter
          style="text-center uppercase font-orbitron underline text-offWhite text-4xl md:text-6xl font-bold"
          text=".tracker"
          delay={100}
        />
      </h1>
    </div>
  )
}
