import ButtonAuth from '@/src/components/auth/ButtonsAuth'
import { Provider } from '@/src/types/provider'
import React from 'react'

const providers = [
  new Provider('google', '/logo_auth/google.png'),
  new Provider('discord', '/logo_auth/discord.png'),
  new Provider('github', '/logo_auth/github.png'),
]

export default function page() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 mt-[10vh]">
      <h1 className="text-center font-montserrat text-offWhite -mb-4 text-2xl font-extrabold text-shadow-sm shadow-gray-900/50">
        WELCOME to
      </h1>
      <h1 className="text-center font-bowlbyOne text-offWhite text-4xl font-extrabold text-shadow-sm shadow-gray-900/50">
        TRAINING<span className="font-orbitron text-3xl italic">.tracker</span>
      </h1>
      <div className="grid grid-cols-3 gap-2 mx-2 mt-32">
        {providers.map((provider) => (
          <ButtonAuth provider={provider.name} logoProvider={provider.logo} />
        ))}
      </div>
    </div>
  )
}
