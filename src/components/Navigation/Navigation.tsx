import { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.siteHeaderInner}${isOpen ? ` ${styles.isOpen}` : ''}`}>
        <NavLink className={styles.navBrand} end to="/" onClick={() => setIsOpen(false)}>
          I+J
        </NavLink>

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
          className={`${styles.menuButton}${isOpen ? ` ${styles.isOpen}` : ''}`}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className={styles.menuIconLine} />
          <span className={styles.menuIconLine} />
        </button>
      </div>
    </header>
  )
}
