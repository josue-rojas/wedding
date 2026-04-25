import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import weddingImg from '../assets/wedding.jpg'

const SLIDES = [weddingImg, heroImg]

export function RSVPPage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="rsvp-layout">
      {/* ── Form panel (left) ── */}
      <div className="rsvp-form-panel">
        <div className="rsvp-form-inner">
          <h1 className="rsvp-title">RSVP</h1>

          <div className="rsvp-divider" aria-hidden="true">
            <span className="rsvp-divider__line" />
            <svg className="rsvp-divider__rings" viewBox="0 0 44 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="11" r="8" stroke="#9aaa7a" strokeWidth="1.2" />
              <circle cx="30" cy="11" r="8" stroke="#9aaa7a" strokeWidth="1.2" />
            </svg>
            <span className="rsvp-divider__line" />
          </div>

          <p className="rsvp-subtitle">Save the Date and RSVP</p>
          <p className="rsvp-date">December 30, 2027</p>

          <div className="rsvp-action-row">
            <Link className="rsvp-details-btn" to="/details">Details</Link>
          </div>

          <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
            <div className="rsvp-field">
              <input
                className="rsvp-input"
                type="text"
                placeholder="Full Name"
                aria-label="Full name"
              />
            </div>
            <div className="rsvp-field">
              <input
                className="rsvp-input"
                type="email"
                placeholder="Email Address"
                aria-label="Email address"
              />
            </div>
            <div className="rsvp-field-row">
              <div className="rsvp-field">
                <input
                  className="rsvp-input"
                  type="number"
                  min="1"
                  placeholder="# of Guests"
                  aria-label="Number of guests"
                />
              </div>
              <div className="rsvp-field">
                <input
                  className="rsvp-input"
                  type="text"
                  placeholder="Suggest a Song"
                  aria-label="Suggest a song"
                />
              </div>
            </div>
            <button className="rsvp-submit-btn" type="submit">Send RSVP</button>
          </form>
        </div>
      </div>

      {/* ── Slideshow panel (right) ── */}
      <div className="rsvp-slideshow-panel" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            className={`rsvp-slide${i === current ? ' rsvp-slide--active' : ''}`}
            src={src}
            alt=""
          />
        ))}
        <div className="rsvp-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`rsvp-dot${i === current ? ' rsvp-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
