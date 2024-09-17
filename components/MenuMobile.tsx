import { HomeIcon, LogOutIcon, SettingsIcon } from '@/components/SvgRessource'
import { animated, useSpring, useTrail } from '@react-spring/web'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = { isOpen: boolean }

export default function MenuMobile({ isOpen }: Readonly<Props>) {
  const [trails, api] = useTrail(
    3, // for 3 Links
    () => ({}),
    []
  )
  useEffect(() => {
    api.start({
      config: {
        tension: 210,
        friction: 20,
      },
      opacity: isOpen ? 1 : 0,
      height: isOpen ? 40 : 0,
    })
  }, [isOpen, api])

  if (!isOpen) return null

  return (
    <div
      className="menuNavbar font-montserrat flex justify-center items-center w-80 mx-auto"
      style={{ zIndex: 90, position: 'relative', marginBottom: 250 }}
    >
      <div className="grid grid-cols-1 gap-6 text-3xl text-offWhite font-bold">
        {trails.map((props, index) => (
          <animated.div style={props} key={index}>
            Hello World
          </animated.div>
        ))}
      </div>
    </div>
  )
}
