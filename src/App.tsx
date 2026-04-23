import { type CSSProperties, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const INTRO_STORAGE_KEY = 'wedding_intro_played'
const INTRO_DURATION_MS = 2200
const HEART_COUNT = 34
const HEART_RADIUS_MIN = 120
const HEART_RADIUS_STEP = 29
const HEART_RADIUS_VARIANCE = 220
const HEART_DELAY_STEP = 0.035
const HEART_DURATION_BASE = 1
const HEART_DURATION_MULTIPLIER = 17
const HEART_DURATION_VARIANCE = 12
const HEART_DURATION_DIVISOR = 20
const HEART_SIZE_MIN = 18
const HEART_SIZE_MULTIPLIER = 7
const HEART_SIZE_VARIANCE = 20

const roundToHundredths = (value: number) => Math.round(value * 100) / 100

function App() {
  const [count, setCount] = useState(0)
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return localStorage.getItem(INTRO_STORAGE_KEY) !== 'true'
    } catch {
      return true
    }
  })

  const introHearts = useMemo(
    () =>
      Array.from({ length: HEART_COUNT }, (_, index) => index).map((index) => {
        const angle = (index / HEART_COUNT) * Math.PI * 2
        const radius =
          HEART_RADIUS_MIN + ((index * HEART_RADIUS_STEP) % HEART_RADIUS_VARIANCE)
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return {
          id: index,
          x,
          y,
          delay: roundToHundredths(index * HEART_DELAY_STEP),
          duration: roundToHundredths(
            HEART_DURATION_BASE +
              ((index * HEART_DURATION_MULTIPLIER) % HEART_DURATION_VARIANCE) /
                HEART_DURATION_DIVISOR,
          ),
          size: HEART_SIZE_MIN + ((index * HEART_SIZE_MULTIPLIER) % HEART_SIZE_VARIANCE),
        }
      }),
    [],
  )

  useEffect(() => {
    if (!showIntro) {
      return
    }

    try {
      localStorage.setItem(INTRO_STORAGE_KEY, 'true')
    } catch {
      // no-op when storage access is blocked
    }

    const timeoutId = window.setTimeout(() => setShowIntro(false), INTRO_DURATION_MS)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [showIntro])

  return (
    <>
      {showIntro && (
        <div className="intro-overlay" aria-hidden="true">
          {introHearts.map((heart) => (
            <span
              key={heart.id}
              className="intro-heart"
              style={
                {
                  '--tx': `${heart.x}px`,
                  '--ty': `${heart.y}px`,
                  '--delay': `${heart.delay}s`,
                  '--duration': `${heart.duration}s`,
                  '--size': `${heart.size}px`,
                } as CSSProperties
              }
            >
              ❤
            </span>
          ))}
        </div>
      )}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
