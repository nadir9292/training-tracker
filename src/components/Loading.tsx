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
      className="absolute inset-0 flex justify-center items-center"
      style={{ zIndex: 100 }}
    >
      <div className="text-center">
        <Image
          className="animate-spin mx-auto"
          src="/loading_logo.png"
          alt="loading image"
          width={150}
          height={150}
          priority
        />
        <h1 className="mt-6 font-happyMonkey text-3xl animate-pulse">
          Loading...
        </h1>
      </div>
    </div>
  )
}
