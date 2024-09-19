'use client'

import { createContext, useContext, useState } from 'react'

const AppContext = createContext<any>(undefined)

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}
