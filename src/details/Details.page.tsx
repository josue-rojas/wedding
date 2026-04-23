import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'

export function DetailsPage() {
  return (
    <PageLayout
      title="Wedding Details"
      intro="Everything you need for a smooth and joyful weekend."
    >
      <Card title="Schedule of Events">
        <ul>
          <li>Welcome Party — Friday, 6:00 PM</li>
          <li>Ceremony — Saturday, 4:00 PM</li>
          <li>Reception — Saturday, 6:00 PM</li>
          <li>After Party — Saturday, 10:30 PM</li>
        </ul>
      </Card>
      <Card title="Venue Details">
        <p>123 Celebration Lane, Austin, TX</p>
        <p>On-site parking available. Wheelchair accessible entrances.</p>
        <p>Map and shuttle details will be posted soon.</p>
      </Card>
      <Card title="Travel & Accommodations">
        <p>Hotel blocks available at Downtown Suites and Garden Inn.</p>
        <p>Austin-Bergstrom International Airport is 20 minutes away.</p>
      </Card>
    </PageLayout>
  )
}
