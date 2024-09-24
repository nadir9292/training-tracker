import ExercisesList from '@/src/components/exercise/ExercisesList'
import { Exercise } from '@/src/types/exercise'
import { Program } from '@/src/types/programs'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {
  isOpen: boolean
  program: Program
  toggleOpenModal: any
  exercises: Exercise[]
}

const ProgramModal = ({
  isOpen,
  program,
  toggleOpenModal,
  exercises,
}: Props) => {
  const [exercisesProgram, setExercisesProgram] = useState<Exercise[]>([])

  useEffect(() => {
    if (program && program.listExercises) {
      setExercisesProgram(
        exercises.filter((exercise) =>
          program.listExercises.includes(exercise.id)
        )
      )
    }
  }, [program])

  const styles = useSpring({
    scale: isOpen ? 1 : 0.1,
    config: {
      tension: 180,
      friction: 12,
      precision: 0.001,
    },
  })

  if (!isOpen) {
    return null
  }

  return (
    <animated.div
      className="bg-white/30 backdrop-blur-xl font-montserrat rounded-2xl shadow-2xl h-[75vh] w-[90vw] p-3 flex flex-col"
      style={{
        zIndex: 200,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        ...styles,
      }}
    >
      <button
        onClick={toggleOpenModal}
        className="absolute font-happyMonkey text-2xl rounded-full font-bold px-3 -left-2 -top-2 bg-offWhite"
        style={{ zIndex: 100 }}
      >
        X
      </button>
      <div className="relative flex items-center justify-center h-32 w-full rounded-xl overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src={program.image}
          height={1000}
          width={1000}
          quality={50}
          alt="program image"
        />
        <h1 className="relative z-10 text-center italic text-2xl font-bold px-2 rounded-2xl shadow-xl text-offWhite backdrop-blur-lg text-shadow-lg shadow-gray-900/50">
          ≈ 45 min
        </h1>
      </div>
      <h1 className="text-center text-xl mt-2 uppercase font-bold text-white truncate">
        {program.title}
      </h1>
      <div className="overflow-y-auto overflow-x-hidden mt-2 flex-1">
        <ExercisesList exercises={exercisesProgram} />
      </div>
    </animated.div>
  )
}

export default ProgramModal
