'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'

interface BodyState {
  pseudo: string
  password: string
}

export default function SignInForm() {
  const [body, setBody] = useState<BodyState>({
    pseudo: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value,
    }))
  }

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as typeof e.target & {
      pseudo: { value: string }
      password: { value: string }
    }
    console.log(form.pseudo.value, form.password.value)
  }

  return (
    <form
      onSubmit={signIn}
      className="grid grid-cols-1 gap-2 w-[80vw] max-w-md"
    >
      <input
        className="font-gray-900 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-14 w-full"
        onChange={handleChange}
        name="pseudo"
        value={body.pseudo}
        type="text"
        placeholder="Pseudo"
      />
      <input
        className="font-gray-900 rounded-xl p-2 border-2 font-happyMonkey shadow-xl mb-2 h-14 w-full"
        onChange={handleChange}
        name="password"
        value={body.password}
        type="password"
        placeholder="Password"
      />
      <button
        type="submit"
        className="shadow-xl hover:scale-105 bg-periwinkle font-montserrat font-extrabold text-2xl border-2 py-4 px-4 mb-2 w-full rounded-xl"
      >
        LOG IN
      </button>
    </form>
  )
}
