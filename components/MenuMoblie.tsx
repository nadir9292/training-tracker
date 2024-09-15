import {
  ArrowLeftStartOnRectangleIcon,
  Cog6ToothIcon,
  HomeIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'
import React from 'react'

type Props = { isOpen: Boolean }

export default function MenuMoblie({ isOpen }: Props) {
  if (!isOpen) return null

  return (
    <div className=" bg-primaryTitle py-4 border-2 border-primaryBackground shadow-xl menuMobile">
      <ul className="my-6 flex flex-col items-center gap-2">
        <li className="flex items-center py-2 text-center text-3xl">
          <HomeIcon className="h-8 w-8" />
          <span>Home</span>
        </li>
        <li className="flex items-center py-2 text-center text-3xl">
          <Cog6ToothIcon className="h-8 w-8" />
          <span>Settings</span>
        </li>
        <li className="flex items-center py-2 text-center text-3xl">
          <ArrowLeftStartOnRectangleIcon className="h-8 w-8" />
          <span>Log out</span>
        </li>
      </ul>
    </div>
  )
}
