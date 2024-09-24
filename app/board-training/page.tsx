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
  const { setError, setIsLoading, error } = useAppContext()

  // --------ADD THIS IN COMPONENT-----------------
  const [programs, setPrograms] = useState<Program[]>([])
  const [exercises, setExercises] = useState<Exercise[]>([])

  useEffect(() => {
    if (!session) return

    const fetchData = async (
      url: string,
      setData: React.Dispatch<React.SetStateAction<any[]>>
    ) => {
      try {
        setIsLoading(true)
        const response = await fetch(url)
        if (!response.ok) throw new Error('Error: cannot get data')

        const result = await response.json()
        setData(result.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData('/api/get-program', setPrograms)
    fetchData('/api/get-exercise', setExercises)
  }, [session])
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
