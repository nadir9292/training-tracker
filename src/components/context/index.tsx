'use client'

import { createContext, useContext, useState } from 'react'

const AppContext = createContext<any>(undefined)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isOpenMenuNavbar, setIsOpenMenuNavbar] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isError,
        isLoading,
        isOpenMenuNavbar,
        setIsError,
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
