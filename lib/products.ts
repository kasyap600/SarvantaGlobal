
export type ProductGrade = {
  name: string;
  description?: string;
  specs?: Record<string, string>;
};

export type Product = {
  slug: string;
  name: string;
  headline: string;
  tagline: string;
  description: string;
  origin: string;
  category: string;
  heroColor: string;
  grades: ProductGrade[];
  packaging: string[];
  specs: Record<string, string>;
  qualityPoints: string[];
  applications: string[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "black-pepper",
    name: "Black Pepper",
    headline: "Premium Indian Black Pepper",
    tagline: "Premium Quality · Trusted Sourcing · Global Standards",
    description:
      "Sarvanta Global offers premium-quality Indian Black Pepper sourced from trusted growers and processed with advanced cleaning and sorting techniques to retain its natural aroma, pungency and high piperine content. Our black pepper is widely used in food processing, seasonings, and culinary applications across the globe.",
    origin: "India",
    category: "Pepper",
    heroColor: "#1a1a1a",
    grades: [
      { name: "MG1 (Malabar Garbled Grade 1)" },
      { name: "TGSEB (Tellicherry Garbled Special Extra Bold)" },
      { name: "FAQ (Fair Average Quality)" },
      { name: "Bold Black Pepper" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Jute Bags (Customized)"],
    specs: {
      Origin: "India",
      Colour: "Natural Black",
      Moisture: "≤ 12%",
      "Foreign Matter": "≤ 1%",
      "Light Berries": "As per Customer Requirement",
      Density: "As per Grade",
      Cleaning: "Machine Cleaned",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Premium Grade Selection",
      "Machine Cleaned",
      "Uniform Size",
      "Rich Aroma",
      "High Piperine Content",
      "Hygienically Packed",
    ],
    applications: ["Spice Blends", "Food Processing", "Seasonings", "Hotels & Restaurants", "Retail Packaging", "Bulk Industrial Use"],
    image: "/images/black-pepper.png",
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    headline: "Premium Indian White Pepper",
    tagline: "Premium Quality · Trusted Sourcing · Global Standards",
    description:
      "Our Premium Indian White Pepper is carefully processed from fully ripened pepper berries to deliver a clean appearance, smooth flavor, and strong aroma. It is widely used in premium food products, soups, sauces, and international cuisines where refined taste and appearance are essential.",
    origin: "India",
    category: "Pepper",
    heroColor: "#8B7355",
    grades: [
      { name: "Whole White Pepper" },
      { name: "FAQ White Pepper" },
      { name: "White Pepper Powder (Coming Soon)" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India",
      Colour: "Natural White",
      Moisture: "≤ 12%",
      Purity: "≥ 99%",
      "Foreign Matter": "≤ 0.5%",
      Processing: "Naturally Processed",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Premium Grade Selection",
      "Carefully Processed",
      "High Purity",
      "Uniform Quality",
      "Hygienically Packed",
      "Consistent Supply",
    ],
    applications: ["Premium Seasonings", "Soups & Sauces", "Food Manufacturing", "Retail Packaging", "Hotels & Restaurants"],
    image: "/images/white-pepper.png",
  },
  {
    slug: "red-chillies",
    name: "Red Chillies",
    headline: "Premium Indian Red Chillies",
    tagline: "Pure · Natural · Reliable",
    description:
      "Sarvanta Global is committed to delivering premium quality Indian Red Chillies with consistent quality, competitive pricing and timely supply. Our chillies are 100% natural and sun dried, machine cleaned and sorted, with no artificial color.",
    origin: "India",
    category: "Chillies",
    heroColor: "#8B1A1A",
    grades: [
      {
        name: "Teja S17 Red Chilli",
        description: "Bright red, high pungency variety with excellent color and long shelf life. Widely used for spice powders and oleoresin.",
        specs: {
          "ASTA Color (Min)": "160–180",
          "SHU Pungency (Min)": "50,000–70,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "10.0%",
          Color: "Bright Red",
          Description: "Hot & Pungent",
        },
      },
      {
        name: "Byadgi Red Chilli",
        description: "Famous for its deep red color, mild pungency and rich flavor. Ideal for color extraction and culinary use.",
        specs: {
          "ASTA Color (Min)": "180–220",
          "SHU Pungency (Min)": "8,000–15,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "15.0%",
          Color: "Deep Red",
          Description: "Mild Pungent",
        },
      },
      {
        name: "334 Red Chilli / Sannam (S4)",
        description: "Medium pungency with good color and aroma. Suitable for both domestic and international markets.",
        specs: {
          "ASTA Color (Min)": "140–160",
          "SHU Pungency (Min)": "30,000–50,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "10.0%",
          Color: "Bright Red",
          Description: "Medium Pungent",
        },
      },
      {
        name: "Syngenta Red Chilli",
        description: "Known for its uniform size, good color and high pungency. Consistent quality for global markets.",
        specs: {
          "ASTA Color (Min)": "150–170",
          "SHU Pungency (Min)": "40,000–60,000",
          "Moisture (%) Max": "12.0%",
          "Admixture (%) Max": "2.0%",
          "Foreign Matter (%) Max": "1.0%",
          "Damaged/Discoloured (%) Max": "2.0%",
          "Stem (%) Max": "10.0%",
          Color: "Bright Red",
          Description: "Pungent",
        },
      },
    ],
    packaging: ["25 KG Bag", "50 KG Bag", "Custom Packaging Available"],
    specs: {
      Origin: "India",
      Processing: "100% Natural & Sun Dried",
      Cleaning: "Machine Cleaned & Sorted",
      Color: "No Artificial Color",
      Aroma: "Rich Color, Aroma & Pungency",
      Packing: "Hygienically Processed & Packed",
    },
    qualityPoints: [
      "100% Natural & Sun Dried",
      "Machine Cleaned & Sorted",
      "No Artificial Color",
      "Rich Color, Aroma & Pungency",
      "Hygienically Processed & Packed",
    ],
    applications: ["Spice Powders", "Oleoresin Extraction", "Color Extraction", "Food Processing", "Export Markets", "Retail & Industrial"],
    image: "/images/red-chillies.png",
  },
  {
    slug: "onion-powder",
    name: "Onion Powder",
    headline: "Premium Indian Onion Powder",
    tagline: "Pure · Natural · Reliable",
    description: "Premium quality Indian Onion Powder — 100% natural, hygienically processed.",
    origin: "India",
    category: "Powder",
    heroColor: "#C9A84C",
    grades: [],
    packaging: [],
    specs: { Origin: "India" },
    qualityPoints: [],
    applications: [],
    image: "/images/onion-powder.png",
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    headline: "Premium Indian Moringa Powder",
    tagline: "Pure · Natural · Reliable",
    description: "Premium quality Indian Moringa Powder — sun-dried, 100% natural, hygienically packed.",
    origin: "India",
    category: "Powder",
    heroColor: "#3A6B35",
    grades: [],
    packaging: [],
    specs: { Origin: "India" },
    qualityPoints: [],
    applications: [],
    image: "/images/moringa-powder.png",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
