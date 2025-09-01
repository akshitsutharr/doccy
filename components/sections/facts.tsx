export function Facts() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-pretty text-3xl font-semibold md:text-5xl">Check your facts. Trust your work.</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <h4 className="mb-1 font-medium">Ask across docs</h4>
                <p className="text-sm text-muted-foreground">
                  Pull answers from multiple files in one thread with automatic citations.
                </p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h4 className="mb-1 font-medium">Understand the bigger picture</h4>
                <p className="text-sm text-muted-foreground">Connect the dots and compare claims side‑by‑side.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full rounded-2xl border border-border bg-card/40 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">EV Market Outlook 2030</span>
                <span className="rounded-full bg-blue-600/20 px-2 py-0.5 text-xs text-blue-300">Cited</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Source A</p>
                  <span className="rounded bg-blue-600/20 px-2 py-0.5 text-blue-300">40.0M</span>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Source B</p>
                  <span className="rounded bg-blue-600/20 px-2 py-0.5 text-blue-300">38.6M</span>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Doccy</p>
                  <span className="rounded bg-green-600/20 px-2 py-0.5 text-green-400">42.0M</span>
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-border" />
              <p className="mt-3 text-xs text-muted-foreground">
                Doccy shows deltas and highlights conflicts, linking back to each source automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
