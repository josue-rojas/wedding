import { useEffect, useState } from 'react'

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
    <div className={`slideshow${className ? ` ${className}` : ''}`}>
      {slides.map((src, i) => (
        <img
          key={`${i}-${src}`}
          className={`slideshow__slide${i === current ? ' slideshow__slide--active' : ''}`}
          src={src}
          alt=""
          aria-hidden="true"
        />
      ))}
      {slides.length > 1 && (
        <div className="slideshow__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`slideshow__dot${i === current ? ' slideshow__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
