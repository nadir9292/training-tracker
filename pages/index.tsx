import getConfig from 'next/config'
import Layout from '@/components/Layout'
import { useSpring, animated } from '@react-spring/web'

const { publicRuntimeConfig } = getConfig() || {}
const { site } = publicRuntimeConfig || {}
const { name } = site || {}

const Home = () => {
  const propsFirst = useSpring(propsOne)
  const propsSecond = useSpring(propsTwo)

  return (
    <Layout>
      <div>
        <section className="py-4 w-80 md:w-192 mx-auto my-8 ">
          <animated.div style={propsFirst}>
            <h1 className="text-center font-anton text-offWhite text-7xl md:text-xxl font-bold -mb-10 md:-mb-16">
              TRAINING
            </h1>
          </animated.div>
          <animated.div style={propsSecond}>
            <h1 className="text-center font-orbitron underline text-offWhite text-5xl md:text-7xl font-bold">
              TRACKER
            </h1>
          </animated.div>
        </section>
      </div>
    </Layout>
  )
}

export default Home

export const propsOne = {
  from: { opacity: 0, y: -100 },
  to: { opacity: 1, y: 0 },
  config: {
    mass: 10.5,
    tension: 280,
    friction: 60,
  },
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

// className="border rounded-2xl py-4 w-80 md:w-192 mx-auto my-8 backdrop-blur-xl"
