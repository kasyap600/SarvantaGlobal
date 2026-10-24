"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import Reveal from "@/components/Reveal";

const powders = [
  { label: "Tomato Powder",      image: "/images/tomato-powder.webp" },
  { label: "Potato Powder",      image: "/images/potato-powder.webp" },
  { label: "Spinach Powder",     image: "/images/spinach-powder.webp" },
  { label: "Beetroot Powder",    image: "/images/beetroot-powder.webp" },
  { label: "Arrowroot Powder",   image: "/images/arrowroot-powder.webp" },
  { label: "Ginger Powder",      image: "/images/ginger-powder.webp" },
  { label: "Garlic Powder",      image: "/images/garlic-powder.webp" },
  { label: "Lemon Powder",       image: "/images/lemon-powder.webp" },
  { label: "Mint Powder",        image: "/images/mint-powder.webp" },
  { label: "Carrot Powder",      image: "/images/carrot-powder.webp" },
  { label: "Tamarind Powder",    image: "/images/tamarind-powder.webp" },
  { label: "Red Onion Powder",   image: "/images/red-onion-powder.webp" },
  { label: "White Onion Powder", image: "/images/white-onion-powder.webp" },
  { label: "Banana Powder",      image: "/images/banana-powder.webp" },
];

export default function PowderGrid() {
  const [active, setActive] = useState<{ image: string; label: string } | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {powders.map(({ image, label }, i) => (
          <Reveal key={label} delay={i * 0.04}>
            <div
              className="group border border-[#E8D5A0]/60 bg-white hover:border-[#C9A84C] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              onClick={() => setActive({ image, label })}
            >
              <div className="h-[44px] flex flex-col items-center justify-center px-2 border-b border-[#E8D5A0]/60 text-center bg-white">
                <span className="text-[#0B1120]/50 text-[9px] uppercase tracking-wide">Dehydrated</span>
                <span className="text-[#0B1120] font-semibold text-[11px] leading-tight">{label}</span>
              </div>
              <div className="relative aspect-square w-full overflow-hidden bg-[#F9F6F1]">
                <Image
                  src={image}
                  alt={label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center bg-[#0B1120] text-white text-[11px] font-semibold py-2.5 group-hover:bg-[#C9A84C] group-hover:text-[#0B1120] transition-colors duration-300">
                View Image
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-[#0B1120]/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8D5A0]/60 bg-[#F9F6F1]">
              <div>
                <span className="text-[#0B1120]/40 text-[9px] uppercase tracking-wide">Dehydrated Powder</span>
                <p className="text-[#0B1120] font-semibold text-sm">{active.label}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="w-8 h-8 flex items-center justify-center border border-[#E8D5A0]/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            {/* Image */}
            <div className="relative w-full aspect-square bg-white">
              <Image
                src={active.image}
                alt={active.label}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
