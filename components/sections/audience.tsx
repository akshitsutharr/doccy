export function Audience() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h3 className="text-pretty text-3xl font-semibold md:text-5xl">
          Built for researchers, students, and professionals.
        </h3>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Upload, summarize, ask, and manage documents securely. Side‑by‑side views of original text and AI results keep
          you in control.
        </p>

        {/* Audience cards — keep latest images provided by you */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <figure className="rounded-xl border border-border bg-card p-2">
            <img
              src="/images/use-researchers.jpg"
              alt="Researchers card: Unmoderated Card Sorting"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <figcaption className="px-2 pb-2 pt-3 text-sm text-muted-foreground">For Researchers</figcaption>
          </figure>
          <figure className="rounded-xl border border-border bg-card p-2">
            <img
              src="/images/use-students.jpg"
              alt="Students card: multiple‑choice example"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <figcaption className="px-2 pb-2 pt-3 text-sm text-muted-foreground">For Students</figcaption>
          </figure>
          <figure className="rounded-xl border border-border bg-card p-2">
            <img
              src="/images/use-professionals.jpg"
              alt="Professionals card with charts"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <figcaption className="px-2 pb-2 pt-3 text-sm text-muted-foreground">For Professionals</figcaption>
          </figure>
        </div>

        {/* Tools & capabilities */}
        <div className="mt-10">
          <h4 className="mb-4 text-lg font-medium">More capabilities</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <figure className="rounded-xl border border-border bg-card p-2">
              <img
                src="/images/use-folders.jpg"
                alt="Create New Folder dialog"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <figcaption className="px-2 pb-2 pt-3 text-sm text-muted-foreground">Organize folders</figcaption>
            </figure>
            <figure className="rounded-xl border border-border bg-card p-2">
              <img
                src="/images/use-translate.png"
                alt="Translate English to Chinese UI"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <figcaption className="px-2 pb-2 pt-3 text-sm text-muted-foreground">Translate effortlessly</figcaption>
            </figure>
            <figure className="rounded-xl border border-border bg-card p-2">
              <img
                src="/images/use-languages-b.png"
                alt="Languages list"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <figcaption className="px-2 pb-2 pt-3 text-sm text-muted-foreground">Many languages</figcaption>
            </figure>
            <figure className="rounded-xl border border-border bg-card p-2">
              <img
                src="/images/use-history.jpg"
                alt="PDF chat history card"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <figcaption className="px-2 pb-2 pt-3 text-sm text-muted-foreground">Chat history</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
