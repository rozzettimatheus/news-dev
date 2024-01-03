'use client'

import * as HoverCard from '@radix-ui/react-hover-card'
import { Github, X } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { signIn, signOut, useSession } from 'next-auth/react'

import { ProfileCard } from './profile-card'
import { LogoutDialog } from './logout-dialog'

export function SignInFlow() {
  const { data, status } = useSession()

  if (status === 'authenticated') {
    return (
      <div
        className={twMerge(
          'bg-zinc-800  h-12 px-6 rounded-full flex items-center justify-center text-zinc-50 font-bold'
        )}
      >
        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <div className="flex cursor-default">
              <Github className="w-5 h-5 md:w-6 md:h-6 mr-4 text-green-500" />
              <span className="hidden md:inline-block mr-4">
                {data?.user?.name}
              </span>
            </div>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <ProfileCard
              name={data.user?.name ?? 'User'}
              email={data.user?.email ?? ''}
              avatar={data.user?.image ?? ''}
            />
          </HoverCard.Portal>
        </HoverCard.Root>
        <LogoutDialog signOut={signOut} />
      </div>
    )
  }

  return (
    <button
      type="button"
      className={twMerge(
        'bg-zinc-800 h-10 md:h-12 px-5 md:px-6 rounded-full flex items-center justify-center text-zinc-50 font-bold transition hover:brightness-90'
      )}
      onClick={() => signIn('github')}
    >
      <Github className="w-6 h-6 md:w-7 md:h-7 md:mr-4 text-yellow-500" />
      <span className="hidden md:inline">Sign in with Github</span>
    </button>
  )
}
