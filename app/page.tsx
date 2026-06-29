import Link from "next/link";
import Image from "next/image";
import { Globe, Handshake, TrendingUp, Target, ArrowRight, CheckCircle, Star, MoveRight, Download } from "lucide-react";
import { products } from "@/lib/products";
import MarqueeTicker from "@/components/MarqueeTicker";
import Reveal from "@/components/Reveal";

const values = [
  { icon: Globe,      title: "Global Reach",          desc: "Supplying premium Indian spices to buyers across Asia, Europe, Middle East and beyond." },
  { icon: Handshake,  title: "Trust & Reliability",   desc: "Consistent product quality and on-time delivery backed by long-term grower relationships." },
  { icon: TrendingUp, title: "Growth & Opportunities",desc: "Competitive pricing and flexible volumes to support your business growth." },
  { icon: Target,     title: "Focus & Commitment",    desc: "Dedicated customer service and professional handling from sourcing to shipment." },
];

const whyPoints = [
  "Reliable Supply Network",
  "Consistent Product Quality",
  "Competitive Pricing",
  "Professional Customer Service",
  "Long-Term Business Relationships",
  "Custom Packaging Available",
];

const stats = [
  { value: "3+",    label: "Product Categories" },
  { value: "10+",   label: "Grade Variants" },
  { value: "24h",   label: "Quote Response" },
  { value: "100%",  label: "Natural & Cleaned" },
];

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────
          HERO  — full-width centered, tall
      ───────────────────────────────────────── */}
      <section
        className="grain glow-gold relative overflow-hidden min-h-[92vh] flex flex-col justify-center"
        style={{ background: "linear-gradient(160deg, #0B1120 0%, #080D1A 50%, #0D1A35 100%)" }}
      >
        {/* Background textures */}
        <div className="absolute inset-0 hero-pattern pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] dot-pattern opacity-25 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] dot-pattern opacity-15 pointer-events-none" />
        {/* Gold ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#C9A84C]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

          {/* Eyebrow */}
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#C9A84C]/60" />
              <span className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-semibold">
                Connecting Markets · Creating Opportunities
              </span>
              <div className="h-px w-8 bg-[#C9A84C]/60" />
            </div>
          </Reveal>

          {/* Brand name — big */}
          <Reveal delay={0.1}>
            <div className="mb-4">
              <h1 className="font-[family-name:var(--font-cormorant)] font-bold text-white tracking-[0.08em] leading-none">
                <span className="block text-7xl md:text-9xl lg:text-[10rem]">SARVANTA</span>
                <span className="block text-5xl md:text-7xl lg:text-[7rem] text-[#C9A84C] tracking-[0.18em] -mt-2">GLOBAL</span>
              </h1>
            </div>
          </Reveal>

          {/* Gold ornament + tagline */}
          <Reveal delay={0.18}>
            <div className="flex items-center justify-center gap-4 my-7">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
              <Star size={11} className="text-[#C9A84C]" fill="#C9A84C" />
              <span className="text-[#C9A84C]/70 text-[10px] tracking-[0.4em] uppercase font-semibold">
                Premium Indian Spices &amp; Commodities
              </span>
              <Star size={11} className="text-[#C9A84C]" fill="#C9A84C" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
            </div>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.24}>
            <p className="text-blue-200/55 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Sarvanta Global sources and exports the finest Indian spices and powders — Black Pepper, White Pepper, Red Chillies, Onion Powder, and Moringa Powder — to buyers worldwide with consistent quality and competitive pricing.
            </p>
          </Reveal>

          {/* Founder byline */}
          <Reveal delay={0.27}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-6 bg-[#C9A84C]/40" />
              <p className="text-blue-200/40 text-xs tracking-[0.25em] uppercase">
                Founded by <span className="text-[#C9A84C]/70 font-semibold">Ved Kumar</span>
              </p>
              <div className="h-px w-6 bg-[#C9A84C]/40" />
            </div>
          </Reveal>

          {/* CTA buttons */}
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/products"
                className="btn-gold inline-flex items-center justify-center gap-2 text-[#0B1120] font-semibold px-10 py-4 rounded-sm tracking-wide text-sm"
              >
                Explore Products <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-10 py-4 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] hover:bg-[#C9A84C]/8 transition-all duration-200"
              >
                Request a Quote
              </Link>
              <a
                href="/images/brochure.png"
                download="Sarvanta-Global-Brochure.png"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 font-semibold px-10 py-4 rounded-sm tracking-wide text-sm hover:border-white/40 hover:text-white transition-all duration-200"
              >
                <Download size={15} /> Download Brochure
              </a>
            </div>
          </Reveal>

          {/* Stats row — centered, with dividers */}
          <Reveal delay={0.36}>
            <div className="flex flex-wrap items-center justify-center gap-0 border border-[#1A2D4A] divide-x divide-[#1A2D4A]">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center px-8 py-5 flex-1 min-w-[120px]">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#C9A84C] leading-none mb-1">
                    {value}
                  </span>
                  <span className="text-blue-200/40 text-[10px] tracking-[0.15em] uppercase">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF5EE] to-transparent" />
      </section>

      {/* ── Marquee ── */}
      <MarqueeTicker />

      {/* ─────────────────────────────────────────
          PRODUCTS  — section header left, cards grid
      ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section header — left aligned, large */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-semibold mb-3">
                Our Products
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-[#0B1120] leading-tight">
                What We Export
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200 shrink-0 mb-1"
            >
              View All Products <MoveRight size={15} />
            </Link>
          </div>
          {/* Full-width gold rule */}
          <div className="h-px bg-gradient-to-r from-[#C9A84C]/60 via-[#C9A84C]/20 to-transparent mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.1}>
              <Link
                href={`/products/${product.slug}`}
                className="group card-lift card-gold-top bg-white border border-[#E8D5A0]/50 overflow-hidden flex flex-col h-full"
              >
                {/* Dark header */}
                <div
                  className="relative overflow-hidden"
                  style={{ background: "linear-gradient(145deg, #0D1A35 0%, #0B1120 100%)" }}
                >
                  {product.image ? (
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase font-semibold mb-1">
                          {product.category}
                        </p>
                        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-white group-hover:text-[#C9A84C] transition-colors duration-300">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8">
                      <div className="absolute inset-0 dot-pattern opacity-20" />
                      <div
                        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-25 blur-2xl"
                        style={{ background: product.heroColor }}
                      />
                      <span className="absolute right-2 bottom-0 font-[family-name:var(--font-cormorant)] text-[90px] font-bold text-white/5 select-none leading-none">
                        {product.name.charAt(0)}
                      </span>
                      <div className="relative">
                        <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase font-semibold mb-3">
                          {product.category}
                        </p>
                        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-white mb-1 group-hover:text-[#C9A84C] transition-colors duration-300">
                          {product.name}
                        </h3>
                        <p className="text-blue-200/40 text-xs tracking-wide">{product.tagline}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex-1 p-7 flex flex-col">
                  <p className="text-[#0B1120]/55 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
                    {product.description}
                  </p>

                  {/* Grade tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.grades.slice(0, 2).map((g) => (
                      <span
                        key={g.name}
                        className="bg-[#FAF5EE] text-[#0B1120]/60 text-[10px] px-2.5 py-1 border border-[#E8D5A0] tracking-wide"
                      >
                        {g.name.length > 20 ? g.name.slice(0, 20) + "…" : g.name}
                      </span>
                    ))}
                    {product.grades.length > 2 && (
                      <span className="bg-[#0B1120] text-[#C9A84C] text-[10px] px-2.5 py-1 tracking-wide">
                        +{product.grades.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E8D5A0]/60">
                    <span className="inline-flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold tracking-wide group-hover:gap-2.5 transition-all duration-200">
                      View Specifications <ArrowRight size={12} />
                    </span>
                    <span className="text-[#0B1120]/25 text-[10px] tracking-wide uppercase">India</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          WHY SARVANTA  — two-col, left aligned
      ───────────────────────────────────────── */}
      <section
        className="grain glow-gold relative overflow-hidden py-24"
        style={{ background: "linear-gradient(160deg, #0B1120 0%, #080D1A 50%, #0D1A35 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] dot-pattern opacity-15" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9A84C]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — text */}
            <div>
              <Reveal>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-semibold mb-3">
                  Why Choose Us
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-white leading-tight mb-2">
                  Why Sarvanta
                </h2>
                <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-[#C9A84C] italic leading-tight mb-8">
                  Global?
                </h2>
                <div className="h-px w-16 bg-[#C9A84C]/40 mb-8" />
                <p className="text-blue-200/50 leading-relaxed mb-10 text-sm max-w-sm">
                  A dedicated commodity trading company built on reliable sourcing, transparent pricing, and long-term relationships with buyers across the globe.
                </p>
              </Reveal>

              <div className="space-y-3 mb-10">
                {whyPoints.map((point, i) => (
                  <Reveal key={point} delay={i * 0.06}>
                    <div className="flex items-center gap-3 text-blue-100/70 text-sm">
                      <CheckCircle size={14} className="text-[#C9A84C] shrink-0" />
                      {point}
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <Link
                  href="/why-sarvanta"
                  className="inline-flex items-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold px-6 py-3 rounded-sm tracking-wide hover:border-[#C9A84C] hover:bg-[#C9A84C]/8 transition-all duration-200"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </Reveal>
            </div>

            {/* Right — value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={i * 0.1} direction="left">
                  <div
                    className={`relative border p-7 overflow-hidden transition-all duration-300 hover:border-[#C9A84C]/50 h-full ${
                      i === 0
                        ? "border-[#C9A84C]/40 bg-[#C9A84C]/5"
                        : "border-[#1A2D4A] bg-[#142035]/50"
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
                    <Icon size={18} className="text-[#C9A84C] mb-4" />
                    <h4 className="text-white font-semibold text-sm mb-2 tracking-wide">{title}</h4>
                    <p className="text-blue-200/40 text-xs leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CTA  — full width, centered
      ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div
            className="relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #0B1120 0%, #0D1A35 100%)" }}
          >
            {/* Frame lines */}
            <div className="absolute inset-0 border border-[#C9A84C]/15 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
            <div className="absolute inset-0 dot-pattern opacity-10" />
            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-56 bg-[#C9A84C]/6 rounded-full blur-[80px]" />

            <div className="relative text-center px-8 py-20 md:py-24">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9A84C]/60" />
                <span className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-semibold">
                  Get in Touch
                </span>
                <div className="h-px w-8 bg-[#C9A84C]/60" />
              </div>

              {/* Headline */}
              <h2 className="font-[family-name:var(--font-cormorant)] font-semibold text-white leading-tight mb-2">
                <span className="block text-4xl md:text-6xl">Ready to Source</span>
                <span className="block text-5xl md:text-7xl text-[#C9A84C] italic">Premium Spices?</span>
              </h2>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 my-7">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]/40" />
                <span className="text-[#C9A84C]/50 text-xs">✦</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]/40" />
              </div>

              <p className="text-blue-200/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
                Send us your requirements and we will respond with pricing, availability, and product specifications within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center justify-center gap-2 text-[#0B1120] font-semibold px-12 py-4 rounded-sm tracking-wide text-sm"
                >
                  Request a Quote <ArrowRight size={15} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-10 py-4 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] transition-all duration-200"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
