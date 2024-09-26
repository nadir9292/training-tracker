'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import './style.css'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const ProgramCalandar = () => {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <div className="mt-12 grid grid-cols-1 place-content-center items-center">
      <h1 className="text-center text-offWhite text-2xl my-2">
        Your next training sessions are in purple working progress...
      </h1>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en"
        className="font-happyMonkey bg-white/30 backdrop-blur-xl mx-auto rounded-2xl shadow-2xl w-[90vw] max-w-100 p-3 flex flex-col"
      />
    </div>
  )
}

export default ProgramCalandar
