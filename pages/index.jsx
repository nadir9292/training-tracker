import Layout from '@/components/Layout'
import { useSpring, animated } from '@react-spring/web'

const Home = () => {
  const propsFirst = useSpring(propsOne)
  const propsSecond = useSpring(propsTwo)

  return (
    <Layout>
      <div>
        <section className="py-4 w-80 md:w-192 mx-auto my-8 ">
          <animated.div style={propsFirst}>
            <h1 className="text-center font-anton text-offWhite text-8xl md:text-xxl font-bold -mb-12 md:-mb-16 text-shadow-lg shadow-gray-900/50">
              TRAINING
            </h1>
          </animated.div>
          <animated.div style={propsSecond}>
            <h1 className="text-center font-orbitron underline text-offWhite text-5xl md:text-6xl italic font-bold text-shadow-lg shadow-gray-900/50">
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
