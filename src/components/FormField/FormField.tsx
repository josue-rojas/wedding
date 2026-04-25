import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './styles.module.css'

type BaseProps = {
  id: string
  label: string
}

type InputProps = BaseProps & {
  as?: 'input'
} & InputHTMLAttributes<HTMLInputElement>

type SelectProps = BaseProps & {
  as: 'select'
  options: Array<{ label: string; value: string }>
} & SelectHTMLAttributes<HTMLSelectElement>

type TextAreaProps = BaseProps & {
  as: 'textarea'
} & TextareaHTMLAttributes<HTMLTextAreaElement>

type FormFieldProps = InputProps | SelectProps | TextAreaProps

function omitProps<T extends object, K extends keyof T>(
  props: T,
  keys: K[],
) {
  const value = { ...props } as T
  keys.forEach((key) => {
    delete (value as Record<PropertyKey, unknown>)[key]
  })
  return value as Omit<T, K>
}

export function FormField(props: FormFieldProps) {
  const { id, label } = props

  return (
    <div className={styles.formField}>
      <label htmlFor={id}>{label}</label>
      {props.as === 'select' ? (
        <select id={id} {...omitProps(props, ['as', 'id', 'label', 'options'])}>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : props.as === 'textarea' ? (
        <textarea id={id} {...omitProps(props, ['as', 'id', 'label'])} />
      ) : (
        <input id={id} {...omitProps(props, ['id', 'label'])} />
      )}
    </div>
  )
}
