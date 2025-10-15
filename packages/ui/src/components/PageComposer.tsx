interface PageComposerProps {
  site: any
  pageSlug: string
}

export const PageComposer = ({ site, pageSlug }: PageComposerProps) => {
  return (
    <div className="min-h-screen">
      <h1>Page: {pageSlug}</h1>
      <pre>{JSON.stringify(site, null, 2)}</pre>
    </div>
  )
}
