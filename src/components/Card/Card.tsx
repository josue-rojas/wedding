import type { PropsWithChildren, ReactNode } from 'react'
import styles from './styles.module.css'

type CardProps = PropsWithChildren<{
  title?: ReactNode
  subtitle?: ReactNode
  className?: string
}>

export function Card({ children, className, subtitle, title }: CardProps) {
  return (
    <section className={[styles.card, className].filter(Boolean).join(' ')}>
      {title ? <h2>{title}</h2> : null}
      {subtitle ? <p className={styles.cardSubtitle}>{subtitle}</p> : null}
      {children}
    </section>
  )
}
