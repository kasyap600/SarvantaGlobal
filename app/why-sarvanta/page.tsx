import Link from "next/link";
import { Globe, Handshake, TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Why Sarvanta Global — Premium Indian Spice Exporter",
  description: "Learn why global buyers choose Sarvanta Global for premium Indian spices.",
};

const pillars = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Our supply network spans across India's finest spice-growing regions — Malabar coast for pepper, Guntur and Byadgi for chillies — enabling us to source premium grades year-round.",
    points: ["Direct grower relationships", "Pan-India sourcing network", "Year-round availability"],
  },
  {
    icon: Handshake,
    title: "Trust & Reliability",
    desc: "Every lot is inspected, machine cleaned, and tested before dispatch. We provide detailed product specification sheets and packing lists with every order.",
    points: ["Pre-shipment inspection", "Batch-level documentation", "On-time delivery commitment"],
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    desc: "By working directly with growers and maintaining lean operations, we offer market-competitive pricing without compromising on quality.",
    points: ["Direct-from-farm sourcing", "Transparent pricing", "Volume discounts available"],
  },
  {
    icon: Target,
    title: "Customer-Centric Approach",
    desc: "From your first inquiry to final delivery, our team assists with custom packaging, grade adjustments, and flexible payment terms for established buyers.",
    points: ["Custom packaging & labeling", "Grade customization", "Dedicated account support"],
  },
];

export default function WhySarvantaPage() {
  return (
    <div>
      <div className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #0B1120 0%, #080D1A 55%, #0B1530 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 dot-pattern opacity-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">About Us</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-white mb-3 leading-tight">
            Why Sarvanta Global?
          </h1>
          <div className="ornament max-w-[160px] mb-6">
            <span className="text-[#C9A84C]/60 text-xs">✦</span>
          </div>
          <p className="text-blue-200/50 max-w-xl leading-relaxed text-sm">
            A Bangalore-based commodity trading company specializing in premium Indian spices. Our mission — connect the world's buyers with India's finest produce.
          </p>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        {pillars.map(({ icon: Icon, title, desc, points }, i) => (
          <div key={title} className={`bg-white border border-[#E8D5A0]/50 overflow-hidden flex flex-col card-gold-top card-lift ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <div className="relative md:w-72 flex-shrink-0 p-10 flex flex-col justify-between overflow-hidden"
              style={{ background: "linear-gradient(145deg, #0B1530 0%, #0B1120 100%)" }}>
              <div className="absolute inset-0 dot-pattern opacity-15" />
              <div className="relative">
                <div className="w-12 h-12 border border-[#C9A84C]/40 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#C9A84C]" />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-white leading-tight">{title}</h2>
              </div>
              <span className="absolute -right-2 -bottom-4 font-[family-name:var(--font-cormorant)] text-[100px] font-bold text-white/4 select-none leading-none">
                {i + 1}
              </span>
            </div>
            <div className="flex-1 p-8 md:p-10">
              <p className="text-[#0B1120]/60 leading-relaxed mb-6 text-sm">{desc}</p>
              <ul className="space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[#0B1120]/70 text-sm">
                    <CheckCircle size={13} className="text-[#C9A84C] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative p-14 text-center overflow-hidden rounded-sm"
          style={{ background: "linear-gradient(145deg, #0B1120, #0B1530)" }}>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-[#C9A84C]/6 rounded-full blur-[60px]" />
          <div className="relative">
            <p className="text-blue-200/40 text-sm mb-6">Ready to experience the Sarvanta difference?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2 text-[#0B1120] font-semibold px-8 py-3.5 rounded-sm tracking-wide text-sm">
                Get a Quote <ArrowRight size={14} />
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] font-semibold px-8 py-3.5 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] transition-all">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
