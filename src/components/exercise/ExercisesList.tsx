'use client'

import { Exercise } from '@/src/types/exercise'
import { useTrail, animated } from '@react-spring/web'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = { exercises: Exercise[] }

const ExercisesList = ({ exercises }: Props) => {
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([])

  const trails = useTrail(exercises.length, {
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

  const isDuplicateSelectedExercise = (id: string) => {
    return selectedExercises?.some((exercise) => exercise.id === id)
  }

  const selectExercise = (id: string) => {
    if (isDuplicateSelectedExercise(id)) {
      setSelectedExercises((prev) =>
        prev.filter((exercise) => exercise.id !== id)
      )
    } else {
      const exerciseToAdd = exercises.find((exercise) => exercise.id === id)
      if (exerciseToAdd) {
        setSelectedExercises((prev) => [...prev, exerciseToAdd])
      }
    }
  }

  return (
    <div>
      {JSON.stringify(selectedExercises.map((exo) => exo.title))}
      {trails.map((props, index) => (
        <animated.div style={{ ...props }} key={index}>
          <div
            key={exercises[index].id}
            onClick={() => selectExercise(exercises[index].id)}
            className={`flex flex-row gap-2 items-center font-montserrat text-sm shadow-2xl
               bg-offWhite h-16 w-[90vw] my-6 mx-auto rounded-xl ${
                 selectedExercises.find((exo) => exo.id === exercises[index].id)
                   ? 'border-y-2 border-r-2 border-emerald scale-105'
                   : ''
               }`}
          >
            <Image
              src={exercises[index].image || '/default.png'}
              width={70}
              height={70}
              priority
              alt="image exercises"
              className={`bg-offWhite rounded-xl shadow-xl flex-shrink-0 ${
                selectedExercises.find((exo) => exo.id === exercises[index].id)
                  ? 'border-4 border-emerald scale-105'
                  : ''
              }`}
            />
            <h1 className="font-bold uppercase flex-1 basis-1/3">
              {exercises[index].title}
            </h1>
            <h1 className="text-xs italic flex-1 basis-1/4">
              {exercises[index].type}
            </h1>
            <div className="flex flex-wrap flex-1 basis-1/3 overflow-auto max-h-10">
              {JSON.parse(exercises[index].targetedMuscles).map(
                (
                  { muscle, involvement }: any,
                  index: React.Key | null | undefined
                ) => (
                  <div key={index} className="text-xs">
                    <h1
                      className={`inline-flex items-center rounded-md p-1 m-[1px] text-xs font-medium text-gray-900 ring-1 ring-inset ring-red-600/10 ${
                        involvement === 'primary' ? 'bg-red-600' : 'bg-red-300'
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

export default ExercisesList
