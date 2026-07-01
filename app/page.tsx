import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Package, Headphones, ShieldCheck, Sprout, Globe2, Handshake, Users } from "lucide-react";
import { products } from "@/lib/products";
import Reveal from "@/components/Reveal";
import MarqueeTicker from "@/components/MarqueeTicker";

const trustBadges = [
  {
    icon: Leaf,
    title: "Premium Products",
    desc: "Carefully sourced agricultural commodities that meet international standards.",
  },
  {
    icon: Package,
    title: "Export-Ready Packaging",
    desc: "Customized packaging solutions for bulk, retail and private label requirements.",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    desc: "Prompt quotations and dedicated assistance for a seamless buyer experience.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    desc: "Strict quality checks and ethical practices to ensure consistent product excellence.",
  },
];

const whyPoints = [
  { icon: Sprout,    title: "Trusted Sourcing",     desc: "Partnering with carefully selected growers and processors across India." },
  { icon: ShieldCheck, title: "Consistent Quality", desc: "Products sourced and processed to meet international quality expectations." },
  { icon: Package,   title: "Flexible Packaging",   desc: "Bulk and customized packaging solutions designed for global buyers." },
  { icon: Globe2,    title: "Reliable Supply",       desc: "Dependable sourcing and timely deliveries through trusted supply networks." },
  { icon: ArrowRight, title: "Competitive Pricing",  desc: "Transparent pricing backed by efficient procurement and long-term relationships." },
  { icon: Headphones, title: "Responsive Support",   desc: "Prompt quotations, dedicated communication, and customer-focused service." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0B1120] min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/Home Page - Images/01-hero-commerce-scene-clear.png" alt="Hero" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/75 to-[#0B1120]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <Reveal delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-[11px] tracking-[0.4em] uppercase font-semibold">
                  Connecting Markets. Creating Opportunities.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Premium<br />
                <span className="text-[#C9A84C]">Agricultural</span><br />
                <span className="text-[#C9A84C]">Commodities</span><br />
                from India
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-blue-200/60 text-sm leading-relaxed max-w-md mb-8">
                Sarvanta Global is a premium agricultural commodities company connecting international buyers with responsibly sourced products from India. Through dependable sourcing, uncompromising quality, and customer-focused service, we help businesses build reliable supply partnerships across global markets.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="btn-gold inline-flex items-center gap-2 text-[#0B1120] font-semibold px-7 py-3.5 rounded-sm tracking-wide text-sm"
                >
                  Explore Products <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-[#0D1120] border-t border-b border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-[#C9A84C]/10">
            {trustBadges.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="flex flex-col gap-2 px-4 first:pl-0">
                  <Icon size={22} className="text-[#C9A84C]" />
                  <h3 className="text-white text-sm font-semibold tracking-wide">{title}</h3>
                  <p className="text-blue-200/40 text-xs leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MarqueeTicker />

      {/* ── ABOUT / CONNECTING MARKETS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — farm image */}
            <Reveal direction="right">
              <div className="relative h-80 lg:h-[420px] overflow-hidden">
                <Image
                  src="/images/Home Page - Images/02-about-farm-field-clear.png"
                  alt="Sarvanta Global sourcing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </Reveal>

            {/* Right — text */}
            <Reveal direction="left">
              <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">
                About Sarvanta Global
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-[#0B1120] leading-tight mb-2">
                Connecting Markets.
              </h2>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-[#0B1120] leading-tight mb-4">
                Creating Opportunities.
              </h2>
              <div className="w-12 h-0.5 bg-[#C9A84C] mb-6" />
              <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-3">
                Sarvanta Global partners with trusted growers and processors across India to deliver premium agricultural commodities to buyers worldwide.
              </p>
              <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-8">
                We believe successful trade is built on consistency, transparency, and long-term relationships.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Sprout,  label: "Ethical Sourcing" },
                  { icon: Globe2,  label: "International Standards" },
                  { icon: ShieldCheck, label: "Transparent Process" },
                  { icon: Users,   label: "Customer First Approach" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center">
                      <Icon size={16} className="text-[#C9A84C]" />
                    </div>
                    <span className="text-[#0B1120]/60 text-[11px] leading-tight">{label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/why-sarvanta"
                className="inline-flex items-center gap-2 bg-[#0B1120] text-white font-semibold px-6 py-3 text-sm tracking-wide hover:bg-[#1A2D4A] transition-colors duration-200"
              >
                Learn More About Us <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PORTFOLIO ── */}
      <section className="bg-[#FAF5EE] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">
                  Our Product Portfolio
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-[#0B1120] leading-snug max-w-xl">
                  Carefully sourced agricultural commodities that meet international quality standards.
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all duration-200 shrink-0"
              >
                View All Products <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.07}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group bg-white border border-[#E8D5A0]/60 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/60 to-transparent" />
                  </div>
                  <div className="p-3 flex flex-col flex-1">
                    <h3 className="text-[#0B1120] font-semibold text-sm leading-tight mb-1">{product.name}</h3>
                    <p className="text-[#0B1120]/50 text-[11px] leading-relaxed flex-1 line-clamp-2">
                      {product.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#C9A84C] text-[11px] font-semibold mt-2 group-hover:gap-2 transition-all duration-200">
                      View Details <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GLOBAL BUYERS CHOOSE US ── */}
      <section className="bg-white py-20 border-t border-[#E8D5A0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold text-center mb-10">
              Why Global Buyers Choose Sarvanta Global
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyPoints.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-[#FAF5EE]">
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <h4 className="text-[#0B1120] font-semibold text-sm">{title}</h4>
                  <p className="text-[#0B1120]/50 text-[11px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#0B1120] py-24">
        <div className="absolute inset-0">
          <Image src="/images/Home Page - Images/09-cta-global-network-clear.png" alt="Global network" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/90 via-[#0B1120]/70 to-[#0B1120]/90" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Ready to Source Premium
            </h2>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#C9A84C] leading-tight mb-4">
              Agricultural Commodities?
            </h2>
            <p className="text-blue-200/50 text-sm mb-10">Let&apos;s build a long-term partnership.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 text-[#0B1120] font-semibold px-8 py-4 rounded-sm tracking-wide text-sm"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              >
                Browse Products <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
