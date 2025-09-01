export function Insights() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-pretty text-3xl font-semibold md:text-5xl">
              Research to impactful, clear insights. Quickly.
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Understand better, across docs:</span> summarize and get
                structured insights across uploads.
              </li>
              <li>
                <span className="font-medium text-foreground">See patterns, simultaneously:</span> compare key metrics
                and what stands out.
              </li>
              <li>
                <span className="font-medium text-foreground">Go deeper, on demand:</span> ask questions backed by your
                sources.
              </li>
            </ul>
          </div>
          <div>
            <div className="w-full rounded-2xl border border-border bg-card/40 p-4">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-blue-600/30" />
                <span className="text-sm font-medium">Summary</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-5/6 rounded bg-muted" />
                <div className="h-3 w-2/3 rounded bg-muted" />
                <div className="h-3 w-3/4 rounded bg-muted" />
              </div>
              <div className="mt-4 rounded-lg border border-border bg-background p-3">
                <p className="text-xs">
                  What sectors are most impacted by automation?{" "}
                  <span className="text-muted-foreground">(ask Doccy)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
