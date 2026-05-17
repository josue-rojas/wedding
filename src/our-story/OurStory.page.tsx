import { useNavigate } from 'react-router-dom'
import imgBoringMug from '../assets/gallery/2022-08-06_162508.jpg'
import imgWeirdMugs from '../assets/gallery/2024-08-28_105533.jpg'
import imgHappyMuggers from '../assets/gallery/2026-03-21_180801.jpg'
import { Button } from '../components/Button/Button'
import { PageLayout } from '../components/PageLayout/PageLayout'
import { StorySplitSection } from '../components/StorySplitSection/StorySplitSection'
import styles from './styles.module.css'

export function OurStoryPage() {
  const navigate = useNavigate()

  return (
    <PageLayout
      title="Our Story"
      intro={
        <>
          It all started with a <strong>really boring mug</strong>
        </>
      }
      className={styles.storyLayout}
    >
      <div className={styles.storyFlow}>
        <StorySplitSection
          title="2019: The Boring Mug Era"
          imageSrc={imgBoringMug}
          imageAlt="A simple mug in neutral tones"
          paragraphs={[
            "Picture this: it's Monday morning. You're half asleep. You reach for your coffee mug and... it's beige. Plain. Uninspiring.",
            "We needed mornings to feel a little more us.",
          ]}
          emphasisLine={
            <>
              We thought: <span className={styles.quoteAccent}>"Life's too short for this."</span>
            </>
          }
        />

        <StorySplitSection
          title="The Weird Revolution"
          imageSrc={imgWeirdMugs}
          imageAlt="Colorful mugs with playful designs"
          reverse
          paragraphs={[
            "So we started collecting mugs with actual personality.",
            "Mugs with bold prints. Mugs that made us laugh. Mugs that felt like tiny art pieces for ordinary mornings.",
          ]}
          emphasisLine={
            <>
              <span className={styles.whyAccent}>Why?</span> Because your morning ritual deserves better than bland.
            </>
          }
        />

        <StorySplitSection
          title="Today: 10k+ Happy Muggers"
          imageSrc={imgHappyMuggers}
          imageAlt="A mug being held near warm window light"
          paragraphs={[
            "Every mug we make is handcrafted with love, a little sass, and a lot of care.",
            "We partner with local artists who are just as weird as we are, and we wouldn't have it any other way.",
          ]}
          emphasisLine={
            <>
              Go <strong>bold</strong>, go <strong>weird</strong>, and sip like you mean it.
            </>
          }
        />

        <div className={styles.ctaRow}>
          <Button onClick={() => navigate('/rsvp')}>RSVP</Button>
        </div>
      </div>
    </PageLayout>
  )
}
