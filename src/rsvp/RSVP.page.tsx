import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import weddingImg from '../assets/wedding.jpg'
import { Button } from '../components/Button/Button'
import { RingsDivider } from '../components/RingsDivider/RingsDivider'
import { Slideshow } from '../components/Slideshow/Slideshow'
import { UnderlineInput } from '../components/UnderlineInput/UnderlineInput'
import styles from './styles.module.css'

const SLIDES = [weddingImg, heroImg]

export function RSVPPage() {
  return (
    <main className={styles.rsvpLayout}>
      {/* ── Form panel (left) ── */}
      <div className={styles.rsvpFormPanel}>
        <div className={styles.rsvpFormInner}>
          <h1 className={styles.rsvpTitle}>RSVP</h1>

          <RingsDivider />

          <p className={styles.rsvpSubtitle}>Save the Date and RSVP</p>
          <p className={styles.rsvpDate}>December 30, 2027</p>

          <div className={styles.rsvpActionRow}>
            <Link className={styles.detailsLink} to="/details">Details</Link>
          </div>

          <form className={styles.rsvpForm} onSubmit={(e) => e.preventDefault()}>
            <UnderlineInput
              type="text"
              placeholder="Full Name"
              aria-label="Full name"
            />
            <UnderlineInput
              type="email"
              placeholder="Email Address"
              aria-label="Email address"
            />
            <div className={styles.rsvpFieldRow}>
              <UnderlineInput
                type="number"
                min="1"
                placeholder="# of Guests"
                aria-label="Number of guests"
              />
              <UnderlineInput
                type="text"
                placeholder="Suggest a Song"
                aria-label="Suggest a song"
              />
            </div>
            <Button variant="outline" fullWidth type="submit">Send RSVP</Button>
          </form>
        </div>
      </div>

      {/* ── Slideshow panel (right) ── */}
      <Slideshow slides={SLIDES} className={styles.rsvpSlideshowPanel} />
    </main>
  )
}

