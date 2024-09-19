'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  const { data: session } = useSession()

  return (
    <div className="grid grid-1 gap-6 place-content-center mt-12">
      <Image
        src={session?.user?.image || '/avatar_default.png'}
        alt="avatar"
        width={70}
        height={70}
        priority
        className="rounded-full border-2 mx-auto border-gray-800"
      />
      <h1 className="text-gray-900 text-center font-happyMonkey font-bold text-2xl">
        {session?.user?.name}
      </h1>
      <h1 className="text-gray-900 text-center font-happyMonkey font-bold text-2xl">
        {session?.user?.email}
      </h1>
    </div>
  )
}

export default Profile
