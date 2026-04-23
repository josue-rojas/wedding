import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'

export function GalleryPage() {
  return (
    <PageLayout title="Gallery" intro="Engagement and pre-wedding moments.">
      <Card title="Photo Gallery">
        <div className="grid gallery-grid">
          <div className="placeholder-tile">Engagement Session</div>
          <div className="placeholder-tile">Family Dinner</div>
          <div className="placeholder-tile">Brunch with Friends</div>
          <div className="placeholder-tile">Venue Visit</div>
        </div>
      </Card>
    </PageLayout>
  )
}
