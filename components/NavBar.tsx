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
  UserPlusIcon,
  UserCircleIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

type Props = {}

export default function NavBar({}: Props) {
  const [openNav, setOpenNav] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [jwt, setJwt] = useState(false)

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
    <div>
      {windowWidth >= 960 ? (
        <div className="flex items-center justify-center rounded-none bg-transparent max-w-screen-xl px-6 py-3 border-0 navbar">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="mr-4 cursor-pointer md:hidden py-1.5 hover:scale-110 text-lg text-offWhite font-BowlbyOne">
              TRAINING
              <span className="italic text-xs font-orbitron underline">
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
        <div className="mx-auto max-w-screen-xl px-6 py-3 navbar rounded-none bg-transparent border-0 backdrop-blur-lg">
          <div className="grid grid-cols-5 gap-4">
            <Link
              href="/"
              className="rounded-xl w-full text-xs flex flex-col items-center justify-center font-bold text-offWhite"
            >
              <PlusIcon className="h-7 w-7" />
              <span>Training</span>
            </Link>

            <Link
              href="/"
              className="rounded-xl w-full text-xs flex flex-col items-center justify-center font-bold text-offWhite"
            >
              <ClipboardIcon className="h-7 w-7" />
              <span>Program</span>
            </Link>

            <Link
              href="/"
              className="rounded-xl w-full text-xs flex flex-col items-center justify-center font-bold text-offWhite"
            >
              <ChevronDoubleUpIcon className="h-8 w-8" />
            </Link>

            <Link
              href="/"
              className="rounded-xl w-full text-xs flex flex-col items-center justify-center font-bold text-offWhite"
            >
              <ChartBarSquareIcon className="h-7 w-7" />
              <span>Stats</span>
            </Link>

            <Link
              href="/"
              className="rounded-xl w-full h-full flex items-center justify-center font-bold text-offWhite"
            >
              <Image
                src="/logo_google.png"
                alt="avatar"
                width={50}
                height={50}
                className="w-full h-full object-cover rounded-full border-2 shadow-xl"
              />
            </Link>
          </div>
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
