import type { InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

type UnderlineInputProps = InputHTMLAttributes<HTMLInputElement>

export function UnderlineInput({ className, ...props }: UnderlineInputProps) {
  return (
    <input
      className={[styles.underlineInput, className].filter(Boolean).join(' ')}
      {...props}
    />
  )
}
