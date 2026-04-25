import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

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
    <header className={styles.siteHeader}>
      <div className={styles.siteHeaderInner}>
        <button
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className={styles.menuButton}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <nav className={`${styles.siteNav}${isOpen ? ` ${styles.isOpen}` : ''}`}>
          {items.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `${styles.siteNavLink}${isActive ? ` ${styles.isActive}` : ''}`
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
