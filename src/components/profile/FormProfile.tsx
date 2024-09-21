import { useAppContext } from '@/src/components/context'
import { AlertIcon } from '@/src/components/SvgRessource'
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
      <div className="mb-4 font-happyMonkey text-lg">
        <div className="flex items-center w-fit mx-auto">
          <AlertIcon width={30} height={30} />
          <span className="ml-2"> Please complete your profile :</span>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/3 uppercase text-center font-happyMonkey font-bold mb-2">
          Pseudo
        </label>
        <input
          className="font-gray-900 basis-2/3 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="pseudo"
          type="text"
          placeholder="Pseudo"
          value={userContext?.pseudo || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/3 uppercase text-center font-happyMonkey font-bold mb-2">
          height
        </label>
        <input
          className="font-gray-900 basis-2/3 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={userContext?.height || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/3 uppercase text-center font-happyMonkey font-bold mb-2">
          weight
        </label>
        <input
          className="font-gray-900 basis-2/3 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          value={userContext?.weight || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/3 uppercase text-center font-happyMonkey font-bold mb-2">
          gender
        </label>
        <input
          className="font-gray-900 basis-2/3 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="gender"
          type="text"
          placeholder="Gender"
          value={userContext?.gender || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/3 uppercase text-center font-happyMonkey font-bold mb-2">
          birthday
        </label>
        <input
          className="font-gray-900 basis-2/3 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="dateOfBirth"
          type="text"
          placeholder="Date of birth (dd/mm/yyyy)"
          value={userContext?.dateOfBirth || ''}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full mx-auto shadow-xl mt-4 hover:scale-105 hover:border-gray-900 hover:bg-purple-400 bg-periwinkle font-montserrat font-extrabold text-2xl border-2 py-4 px-4 rounded-xl"
      >
        Confirm
      </button>
    </form>
  )
}

export default FormProfile
