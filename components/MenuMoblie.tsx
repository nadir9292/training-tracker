import React from 'react'

type Props = { isOpen: Boolean }

export default function MenuMoblie({ isOpen }: Props) {
  if (!isOpen) return null

  return (
    <div className="bg-offWhite">
      <ul>
        <li>Home</li>
        <li>Settings</li>
        <li>log out</li>
      </ul>
    </div>
  )
}
