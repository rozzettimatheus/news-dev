import { NewsDevLogo } from './logo'
import { Menu } from './menu'
import { SignInFlow } from './sign-in-flow'

export function Header() {
  return (
    <header className="flex h-20 bg-slate-50 dark:bg-zinc-950 border-b border-slate-300 sticky top-0 z-30 dark:border-zinc-700 px-6 md:px-8">
      <div className="flex items-center mx-auto max-w-[1380px] w-full">
        <NewsDevLogo />
        <nav className="hidden md:flex items-center h-20 ml-20 gap-8">
          <a
            href="/"
            className="cursor-pointer inline-block relative px-2 h-20 leading-[5rem] text-slate-800 hover:text-yellow-500 dark:text-zinc-400 dark:hover:text-zinc-50 transition active"
          >
            Home
          </a>
          <a
            href="/articles"
            className="cursor-pointer inline-block relative px-2 h-20 leading-[5rem] text-slate-800 hover:text-yellow-500 dark:text-zinc-400 dark:hover:text-zinc-50 transition"
          >
            Articles
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Menu />
          <SignInFlow />
        </div>
      </div>
    </header>
  )
}
