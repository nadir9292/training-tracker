'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import { Exercise } from '@/src/types/exercise'
import { useTrail, animated } from '@react-spring/web'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = { exercises: Exercise[]; isSelectable: boolean }

const ExercisesList = ({ exercises, isSelectable }: Props) => {
  const { selectedExercises, setSelectedExercises } = useAppContext()

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (exercises.length > 0) {
      setIsReady(true)
    } else {
      setIsReady(false)
    }
  }, [exercises])

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

  const selectExercise = (id: string) => {
    setSelectedExercises((oldArray: string[]) =>
      oldArray.includes(id)
        ? oldArray.filter((exerciseId) => exerciseId !== id)
        : [...oldArray, id]
    )
  }

  if (!isReady) {
    return <Loading isLoading={true} />
  }

  return (
    <div>
      {selectedExercises.length > 0 ? (
        <button
          type="button"
          className="bg-coralRed text-xs right-0 mr-4 top-48 font-bold h-9 absolute z-50 px-1 py-2 border border-gray-900 rounded-full"
          onClick={() => setSelectedExercises([])}
        >
          CLEAR
        </button>
      ) : (
        <div></div>
      )}
      {trails.map((props, index) => (
        <animated.div style={{ ...props }} key={index}>
          <div
            key={exercises[index].id}
            onClick={() =>
              isSelectable ? selectExercise(exercises[index].id) : undefined
            }
            className={`flex flex-row gap-2 items-center font-montserrat text-sm my-1 mx-auto rounded-xl ${
              selectedExercises.find((id: string) => id === exercises[index].id)
                ? 'border-2  border-emerald scale-90'
                : ''
            }`}
          >
            <Image
              src={exercises[index].image || '/default.png'}
              width={50}
              height={50}
              priority
              alt="image exercises"
              className="rounded-xl flex-shrink-0"
            />
            <h1 className="font-bold uppercase flex-1 basis-1/3">
              {exercises[index].title}
            </h1>
            <h1 className="text-xs italic flex-1 basis-1/4">
              {exercises[index].type}
            </h1>
            <div className="flex basis-1/3 overflow-x-auto no-scrollbar max-w-full">
              {JSON.parse(exercises[index].targetedMuscles).map(
                (
                  { muscle, involvement }: any,
                  index: React.Key | null | undefined
                ) => (
                  <div key={index} className="text-xs">
                    <h1
                      className={`inline-flex items-center rounded-md p-1 m-[1px] text-xs font-medium text-gray-900 ${
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
