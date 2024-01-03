import { NewsDevLogo } from './logo'
import { Menu } from './menu'
import { SignInFlow } from './sign-in-flow'

export function Header() {
  return (
    <header className="flex h-20 border-b border-zinc-700 px-6 md:px-8">
      <div className="flex items-center mx-auto max-w-[1380px] w-full">
        <NewsDevLogo />
        <nav className="hidden md:flex items-center h-20 ml-20 gap-8">
          <a
            href="/"
            className="cursor-pointer inline-block relative px-2 h-20 leading-[5rem] text-zinc-400 hover:text-zinc-50 transition active"
          >
            Home
          </a>
          <a
            href="/articles"
            className="cursor-pointer inline-block relative px-2 h-20 leading-[5rem] text-zinc-400 hover:text-zinc-50 transition"
          >
            Articles
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Menu className="md:hidden" />
          <SignInFlow />
        </div>
      </div>
    </header>
  )
}
