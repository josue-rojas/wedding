import { useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import styles from './App.module.css'
import { AuthPage } from './auth/Auth.page'
import { Navigation, type NavigationItem } from './components/Navigation/Navigation'
import { DetailsPage } from './details/Details.page'
import { FAQPage } from './faq/FAQ.page'
import { GalleryPage } from './gallery/Gallery.page'
import { HomePage } from './home/Home.page'
import { OurStoryPage } from './our-story/OurStory.page'
import { RegistryPage } from './registry/Registry.page'
import { RSVPPage } from './rsvp/RSVP.page'

const navItems: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Details', to: '/details' },
  { label: 'Registry', to: '/registry' },
  { label: 'FAQ', to: '/faq' },
]

const AUTH_STORAGE_KEY = 'wedding:is-authenticated'
const SITE_PASSWORD = import.meta.env.VITE_SITE_PASSWORD ?? 'celebrate2027'

function readAuthFromStorage() {
  try {
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(readAuthFromStorage)

  const handleAuthenticated = () => {
    setIsAuthenticated(true)
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, 'true')
    } catch {
      // Ignore storage failures and keep in-memory auth.
    }
  }

  return (
    <HashRouter>
      <div className={styles.appShell}>
        {isAuthenticated ? <Navigation items={navItems} /> : null}
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/events" element={<DetailsPage />} />
            <Route path="/rsvp" element={<RSVPPage />} />
            <Route path="/registry" element={<RegistryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/authenticate" element={<Navigate replace to="/" />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/authenticate"
              element={<AuthPage onAuthenticated={handleAuthenticated} sitePassword={SITE_PASSWORD} />}
            />
            <Route path="*" element={<Navigate replace to="/authenticate" />} />
          </Routes>
        )}
      </div>
    </HashRouter>
  )
}

export default App
