import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import { RingsDivider } from '../components/RingsDivider/RingsDivider'
import { UnderlineInput } from '../components/UnderlineInput/UnderlineInput'
import styles from './styles.module.css'

type AuthPageProps = {
  onAuthenticated: () => void
  sitePassword: string
}

export function AuthPage({ onAuthenticated, sitePassword }: AuthPageProps) {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password === sitePassword) {
      onAuthenticated()
      navigate('/', { replace: true })
      return
    }

    setError('Incorrect password. Please try again.')
  }

  return (
    <main className={styles.authPage}>
      <section className={styles.authCard}>
        <p className={styles.kicker}>Private Wedding Website</p>
        <h1 className={styles.title}>Enter Site Password</h1>
        <p className={styles.subtitle}>Please enter the password from your invitation.</p>

        <RingsDivider />

        <form className={styles.form} onSubmit={handleSubmit}>
          <UnderlineInput
            id="site-password"
            type="password"
            placeholder="Site Password"
            aria-label="Site password"
            className={styles.passwordInput}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              if (error) setError('')
            }}
            autoComplete="current-password"
            required
          />

          {error ? <p className={styles.error}>{error}</p> : null}

          <Button type="submit">Enter</Button>
        </form>
      </section>
    </main>
  )
}
