import type { PropsWithChildren, ReactNode } from 'react'

type CardProps = PropsWithChildren<{
  title?: ReactNode
  subtitle?: ReactNode
  className?: string
}>

export function Card({ children, className, subtitle, title }: CardProps) {
  return (
    <section className={`card${className ? ` ${className}` : ''}`}>
      {title ? <h2>{title}</h2> : null}
      {subtitle ? <p className="card__subtitle">{subtitle}</p> : null}
      {children}
    </section>
  )
}
