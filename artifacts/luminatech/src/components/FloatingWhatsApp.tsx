import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl whitespace-nowrap">
        Butuh bantuan? Chat kami!
        {/* Triangle pointer */}
        <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white" />
      </span>
    </a>
  )
}
