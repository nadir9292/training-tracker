'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext<any>(undefined)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isOpenMenuNavbar, setIsOpenMenuNavbar] = useState(false)

  return (
    <AppContext.Provider
      value={{
        error,
        isLoading,
        isOpenMenuNavbar,
        setError,
        setIsLoading,
        setIsOpenMenuNavbar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
