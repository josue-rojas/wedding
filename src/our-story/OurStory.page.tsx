import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'
import styles from './styles.module.css'

const timeline = [
  { year: '2018', event: 'Met through mutual friends and shared tacos.' },
  { year: '2020', event: 'Moved into our first apartment together.' },
  { year: '2024', event: 'Got engaged during a weekend hike.' },
]

export function OurStoryPage() {
  return (
    <PageLayout
      title="Our Story"
      intro="A few moments from our journey together."
    >
      <Card title="Timeline">
        <ul className={styles.timeline}>
          {timeline.map((item) => (
            <li key={item.year}>
              <strong>{item.year}</strong>
              <span>{item.event}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card title="Engagement Photos" subtitle="Placeholder gallery">
        <div className={`${styles.grid} ${styles.galleryGrid}`}>
          <div className={styles.placeholderTile}>Mountain overlook</div>
          <div className={styles.placeholderTile}>Downtown walk</div>
          <div className={styles.placeholderTile}>Sunset picnic</div>
        </div>
      </Card>
    </PageLayout>
  )
}
