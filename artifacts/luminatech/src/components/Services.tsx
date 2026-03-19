import { Building2, Store, TrendingUp, Code2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Website Company Profile",
    description: "Tingkatkan kredibilitas perusahaan Anda dengan website profesional yang elegan.",
    icon: Building2,
    link: "#kontak"
  },
  {
    title: "Website UMKM / Katalog",
    description: "Tampilkan produk dan layanan Anda secara online 24/7 untuk menjangkau pelanggan baru.",
    icon: Store,
    link: "#kontak"
  },
  {
    title: "Landing Page Jualan",
    description: "Halaman khusus konversi tinggi (High-converting) untuk iklan Facebook/Tiktok/Google.",
    icon: TrendingUp,
    link: "#kontak"
  },
  {
    title: "Custom Web App",
    description: "Sistem web kustom seperti dashboard, kasir, atau manajemen inventaris.",
    icon: Code2,
    link: "#kontak"
  }
]

export function Services() {
  return (
    <section id="layanan" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Layanan Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Solusi Digital Lengkap untuk Segala Kebutuhan</h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Pilih layanan yang paling tepat untuk skala bisnis Anda saat ini. Kami siap wujudkan ide Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 border rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
                
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-8 line-clamp-2">
                  {service.description}
                </p>
                
                <a href={service.link} className="inline-flex items-center font-semibold text-primary group/link">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
