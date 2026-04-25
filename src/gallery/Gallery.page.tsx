import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'
import styles from './styles.module.css'

export function GalleryPage() {
  return (
    <PageLayout title="Gallery" intro="Engagement and pre-wedding moments.">
      <Card title="Photo Gallery">
        <div className={`${styles.grid} ${styles.galleryGrid}`}>
          <div className={styles.placeholderTile}>Engagement Session</div>
          <div className={styles.placeholderTile}>Family Dinner</div>
          <div className={styles.placeholderTile}>Brunch with Friends</div>
          <div className={styles.placeholderTile}>Venue Visit</div>
        </div>
      </Card>
    </PageLayout>
  )
}
