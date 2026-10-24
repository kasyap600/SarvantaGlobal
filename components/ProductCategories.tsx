"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import Reveal from "@/components/Reveal";

const wholeSpices = products.filter((p) => p.category === "Whole Spices");
const groundPowders = products.filter((p) => p.category === "Ground Spice Powders");
const superfoods = products.filter((p) => p.category === "Superfoods & Natural Powders");
const dehydratedProduct = products.find((p) => p.slug === "dehydrated-vegetable-powders")!;

const vegPowders = [
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

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-white border border-[#E8D5A0]/40 overflow-hidden hover:border-[#C9A84C]/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[#F9F6F1]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h4 className="text-[#0B1120] font-semibold text-sm leading-tight mb-1">{product.name}</h4>
        <p className="text-[#0B1120]/40 text-[10px] leading-relaxed flex-1 line-clamp-2 mb-2">{product.tagline}</p>
        <span className="inline-flex items-center gap-1 text-[#C9A84C] text-[11px] font-semibold group-hover:gap-2 transition-all duration-200">
          View Details <ArrowRight size={10} />
        </span>
      </div>
    </Link>
  );
}

function CategorySection({
  title,
  description,
  items,
  delay,
}: {
  title: string;
  description: string;
  items: Product[];
  delay: number;
}) {
  return (
    <div className="mb-12">
      <Reveal delay={delay}>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-[#0B1120] font-bold text-base tracking-wide">{title}</h3>
          <span className="text-[#0B1120]/30 text-xs">({items.length})</span>
        </div>
        <p className="text-[#0B1120]/50 text-xs mb-5">{description}</p>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((product, i) => (
          <Reveal key={product.slug} delay={delay + i * 0.05}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ProductCategories() {
  const [expanded, setExpanded] = useState(false);
  const visibleVeg = expanded ? vegPowders : vegPowders.slice(0, 7);

  return (
    <div>
      <CategorySection
        title="Whole Spices"
        description="Finest quality Indian whole spices sourced with care and prepared to meet global standards."
        items={wholeSpices}
        delay={0.05}
      />

      <CategorySection
        title="Ground Spice Powders"
        description="Finely ground spice powders retaining natural aroma, flavor, and purity."
        items={groundPowders}
        delay={0.1}
      />

      <CategorySection
        title="Superfoods & Natural Powders"
        description="Nutrient-rich superfoods and traditional natural powders from India."
        items={superfoods}
        delay={0.15}
      />

      {/* Dehydrated Vegetable & Fruit Powders — clean square product cards with no logos/flyers */}
      <div className="mb-12">
        <Reveal delay={0.2}>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-[#0B1120] font-bold text-base tracking-wide">Dehydrated Vegetable & Fruit Powders</h3>
            <span className="text-[#0B1120]/30 text-xs">({vegPowders.length})</span>
          </div>
          <p className="text-[#0B1120]/50 text-xs mb-5">A wide range of dehydrated vegetable and fruit powders for food processing and industrial applications.</p>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {visibleVeg.map((p, i) => (
            <Reveal key={p.name} delay={0.2 + i * 0.04}>
              <div className="group flex flex-col items-center gap-2">
                <div className="relative w-full aspect-square overflow-hidden border border-[#E8D5A0]/40 bg-[#F9F6F1]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 33vw, 15vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[#0B1120]/70 text-[11px] font-medium text-center leading-tight">{p.name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {vegPowders.length > 7 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-[#C9A84C] text-[11px] font-semibold mt-4 hover:underline cursor-pointer"
          >
            {expanded ? <><ChevronUp size={12} /> Show Less</> : <><ChevronDown size={12} /> View All ({vegPowders.length})</>}
          </button>
        )}

        <Link
          href={`/products/${dehydratedProduct.slug}`}
          className="inline-flex items-center gap-1 text-[#C9A84C] text-xs font-semibold mt-4 hover:gap-2 transition-all duration-200"
        >
          View Full Specifications & All Powders <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  );
}
