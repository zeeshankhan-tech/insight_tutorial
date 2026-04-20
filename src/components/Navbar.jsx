import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/cn'
import { TUITION_NAME, TUTOR_NAME } from '../constants.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/experience', label: 'Experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    cn(
      'relative py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg rounded-md',
      isActive ? 'text-primary' : 'text-page-text/80 hover:text-primary',
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-transparent transition-[background,box-shadow,backdrop-filter,border-color] duration-300',
        scrolled
          ? 'border-black/5 bg-page-bg/75 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-page-bg/65'
          : 'bg-page-bg/90',
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="rounded-md leading-tight text-primary transition hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg"
        >
          <span className="block text-lg font-semibold tracking-tight">{TUITION_NAME}</span>
          <span className="block text-xs font-medium text-muted">{TUTOR_NAME}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={cn(
                      'absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                    aria-hidden
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-page-text hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page-bg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-[57px] z-50 border-b border-black/5 bg-page-bg shadow-lg md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
                {links.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-lg px-3 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                        isActive ? 'bg-primary/10 text-primary' : 'text-page-text hover:bg-black/5',
                      )
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
