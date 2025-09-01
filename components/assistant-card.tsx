"use client"

export function AssistantCard() {
  return (
    <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-md">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3.5 w-3.5 rounded-full bg-indigo-500" aria-hidden />
          <p className="text-sm font-medium">Doccy AI Assistant</p>
        </div>
        <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-xs font-medium text-emerald-400">Summarize</span>
      </div>

      <div className="space-y-2">
        <div className="h-2 w-10/12 rounded bg-white/15" />
        <div className="h-2 w-9/12 rounded bg-white/10" />
        <div className="h-2 w-6/12 rounded bg-white/10" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 p-3">
          <p className="mb-2 text-xs text-muted-foreground">Key takeaways</p>
          <div className="h-2 w-9/12 rounded bg-indigo-500/40" />
        </div>
        <div className="rounded-xl border border-white/10 p-3">
          <p className="mb-2 text-xs text-muted-foreground">Citations</p>
          <div className="flex gap-2">
            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] text-blue-300">PDF</span>
            <span className="rounded-full bg-fuchsia-500/20 px-2 py-0.5 text-[10px] text-fuchsia-300">Report</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-background/60 p-2">
        <div className="h-3 w-3 rounded-sm bg-indigo-500" aria-hidden />
        <input
          aria-label="Ask Doccy anything"
          placeholder="Ask Doccy anything..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500">
          Send
        </button>
      </div>
    </div>
  )
}
