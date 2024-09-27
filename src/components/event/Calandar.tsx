import { useState } from 'react'
import Calendar from 'react-calendar'
import './style.css'
import { Program } from '@/src/types/programs'
import ProgramDetails from '@/src/components/program/ProgramDetails'

type Event = {
  program: Program
  date: Date
}

const events: Event[] = []

const ProgramCalandar = () => {
  const [date, setDate] = useState<Date | null>(null)
  const [programSelected, setProgramSelected] = useState<Event | null>(null)

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const hasEvent = events.some(
        (event) =>
          event.date.getFullYear() === date.getFullYear() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getDate() === date.getDate()
      )
      return hasEvent ? 'event-day' : ''
    }
    return ''
  }

  const checkForEvent = (date: Date) => {
    const event = events.find(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    )
    if (event) {
      setProgramSelected(event)
    } else {
      setProgramSelected(null)
    }
  }

  return (
    <div className="mt-12 grid grid-cols-1 place-content-center items-center">
      <Calendar
        value={date}
        locale="en"
        className="font-happyMonkey bg-white/30 backdrop-blur-xl mx-auto rounded-2xl shadow-2xl w-[90vw] max-w-100 p-3 flex flex-col"
        tileClassName={tileClassName}
        onClickDay={(value) => {
          setDate(value)
          checkForEvent(value)
        }}
      />
      {programSelected ? (
        <div
          className="absolute w-[70vw] "
          onClick={() => setProgramSelected(null)}
        >
          <ProgramDetails
            exercises={JSON.parse(programSelected.program.listExercises!)}
            program={programSelected.program}
            isOpen={programSelected ? true : false}
            toggleOpenModal={() => setProgramSelected(null)}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ProgramCalandar
