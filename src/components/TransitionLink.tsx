'use client'

import Link, { LinkProps } from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/src/components/context'

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
  className: string
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  ...props
}) => {
  const { setIsOpenMenuNavbar } = useAppContext()
  const router = useRouter()

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    setIsOpenMenuNavbar(false)
    const pagesContent = document.querySelector('.pagesContent')

    pagesContent?.classList.add('fade-in')
    pagesContent?.classList.remove('show')

    await sleep(200)

    router.push(href)
    await sleep(200)

    pagesContent?.classList.add('show')
  }

  return (
    <Link
      {...props}
      href={href}
      onClick={handleTransition}
      className={className}
    >
      {children}
    </Link>
  )
}
