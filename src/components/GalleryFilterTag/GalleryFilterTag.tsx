import styles from './styles.module.css'

type GalleryFilterTagProps = {
  label: string
  active: boolean
  onClick: () => void
}

export function GalleryFilterTag({ label, active, onClick }: GalleryFilterTagProps) {
  return (
    <button
      type="button"
      className={[styles.tag, active ? styles.tagActive : styles.tagInactive].join(' ')}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </button>
  )
}
