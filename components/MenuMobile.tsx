import { HomeIcon, LogOutIcon, SettingsIcon } from '@/components/SvgRessource'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type Props = { isOpen: boolean }

export default function MenuMobile({ isOpen }: Readonly<Props>) {
  if (!isOpen) return null

  return (
    <div
      className="menuNavbar font-happyMonkey flex justify-center items-center w-80 mx-auto"
      style={{ zIndex: 90, position: 'relative', marginBottom: 250 }}
    >
      <div className="grid grid-cols-1 gap-4 text-3xl text-offWhite font-bold">
        <Link href="/" className="flex items-center">
          <HomeIcon height={50} width={50} />
          <span className="ml-2">Home</span>
        </Link>
        <Link href="/" className="flex items-center">
          <SettingsIcon height={50} width={50} />
          <span className="ml-2">Settings</span>
        </Link>
        <Link href="/" className="flex items-center text-red-500">
          <LogOutIcon height={50} width={50} />
          <span className="ml-2">Log out</span>
        </Link>
      </div>
    </div>
  )
}
