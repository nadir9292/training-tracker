import {
  AboutIcon,
  LogOutIcon,
  SettingsIcon,
} from '@/src/components/SvgRessource'
import { TransitionLink } from '@/src/components/TransitionLink'
import { animated, useSpring, useTrail } from '@react-spring/web'
import React, { useEffect } from 'react'
import { signOut } from 'next-auth/react'

type Props = { isOpen: boolean }

export default function MenuMobile({ isOpen }: Readonly<Props>) {
  const [props, apiDiv] = useSpring(() => ({}), [])
  const [trails, api] = useTrail(3, () => ({}), [])

  const logOut = () => {
    window.localStorage.removeItem('userData')
    signOut()
  }

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
        duration: 200,
      },
      opacity: isOpen ? 1 : 0,
      scale: isOpen ? 1 : 1.3,
      y: isOpen ? 1 : 300,
    })
  }, [isOpen, api])

  if (!isOpen) return null

  return (
    <div className="menuNavbar font-happyMonkey flex justify-center items-center inset-x-0 bottom-16">
      <animated.div
        style={{
          backgroundColor: '#FAF9F6',
          borderRadius: '100px 100px 0px 0px',
          ...props,
        }}
      >
        <div className="grid grid-cols-1 text-2xl text-gray-900 font-bold p-10 h-96">
          {trails.map((props, index) => (
            <animated.div style={{ ...props }} key={index}>
              {ListLinks[index].url ? (
                <TransitionLink
                  href={ListLinks[index].url}
                  className="flex items-center text-center"
                >
                  {ListLinks[index].icon}
                  <span className="ml-2">
                    {' - '} {ListLinks[index].name}
                  </span>
                </TransitionLink>
              ) : (
                <div>
                  <button className="flex items-center" onClick={logOut}>
                    <LogOutIcon height={50} width={50} />
                    <span className="ml-2">{' - '}Log out</span>
                  </button>
                </div>
              )}
            </animated.div>
          ))}
        </div>
      </animated.div>
    </div>
  )
}

export const ListLinks = [
  {
    id: 1,
    url: '/about',
    name: 'About',
    icon: <AboutIcon height={50} width={50} />,
  },
  {
    id: 2,
    url: '/parameters',
    name: 'Settings',
    icon: <SettingsIcon height={50} width={50} />,
  },
  {
    id: 3,
    url: null,
    name: 'Log out',
    icon: <LogOutIcon height={50} width={50} />,
  },
]
