'use client'
import { Mail } from 'lucide-react'
import { nameUtils } from '@/lib/utils/name'
import * as Avatar from '@radix-ui/react-avatar'
import * as Card from '@radix-ui/react-hover-card'

type ProfileCardProps = {
  name?: string
  avatar?: string
  email?: string
}

export function ProfileCard({ name, email, avatar }: ProfileCardProps) {
  return (
    <Card.Content
      sideOffset={15}
      className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all flex flex-col items-center px-6 py-8 bg-zinc-800 w-max rounded-md relative before:absolute before:rounded-md before:bg-zinc-700 before:top-0 before:left-0 before:h-[40%] before:w-full before:z-0"
    >
      <>
        <Avatar.Root className="bg-yellow-500 inline-flex h-24 w-24 select-none items-center justify-center overflow-hidden rounded-full align-middle border-4 border-yellow-500 z-10">
          <Avatar.Image
            className="block w-full h-full object-cover"
            src={avatar}
            alt={name}
          />
          <Avatar.Fallback
            className="grid place-items-center w-full h-full bg-black text-lg font-semibold text-zinc-100"
            delayMs={500}
          >
            {nameUtils.getInitials(name)}
          </Avatar.Fallback>
        </Avatar.Root>
        <strong className="mt-4 font-bold text-lg leading-relaxed">
          {name}
        </strong>
        {!!email && (
          <span className="flex items-center gap-2 text-sm text-zinc-400 mt-2">
            <Mail className="h-4 w-4 text-zinc-400" /> {email}
          </span>
        )}
      </>
      <Card.Arrow className="fill-zinc-700" />
    </Card.Content>
  )
}
