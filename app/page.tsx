import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Facts } from "@/components/sections/facts"
import { Insights } from "@/components/sections/insights"
import { Benefits } from "@/components/sections/benefits"
import { Collaboration } from "@/components/sections/collaboration"
import { Audience } from "@/components/sections/audience"
import { CTA } from "@/components/sections/cta"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <Hero />
      {/* anchors for nav */}
      <div id="how" />
      <Facts />
      <Insights />
      <div id="documents" />
      <Benefits />
      <Collaboration />
      <Audience />
      <CTA />
      <div id="profile" />
      <Footer />
    </main>
  )
}
