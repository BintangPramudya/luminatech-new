import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="tentang" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <Badge variant="default" className="mb-6 py-1.5 px-4 bg-white/50 backdrop-blur-md border border-primary/20">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-xs">Online &lt; 7 Hari</span>
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-foreground">
              Bangun Website Profesional & <br className="hidden md:block" />
              <span className="text-gradient">Tumbuhkan Bisnis Anda</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Kami bantu UMKM dan brand modern memiliki identitas digital yang kuat: desain menarik, performa cepat, dan strategi digital yang berdampak.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" onClick={() => scrollTo('#kontak')} className="rounded-full shadow-xl shadow-primary/20 group">
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('#portofolio')} className="rounded-full border-2 bg-white/50 backdrop-blur-sm">
                Lihat Portofolio
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white
                    ${i===1 ? 'bg-blue-500' : i===2 ? 'bg-emerald-500' : i===3 ? 'bg-amber-500' : 'bg-purple-500'}`}>
                    {String.fromCharCode(64+i)}
                  </div>
                ))}
              </div>
              <p>Dipercaya oleh 100+ Bisnis</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[520px] mx-auto" style={{ height: 480 }}>

              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Central phone mockup */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-52 bg-gray-900 rounded-[2.5rem] shadow-2xl shadow-red-500/20 border-4 border-gray-800 overflow-hidden">
                  {/* phone notch */}
                  <div className="h-6 bg-gray-900 flex items-center justify-center">
                    <div className="w-16 h-3 bg-gray-800 rounded-full" />
                  </div>
                  {/* phone screen */}
                  <div className="bg-white overflow-hidden" style={{ height: 300 }}>
                    {/* Fake browser bar */}
                    <div className="bg-gray-100 h-7 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <div className="flex-1 ml-2 bg-white rounded h-3.5 border border-gray-200" />
                    </div>
                    {/* Website preview content */}
                    <div className="p-3 flex flex-col gap-2.5">
                      {/* Nav bar mockup */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-3 bg-red-500 rounded" />
                        <div className="flex gap-1.5">
                          <div className="w-5 h-2 bg-gray-200 rounded" />
                          <div className="w-5 h-2 bg-gray-200 rounded" />
                          <div className="w-5 h-2 bg-gray-200 rounded" />
                        </div>
                      </div>
                      {/* Hero block */}
                      <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-lg p-3 mt-1">
                        <div className="w-20 h-3 bg-white/80 rounded mb-1.5" />
                        <div className="w-16 h-2.5 bg-white/60 rounded mb-2" />
                        <div className="w-12 h-5 bg-white rounded-full" />
                      </div>
                      {/* Card grid */}
                      <div className="grid grid-cols-2 gap-1.5 mt-1">
                        {[0,1,2,3].map(i => (
                          <div key={i} className="bg-gray-100 rounded-md p-1.5">
                            <div className="w-4 h-4 rounded bg-red-200 mb-1" />
                            <div className="w-full h-1.5 bg-gray-200 rounded mb-1" />
                            <div className="w-2/3 h-1.5 bg-gray-200 rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* phone home bar */}
                  <div className="h-6 bg-gray-900 flex items-end justify-center pb-1">
                    <div className="w-20 h-1 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Laptop mockup (behind, slightly left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-0 top-1/2 -translate-y-[60%]"
                style={{ zIndex: 0 }}
              >
                <div className="w-56 bg-gray-200 rounded-t-xl shadow-xl border border-gray-300 overflow-hidden">
                  <div className="h-4 bg-gray-300 flex items-center justify-center">
                    <div className="w-6 h-1.5 bg-gray-400 rounded-full" />
                  </div>
                  <div className="bg-white p-2" style={{ height: 130 }}>
                    <div className="h-full bg-gradient-to-br from-gray-50 to-red-50 rounded flex flex-col gap-1.5 p-2">
                      <div className="flex gap-1.5 mb-1">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                      </div>
                      <div className="w-full h-2 bg-red-200 rounded" />
                      <div className="w-4/5 h-2 bg-gray-200 rounded" />
                      <div className="w-3/5 h-2 bg-gray-200 rounded" />
                      <div className="flex gap-1.5 mt-1">
                        <div className="w-8 h-8 rounded bg-red-500/80" />
                        <div className="flex-1 flex flex-col gap-1 justify-center">
                          <div className="h-1.5 bg-gray-200 rounded" />
                          <div className="h-1.5 w-2/3 bg-gray-200 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-gray-300 rounded-b-sm" />
                <div className="h-1 bg-gray-400 rounded-b-md mx-2" />
              </motion.div>

              {/* Floating stat card: Visitors */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-2 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
                style={{ zIndex: 10 }}
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium">Pengunjung</p>
                  <p className="text-lg font-bold text-gray-800 leading-none">12.4K</p>
                  <p className="text-[10px] text-green-500 font-semibold">↑ 24%</p>
                </div>
              </motion.div>

              {/* Floating stat card: SEO */}
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [1, -1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3"
                style={{ zIndex: 10 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-600">SEO Score</span>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-10">
                  {[40, 60, 45, 80, 70, 95, 88].map((h, i) => (
                    <div
                      key={i}
                      className={`w-3 rounded-t-sm ${i === 5 ? 'bg-red-500' : 'bg-red-200'}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1 text-right">95/100</p>
              </motion.div>

              {/* Floating badge: < 7 days */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-8 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2"
                style={{ zIndex: 10 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-[10px] text-red-100 font-medium">Selesai dalam</p>
                  <p className="text-sm font-bold leading-none">{"< 7 Hari"}</p>
                </div>
              </motion.div>

              {/* Floating dot grid decoration */}
              <div className="absolute top-4 left-8 grid grid-cols-5 gap-1.5 opacity-20 pointer-events-none">
                {Array.from({length: 25}).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-red-500" />
                ))}
              </div>
              <div className="absolute bottom-4 right-8 grid grid-cols-4 gap-1.5 opacity-15 pointer-events-none">
                {Array.from({length: 16}).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
