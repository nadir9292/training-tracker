'use client'

import { useAppContext } from '@/src/components/context'
import ExercicesList from '@/src/components/exercise/ExercicesList'
import Loading from '@/src/components/Loading'
import { Exercise } from '@/src/types/exercise'
import { useSession } from 'next-auth/react'
import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = {}

const SelectExerciceModal = ({}: Props) => {
  const [exercices, setExercice] = useState<Exercise[]>()
  const [searchedExercices, setSearchedExercices] = useState<Exercise[]>()
  const [query, setQuery] = useState('')
  const { setIsLoading, setError } = useAppContext()

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (exercices) {
      const filtered = exercices.filter(
        (exercise) =>
          exercise.title.toLowerCase().includes(query.toLowerCase()) ||
          exercise.type.toLowerCase().includes(query.toLowerCase()) ||
          exercise.targetedMuscles.toLowerCase().includes(query.toLowerCase())
      )
      setSearchedExercices(filtered)
    }
  }, [query, exercices])

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
        setSearchedExercices(result.data) // Initialise avec toutes les données
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

  if (!exercices) {
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
        <ExercicesList exercices={searchedExercices || []} />
      </div>
    </div>
  )
}

export default SelectExerciceModal
