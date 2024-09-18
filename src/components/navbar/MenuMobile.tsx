import {
  AboutIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
} from '@/src/components/SvgRessource'
import { TransitionLink } from '@/src/components/TransitionLink'
import { animated, useSpring, useTrail } from '@react-spring/web'
import React, { useEffect } from 'react'

type Props = { isOpen: boolean }

export default function MenuMobile({ isOpen }: Readonly<Props>) {
  const [props, apiDiv] = useSpring(() => ({}), [])
  const [trails, api] = useTrail(4, () => ({}), [])

  useEffect(() => {
    apiDiv.start({
      y: isOpen ? 0 : 100,
      config: {
        tension: 180,
        friction: 12,
        precision: 0.001,
      },
    })
    api.start({
      config: {
        tension: 170,
        friction: 26,
        mass: 1,
      },
      opacity: isOpen ? 1 : 0,
      height: isOpen ? 50 : 0,
    })
  }, [isOpen, api])

  if (!isOpen) return null

  return (
    <div className="menuNavbar font-happyMonkey flex justify-center items-center inset-x-0 bottom-16">
      <animated.div
        style={{
          backgroundColor: '#FAF9F6',
          borderRadius: '80px 80px 0px 0px',
          ...props,
        }}
      >
        <div className="grid grid-cols-1 text-3xl text-gray-900 font-bold p-6 h-80">
          {trails.map((props, index) => (
            <animated.div style={{ ...props }} key={index}>
              <TransitionLink href="/" className="flex items-center">
                {ListLinks[index].icon}
                <span className="ml-2">
                  {' - '} {ListLinks[index].name}
                </span>
              </TransitionLink>
            </animated.div>
          ))}
        </div>
      </animated.div>
    </div>
  )
}

export const ListLinks = [
  { id: 1, name: 'Home', icon: <HomeIcon height={50} width={50} /> },
  { id: 2, name: 'Settings', icon: <SettingsIcon height={50} width={50} /> },
  { id: 3, name: 'About', icon: <AboutIcon height={50} width={50} /> },
  { id: 4, name: 'Log out', icon: <LogOutIcon height={50} width={50} /> },
]
