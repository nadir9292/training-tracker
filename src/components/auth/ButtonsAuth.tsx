import { signIn } from '@/auth'
import Image from 'next/image'

type Props = { provider: string; logoProvider: string }

const ButtonAuth = ({ provider, logoProvider }: Readonly<Props>) => {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider, { redirectTo: process.env.NEXT_PUBLIC_BASE_URL })
      }}
    >
      <button type="submit" className="flex items-center hover:scale-105">
        <Image src={logoProvider} height={60} width={60} alt="provider logo" />
      </button>
    </form>
  )
}

export default ButtonAuth
