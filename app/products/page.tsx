import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Sprout, Settings, Package, Globe2, Layers, CheckCircle, ShoppingBag, Factory, Tag, UtensilsCrossed, ShoppingCart, Truck } from "lucide-react";
import { products } from "@/lib/products";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Products — Sarvanta Global",
  description: "Browse our premium Indian agricultural commodities: Red Chillies, Black Pepper, White Pepper, Moringa Powder, Jaggery Powder, and Dehydrated Vegetable Powders.",
};

const qualityStandards = [
  { icon: Sprout,      title: "Premium Indian Origin",      desc: "Sourced from the best growing regions across India." },
  { icon: Settings,    title: "Machine Cleaned & Sorted",   desc: "Ensures purity, removes impurities and foreign particles." },
  { icon: CheckCircle, title: "Hygienically Processed",     desc: "Processed under strict hygiene and quality control conditions." },
  { icon: Package,     title: "Export-Ready Packaging",     desc: "Packed to retain freshness and quality during transit." },
  { icon: Layers,      title: "Flexible Specifications",    desc: "Customized grades and packaging as per buyer requirements." },
  { icon: Globe2,      title: "Bulk Supply Capability",     desc: "Consistent supply for large volumes around the world." },
  { icon: CheckCircle, title: "Consistent Quality",         desc: "Uniform quality and specifications in every shipment." },
];

const industries = [
  { icon: ShoppingBag,    title: "Food Processing",          desc: "Supplying high quality ingredients for food manufacturers." },
  { icon: Factory,        title: "Industrial Ingredients",   desc: "Reliable ingredients for industrial and commercial use." },
  { icon: Tag,            title: "Private Label",            desc: "Tailored solutions for private label brands worldwide." },
  { icon: UtensilsCrossed,title: "Hotels & Restaurants",     desc: "Premium quality spices and powders for the hospitality industry." },
  { icon: ShoppingCart,   title: "Retail Packaging",         desc: "Suitable for branded retail packaging and distribution." },
  { icon: Truck,          title: "Import & Distribution",    desc: "Supporting importers and distributors across global markets." },
];

const packagingOptions = [
  { label: "25 KG\nPP Bags",            img: null },
  { label: "50 KG\nPP Bags",            img: null },
  { label: "Jute Bags",                  img: null },
  { label: "Customized\nPackaging",      img: null },
  { label: "Private Labelling\n(Coming Soon)", img: null },
];

const vegPowderList = [
  "Tomato Powder", "Lemon Powder",
  "Potato Powder", "Mint Powder",
  "Spinach Powder", "Carrot Powder",
  "Beetroot Powder", "Tamarind Powder",
  "Arrowroot Powder", "Red Onion Powder",
  "Ginger Powder", "White Onion Powder",
  "Garlic Powder",
];

const spices = products.filter((p) => ["red-chillies", "black-pepper", "white-pepper"].includes(p.slug));
const naturalpowders = products.filter((p) => ["moringa-powder", "jaggery-powder"].includes(p.slug));
const vegPowders = products.find((p) => p.slug === "dehydrated-vegetable-powders");

export default function ProductsPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden bg-[#0B1120] min-h-[420px] flex items-center">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        {/* Spices collage on right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <Image src="/images/powders.png" alt="Spices" fill className="object-cover object-left opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-[#C9A84C]" /> Our Products
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
              Premium Agricultural
            </h1>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-bold text-[#C9A84C] leading-tight mb-4">
              Commodities
            </h1>
            <p className="text-white/70 text-sm font-semibold mb-4">Carefully sourced. Export-ready. Globally trusted.</p>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-md mb-8">
              Explore our portfolio of premium Indian spices, natural powders, and dehydrated vegetable powders sourced from trusted growers and processors across India. Every product is prepared with quality, consistency, and international buyer requirements in mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/images/brochure.png"
                download
                className="btn-gold inline-flex items-center gap-2 text-[#0B1120] font-semibold px-6 py-3 rounded-sm text-sm tracking-wide"
              >
                <Download size={14} /> Download Product Catalogue
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-sm text-sm tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── OUR PRODUCT CATEGORIES ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-center text-[11px] tracking-[0.4em] uppercase font-semibold text-[#0B1120] mb-2">Our Product Categories</h2>
          <div className="flex justify-center mb-8">
            <div className="h-0.5 w-10 bg-[#C9A84C]" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Premium Spices */}
          <Reveal delay={0.05}>
            <div className="border border-[#E8D5A0]/60 p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                  <Sprout size={15} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#0B1120] text-sm tracking-wide uppercase">Premium Spices</h3>
              </div>
              <p className="text-[#0B1120]/50 text-xs leading-relaxed mb-5">
                Finest quality Indian spices sourced with care and prepared to meet global standards.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {spices.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="group flex flex-col items-center gap-2">
                    <div className="relative w-full aspect-square overflow-hidden border border-[#E8D5A0]/40">
                      <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <span className="text-[#0B1120]/60 text-[10px] text-center leading-tight">{p.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <Link href="/products/black-pepper" className="inline-flex items-center gap-2 bg-[#0B1120] text-white text-xs font-semibold px-5 py-2.5 hover:bg-[#1A2D4A] transition-colors duration-200">
                  View All Spices <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Natural Powders */}
          <Reveal delay={0.1}>
            <div className="border border-[#E8D5A0]/60 p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                  <Layers size={15} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#0B1120] text-sm tracking-wide uppercase">Natural Powders</h3>
              </div>
              <p className="text-[#0B1120]/50 text-xs leading-relaxed mb-5">
                Wholesome natural powders with rich nutrition and exceptional quality.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {naturalpowders.map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="group flex flex-col items-center gap-2">
                    <div className="relative w-full aspect-square overflow-hidden border border-[#E8D5A0]/40">
                      <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <span className="text-[#0B1120]/60 text-[10px] text-center leading-tight">{p.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <Link href="/products/moringa-powder" className="inline-flex items-center gap-2 bg-[#0B1120] text-white text-xs font-semibold px-5 py-2.5 hover:bg-[#1A2D4A] transition-colors duration-200">
                  View All Powders <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Dehydrated Vegetable Powders */}
          <Reveal delay={0.15}>
            <div className="border border-[#E8D5A0]/60 p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                  <Package size={15} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#0B1120] text-sm tracking-wide uppercase">Dehydrated Vegetable Powders</h3>
              </div>
              <p className="text-[#0B1120]/50 text-xs leading-relaxed mb-5">
                A wide range of dehydrated vegetable powders for diverse food and industrial applications.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-5 flex-1">
                {vegPowderList.map((name) => (
                  <div key={name} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                    <span className="text-[#0B1120]/60 text-[11px]">{name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <Link href="/products/dehydrated-vegetable-powders" className="inline-flex items-center gap-2 bg-[#0B1120] text-white text-xs font-semibold px-5 py-2.5 hover:bg-[#1A2D4A] transition-colors duration-200">
                  View All Vegetable Powders <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── PRODUCT QUALITY STANDARDS ── */}
      <div className="bg-[#FAF5EE] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-[11px] tracking-[0.4em] uppercase font-semibold text-[#0B1120] mb-2">Product Quality Standards</h2>
            <div className="flex justify-center mb-10">
              <div className="h-0.5 w-10 bg-[#C9A84C]" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
            {qualityStandards.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center bg-white">
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <h4 className="text-[#0B1120] font-semibold text-[11px] leading-snug">{title}</h4>
                  <p className="text-[#0B1120]/45 text-[10px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── DOWNLOAD PRODUCT CATALOGUES ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <h2 className="text-center text-[11px] tracking-[0.4em] uppercase font-semibold text-[#0B1120] mb-2">Download Product Catalogues</h2>
          <div className="flex justify-center mb-10">
            <div className="h-0.5 w-10 bg-[#C9A84C]" />
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.07}>
              <div className="border border-[#E8D5A0]/60 overflow-hidden flex flex-col">
                <div className="relative h-36">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[#C9A84C] text-[8px] tracking-[0.2em] uppercase font-semibold">Premium Indian</p>
                    <p className="text-white font-bold text-sm leading-tight">{product.name}</p>
                  </div>
                </div>
                <a
                  href="/images/brochure.png"
                  download
                  className="flex items-center justify-center gap-2 bg-[#0B1120] text-white text-[11px] font-semibold py-2.5 hover:bg-[#C9A84C] hover:text-[#0B1120] transition-colors duration-200"
                >
                  Download Catalogue <Download size={11} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── PACKAGING OPTIONS ── */}
      <div className="bg-[#FAF5EE] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-[11px] tracking-[0.4em] uppercase font-semibold text-[#0B1120] mb-2">Packaging Options</h2>
            <div className="flex justify-center mb-10">
              <div className="h-0.5 w-10 bg-[#C9A84C]" />
            </div>
          </Reveal>
          <div className="flex flex-wrap items-start justify-center gap-6 lg:gap-10">
            {[
              { label: "25 KG\nPP Bags" },
              { label: "50 KG\nPP Bags" },
              { label: "Jute Bags" },
              { label: "Customized\nPackaging" },
              { label: "Private Labelling\n(Coming Soon)" },
            ].map(({ label }) => (
              <div key={label} className="flex flex-col items-center gap-2 w-24">
                <div className="w-20 h-20 bg-white border border-[#E8D5A0]/60 flex items-center justify-center rounded">
                  <Package size={28} className="text-[#C9A84C]/60" />
                </div>
                <span className="text-[#0B1120]/60 text-[11px] text-center leading-snug whitespace-pre-line">{label}</span>
              </div>
            ))}
            <div className="flex-1 min-w-[200px] max-w-xs border-l border-[#E8D5A0]/60 pl-6 self-center">
              <p className="text-[#0B1120]/60 text-xs leading-relaxed mb-2">Custom packaging available as per customer requirements.</p>
              <p className="text-[#0B1120]/60 text-xs leading-relaxed">We ensure safe packaging to maintain product quality during transit and storage.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── INDUSTRIES WE SERVE ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <h2 className="text-center text-[11px] tracking-[0.4em] uppercase font-semibold text-[#0B1120] mb-2">Industries We Serve</h2>
          <div className="flex justify-center mb-10">
            <div className="h-0.5 w-10 bg-[#C9A84C]" />
          </div>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full border border-[#C9A84C]/25 flex items-center justify-center bg-[#FAF5EE]">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
                <h4 className="text-[#0B1120] font-semibold text-xs leading-snug">{title}</h4>
                <p className="text-[#0B1120]/45 text-[10px] leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="relative bg-[#0B1120] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
          <Image src="/images/containers.png" alt="Export" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold text-white mb-2">
              Looking for a Reliable Supply Partner?
            </h2>
            <p className="text-blue-200/50 text-sm leading-relaxed max-w-md">
              Tell us your requirements and our team will provide the best quality products with competitive pricing and on-time delivery.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-[#0B1120] font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide">
                Request a Quote <ArrowRight size={14} />
              </Link>
              <a href="/images/brochure.png" download className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200">
                Download Catalogue <Download size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

    </div>
  );
}
