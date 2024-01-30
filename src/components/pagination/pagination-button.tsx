import { LucideIcon } from 'lucide-react'

type BasePaginationButtonProps = {
  disabled?: boolean
  onPageChange: () => void
}

type NumberedNavigationButtonProps = BasePaginationButtonProps & {
  type: 'page'
  page: number
  isCurrent?: boolean
}

type PaginationButtonWithIconProps = BasePaginationButtonProps & {
  type: 'icon'
  icon: LucideIcon
}

type PaginationButtonProps =
  | NumberedNavigationButtonProps
  | PaginationButtonWithIconProps

export function PaginationButton(props: PaginationButtonProps) {
  const { onPageChange, disabled, type } = props
  let children = undefined
  let current = undefined
  switch (type) {
    case 'icon':
      const { icon: Icon } = props
      children = <Icon className="h-6 w-6 group-disabled:text-zinc-500" />
      break
    case 'page':
      children = props.page
      current = props.isCurrent
      break
    default:
      throw new Error('Invalid navigation button type')
  }

  return (
    <button
      onClick={onPageChange}
      disabled={disabled}
      aria-disabled={disabled}
      data-current={current}
      className="group text-lg h-8 w-8 rounded-full flex items-center justify-center data-[current=true]:bg-zinc-50 data-[current=true]:text-zinc-900"
    >
      {children}
    </button>
  )
}
