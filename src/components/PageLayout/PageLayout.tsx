import type { PropsWithChildren, ReactNode } from 'react'

type PageLayoutProps = PropsWithChildren<{
  title: ReactNode
  intro?: ReactNode
}>

export function PageLayout({ children, intro, title }: PageLayoutProps) {
  return (
    <main className="page-layout">
      <header className="page-layout__header">
        <h1>{title}</h1>
        {intro ? <p>{intro}</p> : null}
      </header>
      <div className="page-layout__content">{children}</div>
    </main>
  )
}
