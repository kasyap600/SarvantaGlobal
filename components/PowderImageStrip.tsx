"use client";

import Image from "next/image";

const powders = [
  { name: "Tomato Powder",      image: "/images/tomato-powder.webp" },
  { name: "Potato Powder",      image: "/images/potato-powder.webp" },
  { name: "Spinach Powder",     image: "/images/spinach-powder.webp" },
  { name: "Beetroot Powder",    image: "/images/beetroot-powder.webp" },
  { name: "Arrowroot Powder",   image: "/images/arrowroot-powder.webp" },
  { name: "Ginger Powder",      image: "/images/ginger-powder.webp" },
  { name: "Garlic Powder",      image: "/images/garlic-powder.webp" },
  { name: "Lemon Powder",       image: "/images/lemon-powder.webp" },
  { name: "Mint Powder",        image: "/images/mint-powder.webp" },
  { name: "Carrot Powder",      image: "/images/carrot-powder.webp" },
  { name: "Tamarind Powder",    image: "/images/tamarind-powder.webp" },
  { name: "Red Onion Powder",   image: "/images/red-onion-powder.webp" },
  { name: "White Onion Powder", image: "/images/white-onion-powder.webp" },
  { name: "Banana Powder",      image: "/images/banana-powder.webp" },
];

export default function PowderImageStrip() {
  const doubled = [...powders, ...powders];

  return (
    <div className="relative overflow-hidden bg-[#0B1120] py-4 select-none border-y border-[#C9A84C]/10">
      <div className="flex animate-marquee w-max gap-3">
        {doubled.map((p, i) => (
          <div key={`${p.name}-${i}`} className="relative shrink-0 w-28 h-28 overflow-hidden border border-[#C9A84C]/20 hover:border-[#C9A84C]/60 transition-colors duration-200 group bg-white">
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes="112px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/75 via-transparent to-transparent" />
            <span className="absolute bottom-1.5 left-0 right-0 text-center text-white/90 text-[9px] font-semibold tracking-wide px-1 leading-tight">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
