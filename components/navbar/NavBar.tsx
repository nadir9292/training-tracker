'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  ArrowLeftOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { animated, useSpring } from '@react-spring/web'
import MenuMobile from '@/components/navbar/MenuMobile'
import Wave from 'react-wavify'
import {
  AddIcon,
  BoardIcon,
  ChartIcon,
  ChevronIcon,
} from '@/components/SvgRessource'

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
              <Link
                href="/login"
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900"
              >
                <AddIcon height={42} width={42} />
                <span>Training</span>
              </Link>

              <Link
                href="/"
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900"
              >
                <BoardIcon height={42} width={42} />
                <span>Program</span>
              </Link>

              <div className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900">
                <animated.div style={{ ...springs }}>
                  <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                    <ChevronIcon height={52} width={52} />
                  </button>
                </animated.div>
              </div>

              <Link
                href="/"
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-gray-900"
              >
                <ChartIcon height={42} width={42} />
                <span>Stats</span>
              </Link>

              <Link
                href="/"
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
              </Link>
            </div>
          </div>
          <MenuMobile isOpen={isOpenMenu} />
        </div>
      )}
    </div>
  )
}

export const NavList = () => {
  return (
    <ul className="my-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <h1 className="py-1 font-bold text-center text-black">
        <Link href="/" className="flex items-center">
          <span>
            <HomeIcon className="h-6 w-6 mr-5" />
          </span>
           HOME
        </Link>
      </h1>
      <hr />
      <h1 className="py-1 font-bold text-black text-center">
        <Link
          href="/settings"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          <span>
            <AdjustmentsHorizontalIcon className="h-6 w-6 mr-5" />
          </span>
          SETTINGS
        </Link>
      </h1>
      <hr />
      <h1 className="py-1 font-bold text-center">
        <Link href="/" className="flex items-center">
          <span>
            <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-5" />
          </span>
          LOG OUT
        </Link>
      </h1>
    </ul>
  )
}
