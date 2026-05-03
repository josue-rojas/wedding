import { useState } from 'react'
import p20220213_165846 from '../assets/gallery/2022-02-13_165846.jpg'
import p20220326_134516 from '../assets/gallery/2022-03-26_134516.jpg'
import p20220806_162508 from '../assets/gallery/2022-08-06_162508.jpg'
import p20220901_174234 from '../assets/gallery/2022-09-01_174234.jpg'
import p20220905_163235 from '../assets/gallery/2022-09-05_163235.jpg'
import p20220910_132951 from '../assets/gallery/2022-09-10_132951.jpg'
import p20221018_163700 from '../assets/gallery/2022-10-18_163700.jpg'
import p20230211_205405 from '../assets/gallery/2023-02-11_205405.jpg'
import p20230224_125958 from '../assets/gallery/2023-02-24_125958.jpg'
import p20230701_121159 from '../assets/gallery/2023-07-01_121159.jpg'
import p20230723_202909 from '../assets/gallery/2023-07-23_202909.jpg'
import p20230724_152225 from '../assets/gallery/2023-07-24_152225.jpg'
import p20230726_141445 from '../assets/gallery/2023-07-26_141445.jpg'
import p20230901_182747 from '../assets/gallery/2023-09-01_182747.jpg'
import p20230915_184843 from '../assets/gallery/2023-09-15_184843.jpg'
import p20240112_213607 from '../assets/gallery/2024-01-12_213607.jpg'
import p20240120_110037 from '../assets/gallery/2024-01-20_110037.jpg'
import p20240316_134507 from '../assets/gallery/2024-03-16_134507.jpg'
import p20240707_023825 from '../assets/gallery/2024-07-07_023825.jpg'
import p20240707_024114 from '../assets/gallery/2024-07-07_024114.jpg'
import p20240803_204443 from '../assets/gallery/2024-08-03_204443.jpg'
import p20240828_105533 from '../assets/gallery/2024-08-28_105533.jpg'
import p20241005_151451 from '../assets/gallery/2024-10-05_151451.jpg'
import p20241229_234510 from '../assets/gallery/2024-12-29_234510.jpg'
import p20241230_003124 from '../assets/gallery/2024-12-30_003124.jpg'
import p20250215_180640 from '../assets/gallery/2025-02-15_180640.jpg'
import p20250217_203133 from '../assets/gallery/2025-02-17_203133.jpg'
import p20250531_194215 from '../assets/gallery/2025-05-31_194215.jpg'
import p20250613_213742 from '../assets/gallery/2025-06-13_213742.jpg'
import p20250809_191236 from '../assets/gallery/2025-08-09_191236.jpg'
import p20250901_104304 from '../assets/gallery/2025-09-01_104304.jpg'
import p20251108_140401 from '../assets/gallery/2025-11-08_140401.jpg'
import p20251115_032151 from '../assets/gallery/2025-11-15_032151.jpg'
import p20251128_125603 from '../assets/gallery/2025-11-28_125603.jpg'
import p20260204_183715 from '../assets/gallery/2026-02-04_183715.jpg'
import p20260321_180801 from '../assets/gallery/2026-03-21_180801.jpg'
import p20260415_172159 from '../assets/gallery/2026-04-15_172159.jpg'
import p20260418_114436 from '../assets/gallery/2026-04-18_114436.jpg'
import p20260502_165618 from '../assets/gallery/2026-05-02_165618.jpg'
import p20260502_175840 from '../assets/gallery/2026-05-02_175840.jpg'
import p20260502_182532 from '../assets/gallery/2026-05-02_182532.jpg'
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
  { id: '2022-02-13_165846', src: p20220213_165846, year: 2022, alt: 'Gallery photo from 2022-02-13' },
  { id: '2022-03-26_134516', src: p20220326_134516, year: 2022, alt: 'Gallery photo from 2022-03-26' },
  { id: '2022-08-06_162508', src: p20220806_162508, year: 2022, alt: 'Gallery photo from 2022-08-06' },
  { id: '2022-09-01_174234', src: p20220901_174234, year: 2022, alt: 'Gallery photo from 2022-09-01' },
  { id: '2022-09-05_163235', src: p20220905_163235, year: 2022, alt: 'Gallery photo from 2022-09-05' },
  { id: '2022-09-10_132951', src: p20220910_132951, year: 2022, alt: 'Gallery photo from 2022-09-10' },
  { id: '2022-10-18_163700', src: p20221018_163700, year: 2022, alt: 'Gallery photo from 2022-10-18' },
  { id: '2023-02-11_205405', src: p20230211_205405, year: 2023, alt: 'Gallery photo from 2023-02-11' },
  { id: '2023-02-24_125958', src: p20230224_125958, year: 2023, alt: 'Gallery photo from 2023-02-24' },
  { id: '2023-07-01_121159', src: p20230701_121159, year: 2023, alt: 'Gallery photo from 2023-07-01' },
  { id: '2023-07-23_202909', src: p20230723_202909, year: 2023, alt: 'Gallery photo from 2023-07-23' },
  { id: '2023-07-24_152225', src: p20230724_152225, year: 2023, alt: 'Gallery photo from 2023-07-24' },
  { id: '2023-07-26_141445', src: p20230726_141445, year: 2023, alt: 'Gallery photo from 2023-07-26' },
  { id: '2023-09-01_182747', src: p20230901_182747, year: 2023, alt: 'Gallery photo from 2023-09-01' },
  { id: '2023-09-15_184843', src: p20230915_184843, year: 2023, alt: 'Gallery photo from 2023-09-15' },
  { id: '2024-01-12_213607', src: p20240112_213607, year: 2024, alt: 'Gallery photo from 2024-01-12' },
  { id: '2024-01-20_110037', src: p20240120_110037, year: 2024, alt: 'Gallery photo from 2024-01-20' },
  { id: '2024-03-16_134507', src: p20240316_134507, year: 2024, alt: 'Gallery photo from 2024-03-16' },
  { id: '2024-07-07_023825', src: p20240707_023825, year: 2024, alt: 'Gallery photo from 2024-07-07' },
  { id: '2024-07-07_024114', src: p20240707_024114, year: 2024, alt: 'Gallery photo from 2024-07-07' },
  { id: '2024-08-03_204443', src: p20240803_204443, year: 2024, alt: 'Gallery photo from 2024-08-03' },
  { id: '2024-08-28_105533', src: p20240828_105533, year: 2024, alt: 'Gallery photo from 2024-08-28' },
  { id: '2024-10-05_151451', src: p20241005_151451, year: 2024, alt: 'Gallery photo from 2024-10-05' },
  { id: '2024-12-29_234510', src: p20241229_234510, year: 2024, alt: 'Gallery photo from 2024-12-29' },
  { id: '2024-12-30_003124', src: p20241230_003124, year: 2024, alt: 'Gallery photo from 2024-12-30' },
  { id: '2025-02-15_180640', src: p20250215_180640, year: 2025, alt: 'Gallery photo from 2025-02-15' },
  { id: '2025-02-17_203133', src: p20250217_203133, year: 2025, alt: 'Gallery photo from 2025-02-17' },
  { id: '2025-05-31_194215', src: p20250531_194215, year: 2025, alt: 'Gallery photo from 2025-05-31' },
  { id: '2025-06-13_213742', src: p20250613_213742, year: 2025, alt: 'Gallery photo from 2025-06-13' },
  { id: '2025-08-09_191236', src: p20250809_191236, year: 2025, alt: 'Gallery photo from 2025-08-09' },
  { id: '2025-09-01_104304', src: p20250901_104304, year: 2025, alt: 'Gallery photo from 2025-09-01' },
  { id: '2025-11-08_140401', src: p20251108_140401, year: 2025, alt: 'Gallery photo from 2025-11-08' },
  { id: '2025-11-15_032151', src: p20251115_032151, year: 2025, alt: 'Gallery photo from 2025-11-15' },
  { id: '2025-11-28_125603', src: p20251128_125603, year: 2025, alt: 'Gallery photo from 2025-11-28' },
  { id: '2026-02-04_183715', src: p20260204_183715, year: 2026, alt: 'Gallery photo from 2026-02-04' },
  { id: '2026-03-21_180801', src: p20260321_180801, year: 2026, alt: 'Gallery photo from 2026-03-21' },
  { id: '2026-04-15_172159', src: p20260415_172159, year: 2026, alt: 'Gallery photo from 2026-04-15' },
  { id: '2026-04-18_114436', src: p20260418_114436, year: 2026, alt: 'Gallery photo from 2026-04-18' },
  { id: '2026-05-02_165618', src: p20260502_165618, year: 2026, alt: 'Gallery photo from 2026-05-02' },
  { id: '2026-05-02_175840', src: p20260502_175840, year: 2022, alt: 'Gallery photo from 2026-05-02' },
  { id: '2026-05-02_182532', src: p20260502_182532, year: 2026, alt: 'Gallery photo from 2026-05-02' },
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

