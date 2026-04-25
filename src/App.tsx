import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import styles from './App.module.css'
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
  { label: 'Details', to: '/details' },
  { label: 'Registry', to: '/registry' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Gallery', to: '/gallery' },
]

function App() {
  return (
    <HashRouter>
      <div className={styles.appShell}>
        <Navigation items={navItems} />
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
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
