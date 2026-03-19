import { Zap, Instagram, Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-primary to-accent p-1.5 rounded-lg text-white">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Lumina<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Partner digital agency terpercaya untuk mengembangkan bisnis Anda ke level selanjutnya melalui solusi website dan strategi digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:text-primary transition-colors">Layanan</a></li>
              <li><a href="#portofolio" className="hover:text-primary transition-colors">Portofolio</a></li>
              <li><a href="#testimoni" className="hover:text-primary transition-colors">Testimoni</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Web Company Profile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-Commerce UMKM</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Landing Page</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Web Apps</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Gedung Sudirman Lt. 12,<br/>Jakarta Pusat, 10220</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@luminatech.id</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LuminaTech Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
