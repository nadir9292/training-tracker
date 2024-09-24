'use client'

import { useAppContext } from '@/src/components/context'
import ExercisesList from '@/src/components/exercise/ExercisesList'
import Loading from '@/src/components/Loading'
import { Exercise } from '@/src/types/exercise'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = { isSelectable: boolean }

const SelectExerciseModal = ({ isSelectable }: Props) => {
  const [exercises, setExercise] = useState<Exercise[]>()
  const [searchedExercises, setSearchedExercises] = useState<Exercise[]>()
  const [query, setQuery] = useState('')
  const { setIsLoading, setError } = useAppContext()

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (exercises) {
      const filtered = exercises.filter(
        (exercise) =>
          exercise.title.toLowerCase().includes(query.toLowerCase()) ||
          exercise.type.toLowerCase().includes(query.toLowerCase()) ||
          exercise.targetedMuscles.toLowerCase().includes(query.toLowerCase())
      )
      setSearchedExercises(filtered)
    }
  }, [query, exercises])

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
        setExercise(result.data)
        setSearchedExercises(result.data)
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

  if (!exercises) {
    return <Loading isLoading={true} />
  }

  return (
    <div>
      <div>
        <div className="flex flex-row items-center p-2 m-2">
          <input
            className="font-gray-900 basis-2/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl h-10 w-full"
            name="query"
            type="text"
            placeholder="Push-up, biceps, squat, pectoral, ..."
            onChange={onChangeSearch}
            value={query}
          />
        </div>
        <ExercisesList
          isSelectable={isSelectable}
          exercises={searchedExercises || []}
        />
      </div>
    </div>
  )
}

export default SelectExerciseModal
