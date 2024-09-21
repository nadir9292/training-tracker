'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import AddMoreInfo from '@/src/components/profile/AddMoreInfo'
import Typewriter from '@/src/components/Typewriter'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

export default function Index() {
  const { userContext, setUserContext } = useAppContext()
  const [windowWidth, setWindowWidth] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isOpenFormProfile, setIsOpenFormProfile] = useState(false)

  // --------ADD THIS IN COMPONENT and LIMIT CALL-----------------
  const { data: session } = useSession()
  const { setError, setIsLoading, error } = useAppContext()

  useEffect(() => {
    if (!session) {
      return
    }
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `/api/get-profile?email=${session.user?.email}`
        )
        if (!response.ok) {
          throw new Error('Error : cannot get data')
        }
        const result = await response.json()
        if (result.data[0].height === null) {
          setIsOpenFormProfile(true)
          // ---- FINISH COMPLETE PROFILE AND VALIDATION FORM ------------
        }
        localStorage.setItem('userData', JSON.stringify(result.data[0]))
        setUserContext(result.data[0])
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

  useEffect(() => {
    setMounted(true)
    const handleWindowResize = () => setWindowWidth(window.innerWidth)

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  if (!userContext) {
    return <Loading isLoading={true} />
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <AddMoreInfo
        isOpen={isOpenFormProfile}
        toggleModal={() => setIsOpenFormProfile(!isOpenFormProfile)}
        userFormData={userContext}
      />
      <div className="py-4 w-80 md:w-192 mx-auto mt-4 md:mt-24">
        <h1 className="text-center font-passion text-offWhite text-6xl font-extrabold -mb-8 text-shadow-sm shadow-gray-900/50">
          TRAINING
        </h1>
        <h1 className="text-center text-4xl text-offWhite font-orbitron mb-16 text-shadow-sm shadow-gray-900/50">
          <Typewriter
            style="text-center uppercase font-orbitron underline text-offWhite text-4xl md:text-6xl font-bold"
            text=".tracker"
            delay={100}
          />
        </h1>
      </div>
    </>
  )
}
