import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Doccy logo" width={50} height={50} />
            <span className="font-semibold">Doccy</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Turn document chaos into clarity. Summaries, insights, and citations—fast.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#how">How to use</Link>
            </li>
            <li>
              <Link href="#documents">Documents</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="#experience">Experience Doccy</Link>
            </li>
            <li>
              <Link href="#profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Doccy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
