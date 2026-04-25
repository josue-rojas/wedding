import { Link } from 'react-router-dom'
import heroImg from '../assets/wedding.jpg'
import styles from './styles.module.css'

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
      <section className={styles.hero}>
        <h1 className={styles.heroNames}>Irene &amp; Josue</h1>
        <div className={styles.heroImageWrap}>
          <img
            className={styles.heroImage}
            src={heroImg}
            alt="Irene and Josue"
          />
        </div>
        <div className={styles.heroMeta}>
          <span>December 30, 2027</span>
          <span>The Bronx, New York</span>
        </div>
      </section>

      <section className={styles.homeContent}>
        <p>
          We are so excited to celebrate with you. Please explore our story,
          details, and RSVP information.
        </p>
        <p className={styles.countdown} aria-live="polite">
          {getCountdown()}
        </p>
        <div className={styles.buttonRow}>
          <Link className={styles.buttonLinkPrimary} to="/rsvp">
            RSVP
          </Link>
          <Link className={styles.buttonLinkSecondary} to="/our-story">
            Our Story
          </Link>
        </div>
      </section>
    </main>
  )
}
