import { HomeIcon, LogOutIcon, SettingsIcon } from '@/components/SvgRessource'
import { animated, useSpring } from '@react-spring/web'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = { isOpen: boolean }

export default function MenuMobile({ isOpen }: Readonly<Props>) {
  const [springs, api] = useSpring(() => ({
    from: {
      y: 10,
    },
  }))
  useEffect(() => {
    api.start({
      y: isOpen ? 10 : 50,
      config: {
        mass: 1.9,
        tension: 120,
        friction: 14,
      },
    })
  }, [isOpen, api])

  if (!isOpen) return null

  return (
    <div
      className="menuNavbar font-happyMonkey flex justify-center items-center w-80 mx-auto"
      style={{ zIndex: 90, position: 'relative', marginBottom: 250 }}
    >
      <div className="grid grid-cols-1 gap-6 text-3xl text-offWhite font-bold">
        <animated.div style={{ ...springs }}>
          <Link href="/" className="flex items-center py-2">
            <HomeIcon height={50} width={50} />
            <span className="ml-2">Home</span>
          </Link>
          <Link href="/" className="flex items-center py-2">
            <SettingsIcon height={50} width={50} />
            <span className="ml-2">Settings</span>
          </Link>
          <Link href="/" className="flex items-center text-red-500 py-2">
            <LogOutIcon height={50} width={50} />
            <span className="ml-2">Log out</span>
          </Link>
        </animated.div>
      </div>
    </div>
  )
}
