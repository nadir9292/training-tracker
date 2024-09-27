import { Program } from '@/src/types/programs'
import React from 'react'

type Props = { program: Program; index: number; openProgramModal: any }

export default function ProgramItem({
  program,
  index,
  openProgramModal,
}: Props) {
  return (
    <div
      onClick={openProgramModal ? () => openProgramModal(program) : undefined}
      key={index}
      className="h-48 rounded-2xl shadow-xl bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${program.image})`,
      }}
    >
      <div
        className="grid grid-cols-1 rounded-xl w-full mx-4 h-32 p-4 shadow-xl bg-white/30 backdrop-blur-lg"
        style={{ zIndex: 0 }}
      >
        <h1 className="text-center font-extrabold uppercase truncate text-pretty">
          {program.title}
        </h1>
        <h1 className="text-center"> ≈ 45min</h1>
        <button
          className="bg-wisteria rounded-2xl h-8"
          onClick={(e) => {
            e.stopPropagation()
            console.log('pipi')
          }}
        >
          Schedule
        </button>
      </div>
    </div>
  )
}
