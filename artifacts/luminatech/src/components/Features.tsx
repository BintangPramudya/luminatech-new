import { Palette, Zap, Smartphone, Headphones } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const features = [
  {
    title: "Desain Modern",
    description: "Tampilan profesional yang memukau pengunjung dan mencerminkan identitas brand Anda.",
    icon: Palette,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-500/20"
  },
  {
    title: "Cepat & SEO Friendly",
    description: "Load cepat kilat dan teroptimasi penuh untuk ranking halaman pertama Google.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-500/20"
  },
  {
    title: "Mobile Responsive",
    description: "Tampil sempurna dan nyaman digunakan di semua ukuran layar smartphone.",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-500/20"
  },
  {
    title: "Support & Maintenance",
    description: "Dukungan teknis 24/7 siap membantu Anda jika ada kendala di kemudian hari.",
    icon: Headphones,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20"
  }
]

export function Features() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Mengapa Pilih Kami?</h2>
          <p className="text-muted-foreground text-lg">
            Kami tidak hanya membuat website, tapi membangun aset digital investasi jangka panjang untuk bisnis Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
