import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik TokoPintar",
    initials: "BS",
    color: "bg-blue-500",
    quote: "LuminaTech benar-benar mengubah bisnis saya! Penjualan naik 3x lipat sejak punya website profesional. Tampilannya sangat modern dan pembeli mudah untuk checkout."
  },
  {
    name: "Sari Dewi",
    role: "Direktur KlinikSehat",
    initials: "SD",
    color: "bg-emerald-500",
    quote: "Respon cepat, hasil memuaskan. Website kami selesai kurang dari 7 hari sesuai janji. Fitur booking jadwalnya sangat membantu operasional klinik."
  },
  {
    name: "Andi Rahman",
    role: "CEO PT Maju Jaya",
    initials: "AR",
    color: "bg-purple-500",
    quote: "Tim yang sangat profesional dan komunikatif. Mereka mengerti persis apa yang perusahaan kami butuhkan. Sangat puas dengan hasilnya!"
  }
]

export function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Testimoni</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Apa Kata Klien Kami?</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl shadow-black/5 relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-7xl text-slate-100 dark:text-slate-700 font-serif leading-none select-none pointer-events-none">
                "
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 relative z-10 italic">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full ${testi.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {testi.initials}
                </div>
                <div>
                  <h5 className="font-bold text-foreground">{testi.name}</h5>
                  <p className="text-sm text-muted-foreground">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
