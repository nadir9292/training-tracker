import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  HomeIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import React from 'react'

type Props = { isOpen: boolean }

export default function MenuMoblie({ isOpen }: Readonly<Props>) {
  if (!isOpen) return null

  return (
    <div className="shape font-comfortaa">
      <div className="my-6 flex flex-col items-center gap-4 text-3xl w-full text-offWhite font-bold">
        <span className="flex items-center">
          <HomeIcon className="h-12 w-12 mr-2" />
          Home
        </span>
        <span className="flex items-center">
          <Cog6ToothIcon className="h-12 w-12 mr-2" />
          Settings
        </span>
        <span className="flex items-center text-red-700">
          <ArrowLeftStartOnRectangleIcon className="h-12 w-12 mr-2" />
          Log out
        </span>
      </div>
    </div>
  )
}
