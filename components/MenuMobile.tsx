import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type Props = { isOpen: boolean }

export default function MenuMobile({ isOpen }: Readonly<Props>) {
  if (!isOpen) return null

  return (
    <div className="font-happyMonkey flex justify-center items-center">
      <div className="grid grid-cols-1 gap-4 text-3xl text-offWhite font-bold">
        <Link href="/" className="flex items-center">
          <HomeIcon className="h-12 w-12 mr-2" />
          Home
        </Link>
        <Link href="/" className="flex items-center">
          <Cog6ToothIcon className="h-12 w-12 mr-2" />
          Settings
        </Link>
        <Link href="/" className="flex items-center text-red-700">
          <ArrowLeftStartOnRectangleIcon className="h-12 w-12 mr-2" />
          Log out
        </Link>
      </div>
    </div>
  )
}
