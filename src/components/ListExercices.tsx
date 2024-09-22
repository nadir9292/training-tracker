'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import { Exercise } from '@/src/types/exercise'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}

const ListExercices = ({}: Props) => {
  const [exercices, setExercice] = useState<Exercise[]>()
  const { setIsLoading, setError } = useAppContext()

  // --------ADD THIS IN COMPONENT and LIMIT CALL-----------------
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      return
    }
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/get-exercise')
        if (!response.ok) {
          throw new Error('Error : cannot get data')
        }
        const result = await response.json()

        localStorage.setItem('userData', JSON.stringify(result.data[0]))
        setExercice(result.data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(true)
        } else {
          setError(true)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [session])
  // --------ADD THIS IN COMPONENT-----------------

  if (!exercices) {
    return <Loading isLoading={true} />
  }

  return (
    <div>
      {exercices ? (
        <div>
          <div className="flex flex-row items-center p-2 m-2">
            <input
              className="font-gray-900 basis-2/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl h-10 w-full"
              name="pseudo"
              type="text"
              placeholder="Push-up, Squat, ..."
            />
            <button className="basis-1/3 bg-wisteria ml-2 rounded-2xl py-2">
              Search
            </button>
          </div>
          <div className="text-center border w-[80vw] mx-auto rounded-2xl">
            HERE FILTER
          </div>
          {exercices.map((exercice) => (
            <div
              key={exercice.id}
              className="flex flex-row gap-2 items-center font-montserrat text-sm shadow-2xl bg-offWhite h-12 w-[90vw] my-6 mx-auto rounded-xl"
            >
              <Image
                src={exercice.image || '/default.png'}
                width={60}
                height={60}
                priority
                alt="image exercices"
                className="bg-offWhite rounded-2xl shadow-xl flex-shrink-0"
              />
              <h1 className="font-bold uppercase flex-1 basis-1/3">
                {exercice.title}
              </h1>
              <h1 className="text-xs italic flex-1 basis-1/4">
                {exercice.type}
              </h1>
              <div className="flex flex-wrap flex-1 basis-1/3 overflow-auto max-h-10">
                {JSON.parse(exercice.targetedMuscles).map(
                  (
                    { muscle, involvement }: any,
                    index: React.Key | null | undefined
                  ) => (
                    <div key={index} className="text-xs">
                      <h1
                        className={`m-1 w-fit rounded-xl px-1 ${
                          involvement === 'primary'
                            ? 'bg-red-500'
                            : 'bg-red-300'
                        }`}
                      >
                        {muscle}
                      </h1>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ListExercices
