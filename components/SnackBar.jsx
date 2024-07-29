import { Alert } from '@material-tailwind/react'
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react'

const SnackBar = (props) => {
  const { open, error, msg } = props
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [propsSpring, api] = useSpring(() => ({
    from: { opacity: 0, y: -1000 },
    to: { opacity: 0, y: -1000 },
  }))

  useEffect(() => {
    setMounted(true)
    const handleWindowResize = () => setWindowWidth(window.innerWidth)

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  useEffect(() => {
    if (open) {
      api.start(windowWidth >= 960 ? propsBig : propsSmall)
    } else {
      api.start({ opacity: 0, y: -1000 })
    }
  }, [open, windowWidth, api])

  if (!mounted) {
    return null
  }

  return (
    <animated.div style={propsSpring}>
      <Alert
        icon={error ? <IconError /> : <IconPositive />}
        open={open}
        className="snackbar fixed left-1/2 transform -translate-x-1/2 flex items-center rounded-2xl text-offWhite shadow-xl font-bold text-xs md:text-xl"
        style={{
          backgroundColor: error
            ? 'rgba(220,20,60, 0.95)'
            : 'rgba(51, 170, 51, 0.95)',
        }}
      >
        {msg}
      </Alert>
    </animated.div>
  )
}

export default SnackBar

export const IconPositive = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const IconError = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const propsBig = {
  from: { opacity: 0, y: -1000 },
  to: { opacity: 1, y: -550 },
  config: {
    mass: 10.5,
    tension: 280,
    friction: 60,
  },
}

export const propsSmall = {
  from: { opacity: 0, y: -1000 },
  to: { opacity: 1, y: -700 },
  config: {
    mass: 10.5,
    tension: 280,
    friction: 60,
  },
}
