'use client'

import Typewriter from '@/components/Typewriter'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function Index({}: Props) {
  const propsFirst = useSpring(propsOne)
  const propsSecond = useSpring(propsTwo)
  const propsTree = useSpring(propsWeight)
  const propsFourth = useSpring(propsFour)
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
      <animated.div style={propsFirst}>
        <h1 className="text-center font-passion text-offWhite text-6xl font-extrabold -mb-8 text-shadow-sm shadow-gray-900/50">
          TRAINING
        </h1>
      </animated.div>
      <h1 className="text-center text-4xl text-offWhite font-orbitron mb-16 text-shadow-sm shadow-gray-900/50">
        <Typewriter
          style="text-center uppercase font-orbitron underline text-offWhite text-4xl md:text-6xl font-bold"
          text=".tracker"
          delay={100}
        />
      </h1>
      <animated.div style={propsTree}>
        <Image
          className="mx-auto mt-13"
          src="/poids.png"
          priority={true}
          width={windowWidth >= 960 ? 150 : 80}
          height={windowWidth >= 960 ? 150 : 80}
          alt="poids icons"
          style={{ width: 'auto', height: 'auto' }}
        />
      </animated.div>

      <animated.div style={propsFourth}>
        <div className="mx-auto px-4 py-6 rounded-lg">
          <h1 className="text-center text-offWhite">
            COMPOSANT A METTRE ICI (JSP QUOI MDR)
          </h1>
        </div>
      </animated.div>
    </div>
  )
}

export const propsOne = {
  opacity: 1,
  transform: 'translate(0px, 0px)',
  from: { opacity: 0, transform: 'translate(-20px, -20px)' },
}
export const propsTwo = {
  from: { opacity: 0, x: 100 },
  to: { opacity: 1, x: 0 },
  config: {
    mass: 10.5,
    tension: 280,
    friction: 60,
  },
}
export const propsWeight = {
  from: { opacity: 0, y: -100 },
  to: { opacity: 1, y: 0 },
  delay: 1000,
  config: {
    mass: 5.3,
    tension: 180,
    friction: 25,
  },
}
export const propsFour = {
  from: { opacity: 0.2, y: -100 },
  to: { opacity: 1, y: 0 },
  delay: 1000,
  config: {
    mass: 5.3,
    tension: 180,
    friction: 25,
  },
}
