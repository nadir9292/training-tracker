import { signIn } from '@/auth'
import Image from 'next/image'

type Props = { provider: string; logoProvider: string }

const ButtonAuth = ({ provider, logoProvider }: Readonly<Props>) => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <button type="submit" className="flex items-center hover:scale-105">
        <Image src={logoProvider} height={50} width={50} alt="provider logo" />
      </button>
    </form>
  )
}

export default ButtonAuth
