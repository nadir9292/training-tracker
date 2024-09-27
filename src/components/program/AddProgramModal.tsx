import { useAppContext } from '@/src/components/context'
import SelectExerciseModal from '@/src/components/exercise/SelectExerciceModal'
import { Program } from '@/src/types/programs'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

type Props = { isOpen: boolean; toggleOpenModal: any }

const AddProgramModal = ({ isOpen, toggleOpenModal }: Props) => {
  const { selectedExercises } = useAppContext()
  const [windowHeight, setWindowHeight] = useState(0)
  const [mounted, setMounted] = useState<boolean>(false)
  const [programSelected, setProgramSelected] = useState<Program>()

  useEffect(() => {
    setMounted(true)
    const handleWindowResize = () => setWindowHeight(window.innerHeight)

    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setProgramSelected((prevuserContext: any) => ({
      ...prevuserContext,
      [name]: value,
    }))
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body: Program = {
      id: programSelected?.id,
      image:
        'https://firebasestorage.googleapis.com/v0/b/training-tracker-7f304.appspot.com/o/programs-images%2Flow-angle-view-mans-legs-walking-past-dumbbells-gym.jpg?alt=media&token=1cca4bbc-2eaf-4ed5-a9e1-10b4d95482c0',
      listExercises: JSON.stringify(selectedExercises),
      title: programSelected?.title,
      visibility: true, // CHANGE THIS
      userId: null, // CHANGE THIS
    }
    try {
      const response = await fetch('/api/submit-program', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
      })

      const { data } = await response.json()
      if (data) {
        window.alert(`Your program has been created`)
      }
    } catch (error) {}
  }

  if (!mounted) {
    return null
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 h-[90vh] bg-white/30 backdrop-blur-xl p-2 font-happyMonkey">
      <button
        onClick={toggleOpenModal}
        className="border border-gray-900 rounded-xl py-1 px-2"
      >
        Close
      </button>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center mb-2 uppercase mt-2">
          Create your own program :
        </h1>
        <div className="flex place-content-center items-center">
          <h1 className="mx-2">TITLE</h1>
          <input
            className="font-gray-900 basis-1/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
            name="title"
            type="text"
            placeholder="Title"
            required={true}
            value={programSelected?.title || ''}
            onChange={handleChange}
          />
        </div>
        <div
          className="overflow-y-auto overflow-x-hidden border-2 border-offWhite rounded-xl"
          style={{ height: windowHeight - 320 }}
        >
          <SelectExerciseModal isSelectable={true} />
        </div>
        <button
          type="submit"
          className="w-full shadow-xl mt-4 hover:border-gray-900 hover:bg-purple-400 bg-periwinkle font-montserrat font-extrabold text-xl py-2 border-2  rounded-xl"
        >
          Add new program
        </button>
      </form>
    </div>
  )
}

export default AddProgramModal
