import { TransitionLink } from '@/src/components/TransitionLink'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className="grid grid-cols-1 place-content-center">
      <Image
        className="mx-auto mt-32"
        src="/404_logo.png"
        width={150}
        height={150}
        priority
        alt="404 logo"
      />
      <h1 className="font-happyMonkey text-3xl text-center">404 not found</h1>
      <TransitionLink
        href="/"
        className="text-center text-2xl text-blue-500 mt-12 underline"
      >
        Go back here
      </TransitionLink>
    </div>
  )
}
