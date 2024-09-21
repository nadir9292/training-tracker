'use client'

import { useSession } from 'next-auth/react'
import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext<any>(undefined)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isOpenMenuNavbar, setIsOpenMenuNavbar] = useState(false)
  const [userContext, setUserContext] = useState(null)

  return (
    <AppContext.Provider
      value={{
        error,
        isLoading,
        isOpenMenuNavbar,
        userContext,
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
