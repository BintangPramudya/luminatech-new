import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section id="kontak" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Siap Punya Website Profesional?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Konsultasi gratis, tanpa komitmen. Mari diskusikan kebutuhan digital bisnis Anda dan wujudkan hari ini.
            </p>
            <Button
              size="lg"
              variant="white"
              className="rounded-full py-4 px-8 text-base sm:text-lg w-full sm:w-auto mx-auto hover:scale-105 transition-transform"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
              Mulai Sekarang (WhatsApp)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
