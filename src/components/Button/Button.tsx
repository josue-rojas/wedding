import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.css'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: ButtonVariant
}

export function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary

  return (
    <button
      type={type}
      className={[styles.button, variantClass, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
