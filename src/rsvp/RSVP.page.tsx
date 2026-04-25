import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import weddingImg from '../assets/wedding.jpg'
import { Button } from '../components/Button/Button'
import { RingsDivider } from '../components/RingsDivider/RingsDivider'
import { Slideshow } from '../components/Slideshow/Slideshow'
import { UnderlineInput } from '../components/UnderlineInput/UnderlineInput'

const SLIDES = [weddingImg, heroImg]

export function RSVPPage() {
  return (
    <main className="rsvp-layout">
      {/* ── Form panel (left) ── */}
      <div className="rsvp-form-panel">
        <div className="rsvp-form-inner">
          <h1 className="rsvp-title">RSVP</h1>

          <RingsDivider />

          <p className="rsvp-subtitle">Save the Date and RSVP</p>
          <p className="rsvp-date">December 30, 2027</p>

          <div className="rsvp-action-row">
            <Link className="button button--outline" to="/details">Details</Link>
          </div>

          <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
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
            <div className="rsvp-field-row">
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
      <Slideshow slides={SLIDES} className="rsvp-slideshow-panel" />
    </main>
  )
}
