import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Download, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/WhatsAppButton";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/why-sarvanta", label: "Why Us" },
  { href: "/why-sarvanta", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  { href: "/products/red-chillies", label: "Red Chillies" },
  { href: "/products/black-pepper", label: "Black Pepper" },
  { href: "/products/white-pepper", label: "White Pepper" },
  { href: "/products/moringa-powder", label: "Moringa Powder" },
  { href: "/products/jaggery-powder", label: "Jaggery Powder" },
  { href: "/products/dehydrated-vegetable-powders", label: "Dehydrated Vegetable Powders" },
  { href: "/products", label: "All Products" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] text-blue-100/60 relative overflow-hidden">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center mb-4 w-fit">
              <Image
                src="/images/logo.png"
                alt="Sarvanta Global"
                width={160}
                height={52}
                className="h-[52px] w-auto object-contain"
              />
            </Link>
            <p className="text-blue-200/35 text-xs leading-relaxed max-w-xs mb-5">
              Sarvanta Global is a premium agricultural commodities company connecting global buyers with responsibly sourced products from India through quality, reliability and long-term partnerships.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#C9A84C]/20 flex items-center justify-center text-blue-200/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/60 transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919900422441"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#C9A84C]/20 flex items-center justify-center text-blue-200/40 hover:text-[#25D366] hover:border-[#25D366]/60 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={13} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Our Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/images/brochure.png"
                    download
                    className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2 group"
                  >
                    <Download size={13} className="text-[#C9A84C]" />
                    Product Catalogue
                  </a>
                </li>
                <li>
                  <a
                    href="/images/brochure.png"
                    download
                    className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors flex items-center gap-2 group"
                  >
                    <Download size={13} className="text-[#C9A84C]" />
                    Company Profile
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <a href="tel:+919900422441" className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    +91 99004 22441
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <a href="tel:+919900422441" className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    +91 99004 22441
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <a href="mailto:info@sarvantaglobal.com" className="text-blue-200/40 text-sm hover:text-[#C9A84C] transition-colors">
                    info@sarvantaglobal.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="text-blue-200/40 text-sm">Bangalore, Karnataka, India</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#142035] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-200/20 text-[11px] tracking-wide">
            © 2026 Sarvanta Global. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-blue-200/20 text-[11px] hover:text-[#C9A84C] transition-colors">Privacy Policy</a>
            <span className="text-blue-200/10">|</span>
            <a href="#" className="text-blue-200/20 text-[11px] hover:text-[#C9A84C] transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
