import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'

const faqs = [
  ['Dress code?', 'Semi-formal attire in light summer colors.'],
  ['Are kids invited?', 'The ceremony and reception are adults-only.'],
  ['What weather should we expect?', 'Warm evenings. Bring a light layer.'],
  ['How do I contact someone?', 'Email hello@ourwedding.com.'],
  ['Parking and transportation?', 'Free parking and hotel shuttles are available.'],
  ['Do you have a registry?', 'Yes, see our Registry page for links.'],
]

export function FAQPage() {
  return (
    <PageLayout title="FAQ" intro="Common questions from guests.">
      <Card title="Frequently Asked Questions">
        <dl className="faq-list">
          {faqs.map(([question, answer]) => (
            <div key={question}>
              <dt>{question}</dt>
              <dd>{answer}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </PageLayout>
  )
}
