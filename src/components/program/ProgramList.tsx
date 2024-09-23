'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'

const ProgramList = () => {
  const programs = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="w-[80vw] max-w-96 h-100 px-2 py-4 mt-6 mx-auto opacity-95">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        {programs.map((program) => (
          <SwiperSlide className="bg-program object-none object-left-bottom rounded-xl p-2">
            <h1 className="text-5xl font-happyMonkey text-center uppercase">
              Full body
            </h1>
            <h1 className="text-xl font-happyMonkey text-center italic">
              cardio
            </h1>
            <h1 className="text-xl font-happyMonkey text-center">
              Total time : 45min
            </h1>
            <div className="mt-12">
              <h1 className="font-happyMonkey text-center">
                exo 1 <span className="italic text-sm">strength</span>
              </h1>
              <h1 className="font-happyMonkey text-center">
                exo 1 <span className="italic text-sm">strength</span>
              </h1>
              <h1 className="font-happyMonkey text-center">
                exo 1 <span className="italic text-sm">strength</span>
              </h1>
              <h1 className="font-happyMonkey text-center">
                exo 1 <span className="italic text-sm">strength</span>
              </h1>
              <h1 className="font-happyMonkey text-center">
                exo 1 <span className="italic text-sm">strength</span>
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProgramList
