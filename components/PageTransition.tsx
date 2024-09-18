'use client'

import { useTransition, animated } from '@react-spring/web'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PageTransition({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(pathname)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname])

  const transitions = useTransition(currentPage, {
    from: {
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
      position: 'fixed',
      width: '100%',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
      position: 'fixed',
      width: '100%',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%,0,0)',
      position: 'fixed',
      width: '100%',
    },
    config: {
      tension: 120,
      friction: 14,
      precision: 0.001,
    },
  })

  if (!mounted) {
    return null
  }

  return (
    <>
      {transitions((props) => (
        <animated.div key={pathname} style={props}>
          {children}
        </animated.div>
      ))}
    </>
  )
}
