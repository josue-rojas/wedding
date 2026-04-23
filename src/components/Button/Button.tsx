import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

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
  return (
    <button
      type={type}
      className={`button button--${variant}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
