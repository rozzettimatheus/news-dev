'use client'

import { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type NavLinkProps = LinkProps & {
  children?: ReactNode
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      className={twMerge(
        'cursor-pointer inline-block relative px-2 h-20 leading-[5rem] text-slate-800 hover:text-yellow-500 dark:text-zinc-400 dark:hover:text-zinc-50 transition',
        pathname === props.href ? 'active' : ''
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
