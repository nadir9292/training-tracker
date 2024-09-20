'use client'

import Image from 'next/image'
import React from 'react'

type Props = { isLoading: boolean }

export default function Loading({ isLoading }: Props) {
  if (!isLoading) {
    return null
  }

  return (
    <div
      className="inset-0 mt-[50vw] grid grid-cols-1 place-content-center justify-center backdrop-blur-xl"
      style={{ zIndex: 100 }}
    >
      <Image
        className="animate-spin mx-auto"
        src="/loading_logo.png"
        alt="loading image"
        width={150}
        height={150}
        priority
      />
      <h1 className="text-center mt-6 font-happyMonkey text-3xl animate-pulse">
        Loading...
      </h1>
    </div>
  )
}
