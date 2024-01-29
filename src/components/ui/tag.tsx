import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TagProps = ComponentProps<'button'> & {
  name: string
}

export function Tag({ name, className, children: _, ...rest }: TagProps) {
  return (
    <button
      className={twMerge(
        'inline-block py-1 px-3  dark:bg-zinc-50 dark:text-zinc-950 bg-zinc-950 text-zinc-50 rounded-full text-sm',
        className
      )}
      {...rest}
    >
      {name}
    </button>
  )
}
