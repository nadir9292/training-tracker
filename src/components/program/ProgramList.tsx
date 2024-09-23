'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import Image from 'next/image'
import { Program } from '@/src/types/programs'

type Props = { programs: Program[] }

const ProgramList = ({ programs }: Props) => {
  return (
    <div className="w-[80vw] max-w-128 h-100  mt-6 mx-auto opacity-95">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        {programs.map(
          ({ id, image, listExercises, title, visibility, userId }) => (
            <SwiperSlide
              key={id}
              className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl"
            >
              <Image
                src={image || '/poids.png'}
                width={400}
                height={0}
                priority
                alt="image programs"
                className="object-none w-full h-48"
              />
              <div className="grid grid-cols-1 gap-2" style={{ zIndex: 100 }}>
                <h1 className="text-xl mt-2 text-center uppercase">{title}</h1>
                <h1 className="text-xl text-center">Total time : 45min</h1>
                <h1 className="text-center bg-wisteria w-fit mx-auto py-1 px-2 outline rounded">
                  {JSON.parse(listExercises).length} exercises
                </h1>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  )
}

export default ProgramList
