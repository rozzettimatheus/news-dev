'use client'

import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { AlignRight } from 'lucide-react'

export function Menu() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          className="inline-block md:hidden rounded-md p-1.5 outline-none focus:ring-2 focus:ring-yellow-300 data-[state=open]:text-yellow-500 data-[state=open]:bg-zinc-800"
          aria-label="Navigation"
        >
          <AlignRight className="h-6 w-6 text-inherit" />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          sideOffset={6}
          className="w-max rounded-md bg-zinc-700 px-4 py-2"
        >
          <Dropdown.Arrow className="fill-zinc-700" />
          <Dropdown.Label className="text-xs uppercase font-bold text-yellow-500 mb-2">
            Pages
          </Dropdown.Label>
          <Dropdown.Item>
            <a href="/">Home</a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a href="/articles">Articles</a>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
