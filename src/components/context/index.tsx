'use client'

import { Exercise } from '@/src/types/exercise'
import { createContext, useContext, useState } from 'react'

const AppContext = createContext<any>(undefined)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [isOpenMenuNavbar, setIsOpenMenuNavbar] = useState(false)
  const [userContext, setUserContext] = useState(null)
  const [selectedExercises, setSelectedExercises] = useState<string[]>([])

  return (
    <AppContext.Provider
      value={{
        error,
        isLoading,
        isOpenMenuNavbar,
        userContext,
        isOpenPopup,
        selectedExercises,
        setSelectedExercises,
        setIsOpenPopup,
        setError,
        setIsLoading,
        setIsOpenMenuNavbar,
        setUserContext,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
