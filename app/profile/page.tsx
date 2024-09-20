import Profile from '@/src/components/Profile'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <>
      <Profile />
    </>
  )
}

export default page
