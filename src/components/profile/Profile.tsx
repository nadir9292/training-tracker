'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import FormProfile from '@/src/components/profile/FormProfile'
import { UserData } from '@/src/types/user'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Profile = () => {
  const { data: session } = useSession()
  const { setError, setIsLoading, error } = useAppContext()
  // --------ADD THIS IN COMPONENT-----------------
  const [users, setUsers] = useState<UserData[]>([])

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
        setUsers(result.data)
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

  if (!users[0]) {
    return <Loading isLoading={true} />
  }

  return (
    <div className="grid grid-1 gap-2 place-content-center mt-12 rounded-xl mx-2">
      <div className="relative w-32 h-32 mx-auto">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: "url('/border-circle.png')",
            zIndex: 100,
            width: '100%',
            height: '100%',
          }}
        ></div>
        <Image
          src={session?.user?.image || '/avatar_default.png'}
          alt="avatar"
          width={120}
          height={120}
          priority
          className="rounded-full object-cover ml-[3px] mt-[4px]"
        />
      </div>

      <FormProfile isModal={false} closeModal={null} userFormData={users[0]} />
    </div>
  )
}

export default Profile
