'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  ArrowLeftOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  PlusIcon,
  ClipboardIcon,
  ChevronDoubleUpIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { animated, useSpring } from '@react-spring/web'
import MenuMobile from '@/components/MenuMobile'
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
  const [heightWave, setHeightWave] = useState(125)
  const [isAnimating, setIsAnimating] = useState(false)
  const initialHeight = 125
  const maxHeight = 500
  const increment = 10
  const intervalTime = 10

  const toggleHeightSmoothly = () => {
    setIsAnimating(true)
    setIsOpenMenu(true)

    if (heightWave < maxHeight) {
      const increaseInterval = setInterval(() => {
        setHeightWave((prevHeight) => {
          if (prevHeight + increment >= maxHeight) {
            clearInterval(increaseInterval)
            setIsAnimating(false)
            return maxHeight
          }
          return prevHeight + increment
        })
      }, intervalTime)
    } else {
      const decreaseInterval = setInterval(() => {
        setHeightWave((prevHeight) => {
          if (prevHeight - increment <= initialHeight) {
            clearInterval(decreaseInterval)
            setIsAnimating(false)
            setIsOpenMenu(false)
            return initialHeight
          }
          return prevHeight - increment
        })
      }, intervalTime)
    }
  }

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
        <div className="flex items-center justify-center rounded-none bg-transparent max-w-screen-xl px-6 py-3 border-0 navbar">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="mr-4 cursor-pointer md:hidden py-1.5 hover:scale-110 text-lg text-offWhite font-BowlbyOne">
              TRAINING
              <span className="italic text-sm font-orbitron underline">
                .tracker
              </span>
            </div>
          </div>
          <div className="flex justify-center border-2 rounded-xl ml-4">
            <button className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110">
              <span>
                <PlusIcon className="h-6 w-6 mr-2" />
              </span>
              training
            </button>
            <Link href="/view-training">
              <button className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110">
                <span>
                  <ClipboardIcon className="h-6 w-6 mr-2" />
                </span>
                VIEW TRAINING
              </button>
            </Link>
            <Link href="/view-stats">
              <button className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110">
                <span>
                  <ChartBarSquareIcon className="h-6 w-6 mr-2" />
                </span>
                STATS
              </button>
            </Link>
          </div>
          <div className="flex justify-center border-2 rounded-xl ml-4">
            <Link href="/login">
              <button className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110">
                LOGIN
              </button>
            </Link>
            <Link href="/register">
              <button className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110">
                REGISTER
              </button>
            </Link>
          </div>
          <div className="flex justify-center border-2 rounded-xl ml-4">
            <Link href="/settings">
              <button className="flex items-center text-offWhite text-md lg:text-lg hover:scale-110">
                <span>
                  <AdjustmentsHorizontalIcon className="h-6 w-6 mr-2" />
                </span>
                SETTINGS
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="waveContainer">
          <Wave
            className="wave blur-xs"
            style={{ height: heightWave, zIndex: 50 }}
            fill="#2e7479"
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
                href="/"
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-offWhite"
              >
                <AddIcon height={42} width={42} />
                <span>Training</span>
              </Link>

              <Link
                href="/"
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-offWhite"
              >
                <BoardIcon height={42} width={42} />
                <span>Program</span>
              </Link>

              <div className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-offWhite">
                <animated.div style={{ ...springs }}>
                  <button onClick={toggleHeightSmoothly} disabled={isAnimating}>
                    <ChevronIcon height={42} width={42} />
                  </button>
                </animated.div>
                Menu
              </div>

              <Link
                href="/"
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-offWhite"
              >
                <ChartIcon height={42} width={42} />
                <span>Stats</span>
              </Link>

              <Link
                href="/"
                className="rounded-xl w-full text-sm flex flex-col items-center justify-center font-bold text-offWhite"
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
