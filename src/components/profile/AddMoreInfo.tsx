import FormProfile from '@/src/components/profile/FormProfile'
import { CloseIcon } from '@/src/components/SvgRessource'
import React from 'react'

type Props = { isOpen: boolean; toggleModal: any }

const AddMoreInfo = ({ isOpen, toggleModal }: Props) => {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center backdrop-blur-xl"
      style={{ zIndex: 100 }}
    >
      <div className="w-[90vw] md:w-150 grid grid-cols-1 gap-2 place-content-center px-4 py-8 bg-offWhite rounded-2xl shadow-xl">
        <button
          className="text-left w-fit rounded-xl py-1 px-3 hover:bg-gray-400 mb-4 -mt-3"
          onClick={toggleModal}
        >
          <CloseIcon width={20} height={20} />
        </button>
        <FormProfile />
      </div>
    </div>
  )
}

export default AddMoreInfo
