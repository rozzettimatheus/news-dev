import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { AlignRight } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type MenuProps = {
  className?: string
}

export function Menu({ className }: MenuProps) {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button className={twMerge('rounded-lg p-1.5', className)}>
          <AlignRight className="h-5 w-5" />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content className="w-max rounded-md bg-zinc-700 px-4 py-2">
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
