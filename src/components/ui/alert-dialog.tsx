import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type BaseAlertDialogProps = {
  children: ReactNode
}
type AlertDialogTriggerProps = BaseAlertDialogProps
type AlertDialogContentProps = ComponentProps<typeof RadixAlertDialog.Content>
type AlertDialogTitleProps = BaseAlertDialogProps
type AlertDialogDescriptionProps = BaseAlertDialogProps
type AlertDialogCancelProps = {
  title?: string
  onCancel?: () => void
}
type AlertDialogActionProps = {
  title?: string
  onConfirm?: () => void
}

function AlertDialogTrigger({ children }: AlertDialogTriggerProps) {
  return <RadixAlertDialog.Trigger asChild>{children}</RadixAlertDialog.Trigger>
}

function AlertDialogContent({ className, ...props }: AlertDialogContentProps) {
  return (
    <RadixAlertDialog.Portal>
      <RadixAlertDialog.Overlay className="bg-zinc-950/40 fixed inset-0 backdrop-blur-sm" />
      <RadixAlertDialog.Content
        {...props}
        className={twMerge(
          'fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-md p-6 bg-zinc-900',
          className
        )}
      />
    </RadixAlertDialog.Portal>
  )
}

function AlertDialogTitle({ children }: AlertDialogTitleProps) {
  return (
    <RadixAlertDialog.Title className="text-zinc-100 text-lg md:text-xl font-bold leading-relaxed">
      {children}
    </RadixAlertDialog.Title>
  )
}

function AlertDialogDescription({ children }: AlertDialogDescriptionProps) {
  return (
    <RadixAlertDialog.Description className="text-zinc-400 text-md lg:text-lg leading-normal mt-4 mb-5">
      {children}
    </RadixAlertDialog.Description>
  )
}

function AlertDialogCancel({ title, onCancel }: AlertDialogCancelProps) {
  return (
    <RadixAlertDialog.Cancel asChild>
      <button
        className="min-w-[120px] text-zinc-200 focus:ring-4 focus:ring-zinc-700 outline-none font-semibold text-sm md:text-md rounded-full px-5 py-2 me-2 mb-2"
        onClick={onCancel}
      >
        {title ?? 'Cancel'}
      </button>
    </RadixAlertDialog.Cancel>
  )
}

function AlertDialogAction({ title, onConfirm }: AlertDialogActionProps) {
  return (
    <RadixAlertDialog.Action asChild>
      <button
        className="min-w-[120px] text-zinc-50 bg-red-600 hover:bg-red-500 transition focus:ring-4 focus:ring-red-400 font-semibold rounded-full text-sm md:text-md px-5 py-2 me-2 mb-2 focus:outline-none"
        onClick={onConfirm}
      >
        {title ?? 'Confirm'}
      </button>
    </RadixAlertDialog.Action>
  )
}

export const AlertDialog = {
  Root: RadixAlertDialog.Root,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Cancel: AlertDialogCancel,
  Action: AlertDialogAction
}
