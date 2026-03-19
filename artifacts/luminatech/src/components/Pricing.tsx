import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Basic",
    price: "1.000.000",
    description: "Sempurna untuk profil personal atau UMKM pemula.",
    features: [
      "Maksimal 5 Halaman",
      "Desain Template Premium",
      "Mobile Responsive",
      "Integrasi WhatsApp",
      "1 Bulan Free Support"
    ],
    highlighted: false,
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    price: "2.500.000",
    description: "Solusi lengkap untuk brand yang ingin tampil menonjol.",
    features: [
      "Unlimited Halaman",
      "Custom Desain (Eksklusif)",
      "Mobile Responsive + Cepat",
      "Basic SEO Setup",
      "Domain + Hosting 1 Tahun",
      "3 Bulan Free Support"
    ],
    highlighted: true,
    buttonVariant: "default" as const
  },
  {
    name: "Custom",
    price: "Hubungi Kami",
    description: "Untuk web app kompleks atau kebutuhan fitur khusus.",
    features: [
      "Desain & Fitur Custom",
      "Integrasi API (Payment/Midtrans)",
      "Dashboard Admin",
      "Optimasi Performa Lanjutan",
      "Dedicated Support",
    ],
    highlighted: false,
    buttonVariant: "outline" as const
  }
]

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Investasi Terjangkau, Hasil Maksimal</h2>
          <p className="text-muted-foreground text-lg">
            Tidak ada biaya tersembunyi. Pilih paket yang sesuai dengan kebutuhan dan budget Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={plan.highlighted ? "relative z-10" : ""}
            >
              <Card className={`relative h-full flex flex-col p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? "border-2 border-primary shadow-2xl scale-100 lg:scale-105 bg-gradient-to-b from-white to-primary/5 dark:from-slate-900 dark:to-primary/10" 
                  : "border shadow-lg shadow-black/5 hover:border-primary/50"
              }`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Paling Populer
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.name !== "Custom" && <span className="text-muted-foreground font-semibold">Rp</span>}
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                
                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full rounded-xl ${plan.highlighted ? 'shadow-xl shadow-primary/20' : ''}`}
                  onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: "smooth" })}
                >
                  Pilih Paket
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
