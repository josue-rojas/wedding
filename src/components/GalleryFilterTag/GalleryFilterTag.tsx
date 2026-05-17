import { Button } from '../Button/Button'

type GalleryFilterTagProps = {
  label: string
  active: boolean
  onClick: () => void
}

export function GalleryFilterTag({ label, active, onClick }: GalleryFilterTagProps) {
  return (
    <Button
      type="button"
      variant={active ? 'primary' : 'secondary'}
      onClick={onClick}
      aria-pressed={active}
    >
      {label}
    </Button>
  )
}
