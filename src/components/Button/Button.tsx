import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: ButtonVariant
  fullWidth?: boolean
}

export function Button({
  children,
  className,
  variant = 'primary',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? styles.primary : variant === 'secondary' ? styles.secondary : styles.outline

  return (
    <button
      type={type}
      className={[styles.button, variantClass, fullWidth ? styles.fullWidth : '', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
