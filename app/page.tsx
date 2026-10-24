import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Truck, Headphones } from "lucide-react";
import { products, getProductsByCategory } from "@/lib/products";
import Reveal from "@/components/Reveal";
import MarqueeTicker from "@/components/MarqueeTicker";

const HP = "/images/Home Page - Images";

const wholeSpices = getProductsByCategory("Whole Spices");
const groundPowders = getProductsByCategory("Ground Spice Powders");
const superfoods = getProductsByCategory("Superfoods & Natural Powders");

// Featured products for the homepage grid (show a selection from each category)
const featuredProducts = [
  ...wholeSpices.slice(0, 3),
  ...groundPowders.slice(0, 2),
  ...superfoods.slice(0, 1),
];

const strengths = [
  { icon: Leaf,        title: "Premium Quality",       desc: "Carefully sourced from India's finest growing regions." },
  { icon: ShieldCheck, title: "Quality Assurance",     desc: "Strict quality checks at every stage of processing." },
  { icon: Truck,       title: "Reliable Supply",       desc: "Timely delivery through trusted logistics networks." },
  { icon: Headphones,  title: "Responsive Support",    desc: "Dedicated assistance and prompt quotations." },
];


export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0B1120] min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={`${HP}/01-hero-commerce-scene-clear.webp`}
            alt="Premium agricultural commodities export"
            fill
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] from-30% via-[#0B1120]/50 via-55% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/50 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-semibold">
                  Connecting Markets. Creating Opportunities.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6">
                Premium<br />
                <span className="text-[#C9A84C]">Agricultural</span><br />
                <span className="text-[#C9A84C]">Commodities</span><br />
                from India
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                Sarvanta Global connects international buyers with responsibly sourced spices, powders, and agricultural products from India.
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
                  className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STRENGTHS BAR ── */}
      <section className="bg-[#111827] border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="flex items-start gap-3">
                  <Icon size={20} className="text-[#C9A84C] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-white text-xs font-semibold tracking-wide mb-1">{title}</h3>
                    <p className="text-white/35 text-[11px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MarqueeTicker />

      {/* ── ABOUT SECTION ── */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left — farm image */}
            <Reveal direction="right" className="h-full">
              <div className="relative h-[320px] lg:h-full lg:min-h-full min-h-[320px] px-3 py-6 bg-white">
                <div className="relative w-full h-full outline outline-4 outline-white outline-offset-[-12px]">
                  <Image
                    src={`${HP}/02-about-farm-field-clear.webp`}
                    alt="Sarvanta Global farm sourcing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Right — text */}
            <Reveal direction="left">
              <div className="flex flex-col justify-center px-8 lg:px-14 py-10">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">
                  About Sarvanta Global
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-semibold text-[#0B1120] leading-tight mb-5">
                  Connecting Markets.<br />Creating Opportunities.
                </h2>
                <div className="w-10 h-0.5 bg-[#C9A84C] mb-6" />
                <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-4">
                  Sarvanta Global partners with trusted growers and processors across India to deliver premium agricultural commodities to buyers worldwide.
                </p>
                <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-8">
                  We believe successful trade is built on consistency, transparency, and long-term relationships.
                </p>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-[#0B1120] text-white font-semibold px-7 py-3.5 text-sm tracking-wide hover:bg-[#1A2D4A] transition-colors duration-200"
                  >
                    Learn More About Us <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES OVERVIEW ── */}
      <section className="bg-[#F9F6F1] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">
                Our Product Portfolio
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold text-[#0B1120] leading-tight">
                Premium Agricultural Commodities
              </h2>
              <p className="text-[#0B1120]/50 text-sm mt-3 max-w-lg mx-auto">
                Explore our range of carefully sourced spices, powders, and natural products from India.
              </p>
            </div>
          </Reveal>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { title: "Whole Spices", count: wholeSpices.length, products: wholeSpices, color: "#8B1A1A" },
              { title: "Ground Powders", count: groundPowders.length, products: groundPowders, color: "#D4A017" },
              { title: "Superfoods", count: superfoods.length, products: superfoods, color: "#3A6B35" },
              { title: "Dehydrated Powders", count: 14, products: [products.find(p => p.slug === "dehydrated-vegetable-powders")!], color: "#4A7C3F" },
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <Link href="/products" className="group block bg-white border border-[#E8D5A0]/40 p-5 hover:border-[#C9A84C]/60 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    <h3 className="text-[#0B1120] font-bold text-sm">{cat.title}</h3>
                  </div>
                  <p className="text-[#0B1120]/40 text-xs mb-4">{cat.count} products</p>
                  <div className="flex gap-2 overflow-hidden">
                    {cat.products.slice(0, 3).map((p) => (
                      <div key={p.slug} className="relative w-16 h-16 shrink-0 border border-[#E8D5A0]/30 overflow-hidden bg-white/5">
                        <Image src={p.image} alt={p.name} fill sizes="64px" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#C9A84C] text-[11px] font-semibold mt-4 group-hover:gap-2 transition-all duration-200">
                    View All <ArrowRight size={10} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS GRID ── */}
      <section className="bg-[#0B1120] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">
                  Featured Products
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-bold text-white leading-snug">
                  Our Most Popular Commodities
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all duration-200 shrink-0"
              >
                View All {products.length} Products <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group bg-[#111827] border border-white/5 overflow-hidden hover:border-[#C9A84C]/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#161F30]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 flex flex-col flex-1 border-t border-white/5">
                    <p className="text-[#C9A84C]/60 text-[9px] uppercase tracking-wide mb-1">{product.category}</p>
                    <h3 className="text-white font-bold text-sm leading-tight mb-1">{product.name}</h3>
                    <span className="inline-flex items-center gap-1 text-[#C9A84C] text-[11px] font-semibold mt-auto pt-2 group-hover:gap-2 transition-all duration-200">
                      View Details <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[#0B1120] py-20">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative">
            <Image src={`${HP}/09-cta-global-network-clear.webp`} alt="" fill className="object-cover opacity-80 brightness-110" />
            <div className="absolute inset-0 bg-[#0B1120]/25" />
          </div>
          <div className="relative">
            <Image src={`${HP}/10-cta-cargo-ship-clear.webp`} alt="" fill className="object-cover opacity-85 brightness-110" />
            <div className="absolute inset-0 bg-[#0B1120]/20" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/40 via-transparent to-[#0B1120]/40" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
              Ready to Source Premium
            </h2>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#C9A84C] leading-tight mb-4">
              Agricultural Commodities?
            </h2>
            <p className="text-white/50 text-sm mb-10">Let&apos;s build a long-term partnership.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 text-[#0B1120] font-semibold px-8 py-4 rounded-sm tracking-wide text-sm"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-4 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
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
