import Link from "next/link";
import Image from "next/image";
import { Globe, Handshake, TrendingUp, Target, Phone, Mail, MapPin, User } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const values = [
  { icon: Globe, label: "Global Reach" },
  { icon: Handshake, label: "Trust & Reliability" },
  { icon: TrendingUp, label: "Growth & Opportunities" },
  { icon: Target, label: "Focus & Commitment" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] text-blue-100/60 relative overflow-hidden">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Values bar */}
      <div className="border-b border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-6 md:gap-14">
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-xs text-blue-200/40 hover:text-[#C9A84C] transition-colors cursor-default">
                <Icon size={14} className="text-[#C9A84C]" />
                <span className="tracking-[0.1em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center mb-5 w-fit">
              <Image
                src="/images/logo.png"
                alt="Sarvanta Global"
                width={160}
                height={52}
                className="h-[52px] w-auto object-contain"
              />
            </Link>
            <p className="text-[#C9A84C]/80 text-base leading-relaxed mb-1 italic font-[family-name:var(--font-cormorant)]">
              Connecting Markets. Creating Opportunities.
            </p>
            <p className="text-blue-200/30 text-xs leading-relaxed max-w-xs">
              Premium Indian spices and commodities exported to global markets with consistent quality and competitive pricing.
            </p>
          </div>

          <div className="hidden md:block md:col-span-1" />

          {/* Products */}
          <div className="md:col-span-3">
            <h4 className="text-[#C9A84C] text-[9px] tracking-[0.35em] uppercase font-semibold mb-5">Products</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/products/black-pepper", label: "Black Pepper" },
                { href: "/products/white-pepper", label: "White Pepper" },
                { href: "/products/red-chillies", label: "Red Chillies" },
                { href: "/products/dehydrated-vegetable-powders", label: "Vegetable Powders" },
                { href: "/products", label: "All Products" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2 group">
                    <span className="w-3 h-px bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/60 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[#C9A84C] text-[9px] tracking-[0.35em] uppercase font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <User size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm font-semibold">Kumar</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-blue-200/40 text-sm">+91 99004 22441</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#25D366" className="mt-0.5 shrink-0" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <WhatsAppLink className="text-[#25D366] text-sm hover:text-[#1ebe5d] transition-colors flex items-center gap-1.5" />
              </li>
              <li className="flex items-start gap-3">
                <Mail size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <a href="mailto:info@sarvantaglobal.com" className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                  info@sarvantaglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="text-blue-200/40 text-sm">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#142035] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-200/20 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Sarvanta Global. All rights reserved.
          </p>
          <a href="https://www.sarvantaglobal.com" className="text-blue-200/20 text-[11px] tracking-wide hover:text-[#C9A84C] transition-colors">
            www.sarvantaglobal.com
          </a>
        </div>
      </div>
    </footer>
  );
}
