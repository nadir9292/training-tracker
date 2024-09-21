import { AlertIcon } from '@/src/components/SvgRessource'
import { UserData } from '@/types/user'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

type Props = { closeModal: any; isModal: boolean; userFormData: UserData }

const FormProfile = ({ closeModal, isModal, userFormData }: Props) => {
  const [userFormDataLocal, setUserFormDataLocal] = useState<UserData>()

  useEffect(() => {
    setUserFormDataLocal(userFormData)
  }, [userFormData])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUserFormDataLocal((prevuserContext: any) => ({
      ...prevuserContext,
      [name]: value,
    }))
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { pseudo, height, weight, gender, dateOfBirth } =
      e.target as typeof e.target & {
        pseudo: { value: string }
        height: { value: string }
        weight: { value: string }
        gender: { value: string }
        dateOfBirth: { value: string }
      }

    if (
      pseudo.value &&
      height.value &&
      weight.value &&
      gender.value &&
      dateOfBirth.value
    ) {
      try {
        const response = await fetch('/api/submit-profile', {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({
            email: userFormData.email || null,
            pseudo: pseudo.value,
            height: height.value,
            weight: weight.value,
            gender: gender.value,
            dateOfBirth: dateOfBirth.value,
          }),
        })

        const { data } = await response.json()
        if (data) {
          isModal ? closeModal() : console.log('profile updated : ', data)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    } else {
      console.error('Missing required fields')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 font-happyMonkey text-lg">
        {isModal ? (
          <div className="flex items-center w-fit mx-auto">
            <AlertIcon width={30} height={30} />
            <span className="ml-2"> Please complete your profile :</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/2 uppercase text-center font-happyMonkey font-bold mb-2">
          Pseudo
        </label>
        <input
          className="font-gray-900 basis-1/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="pseudo"
          type="text"
          placeholder="Pseudo"
          required={true}
          value={userFormDataLocal?.pseudo || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/2 uppercase text-center font-happyMonkey font-bold mb-2">
          height (cm)
        </label>
        <input
          className="font-gray-900 basis-1/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="height"
          type="number"
          placeholder="Height (cm)"
          required={true}
          value={userFormDataLocal?.height || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/2 uppercase text-center font-happyMonkey font-bold mb-2">
          weight (kg)
        </label>
        <input
          className="font-gray-900 basis-1/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="weight"
          type="number"
          placeholder="Weight (kg)"
          required={true}
          value={userFormDataLocal?.weight || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/2 uppercase text-center font-happyMonkey font-bold mb-2">
          gender
        </label>
        <input
          className="font-gray-900 basis-1/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="gender"
          type="text"
          placeholder="Gender"
          required={true}
          value={userFormDataLocal?.gender || ''}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row items-center">
        <label className="basis-1/2 uppercase text-center font-happyMonkey font-bold mb-2">
          birthday (dd/mm/yyyy)
        </label>
        <input
          className="font-gray-900 basis-1/2 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-10 w-full"
          name="dateOfBirth"
          type="text"
          placeholder="Date of birth (dd/mm/yyyy)"
          required={true}
          value={userFormDataLocal?.dateOfBirth || ''}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full shadow-xl mt-4 hover:scale-105 hover:border-gray-900 hover:bg-purple-400 bg-periwinkle font-montserrat font-extrabold text-2xl border-2 py-4 px-4 rounded-xl"
      >
        {isModal ? 'Confirm' : 'Update your profile'}
      </button>
    </form>
  )
}

export default FormProfile
