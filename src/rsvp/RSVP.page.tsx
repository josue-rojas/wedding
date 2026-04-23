import { useState } from 'react'
import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'
import { FormField } from '../components/FormField/FormField'
import { PageLayout } from '../components/PageLayout/PageLayout'

export function RSVPPage() {
  const [attending, setAttending] = useState('yes')
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    guestCount: '1',
    meal: 'chicken',
    plusOne: '',
    dietary: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  return (
    <PageLayout
      title="RSVP"
      intro="Please let us know if you can make it."
    >
      <Card title="RSVP Form">
        {submitted ? (
          <p className="confirmation-message" role="status">
            Thanks, {form.name || 'friend'}! Your RSVP has been submitted.
          </p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <FormField
              id="rsvp-name"
              label="Your name"
              value={form.name}
              onChange={(event) => handleChange('name', event.target.value)}
              required
            />
            <div className="form-field">
              <label htmlFor="rsvp-attending">Will you attend?</label>
              <select
                id="rsvp-attending"
                value={attending}
                onChange={(event) => setAttending(event.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {attending === 'yes' ? (
              <>
                <FormField
                  as="select"
                  id="rsvp-guests"
                  label="Guest count"
                  value={form.guestCount}
                  onChange={(event) => handleChange('guestCount', event.target.value)}
                  options={[
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                  ]}
                />
                <FormField
                  as="select"
                  id="rsvp-meal"
                  label="Meal preference"
                  value={form.meal}
                  onChange={(event) => handleChange('meal', event.target.value)}
                  options={[
                    { label: 'Chicken', value: 'chicken' },
                    { label: 'Salmon', value: 'salmon' },
                    { label: 'Vegetarian', value: 'vegetarian' },
                  ]}
                />
                <FormField
                  id="rsvp-plus-one"
                  label="Plus-one name"
                  value={form.plusOne}
                  onChange={(event) => handleChange('plusOne', event.target.value)}
                  placeholder="Optional"
                />
                <FormField
                  as="textarea"
                  id="rsvp-dietary"
                  label="Dietary restrictions"
                  value={form.dietary}
                  onChange={(event) => handleChange('dietary', event.target.value)}
                  rows={3}
                />
              </>
            ) : null}
            <Button type="submit">Submit RSVP</Button>
          </form>
        )}
      </Card>
    </PageLayout>
  )
}
