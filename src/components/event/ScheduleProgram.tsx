import React from 'react'

type Props = { isOpen: boolean }

const ScheduleProgram = ({ isOpen }: Props) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="absolute grid grid-cols-1 rounded-xl w-full mx-4 h-32 p-4 shadow-xl bg-white/30 backdrop-blur-lg">
      <h1>toto pipi</h1>
    </div>
  )
}

export default ScheduleProgram
