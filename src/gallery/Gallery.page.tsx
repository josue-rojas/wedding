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
  id: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'together-2022', src: hero2, year: 2021, alt: 'Together' },
  { id: 'together-2022', src: hero2, year: 2022, alt: 'Together' },
  { id: 'portrait-2022', src: hero3, year: 2022, alt: 'Portrait session' },
  { id: 'engagement-2023', src: hero, year: 2023, alt: 'Engagement session' },
  { id: 'stroll-2023', src: hero4, year: 2023, alt: 'Couple stroll' },
  { id: 'venue-2023', src: wedding, year: 2023, alt: 'Venue visit' },
  { id: 'family-2024', src: hero2, year: 2024, alt: 'Family dinner' },
  { id: 'brunch-2024', src: hero3, year: 2024, alt: 'Brunch with friends' },
  { id: 'celebration-2024', src: hero4, year: 2024, alt: 'Celebration dinner' },
  { id: 'prewedding-2025', src: hero, year: 2025, alt: 'Pre-wedding shoot' },
  { id: 'weddingday-2025', src: wedding, year: 2025, alt: 'Wedding day' },
  { id: 'ready-2025', src: hero2, year: 2025, alt: 'Getting ready' },
  { id: 'reception-2025', src: hero3, year: 2025, alt: 'Reception moments' },
]

const YEARS = [...new Set(GALLERY_ITEMS.map((item) => item.year))].sort()

export function GalleryPage() {
  const [activeYear, setActiveYear] = useState<number | null>(null)

  const filtered = activeYear === null ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.year === activeYear)

  return (
    <PageLayout
      title="Gallery"
      intro="Take a peek into our journey together. The adventures, the milestones, and all the beautiful moments that led us here."
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
        {filtered.map((item) => (
          <div key={item.id} className={styles.galleryCell}>
            <LazyImage src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

