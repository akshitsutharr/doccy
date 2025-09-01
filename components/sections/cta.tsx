export function CTA() {
  return (
    <section id="experience" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-pretty text-3xl font-semibold md:text-5xl">Try Doccy for free</h3>
          <p className="mt-3 text-muted-foreground">No commitment. Just clarity — upgrade anytime.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Experience Doccy
            </a>
            <a href="#contact" className="rounded-md border border-border px-4 py-2 text-sm hover:bg-muted/50">
              Talk to sales
            </a>
          </div>

          {/* simple feature strip instead of reference screenshot */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border p-4">
              <div className="mb-2 h-6 w-6 rounded bg-blue-600/30" />
              <p className="text-sm text-muted-foreground">Cited answers</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <div className="mb-2 h-6 w-6 rounded bg-blue-600/30" />
              <p className="text-sm text-muted-foreground">Secure by default</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <div className="mb-2 h-6 w-6 rounded bg-blue-600/30" />
              <p className="text-sm text-muted-foreground">Works with PDFs & docs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
