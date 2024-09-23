'use client'

import React from 'react'
import Image from 'next/image'
import { Program } from '@/src/types/programs'

type Props = { programs: Program[] }

const ProgramList = ({ programs }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 text-xs max-h-[80vh] overflow-auto">
      {programs.map(
        ({ id, image, listExercises, title, visibility, userId }) => (
          <div key={id} className="border-2">
            <Image
              src={image || '/poids.png'}
              width={400}
              height={0}
              priority
              alt="image programs"
              className="object-none w-full h-20"
            />
            <div
              className="grid grid-cols-1 gap-2 px-2 bg-red-400 h-fit"
              style={{ zIndex: 100 }}
            >
              <h1 className="mt-2 text-center uppercase">{title}</h1>
              <h1 className="text-center">Total time : 45min</h1>
              <h1 className="text-center bg-wisteria w-fit mx-auto py-1 px-2 outline rounded">
                {JSON.parse(listExercises).length} exercises
              </h1>
            </div>
          </div>
        )
      )}
      {programs.map(
        ({ id, image, listExercises, title, visibility, userId }) => (
          <div key={id} className="border-2">
            <Image
              src={image || '/poids.png'}
              width={400}
              height={0}
              priority
              alt="image programs"
              className="object-none w-full h-20"
            />
            <div
              className="grid grid-cols-1 gap-2 px-2 bg-red-400 h-fit"
              style={{ zIndex: 100 }}
            >
              <h1 className="mt-2 text-center uppercase">{title}</h1>
              <h1 className="text-center">Total time : 45min</h1>
              <h1 className="text-center bg-wisteria w-fit mx-auto py-1 px-2 outline rounded">
                {JSON.parse(listExercises).length} exercises
              </h1>
            </div>
          </div>
        )
      )}
      {programs.map(
        ({ id, image, listExercises, title, visibility, userId }) => (
          <div key={id} className="border-2">
            <Image
              src={image || '/poids.png'}
              width={400}
              height={0}
              priority
              alt="image programs"
              className="object-none w-full h-20"
            />
            <div
              className="grid grid-cols-1 gap-2 px-2 bg-red-400 h-fit"
              style={{ zIndex: 100 }}
            >
              <h1 className="mt-2 text-center uppercase">{title}</h1>
              <h1 className="text-center">Total time : 45min</h1>
              <h1 className="text-center bg-wisteria w-fit mx-auto py-1 px-2 outline rounded">
                {JSON.parse(listExercises).length} exercises
              </h1>
            </div>
          </div>
        )
      )}
      {programs.map(
        ({ id, image, listExercises, title, visibility, userId }) => (
          <div key={id} className="border-2">
            <Image
              src={image || '/poids.png'}
              width={400}
              height={0}
              priority
              alt="image programs"
              className="object-none w-full h-20"
            />
            <div
              className="grid grid-cols-1 gap-2 px-2 bg-red-400 h-fit"
              style={{ zIndex: 100 }}
            >
              <h1 className="mt-2 text-center uppercase">{title}</h1>
              <h1 className="text-center">Total time : 45min</h1>
              <h1 className="text-center bg-wisteria w-fit mx-auto py-1 px-2 outline rounded">
                {JSON.parse(listExercises).length} exercises
              </h1>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ProgramList
