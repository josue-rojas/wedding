import type { PropsWithChildren, ReactNode } from 'react'
import { BotanicalDivider } from '../BotanicalDivider/BotanicalDivider'

type PageLayoutProps = PropsWithChildren<{
  title: ReactNode
  intro?: ReactNode
}>

export function PageLayout({ children, intro, title }: PageLayoutProps) {
  return (
    <main className="page-layout">
      <header className="page-layout__header">
        <h1>{title}</h1>
        <BotanicalDivider />
        {intro ? <p className="page-intro">{intro}</p> : null}
      </header>
      <div className="page-layout__content">{children}</div>
    </main>
  )
}
