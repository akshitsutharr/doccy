export function Collaboration() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-green-600/20 px-3 py-1 text-xs font-medium text-green-400">
              Collaborate securely
            </span>
            <h3 className="mt-3 text-pretty text-3xl font-semibold md:text-5xl">Work in teams. Stay in sync.</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <h4 className="mb-1 font-medium">Shared workspace</h4>
              <p className="text-sm text-muted-foreground">
                Align insights and next steps in a single, organized view.
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <h4 className="mb-1 font-medium">Collaborative Q&amp;A</h4>
              <p className="text-sm text-muted-foreground">
                Ask questions, add notes, and verify answers with your team.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card/40 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3 md:col-span-2">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-blue-600/40" />
                <span className="text-sm font-medium">Team thread</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-5/6 rounded bg-muted" />
                <div className="h-3 w-2/3 rounded bg-muted" />
                <div className="h-3 w-4/5 rounded bg-muted" />
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="mb-2 text-sm font-medium">Documents</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="truncate">Clinical Trial Report.pdf</span>
                  <span className="rounded bg-blue-600/20 px-1.5 py-0.5 text-blue-300">PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="truncate">Statistical Analysis Plan.pdf</span>
                  <span className="rounded bg-blue-600/20 px-1.5 py-0.5 text-blue-300">PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
