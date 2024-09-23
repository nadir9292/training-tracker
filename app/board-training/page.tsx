'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import ProgramList from '@/src/components/program/ProgramList'
import { AddIcon } from '@/src/components/SvgRessource'
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
      <button className="flex items-center bg-emerald px-4 py-2 mt-8 mx-auto rounded-lg shadow-xl">
        <AddIcon width={30} height={30} />
        <span className="ml-2 uppercase font-happyMonkey font-bold">
          Create new program
        </span>
      </button>
      <Wave
        fill="#FAF9F6"
        style={{ height: '90%', zIndex: 10, position: 'absolute' }}
        paused={false}
        options={{
          amplitude: 15,
          speed: 0.15,
          points: 3,
        }}
      />
      <div className="fixed z-50 bg-black mt-12 left-1/2 transform -translate-x-1/2 w-[85vw]">
        <ProgramList programs={programs} />
      </div>
    </div>
  )
}
