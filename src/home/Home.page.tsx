import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero4.jpg'
import styles from './styles.module.css'

const WEDDING_DATE = new Date('2027-12-30T16:00:00')

interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
  done: boolean
}

function getCountdownParts(): CountdownParts {
  const diff = WEDDING_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / (60 * 60 * 24))
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, done: false }
}

export function HomePage() {
  const [countdown, setCountdown] = useState<CountdownParts>(getCountdownParts)

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown(getCountdownParts())
    }, 1000)
    return () => clearInterval(id)
  }, [])

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
          We are so excited to celebrate with you.
        </p>
        {countdown.done ? (
          <p className={styles.countdownDone} aria-live="polite">
            Today is the day!
          </p>
        ) : (
          <div className={styles.countdown} aria-live="polite">
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNumber}>{countdown.days}</span>
              <span className={styles.countdownLabel}>days</span>
            </div>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNumber}>{String(countdown.hours).padStart(2, '0')}</span>
              <span className={styles.countdownLabel}>hours</span>
            </div>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNumber}>{String(countdown.minutes).padStart(2, '0')}</span>
              <span className={styles.countdownLabel}>minutes</span>
            </div>
            <div className={styles.countdownUnit}>
              <span className={styles.countdownNumber}>{String(countdown.seconds).padStart(2, '0')}</span>
              <span className={styles.countdownLabel}>seconds</span>
            </div>
          </div>
        )}
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
