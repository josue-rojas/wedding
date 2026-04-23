import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export type NavigationItem = {
  label: string
  to: string
}

type NavigationProps = {
  items: NavigationItem[]
}

export function Navigation({ items }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-title" to="/">
          Josue &amp; Partner
        </NavLink>
        <button
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="menu-button"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <nav className={`site-nav${isOpen ? ' is-open' : ''}`}>
          {items.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' is-active' : ''}`
              }
              end={item.to === '/'}
              onClick={() => setIsOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
