import { NewsDevLogo } from './logo'
import { SignInButton } from './signin-button'

export function Header() {
  return (
    <header className="flex h-20 border-b border-zinc-700 px-8">
      <div className="flex items-center mx-auto max-w-[1380px] w-full [&>:last-child]:ml-auto">
        <NewsDevLogo />
        <nav className="flex items-center h-20 ml-20 gap-8">
          <a className="cursor-pointer inline-block relative px-2 h-20 leading-[5rem] text-zinc-400 hover:text-zinc-50 transition active">
            Home
          </a>
          <a className="cursor-pointer inline-block relative px-2 h-20 leading-[5rem] text-zinc-400 hover:text-zinc-50 transition">
            Articles
          </a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
