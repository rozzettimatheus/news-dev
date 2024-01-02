'use client'
import { useState } from 'react'
import { Github, X } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export function SignInButton() {
  const [isLogged, setIsLogged] = useState(false)

  function logout() {
    setIsLogged(false)
  }

  if (isLogged) {
    return (
      <div
        className={twMerge(
          'bg-zinc-800  h-12 px-6 rounded-full flex items-center justify-center text-zinc-50 font-bold'
        )}
      >
        <Github className="w-5 h-5 md:w-6 md:h-6 mr-4 text-green-500" />
        <span className="hidden md:inline">Gabriel Rozzetti</span>
        <button
          title="Logout"
          type="button"
          onClick={logout}
          className="cursor-pointer group"
        >
          <X className="w-6 h-6 ml-4 text-zinc-500 group-hover:text-zinc-300 transition" />
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      className={twMerge(
        'bg-zinc-800 h-10 md:h-12 px-5 md:px-6 rounded-full flex items-center justify-center text-zinc-50 font-bold transition hover:brightness-90'
      )}
      onClick={() => setIsLogged(true)}
    >
      <Github className="w-6 h-6 md:w-7 md:h-7 md:mr-4 text-yellow-500" />
      <span className="hidden md:inline">Sign in with Github</span>
    </button>
  )
}
