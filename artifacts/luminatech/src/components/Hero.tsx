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
    <section id="tentang" className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <Badge variant="default" className="mb-5 py-1.5 px-4 bg-white/50 backdrop-blur-md border border-primary/20">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-xs">Online &lt; 7 Hari</span>
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-5 text-foreground">
              Bangun Website Profesional & <br className="hidden md:block" />
              <span className="text-gradient">Tumbuhkan Bisnis Anda</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-7 max-w-lg leading-relaxed">
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

            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground font-medium">
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

          {/* Right: Device mockups illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[540px] mx-auto" style={{ height: 460 }}>

              {/* Glow behind devices */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-60 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* ── BROWSER WINDOW MOCKUP ── */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-0 right-10"
                style={{ zIndex: 1 }}
              >
                {/* Browser chrome */}
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/20 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  {/* Title bar */}
                  <div className="h-9 bg-gray-100 dark:bg-gray-800 flex items-center px-3 gap-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    {/* URL bar */}
                    <div className="flex-1 mx-2 bg-white dark:bg-gray-700 rounded-md h-5 border border-gray-200 dark:border-gray-600 flex items-center px-2 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                      <div className="w-28 h-1.5 bg-gray-300 dark:bg-gray-500 rounded" />
                    </div>
                    <div className="flex gap-1.5">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-5 h-5 rounded bg-gray-200 dark:bg-gray-700" />
                      ))}
                    </div>
                  </div>

                  {/* Website content */}
                  <div className="bg-white dark:bg-gray-950" style={{ height: 250 }}>
                    {/* Navbar */}
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded bg-red-500" />
                        <div className="w-14 h-2.5 bg-gray-800 dark:bg-gray-200 rounded" />
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-1.5 bg-gray-300 dark:bg-gray-600 rounded" />
                        <div className="w-8 h-1.5 bg-gray-300 dark:bg-gray-600 rounded" />
                        <div className="w-8 h-1.5 bg-gray-300 dark:bg-gray-600 rounded" />
                      </div>
                      <div className="w-14 h-5 rounded-full bg-red-500" />
                    </div>

                    {/* Hero area */}
                    <div className="flex gap-3 px-4 pt-3">
                      <div className="flex-1 flex flex-col gap-2 pt-2">
                        <div className="w-4/5 h-3 bg-gray-800 dark:bg-gray-100 rounded" />
                        <div className="w-3/5 h-3 bg-gray-800 dark:bg-gray-100 rounded" />
                        <div className="w-4/5 h-2 bg-red-500 rounded mt-0.5" />
                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
                        <div className="w-5/6 h-1.5 bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="flex gap-2 mt-2">
                          <div className="w-16 h-6 rounded-full bg-red-500" />
                          <div className="w-16 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                        </div>
                      </div>
                      {/* Right visual placeholder */}
                      <div className="w-28 h-32 rounded-xl bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/20 flex items-center justify-center shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/30" />
                      </div>
                    </div>

                    {/* Cards row */}
                    <div className="flex gap-2 px-4 pt-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="flex-1 rounded-lg bg-gray-50 dark:bg-gray-800 p-2">
                          <div className="w-5 h-5 rounded bg-red-200 dark:bg-red-800 mb-1.5" />
                          <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-600 rounded mb-1" />
                          <div className="w-2/3 h-1.5 bg-gray-200 dark:bg-gray-600 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── PHONE MOCKUP ── */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-0 right-0"
                style={{ zIndex: 10 }}
              >
                <div className="w-36 bg-gray-900 rounded-[1.8rem] shadow-2xl shadow-red-500/20 border-[3px] border-gray-800 overflow-hidden">
                  {/* Dynamic island / notch */}
                  <div className="h-5 bg-gray-900 flex items-center justify-center">
                    <div className="w-12 h-3 bg-black rounded-full" />
                  </div>
                  {/* Screen */}
                  <div className="bg-white overflow-hidden" style={{ height: 220 }}>
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-2 py-1 bg-gray-50">
                      <div className="text-[7px] font-bold text-gray-500">9:41</div>
                      <div className="flex gap-0.5 items-center">
                        <div className="w-3 h-1.5 rounded-sm bg-gray-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        <div className="w-2 h-1.5 rounded-sm bg-gray-400" />
                      </div>
                    </div>
                    {/* Mobile site content */}
                    <div className="px-2 flex flex-col gap-1.5 bg-white">
                      {/* Nav */}
                      <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded bg-red-500" />
                          <div className="w-8 h-1.5 bg-gray-700 rounded" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <div className="w-4 h-0.5 bg-gray-500 rounded" />
                          <div className="w-4 h-0.5 bg-gray-500 rounded" />
                          <div className="w-4 h-0.5 bg-gray-500 rounded" />
                        </div>
                      </div>
                      {/* Hero */}
                      <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-lg p-2">
                        <div className="w-16 h-2 bg-white/80 rounded mb-1" />
                        <div className="w-12 h-1.5 bg-white/60 rounded mb-2" />
                        <div className="w-10 h-4 bg-white rounded-full" />
                      </div>
                      {/* Cards 2col */}
                      <div className="grid grid-cols-2 gap-1">
                        {[0,1,2,3].map(i => (
                          <div key={i} className="bg-gray-50 rounded p-1.5">
                            <div className="w-3 h-3 rounded bg-red-200 mb-1" />
                            <div className="w-full h-1 bg-gray-200 rounded mb-0.5" />
                            <div className="w-2/3 h-1 bg-gray-200 rounded" />
                          </div>
                        ))}
                      </div>
                      {/* Testimonial */}
                      <div className="bg-gray-50 rounded p-1.5 flex gap-1.5 items-start">
                        <div className="w-5 h-5 rounded-full bg-amber-400 shrink-0" />
                        <div className="flex-1">
                          <div className="w-full h-1 bg-gray-200 rounded mb-0.5" />
                          <div className="w-3/4 h-1 bg-gray-200 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div className="h-5 bg-gray-900 flex items-end justify-center pb-1">
                    <div className="w-14 h-1 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* ── FLOATING CARDS ── */}

              {/* Visitors card */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-3 py-2.5 flex items-center gap-2.5"
                style={{ zIndex: 20 }}
              >
                <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Pengunjung</p>
                  <p className="text-base font-bold text-gray-800 dark:text-gray-100 leading-none">12.4K</p>
                  <p className="text-[10px] text-green-500 font-semibold">↑ 24%</p>
                </div>
              </motion.div>

              {/* Performance card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 left-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 px-3 py-2.5"
                style={{ zIndex: 20 }}
              >
                <p className="text-[10px] text-gray-400 font-medium mb-1.5">Performa Web</p>
                <div className="flex items-end gap-1 h-8 mb-1">
                  {[55, 70, 60, 85, 75, 95, 90].map((h, i) => (
                    <div
                      key={i}
                      className={`w-2.5 rounded-t-sm ${i === 5 ? 'bg-red-500' : 'bg-red-200 dark:bg-red-800'}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-400">SEO Score</span>
                  <span className="text-xs font-bold text-red-500">95/100</span>
                </div>
              </motion.div>

              {/* Speed badge */}
              <motion.div
                animate={{ y: [0, -7, 0], x: [0, 3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 left-20 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg shadow-red-500/30 px-3 py-2 flex items-center gap-1.5"
                style={{ zIndex: 20 }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-[9px] text-red-100 leading-none">Selesai dalam</p>
                  <p className="text-xs font-bold leading-none">{"< 7 Hari"}</p>
                </div>
              </motion.div>

              {/* Dot grid top-left */}
              <div className="absolute top-2 left-0 grid grid-cols-5 gap-1.5 opacity-20 pointer-events-none">
                {Array.from({length: 20}).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-red-400" />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
