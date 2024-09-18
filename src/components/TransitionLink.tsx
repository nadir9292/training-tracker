'use client'

import Link, { LinkProps } from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    const pagesContent = document.querySelector('.pagesContent')

    // Applique la classe fade-in pour la transition
    pagesContent?.classList.add('fade-in')
    pagesContent?.classList.remove('show')

    // Attendez la fin de l'animation de disparition
    await sleep(200)

    // Changez de route
    router.push(href)
    await sleep(200) // Attendre après la navigation

    // Réapplique la classe show pour déclencher le fade-in
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
