"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#080D1A]/90 backdrop-blur-md ${
        scrolled
          ? "shadow-[0_2px_32px_rgba(0,0,0,0.6),0_1px_0_rgba(201,168,76,0.08)]"
          : ""
      }`}
    >
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.webp"
              alt="Sarvanta Global"
              width={200}
              height={66}
              className="h-[66px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1 px-4 py-2 text-[13px] tracking-wide transition-colors duration-200 ${
                    active ? "text-[#C9A84C]" : "text-blue-200/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={12} className="opacity-60" />}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A84C]" />
                  )}
                </Link>
              );
            })}
            <div className="w-px h-5 bg-[#1A2D4A] mx-2" />
            <Link
              href="/contact"
              className="btn-gold text-[#0B1120] text-[13px] font-semibold px-5 py-2 rounded-sm tracking-wide"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-blue-200/60 hover:text-white transition-colors p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080D1A] border-t border-[#C9A84C]/15 px-4 pt-3 pb-5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 py-3 text-sm border-b border-[#142035] last:border-0 transition-colors ${
                  active ? "text-[#C9A84C]" : "text-blue-200/60 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {active && <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />}
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-4 btn-gold block text-center text-[#0B1120] text-sm font-semibold px-5 py-2.5 rounded-sm tracking-wide"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
