import { Phone, Mail, MapPin, Clock, User } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Quote Request — Sarvanta Global",
  description: "Request a quote for premium Indian spices. Contact Sarvanta Global, Bangalore.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #0B1120 0%, #080D1A 55%, #0B1530 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 dot-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">Get in Touch</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-white mb-3 leading-tight">
            Request a Quote
          </h1>
          <div className="ornament max-w-[160px] mb-6">
            <span className="text-[#C9A84C]/60 text-xs">✦</span>
          </div>
          <p className="text-blue-200/50 max-w-xl leading-relaxed text-sm">
            Tell us your requirements — product, quantity, and packaging preference — and we will respond with pricing and specifications within 24 hours.
          </p>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-5">
            <div className="relative p-8 overflow-hidden rounded-sm"
              style={{ background: "linear-gradient(145deg, #0B1120, #0B1530)" }}>
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
              <div className="absolute inset-0 dot-pattern opacity-10" />
              <div className="relative">
                <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C9A84C] mb-6">Contact Details</h3>
                <ul className="space-y-6">
                  {[
                    { icon: User, label: "Contact Person", value: "Ved Kumar", href: undefined },
                    { icon: Phone, label: "Phone", value: "+91 97397 99944", href: "tel:+919739799944" },
                    { icon: Mail, label: "Email", value: "info@sarvantaglobal.com", href: "mailto:info@sarvantaglobal.com" },
                    { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India", href: undefined },
                    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: undefined },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                        <Icon size={13} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <p className="text-blue-200/30 text-[10px] tracking-[0.2em] uppercase mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-blue-100/70 text-sm hover:text-[#C9A84C] transition-colors">{value}</a>
                        ) : (
                          <p className="text-blue-100/70 text-sm">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-gold-top bg-white border border-[#E8D5A0]/60 p-8">
              <h3 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0B1120] mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-[#C9A84C]" /> What Happens Next?
              </h3>
              <ol className="space-y-5">
                {[
                  "We receive your inquiry and review your requirements.",
                  "Our team prepares pricing and availability details.",
                  "We send you a detailed quote within 24 hours.",
                  "We discuss terms and arrange a sample if needed.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #0B1120, #0B1530)", border: "1px solid rgba(201,168,76,0.3)" }}>
                      <span className="text-[#C9A84C] text-[10px] font-bold">{i + 1}</span>
                    </div>
                    <p className="text-[#0B1120]/60 text-xs leading-relaxed mt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
