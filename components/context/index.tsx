'use client'

import { createContext, useContext, useState } from 'react'

const AppContext = createContext<any>(undefined)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [jwt, setJwt] = useState(null)

  return (
    <AppContext.Provider value={{ jwt, setJwt }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
