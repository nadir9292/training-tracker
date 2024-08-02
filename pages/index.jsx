import Layout from '@/components/Layout'
import { Button } from '@material-tailwind/react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Typewriter from '@/components/Typewriter'

const Home = () => {
  const propsFirst = useSpring(propsOne)
  const propsSecond = useSpring(propsTwo)
  const propsTree = useSpring(propsWeight)
  const propsFourth = useSpring(propsFour)
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)

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
    <Layout>
      <div>
        <section className="py-4 w-80 md:w-192 mx-auto mt-4 md:mt-24">
          <animated.div style={propsFirst}>
            <h1 className="text-center font-anton text-offWhite text-8xl md:text-xxl font-bold -mb-12 md:-mb-16">
              TRAINING
            </h1>
          </animated.div>
          <h1 className="text-center">
            <Typewriter
              style="text-center uppercase font-orbitron underline text-offWhite text-5xl md:text-6xl italic font-bold"
              text="tracker"
              delay={100}
            />
          </h1>
          <animated.div style={propsTree}>
            <Image
              className="mx-auto mt-12"
              src="/poids.png"
              priority={true}
              width={windowWidth >= 960 ? 150 : 100}
              height={windowWidth >= 960 ? 150 : 100}
              alt="poids icons"
              style={{ width: 'auto', height: 'auto' }}
            />
          </animated.div>

          <animated.div style={propsFourth}>
            <div className="mx-aut backdrop-blur-lg border-2 px-4 py-6 rounded-lg">
              <h1 className="text-offWhite text-md md:text-3xl font-bold">
                Unlock Your Full Potential with TRAINING Tracker
              </h1>
              <h1 className="text-offWhite text-sm md:text-2xl text-left pb-2 text-pretty font-montserrat">
                Welcome to the ultimate destination for fitness enthusiasts and
                bodybuilders! Our intuitive platform empowers you to seamlessly
                log your workouts, track your progress, and analyze your
                performance. With personalized insights and detailed statistics,
                you can maximize your gains and achieve your fitness goals
                faster.
              </h1>
              <Link href="/register">
                <Button className="flex items-center w-full justify-center bg-transparent shadow-2xl border-2 ">
                  try now
                </Button>
              </Link>
            </div>
          </animated.div>
        </section>
      </div>
    </Layout>
  )
}

export default Home

export const propsOne = {
  opacity: 1,
  transform: 'translate(0px, 0px)',
  from: { opacity: 0, transform: 'translate(-20px, -20px)' },
}
export const propsTwo = {
  from: { opacity: 0, x: 100 },
  to: { opacity: 1, x: 0 },
  config: {
    mass: 10.5,
    tension: 280,
    friction: 60,
  },
}
export const propsWeight = {
  from: { opacity: 0, y: -100 },
  to: { opacity: 1, y: 0 },
  delay: 1000,
  config: {
    mass: 5.3,
    tension: 180,
    friction: 25,
  },
}
export const propsFour = {
  from: { opacity: 0.5, y: -100 },
  to: { opacity: 1, y: 0 },
  delay: 1000,
  config: {
    mass: 5.3,
    tension: 180,
    friction: 25,
  },
}
