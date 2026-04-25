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
      <div className={`${styles.siteHeaderInner}${isOpen ? ` ${styles.isOpen}` : ''}`}>
        <NavLink className={styles.navBrand} end to="/" onClick={() => setIsOpen(false)}>
          J+I
        </NavLink>

        <nav className={`${styles.siteNav}${isOpen ? ` ${styles.navOpen}` : ''}`}>
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

        <NavLink
          className={({ isActive }) =>
            `${styles.navCta}${isActive ? ` ${styles.navCtaActive}` : ''}`
          }
          to="/rsvp"
          onClick={() => setIsOpen(false)}
        >
          RSVP
        </NavLink>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className={styles.menuButton}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
