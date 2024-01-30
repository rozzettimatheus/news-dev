import { NavLink } from '@/components/nav-link'
import { NewsDevLogo } from '../components/logo'
import { Menu } from '../components/menu'
import { SignInFlow } from '../components/sign-in-flow'

export function Header() {
  return (
    <header className="flex h-20 bg-slate-50 dark:bg-zinc-950 border-b border-slate-300 sticky top-0 dark:border-zinc-700 px-6 md:px-8">
      <div className="flex items-center mx-auto max-w-[1380px] w-full">
        <NewsDevLogo />
        <nav className="hidden md:flex items-center h-20 ml-20 gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/articles">Articles</NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Menu />
          <SignInFlow />
        </div>
      </div>
    </header>
  )
}
