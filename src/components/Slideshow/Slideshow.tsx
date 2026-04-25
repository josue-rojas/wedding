import { useEffect, useState } from 'react'
import styles from './styles.module.css'

type SlideshowProps = {
  slides: string[]
  interval?: number
  className?: string
}

export function Slideshow({ slides, interval = 4500, className }: SlideshowProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  return (
    <div className={[styles.slideshow, className].filter(Boolean).join(' ')}>
      {slides.map((src, i) => (
        <img
          key={`${i}-${src}`}
          className={`${styles.slide}${i === current ? ` ${styles.slideActive}` : ''}`}
          src={src}
          alt=""
          aria-hidden="true"
        />
      ))}
      {slides.length > 1 && (
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot}${i === current ? ` ${styles.dotActive}` : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
