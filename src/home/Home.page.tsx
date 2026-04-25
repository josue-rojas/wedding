import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

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
    <main>
      <section className="hero">
        <h1 className="hero__names">Josue &amp; Partner</h1>
        <div className="hero__image-wrap">
          <img
            className="hero__image"
            src={heroImg}
            alt="Josue and Partner"
          />
        </div>
        <div className="hero__meta">
          <span className="hero__meta-item">June 12, 2027</span>
          <span className="hero__meta-item">Austin, Texas</span>
        </div>
      </section>

      <section className="home-content">
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
      </section>
    </main>
  )
}
