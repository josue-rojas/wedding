import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'
import { FormField } from '../components/FormField/FormField'
import { PageLayout } from '../components/PageLayout/PageLayout'

export function ContactPage() {
  return (
    <PageLayout title="Contact" intro="Need help? Reach out anytime.">
      <Card title="Contact Form">
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <FormField id="contact-name" label="Name" required />
          <FormField id="contact-email" label="Email" type="email" required />
          <FormField as="textarea" id="contact-message" label="Message" rows={4} required />
          <Button type="submit">Send Message</Button>
        </form>
      </Card>
      <Card title="Point of Contact">
        <p>Email: hello@ourwedding.com</p>
        <p>Phone: (555) 000-2027</p>
      </Card>
    </PageLayout>
  )
}
