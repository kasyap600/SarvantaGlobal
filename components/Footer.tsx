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
                <WhatsAppLink className="text-[#25D366] text-sm hover:text-[#1ebe5d] transition-colors flex items-center gap-2" />
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
