'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const stored = document.documentElement.getAttribute('data-theme') as 'dark' | 'light'
    setTheme(stored || 'dark')

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  const links = [
    { href: '/roadmaps', label: 'roadmaps' },
    { href: '/projects', label: 'projects' },
  ]

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-label="brazy tools">
            <rect width="28" height="28" rx="6" fill="currentColor" className="logo-bg"/>
            <path d="M8 8h5c2.5 0 4 1.2 4 3.2 0 1.4-.8 2.4-2 2.8 1.5.4 2.5 1.5 2.5 3.1C17.5 19.5 15.8 21 13 21H8V8zm3 5h2c.8 0 1.3-.5 1.3-1.2S13.8 10.5 13 10.5h-2V13zm0 5.5h2.2c1 0 1.6-.6 1.6-1.4s-.6-1.4-1.6-1.4H11V18.5z" fill="currentColor" className="logo-letter"/>
          </svg>
          <span className="nav-brand">tools.brazy.xyz</span>
        </Link>

        <div className="nav-links">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname.startsWith(l.href) ? ' active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-4) var(--space-8);
          transition: background var(--transition), border-color var(--transition), backdrop-filter var(--transition);
        }

        .nav--scrolled {
          background: oklch(from var(--color-bg) l c h / 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-divider);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          text-decoration: none;
          color: var(--color-text);
        }

        .logo-bg { fill: var(--color-primary); }
        .logo-letter { fill: var(--color-text-inverse); }

        .nav-brand {
          font-family: var(--font-display);
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-text);
          letter-spacing: -0.01em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--space-1);
        }

        .nav-link {
          padding: var(--space-2) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-text-muted);
          text-decoration: none;
          border-radius: var(--radius-md);
        }

        .nav-link:hover { color: var(--color-text); background: var(--color-surface-offset); }
        .nav-link.active { color: var(--color-text); background: var(--color-surface); }

        .nav-right { display: flex; align-items: center; gap: var(--space-2); }

        .theme-toggle {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          color: var(--color-text-muted);
          background: transparent;
        }
        .theme-toggle:hover { color: var(--color-text); background: var(--color-surface-offset); }

        @media (max-width: 640px) {
          .nav { padding: var(--space-4) var(--space-5); }
          .nav-brand { display: none; }
        }
      `}</style>
    </>
  )
}
