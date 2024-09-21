'use client'

import { useAppContext } from '@/src/components/context'
import Loading from '@/src/components/Loading'
import FormProfile from '@/src/components/profile/FormProfile'
import { UserData } from '@/types/user'
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
    <div className="grid grid-1 gap-6 place-content-center mt-12 rounded-xl mx-2 py-4">
      <Image
        src={users[0]?.image || '/avatar_default.png'}
        alt="avatar"
        width={70}
        height={70}
        priority
        className="rounded-full border-2 mx-auto border-gray-800"
      />
      <FormProfile isModal={false} closeModal={null} userFormData={users[0]} />
    </div>
  )
}

export default Profile
