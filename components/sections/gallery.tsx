// Optional reference gallery used to include any remaining reference images neatly
export function ReferenceGallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <h3 className="mb-6 text-lg font-medium text-muted-foreground">Design references</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <figure className="rounded-xl border border-border/60 bg-card p-2">
          <img src="/images/ref-hero.png" alt="Hero reference" className="w-full rounded-lg" />
        </figure>
        <figure className="rounded-xl border border-border/60 bg-card p-2">
          <img src="/images/ref-research.png" alt="Research reference" className="w-full rounded-lg" />
        </figure>
      </div>
    </section>
  )
}
