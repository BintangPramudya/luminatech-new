import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { Services } from "@/components/Services"
import { Portfolio } from "@/components/Portfolio"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/Testimonials"
import { CtaSection } from "@/components/CtaSection"
import { Footer } from "@/components/Footer"
import AIChatbot from "@/components/AIChatbot"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
      <AIChatbot />
    </div>
  )
}
