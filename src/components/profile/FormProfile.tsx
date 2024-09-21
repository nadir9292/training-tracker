import { useAppContext } from '@/src/components/context'
import React, { ChangeEvent, FormEvent } from 'react'

const FormProfile = () => {
  const { userContext, setUserContext } = useAppContext()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserContext((prevuserContext: any) => ({
      ...prevuserContext,
      [name]: value,
    }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center mb-4 font-happyMonkey text-xl">
        Please complete your profile
      </h1>
      <input
        className="font-gray-900 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
        name="pseudo"
        type="text"
        placeholder="Pseudo"
        value={userContext?.pseudo || ''}
        onChange={handleChange}
      />
      <input
        className="font-gray-900 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
        name="height"
        type="number"
        placeholder="Height (cm)"
        value={userContext?.height || ''}
        onChange={handleChange}
      />
      <input
        className="font-gray-900 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
        name="weight"
        type="number"
        placeholder="Weight (kg)"
        value={userContext?.weight || ''}
        onChange={handleChange}
      />
      <input
        className="font-gray-900 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
        name="gender"
        type="text"
        placeholder="Gender"
        value={userContext?.gender || ''}
        onChange={handleChange}
      />
      <input
        className="font-gray-900 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
        name="dateOfBirth"
        type="text"
        placeholder="Date of birth (dd/mm/yyyy)"
        value={userContext?.dateOfBirth || ''}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-1/2 mx-auto shadow-xl mt-4 hover:scale-105 hover:border-gray-900 hover:bg-purple-400 bg-periwinkle font-montserrat font-extrabold text-2xl border-2 py-4 px-4 rounded-xl"
      >
        Confirm
      </button>
    </form>
  )
}

export default FormProfile
