import type { PropsWithChildren } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import type { ButtonVariant } from './Button'
import styles from './styles.module.css'

type LinkButtonProps = PropsWithChildren<LinkProps> & {
  variant?: ButtonVariant
  fullWidth?: boolean
}

export function LinkButton({
  children,
  className,
  variant = 'primary',
  fullWidth = false,
  ...props
}: LinkButtonProps) {
  const variantClass =
    variant === 'primary' ? styles.primary : variant === 'secondary' ? styles.secondary : styles.outline

  return (
    <Link
      className={[styles.button, variantClass, fullWidth ? styles.fullWidth : '', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Link>
  )
}
