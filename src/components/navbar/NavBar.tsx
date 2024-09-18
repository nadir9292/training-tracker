'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { animated, useSpring } from '@react-spring/web'
import MenuMobile from '@/src/components/navbar/MenuMobile'
import Wave from 'react-wavify'
import {
  AddIcon,
  BoardIcon,
  ChartIcon,
  ChevronIcon,
} from '@/src/components/SvgRessource'
import { TransitionLink } from '@/src/components/TransitionLink'

export default function NavBar() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const [springs, api] = useSpring(() => ({
    from: {
      rotate: 180,
      scale: 1,
      y: 0,
    },
  }))

  useEffect(() => {
    api.start({
      rotate: isOpenMenu ? 0 : 180,
      scale: isOpenMenu ? 1.5 : 1,
      y: isOpenMenu ? -20 : 0,
      config: {
        mass: 1.5,
        tension: 120,
        friction: 14,
      },
    })
  }, [isOpenMenu, api])

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
    <div className="font-comfortaa">
      {windowWidth >= 960 ? (
        <div>
          <h1 className="text-center text-8xl">
            work in progress, please go to mobile version.
          </h1>
        </div>
      ) : (
        <div className="waveContainer">
          <Wave
            className="wave"
            fill="#FAF9F6"
            style={{ height: 125, zIndex: 50 }}
            paused={false}
            options={{
              amplitude: 15,
              speed: 0.15,
              points: 3,
            }}
          />
          <div className="navbar mx-auto max-w-screen-xl px-6 py-3">
            <div className="grid grid-cols-5 gap-4">
              <TransitionLink
                href="/login"
                onClick={() => setIsOpenMenu(false)}
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900"
              >
                <AddIcon height={42} width={42} />
                <span>Training</span>
              </TransitionLink>

              <TransitionLink
                href="/"
                onClick={() => setIsOpenMenu(false)}
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900"
              >
                <BoardIcon height={42} width={42} />
                <span>Program</span>
              </TransitionLink>

              <div className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900">
                <animated.div style={{ ...springs }}>
                  <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <ChevronIcon height={52} width={52} />
                  </button>
                </animated.div>
              </div>

              <TransitionLink
                href="/"
                onClick={() => setIsOpenMenu(false)}
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900"
              >
                <ChartIcon height={42} width={42} />
                <span>Stats</span>
              </TransitionLink>

              <TransitionLink
                href="/"
                onClick={() => setIsOpenMenu(false)}
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900"
              >
                <Image
                  src="/avatar_default.png"
                  alt="avatar"
                  width={42}
                  height={42}
                  priority
                  className="rounded-full border-2 border-gray-800"
                />
                <span>Nadir</span>
              </TransitionLink>
            </div>
          </div>
          <MenuMobile isOpen={isOpenMenu} />
        </div>
      )}
    </div>
  )
}
