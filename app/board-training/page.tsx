'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import ProgramList from '@/src/components/program/ProgramList'
import { AddIcon, BoardIcon } from '@/src/components/SvgRessource'
import { Program } from '@/src/types/programs'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Wave from 'react-wavify'

export default function page() {
  const { data: session } = useSession()
  const { setError, setIsLoading, error } = useAppContext()

  // --------ADD THIS IN COMPONENT-----------------
  const [programs, setPrograms] = useState<Program[]>([])

  useEffect(() => {
    if (!session) {
      return
    }
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/api/get-program')
        if (!response.ok) {
          throw new Error('Error : cannot get data')
        }
        const result = await response.json()
        setPrograms(result.data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error : ', error)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [session])
  // --------ADD THIS IN COMPONENT-----------------

  if (!programs[0]) {
    return <Loading isLoading={true} />
  }

  return (
    <div>
      <button className="flex items-center bg-wisteria px-4 py-2 mt-8 mx-auto rounded-lg shadow-xl">
        +<BoardIcon width={30} height={30} />
        <span className="ml-2 uppercase font-happyMonkey font-bold">
          Create new program
        </span>
      </button>
      <ProgramList programs={programs} />
    </div>
  )
}
