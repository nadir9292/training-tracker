'use client'

import { Exercise } from '@/src/types/exercise'
import { useTrail, animated } from '@react-spring/web'
import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = { exercices: Exercise[] }

const ExercicesList = ({ exercices }: Props) => {
  const trails = useTrail(exercices.length, {
    from: { opacity: 0, x: 1000 },
    to: { opacity: 1, x: 0 },
    config: {
      duration: 200,
      mass: 1.5,
      tension: 120,
      friction: 14,
      precision: 0.001,
    },
  })

  return (
    <div>
      {trails.map((props, index) => (
        <animated.div style={{ ...props }} key={index}>
          <div
            key={exercices[index].id}
            className="flex flex-row gap-2 items-center font-montserrat text-sm shadow-2xl bg-offWhite h-14 w-[90vw] my-6 mx-auto rounded-xl"
          >
            <Image
              src={exercices[index].image || '/default.png'}
              width={70}
              height={70}
              priority
              alt="image exercices"
              className="bg-offWhite rounded-2xl shadow-xl flex-shrink-0"
            />
            <h1 className="font-bold uppercase flex-1 basis-1/3">
              {exercices[index].title}
            </h1>
            <h1 className="text-xs italic flex-1 basis-1/4">
              {exercices[index].type}
            </h1>
            <div className="flex flex-wrap flex-1 basis-1/3 overflow-auto max-h-10">
              {JSON.parse(exercices[index].targetedMuscles).map(
                (
                  { muscle, involvement }: any,
                  index: React.Key | null | undefined
                ) => (
                  <div key={index} className="text-xs">
                    <h1
                      className={`m-1 w-fit rounded-xl px-1 ${
                        involvement === 'primary' ? 'bg-red-500' : 'bg-red-300'
                      }`}
                    >
                      {muscle}
                    </h1>
                  </div>
                )
              )}
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default ExercicesList
