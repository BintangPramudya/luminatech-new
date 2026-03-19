import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TokoPintar UMKM",
    category: "E-commerce",
    gradient: "from-green-400 to-emerald-600",
    tags: ["React", "Tailwind", "Stripe"]
  },
  {
    title: "KlinikSehat Digital",
    category: "Website Klinik",
    gradient: "from-blue-400 to-indigo-600",
    tags: ["Next.js", "Booking System"]
  },
  {
    title: "RestoCafe Online",
    category: "Landing Page",
    gradient: "from-orange-400 to-red-500",
    tags: ["HTML/CSS", "Framer Motion"]
  },
  {
    title: "PT Maju Jaya",
    category: "Company Profile",
    gradient: "from-purple-400 to-violet-600",
    tags: ["WordPress", "SEO"]
  },
  {
    title: "EduKids Platform",
    category: "Web App",
    gradient: "from-pink-400 to-rose-500",
    tags: ["React", "Node.js", "LMS"]
  },
  {
    title: "FitLife App",
    category: "Landing Page",
    gradient: "from-teal-400 to-cyan-600",
    tags: ["Vue", "Tailwind"]
  }
]

export function Portfolio() {
  return (
    <section id="portofolio" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Karya Kami</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Portofolio Terbaik Kami</h3>
          <p className="text-muted-foreground text-lg">
            Beberapa hasil karya terbaik kami yang telah membantu bisnis klien mencapai target digital mereka.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-slate-200">
                {/* Gradient Placeholder replacing real images */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 transition-transform duration-500 group-hover:scale-105`} />
                
                {/* Abstract UI details inside placeholder */}
                <div className="absolute inset-4 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 flex flex-col p-4 shadow-xl transition-transform duration-500 group-hover:scale-105">
                  <div className="w-1/3 h-4 bg-white/40 rounded-full mb-4" />
                  <div className="flex-1 flex gap-3">
                    <div className="w-1/2 h-full bg-white/20 rounded-lg" />
                    <div className="w-1/2 flex flex-col gap-2">
                       <div className="w-full h-8 bg-white/20 rounded" />
                       <div className="w-full h-8 bg-white/20 rounded" />
                       <div className="w-3/4 h-8 bg-white/20 rounded" />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-primary mb-1">{project.category}</p>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
                </div>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
