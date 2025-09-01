"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* logo */}
          <img src="/logo.png" alt="Doccy logo" className="h-6 w-6 rounded" />
          <span className="font-semibold tracking-tight">Doccy</span>
        </Link>

        {/* updated nav items */}
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="#home" className="hover:text-foreground">
            Home
          </Link>
          <Link href="#how" className="hover:text-foreground">
            How to use
          </Link>
          <Link href="#documents" className="hover:text-foreground">
            Documents
          </Link>
          <Link href="#profile" className="hover:text-foreground">
            Profile
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground md:block"
          >
            Sign in
          </Link>
          <ThemeToggle />
          <Link
            href="#experience"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Experience Doccy
          </Link>
        </div>
      </div>
    </header>
  )
}
