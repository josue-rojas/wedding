import { Card } from '../components/Card/Card'
import { PageLayout } from '../components/PageLayout/PageLayout'

export function RegistryPage() {
  return (
    <PageLayout
      title="Registry"
      intro="Your presence is our present, but if you'd like..."
    >
      <Card title="Registry Links">
        <ul>
          <li>
            <a href="https://www.zola.com" target="_blank" rel="noreferrer">
              Zola Registry
            </a>
          </li>
          <li>
            <a href="https://www.target.com" target="_blank" rel="noreferrer">
              Target Registry
            </a>
          </li>
          <li>Honeymoon fund details coming soon.</li>
        </ul>
      </Card>
      <Card title="Thank You">
        <p>Thank you for celebrating this special moment with us.</p>
      </Card>
    </PageLayout>
  )
}
