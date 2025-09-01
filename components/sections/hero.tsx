import { AssistantCard } from "@/components/assistant-card"

export function Hero() {
  return (
    <section id="home" className="relative isolate">
      {/* Background video */}
      <video
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AskYourPDF-%20The%20Best%20PDF%20AI%20Chat%20App-NnkEtHiD49qPlNM98zsK31yiSuXAar.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Readability overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-background/85" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col gap-6">
          {/* glass headline wrapper */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
              Turn document chaos into clarity.
            </h1>
            <p className="mt-3 text-muted-foreground">
              Upload PDFs or Word files and get concise summaries, key ideas, and ask follow‑up questions in a chat —
              all in seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Experience Doccy
            </a>
            <a href="#how" className="rounded-md border border-border px-4 py-2 text-sm hover:bg-muted/50">
              Learn how
            </a>
          </div>
          <p className="text-xs text-muted-foreground">Video: background demo, autoplaying without sound.</p>
        </div>

        {/* Right-side: reusable assistant card */}
        <div className="relative">
          <AssistantCard />
        </div>
      </div>
    </section>
  )
}
