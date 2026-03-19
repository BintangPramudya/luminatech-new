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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Abstract decorative circles */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border-2 border-accent/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Main SVG Graphic */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 dark:border-white/10 overflow-hidden group">
                  {/* Browser Header */}
                  <div className="h-10 bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  {/* Code Body */}
                  <div className="p-6 h-full flex flex-col gap-4 font-mono text-sm">
                    <div className="flex gap-2 text-primary">
                      <span className="text-accent">const</span> <span>App</span> = () =&gt; {"{"}
                    </div>
                    <div className="pl-6 flex flex-col gap-3">
                      <div className="w-3/4 h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                      <div className="w-1/2 h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" style={{animationDelay: "0.2s"}} />
                      <div className="w-5/6 h-4 bg-primary/20 rounded animate-pulse" style={{animationDelay: "0.4s"}} />
                      <div className="flex gap-4 mt-4">
                        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary to-accent opacity-80 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform" />
                        <div className="flex-1 flex flex-col gap-2 justify-center">
                          <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded" />
                          <div className="w-2/3 h-3 bg-slate-200 dark:bg-slate-700 rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="text-primary mt-auto">{"}"}</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">Performa</p>
                  <p className="font-bold text-foreground">99/100</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -left-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">Responsive</p>
                  <p className="font-bold text-foreground">Mobile Ready</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
