import SelectExerciceModal from '@/src/components/exercise/SelectExerciceModal'
import ProgramList from '@/src/components/program/ProgramList'
import { AddIcon } from '@/src/components/SvgRessource'
import React from 'react'

export default function page() {
  return (
    <div>
      <button className="flex items-center bg-emerald px-4 py-2 mt-8 mx-auto rounded-lg shadow-xl">
        <AddIcon width={30} height={30} />
        <span className="ml-2 uppercase font-happyMonkey font-bold">
          Create new program
        </span>
      </button>
      <ProgramList />
    </div>
  )
}
