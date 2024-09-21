'use client'

import { useAppContext } from '@/src/components/context'
import { AlertIcon, OkIcon } from '@/src/components/SvgRessource'
import { useSpring, animated } from '@react-spring/web'
import React, { useEffect } from 'react'

type Props = { msg: string; isError: boolean }

const Popup = ({ msg, isError }: Props) => {
  const { isOpenPopup, setIsOpenPopup } = useAppContext()
  const [props, api] = useSpring(() => ({}), [])

  useEffect(() => {
    api.start({
      scale: isOpenPopup ? 1 : 1.5,
      config: {
        tension: 210,
        friction: 20,
        precision: 0.001,
      },
    })
  }, [isOpenPopup])

  if (!isOpenPopup) {
    return null
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md">
      <animated.div
        style={{ zIndex: 100, ...props }}
        className={`grid grid-cols-1 font-happyMonkey place-content-center p-4 h-44 w-3/4 max-w-100 rounded-2xl shadow-xl border border-gray-900 ${
          isError ? 'bg-coralRed' : 'bg-emerald'
        }`}
      >
        <h1
          className={`text-center font-bold text-xl ${
            isError ? 'animate-pulse' : ''
          }`}
        >
          {msg}
        </h1>
        <div
          className="mx-auto mt-2 animate-bounce"
          onClick={() => setIsOpenPopup(false)}
        >
          {isError ? (
            <AlertIcon width={50} height={50} />
          ) : (
            <OkIcon width={50} height={50} />
          )}
        </div>
      </animated.div>
    </div>
  )
}

export default Popup
