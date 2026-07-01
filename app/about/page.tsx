import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  RefreshCw,
  Users,
  Leaf,
  TrendingUp,
  Sprout,
  PackageCheck,
  Package,
  Tag,
  HeadphonesIcon,
  Globe,
  Eye,
  Target,
  Handshake,
  ArrowRight,
  CheckCircle,
  FlaskConical,
  Wrench,
  MapPin,
  ClipboardList,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "About Us — Sarvanta Global",
  description:
    "Learn about Sarvanta Global — an Indian agricultural commodities sourcing and export company connecting global buyers with premium-quality products.",
};

const whoWeAre = [
  {
    icon: Users,
    title: "Who We Are",
    body: [
      "Sarvanta Global is an Indian agricultural commodities sourcing and export company committed to connecting global buyers with premium-quality products sourced from trusted growers and processors across India.",
      "We specialise in supplying export-ready agricultural commodities that meet international quality expectations while maintaining transparency, consistency, and long-term business relationships.",
      "Our mission is to simplify global sourcing by providing dependable supply, competitive pricing, and responsive customer service.",
    ],
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: [
      "To become one of the world's most trusted agricultural commodities trading companies by building long-term partnerships founded on quality, integrity, and reliability.",
    ],
  },
  {
    icon: Target,
    title: "Our Mission",
    body: [
      "To connect Indian producers with international markets while delivering exceptional value through responsible sourcing, consistent quality, flexible packaging, and customer-first service.",
    ],
  },
];

const coreValues = [
  { icon: Shield,     title: "Integrity",        desc: "We believe transparency builds lasting partnerships." },
  { icon: Award,      title: "Quality",           desc: "Every shipment reflects our commitment to excellence." },
  { icon: RefreshCw,  title: "Reliability",       desc: "Consistent supply and dependable communication." },
  { icon: Users,      title: "Customer First",    desc: "Every buyer is treated as a long-term partner." },
  { icon: Leaf,       title: "Sustainability",    desc: "Supporting responsible sourcing and ethical practices." },
  { icon: TrendingUp, title: "Continuous Growth", desc: "Expanding our product portfolio while maintaining uncompromising standards." },
];

const whyChoose = [
  { icon: Sprout,         title: "Trusted Sourcing",       desc: "We partner with verified growers and processors across India to ensure consistency and traceability." },
  { icon: PackageCheck,   title: "Export Quality",         desc: "Every shipment is prepared to meet international quality expectations and buyer specifications." },
  { icon: Package,        title: "Flexible Packaging",     desc: "Standard bulk packaging or customised private-label solutions based on customer requirements." },
  { icon: Tag,            title: "Competitive Pricing",    desc: "Transparent pricing through efficient procurement and long-term supplier relationships." },
  { icon: HeadphonesIcon, title: "Dedicated Support",      desc: "Fast quotations, responsive communication, and personalised assistance throughout the process." },
  { icon: Globe,          title: "Global Trade Expertise", desc: "Understanding international trade documentation and buyer expectations end-to-end." },
];

const advantage = [
  { icon: Sprout,        title: "Carefully Selected Suppliers",   desc: "We partner with trusted growers and processors who consistently meet our quality expectations." },
  { icon: BadgeCheck,    title: "Consistent Product Quality",     desc: "Every shipment is sourced with a focus on consistency in specifications, appearance, and quality." },
  { icon: ClipboardList, title: "Transparent Business Practices", desc: "Clear communication, fair pricing, and honest commitments form the foundation of every partnership." },
  { icon: Wrench,        title: "Flexible Business Solutions",    desc: "Packaging, specifications, and sourcing solutions tailored to your business requirements." },
  { icon: MessageCircle, title: "Responsive Communication",       desc: "Fast quotations, proactive updates, and dedicated customer support throughout your sourcing journey." },
  { icon: Handshake,     title: "Long-Term Partnerships",         desc: "We aim to become a reliable sourcing partner — not just another supplier." },
];

const globalBuyerTypes = [
  "Importers & Distributors",
  "Wholesalers & Retailers",
  "Food Manufacturers",
  "Private Label Brands",
];

const commitmentItems = [
  { icon: Sprout,        label: "Trusted Suppliers" },
  { icon: FlaskConical,  label: "Hygienic Processing" },
  { icon: Wrench,        label: "Machine Cleaned" },
  { icon: Package,       label: "Export Packaging" },
  { icon: MapPin,        label: "Traceable Sourcing" },
  { icon: BadgeCheck,    label: "Consistent Specifications" },
];

const differentCards = [
  { icon: Handshake,  title: "Long-Term Partnerships",     desc: "We focus on building enduring relationships through transparency and reliability." },
  { icon: Users,      title: "Customer-Centric Approach",  desc: "Every requirement is understood carefully, with tailored sourcing and communication." },
  { icon: TrendingUp, title: "Scalable Product Portfolio", desc: "Starting with premium spices and powders today, with a long-term vision to expand across agricultural commodities." },
];

const qualityImages = [
  { src: "/images/red-chillies.png",   alt: "Red Chillies" },
  { src: "/images/powders.png",        alt: "Spice Powders" },
  { src: "/images/black-pepper.png",   alt: "Black Pepper" },
];

export default function AboutPage() {
  return (
    <div>

      {/* ── HERO — text left, image right bleeds to viewport edge ── */}
      <div
        className="relative overflow-hidden min-h-[420px] flex flex-col"
        style={{ background: "linear-gradient(145deg, #0B1120 0%, #080D1A 55%, #0B1530 100%)" }}
      >
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="absolute inset-0 hero-pattern pointer-events-none opacity-40" />

        {/* Full-width grid: left half padded like container, right half is raw image */}
        <div className="flex-1 grid lg:grid-cols-2">

          {/* Left — text, constrained with container-style padding */}
          <div className="flex flex-col justify-center py-16 px-4 sm:px-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12 relative z-10">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-[#C9A84C]/70" />
              <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold">
                About Sarvanta Global
              </p>
              <div className="h-px w-6 bg-[#C9A84C]/70" />
            </div>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">
              Connecting Markets.<br />
              <span className="text-[#C9A84C]">Creating Opportunities.</span>
            </h1>
            <div className="ornament max-w-[120px] mb-5">
              <span className="text-[#C9A84C]/60 text-xs">✦</span>
            </div>
            <p className="text-blue-100/60 leading-relaxed text-base max-w-md">
              Building trusted global partnerships through quality, integrity, and responsible sourcing.
            </p>
          </div>

          {/* Right — image runs to the right viewport edge */}
          <div className="hidden lg:block relative">
            <Image
              src="/images/containers.png"
              alt="Cargo port at sunset"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
            {/* Fade left edge into the dark bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D1A] via-[#080D1A]/10 to-transparent" />
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      {/* ── WHO WE ARE / VISION / MISSION ── */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {whoWeAre.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 border border-[#E8D5A0]/40 bg-white card-lift card-gold-top">
                {/* Circular icon badge */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border border-[#C9A84C]/30"
                  style={{ background: "linear-gradient(145deg, #142035, #0B1120)" }}
                >
                  <Icon size={22} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#0B1120] mb-4">
                  {title}
                </h2>
                <div className="space-y-3">
                  {body.map((para, i) => (
                    <p key={i} className="text-[#0B1120]/55 text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OUR CORE VALUES ── */}
      <div className="py-16 bg-[#FAF5EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#0B1120] mb-3">
              Our Core Values
            </h2>
            <div className="ornament max-w-[100px] mx-auto">
              <span className="text-[#C9A84C]/70 text-xs">✦</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={36} className="text-[#C9A84C]" strokeWidth={1.2} />
                </div>
                <p className="font-semibold text-[#0B1120] text-sm mb-2">{title}</p>
                <p className="text-[#0B1120]/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE SARVANTA GLOBAL ── */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#0B1120] mb-3">
              Why Choose Sarvanta Global
            </h2>
            <div className="ornament max-w-[100px] mx-auto">
              <span className="text-[#C9A84C]/70 text-xs">✦</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {whyChoose.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={36} className="text-[#C9A84C]" strokeWidth={1.2} />
                </div>
                <p className="font-semibold text-[#0B1120] text-sm mb-2">{title}</p>
                <p className="text-[#0B1120]/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE SARVANTA GLOBAL ADVANTAGE ── */}
      <div
        className="relative overflow-hidden py-16"
        style={{ background: "linear-gradient(160deg, #0B1120 0%, #080D1A 60%, #0B1530 100%)" }}
      >
        <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-white mb-3">
              The Sarvanta Global Advantage
            </h2>
            <div className="ornament max-w-[100px] mx-auto">
              <span className="text-[#C9A84C]/60 text-xs">✦</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {advantage.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={36} className="text-[#C9A84C]" strokeWidth={1.2} />
                </div>
                <p className="font-semibold text-white text-sm mb-2">{title}</p>
                <p className="text-blue-200/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVING GLOBAL BUYERS + COMMITMENT TO QUALITY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Serving Global Buyers */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#0B1120] mb-4">
              Serving Global Buyers
            </h2>
            <p className="text-[#0B1120]/60 text-sm leading-relaxed mb-5">
              Sarvanta Global partners with importers, distributors, wholesalers, retailers, food manufacturers, and private label brands across international markets.
            </p>
            <ul className="space-y-2.5 mb-7">
              {globalBuyerTypes.map((type) => (
                <li key={type} className="flex items-center gap-2.5 text-[#0B1120]/70 text-sm">
                  <CheckCircle size={13} className="text-[#C9A84C] shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
            <div
              className="relative h-52 border border-[#1A2D4A] overflow-hidden dot-pattern"
              style={{ background: "linear-gradient(145deg, #0B1530 0%, #0B1120 100%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 rounded-full bg-[#C9A84C]/8 blur-[60px]" />
            </div>
          </div>

          {/* Right — Commitment to Quality */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#0B1120] mb-2">
              Our Commitment to Quality
            </h2>
            <p className="text-[#0B1120]/55 text-sm mb-6">Quality is at the heart of everything we do.</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
              {commitmentItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon size={26} className="text-[#C9A84C]" strokeWidth={1.3} />
                  <p className="text-[#0B1120]/65 text-[10px] font-medium leading-tight">{label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {qualityImages.map(({ src, alt }) => (
                <div key={alt} className="h-32 overflow-hidden relative">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT MAKES SARVANTA GLOBAL DIFFERENT ── */}
      <div className="bg-[#FAF5EE] border-y border-[#E8D5A0]/40 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-[#0B1120] mb-3">
              What Makes Sarvanta Global Different?
            </h2>
            <div className="ornament max-w-[140px] mx-auto">
              <span className="text-[#C9A84C]/70 text-xs">✦</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {differentCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#E8D5A0]/60 card-gold-top card-lift p-8 flex gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border border-[#C9A84C]/30"
                  style={{ background: "linear-gradient(145deg, #142035, #0B1120)" }}
                >
                  <Icon size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1120] mb-2 text-sm">{title}</h3>
                  <p className="text-[#0B1120]/55 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA — full width with background image, text left + buttons right ── */}
      <div className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/containers.png"
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(8,13,26,0.92) 0%, rgba(8,13,26,0.85) 60%, rgba(8,13,26,0.7) 100%)" }}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-8 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[#C9A84C] text-[10px] tracking-[0.4em] uppercase font-semibold mb-3">
                Partner With Us
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-white leading-tight">
                Ready to Build a Reliable<br />Supply Partnership?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center justify-center gap-2 text-[#0B1120] font-semibold px-8 py-3.5 rounded-sm tracking-wide text-sm whitespace-nowrap"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/50 text-[#C9A84C] font-semibold px-8 py-3.5 rounded-sm tracking-wide text-sm hover:border-[#C9A84C] transition-all whitespace-nowrap"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
