import type { InputHTMLAttributes } from 'react'

type UnderlineInputProps = InputHTMLAttributes<HTMLInputElement>

export function UnderlineInput({ className, ...props }: UnderlineInputProps) {
  return (
    <input
      className={`underline-input${className ? ` ${className}` : ''}`}
      {...props}
    />
  )
}
