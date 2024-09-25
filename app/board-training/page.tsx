'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import AddProgramModal from '@/src/components/program/AddProgramModal'
import ProgramList from '@/src/components/program/ProgramList'
import { BoardIcon } from '@/src/components/SvgRessource'
import { Exercise } from '@/src/types/exercise'
import { Program } from '@/src/types/programs'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [isOpenAddProgram, setIsOpenAddProgram] = useState<boolean>(false)
  const { data: session } = useSession()
  const { setError, setIsLoading, userContext } = useAppContext()

  // --------ADD THIS IN COMPONENT-----------------
  const [programs, setPrograms] = useState<Program[]>([])
  const [exercises, setExercises] = useState<Exercise[]>([])

  useEffect(() => {
    if (!session || programs.length > 0 || exercises.length > 0) return

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const responsePrograms = await fetch('/api/get-program')
        const responseExercises = await fetch('/api/get-exercise')

        if (!responsePrograms.ok || !responseExercises.ok)
          throw new Error('Error fetching data')

        const programsResult = await responsePrograms.json()
        const exercisesResult = await responseExercises.json()

        setPrograms(programsResult.data)
        setExercises(exercisesResult.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [session, programs, exercises])
  // --------ADD THIS IN COMPONENT-----------------

  if (!programs[0] && !exercises[0]) {
    return <Loading isLoading={true} />
  }

  return (
    <div>
      <button
        onClick={() => setIsOpenAddProgram(!isOpenAddProgram)}
        className="flex items-center bg-wisteria px-4 py-2 mt-8 mx-auto rounded-lg shadow-xl"
      >
        +<BoardIcon width={30} height={30} />
        <span className="ml-2 uppercase font-happyMonkey font-bold">
          Create new program
        </span>
      </button>
      <ProgramList programs={programs} exercises={exercises} />
      <AddProgramModal
        isOpen={isOpenAddProgram}
        toggleOpenModal={() => setIsOpenAddProgram(!isOpenAddProgram)}
      />
    </div>
  )
}
