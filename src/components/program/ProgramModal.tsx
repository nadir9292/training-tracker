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
      className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl h-[75vh] w-[90vw] p-3 flex flex-col"
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
      <div className="overflow-y-auto overflow-x-hidden">
        <ExercisesList exercises={exercisesProgram} />
      </div>
    </animated.div>
  )
}

export default ProgramModal
