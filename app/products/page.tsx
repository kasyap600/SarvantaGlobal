import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import MarqueeTicker from "@/components/MarqueeTicker";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Products — Sarvanta Global",
  description: "Browse our premium Indian spice catalogue: Black Pepper, White Pepper, Red Chillies, and Dehydrated Vegetable Powders.",
};

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #0B1120 0%, #080D1A 55%, #0B1530 100%)" }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 dot-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <Reveal>
            <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">Product Catalogue</p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-white mb-3 leading-tight">
              Our Products
            </h1>
            <div className="ornament max-w-[160px] mb-6">
              <span className="text-[#C9A84C]/60 text-xs">✦</span>
            </div>
            <p className="text-blue-200/50 max-w-xl leading-relaxed text-sm">
              Premium quality Indian spices sourced directly from trusted growers, machine cleaned, and hygienically packed for global markets.
            </p>
          </Reveal>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <MarqueeTicker />

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
            <div
              className={`group bg-white border border-[#E8D5A0]/50 overflow-hidden flex flex-col card-lift card-gold-top ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Navy panel */}
              <div
                className="relative lg:w-80 flex-shrink-0 flex flex-col justify-between overflow-hidden min-h-[220px]"
                style={{ background: "linear-gradient(145deg, #0B1530 0%, #0B1120 100%)" }}
              >
                {product.image && (
                  <div className="relative w-full h-48 lg:h-full lg:absolute lg:inset-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover opacity-30 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
                  </div>
                )}
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl"
                  style={{ background: product.heroColor }} />
                <span className="absolute -right-4 -bottom-6 font-[family-name:var(--font-cormorant)] text-[120px] font-bold text-white/5 select-none leading-none">
                  {product.name.charAt(0)}
                </span>
                <div className="relative p-10">
                  <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase font-semibold mb-3">{product.category}</p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-white mb-2 leading-tight">{product.name}</h2>
                  <p className="text-blue-200/40 text-[11px] tracking-wide">{product.tagline}</p>
                </div>
                <div className="mt-6">
                  <p className="text-blue-200/30 text-[10px] tracking-[0.2em] uppercase">Origin</p>
                  <p className="text-blue-100/70 text-sm font-medium">{product.origin}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col">
                <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-7">{product.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 flex-1">
                  {product.grades.length > 0 && (
                    <div>
                      <h4 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0B1120] mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-[#C9A84C]" /> Available Grades
                      </h4>
                      <ul className="space-y-2">
                        {product.grades.map((g) => (
                          <li key={g.name} className="flex items-start gap-2.5 text-[#0B1120]/60 text-sm">
                            <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                            {g.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {product.packaging.length > 0 && (
                    <div>
                      <h4 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#0B1120] mb-3 flex items-center gap-2">
                        <span className="w-4 h-px bg-[#C9A84C]" /> Packaging
                      </h4>
                      <ul className="space-y-2">
                        {product.packaging.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-[#0B1120]/60 text-sm">
                            <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-2 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-5 pt-5 border-t border-[#E8D5A0]/60">
                  <Link href={`/products/${product.slug}`} className="btn-gold inline-flex items-center gap-2 text-[#0B1120] text-sm font-semibold px-6 py-2.5 rounded-sm tracking-wide">
                    Full Specifications <ArrowRight size={13} />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#C9A84C] text-sm font-semibold hover:gap-2.5 transition-all duration-200">
                    Request Quote <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
