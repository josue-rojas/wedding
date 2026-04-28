import { useState } from 'react'
import hero from '../assets/hero.png'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import wedding from '../assets/wedding.jpg'
import { GalleryFilterTag } from '../components/GalleryFilterTag/GalleryFilterTag'
import { LazyImage } from '../components/LazyImage/LazyImage'
import { PageLayout } from '../components/PageLayout/PageLayout'
import styles from './styles.module.css'

type GalleryItem = {
  src: string
  alt: string
  year: number
}

const GALLERY_ITEMS: GalleryItem[] = [
  { src: hero2, year: 2022, alt: 'Together' },
  { src: hero3, year: 2022, alt: 'Portrait session' },
  { src: hero, year: 2023, alt: 'Engagement session' },
  { src: hero4, year: 2023, alt: 'Couple stroll' },
  { src: wedding, year: 2023, alt: 'Venue visit' },
  { src: hero2, year: 2024, alt: 'Family dinner' },
  { src: hero3, year: 2024, alt: 'Brunch with friends' },
  { src: hero4, year: 2024, alt: 'Celebration dinner' },
  { src: hero, year: 2025, alt: 'Pre-wedding shoot' },
  { src: wedding, year: 2025, alt: 'Wedding day' },
  { src: hero2, year: 2025, alt: 'Getting ready' },
  { src: hero3, year: 2025, alt: 'Reception moments' },
]

const YEARS = [...new Set(GALLERY_ITEMS.map((item) => item.year))].sort()

export function GalleryPage() {
  const [activeYear, setActiveYear] = useState<number | null>(null)

  const filtered = activeYear === null ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.year === activeYear)

  return (
    <PageLayout
      title="Gallery"
      intro="Engagement and pre-wedding moments captured through the years."
      className={styles.galleryLayout}
    >
      <div className={styles.filterBar}>
        <GalleryFilterTag label="All" active={activeYear === null} onClick={() => setActiveYear(null)} />
        {YEARS.map((year) => (
          <GalleryFilterTag
            key={year}
            label={String(year)}
            active={activeYear === year}
            onClick={() => setActiveYear(year)}
          />
        ))}
      </div>

      <div className={styles.galleryGrid}>
        {filtered.map((item, i) => (
          <div key={`${item.year}-${i}`} className={styles.galleryCell}>
            <LazyImage src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

