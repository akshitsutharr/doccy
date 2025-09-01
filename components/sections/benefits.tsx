export function Benefits() {
  return (
    <section id="use-cases" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10">
          <h3 className="text-pretty text-3xl font-semibold md:text-5xl">Clarity. Credibility. Momentum.</h3>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Capture source‑backed insights from your research, verify each claim, and keep moving.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border p-5">
            <div className="mb-3 h-8 w-8 rounded bg-blue-600/30" />
            <h4 className="mb-1 font-medium">Extract insights</h4>
            <p className="text-sm text-muted-foreground">Summaries, key points, and action items in one click.</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="mb-3 h-8 w-8 rounded bg-blue-600/30" />
            <h4 className="mb-1 font-medium">Verify with sources</h4>
            <p className="text-sm text-muted-foreground">Every answer links back to original documents.</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <div className="mb-3 h-8 w-8 rounded bg-blue-600/30" />
            <h4 className="mb-1 font-medium">Collaborate</h4>
            <p className="text-sm text-muted-foreground">Share threads, notes, and tasks with your team.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
