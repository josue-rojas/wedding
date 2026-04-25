import type { PropsWithChildren, ReactNode } from 'react'
import { BotanicalDivider } from '../BotanicalDivider/BotanicalDivider'
import styles from './styles.module.css'

type PageLayoutProps = PropsWithChildren<{
  title: ReactNode
  intro?: ReactNode
}>

export function PageLayout({ children, intro, title }: PageLayoutProps) {
  return (
    <main className={styles.pageLayout}>
      <header className={styles.pageLayoutHeader}>
        <h1>{title}</h1>
        <BotanicalDivider />
        {intro ? <p className={styles.pageIntro}>{intro}</p> : null}
      </header>
      <div className={styles.pageLayoutContent}>{children}</div>
    </main>
  )
}
