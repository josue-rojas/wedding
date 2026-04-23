import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'

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
        <ul className="timeline">
          {timeline.map((item) => (
            <li key={item.year}>
              <strong>{item.year}</strong>
              <span>{item.event}</span>
            </li>
          ))}
        </ul>
      </Card>
      <Card title="Engagement Photos" subtitle="Placeholder gallery">
        <div className="grid gallery-grid">
          <div className="placeholder-tile">Mountain overlook</div>
          <div className="placeholder-tile">Downtown walk</div>
          <div className="placeholder-tile">Sunset picnic</div>
        </div>
      </Card>
    </PageLayout>
  )
}
