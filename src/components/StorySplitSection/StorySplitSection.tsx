import type { ReactNode } from 'react'
import { LazyImage } from '../LazyImage/LazyImage'
import styles from './styles.module.css'

type StorySplitSectionProps = {
  title: ReactNode
  imageSrc: string
  imageAlt: string
  paragraphs: ReactNode[]
  emphasisLine?: ReactNode
  reverse?: boolean
}

export function StorySplitSection({
  title,
  imageSrc,
  imageAlt,
  paragraphs,
  emphasisLine,
  reverse = false,
}: StorySplitSectionProps) {
  return (
    <section className={[styles.storySection, reverse ? styles.reverse : ''].filter(Boolean).join(' ')}>
      <div className={styles.imagePanel}>
        <LazyImage src={imageSrc} alt={imageAlt} className={styles.storyImage} />
      </div>

      <div className={styles.copyPanel}>
        <h2 className={styles.storyTitle}>{title}</h2>
        <div className={styles.storyBody}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {emphasisLine ? <p className={styles.storyEmphasis}>{emphasisLine}</p> : null}
      </div>
    </section>
  )
}
