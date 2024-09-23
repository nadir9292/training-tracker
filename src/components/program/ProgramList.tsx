'use client'

import React, { useState } from 'react'
import { Program } from '@/src/types/programs'
import { useTrail, animated } from '@react-spring/web'
import ProgramModal from '@/src/components/program/ProgramModal'

type Props = { programs: Program[] }

const ProgramList = ({ programs }: Props) => {
  const [isOpenProgramModal, setIsOpenProgramModal] = useState<boolean>(false)
  const [selectedProgram, setselectedProgram] = useState<Program>()

  const toggleModalProgram = () => {
    setIsOpenProgramModal(!isOpenProgramModal)
  }

  const openProgramModal = (program: Program) => {
    setselectedProgram(program)
    toggleModalProgram()
  }

  const trails = useTrail(programs.length, {
    from: { opacity: 0, scale: 1.2 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 300,
      mass: 1.5,
      tension: 120,
      friction: 14,
      precision: 0.001,
    },
  })

  return (
    <div className="grid grid-cols-2 gap-2 text-sm max-h-[75vh] mt-4 py-2 px-4">
      {trails.map((props, index) => (
        <animated.div style={{ ...props }} key={index}>
          <div
            onClick={() => openProgramModal(programs[index])}
            key={index}
            className="h-48 rounded-2xl shadow-xl bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${programs[index].image})`,
            }}
          >
            <div
              className="grid grid-cols-1 rounded-xl w-full mx-4 h-32 py-2 shadow-xl bg-white/30 backdrop-blur-lg"
              style={{ zIndex: 100 }}
            >
              <h1 className="text-center font-extrabold uppercase truncate text-wrap">
                {programs[index].title}
              </h1>
              <h1 className="text-center">45min</h1>
              <h1 className="text-center">
                {JSON.parse(programs[index].listExercises).length} exercises
              </h1>
            </div>
          </div>
        </animated.div>
      ))}
      <ProgramModal
        isOpen={isOpenProgramModal}
        program={selectedProgram!}
        toggleOpenModal={toggleModalProgram}
      />
    </div>
  )
}

export default ProgramList
