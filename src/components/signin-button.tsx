'use client'
import { Github, X } from 'lucide-react'

export function SignInButton() {
  const isLoggedIn = false

  function logout() {
    console.log('logged out')
  }

  if (isLoggedIn) {
    return (
      <div className="bg-zinc-800  h-12 px-6 rounded-full flex items-center justify-center text-zinc-50 font-bold">
        <Github className="w-7 h-7 mr-4 text-green-500" />
        Gabriel Rozzetti
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
      className="bg-zinc-800  h-12 px-6 rounded-full flex items-center justify-center text-zinc-50 font-bold transition hover:brightness-90"
    >
      <Github className="w-7 h-7 mr-4 text-yellow-500" />
      Sign in with Github
    </button>
  )
}
