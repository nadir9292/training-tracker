import { Program } from '@/src/types/programs'
import Image from 'next/image'
import React from 'react'

type Props = { isOpen: boolean; program: Program; toggleOpenModal: any }

const ProgramModal = ({ isOpen, program, toggleOpenModal }: Props) => {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl h-[80vh] w-[90vw] p-3"
      style={{
        zIndex: 200,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <button
        onClick={toggleOpenModal}
        className="absolute font-happyMonkey text-2xl px-2 rounded-xl -left-2 -top-2 bg-offWhite"
      >
        X
      </button>
      <Image
        className="rounded-xl"
        src={program.image}
        height={100}
        width={1000}
        alt="program image"
      />
      <h1 className="text-center text-2xl uppercase mt-2">{program.title}</h1>
    </div>
  )
}

export default ProgramModal
