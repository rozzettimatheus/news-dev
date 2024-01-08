import { LogOut } from 'lucide-react'

import { AlertDialog } from './ui/alert-dialog'

type LogOutDialogProps = {
  signOut: () => void
}

export function LogoutDialog({ signOut }: LogOutDialogProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button
          title="Logout"
          type="button"
          className="cursor-pointer group  rounded-md outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-zinc-400"
        >
          <LogOut className="h-6 w-6 text-slate-100 dark:text-zinc-500 group-hover:text-slate-200 dark:group-hover:text-zinc-300 transition" />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Log out</AlertDialog.Title>
        <AlertDialog.Description>
          Do you really want to log out?
        </AlertDialog.Description>
        <div className="flex items-center justify-end gap-2 mt-4">
          <AlertDialog.Cancel title="No, take me back" />
          <AlertDialog.Action title="Yes, log me out" onConfirm={signOut} />
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
