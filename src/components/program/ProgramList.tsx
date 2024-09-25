'use client'

import React, { useEffect, useState } from 'react'
import { Program } from '@/src/types/programs'
import { useTrail, animated } from '@react-spring/web'
import ProgramModal from '@/src/components/program/ProgramModal'
import { Exercise } from '@/src/types/exercise'

type Props = { programs: Program[]; exercises: Exercise[] }

const ProgramList = ({ programs, exercises }: Props) => {
  const [windowHeight, setWindowHeight] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isOpenProgramModal, setIsOpenProgramModal] = useState<boolean>(false)
  const [selectedProgram, setselectedProgram] = useState<Program>()

  useEffect(() => {
    setMounted(true)
    const handleWindowResize = () => setWindowHeight(window.innerHeight)

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

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

  if (!mounted) {
    return null
  }

  return (
    <div
      className="grid grid-cols-2 gap-2 text-sm mt-4 py-2 px-4 overflow-y-auto"
      style={{ height: windowHeight - 210 }}
    >
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
              className="grid grid-cols-1 rounded-xl w-full mx-4 h-32 p-4 shadow-xl bg-white/30 backdrop-blur-lg"
              style={{ zIndex: 0 }}
            >
              <h1 className="text-center font-extrabold uppercase truncate text-pretty">
                {programs[index].title}
              </h1>
              <h1 className="text-center"> ≈ 45min</h1>
            </div>
          </div>
        </animated.div>
      ))}
      <ProgramModal
        isOpen={isOpenProgramModal}
        program={selectedProgram!}
        toggleOpenModal={toggleModalProgram}
        exercises={exercises}
      />
    </div>
  )
}

export default ProgramList
