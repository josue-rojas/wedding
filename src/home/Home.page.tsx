import { Link } from 'react-router-dom'
import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'

const WEDDING_DATE = new Date('2027-06-12T16:00:00')

function getCountdown() {
  const diff = WEDDING_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return 'Today is the day!'
  }

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return `${days} days to go`
}

export function HomePage() {
  return (
    <PageLayout
      title="Josue & Partner"
      intro="June 12, 2027 • Austin, Texas"
    >
      <Card title="Welcome">
        <p>
          We are so excited to celebrate with you. Please explore our story,
          details, and RSVP information.
        </p>
        <p className="countdown" aria-live="polite">
          {getCountdown()}
        </p>
        <div className="button-row">
          <Link className="button button--primary" to="/rsvp">
            RSVP
          </Link>
          <Link className="button button--secondary" to="/our-story">
            Our Story
          </Link>
        </div>
      </Card>
    </PageLayout>
  )
}
