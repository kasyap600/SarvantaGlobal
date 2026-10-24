
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
  category: "Whole Spices" | "Ground Spice Powders" | "Superfoods & Natural Powders" | "Dehydrated Vegetable & Fruit Powders";
  heroColor: string;
  grades: ProductGrade[];
  packaging: string[];
  specs: Record<string, string>;
  qualityPoints: string[];
  applications: string[];
  image: string;
};

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════
  // CATEGORY 1 — WHOLE SPICES
  // ═══════════════════════════════════════════════════════════
  {
    slug: "black-pepper",
    name: "Black Pepper",
    headline: "Premium Indian Black Pepper",
    tagline: "Premium Quality · Trusted Sourcing · Global Standards",
    description:
      "Sarvanta Global offers premium-quality Indian Black Pepper sourced from trusted growers and processed with advanced cleaning and sorting techniques to retain its natural aroma, pungency and high piperine content. Our black pepper is widely used in food processing, seasonings, and culinary applications across the globe.",
    origin: "India",
    category: "Whole Spices",
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
    image: "/images/black-pepper.webp",
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    headline: "Premium Indian White Pepper",
    tagline: "Premium Quality · Trusted Sourcing · Global Standards",
    description:
      "Our Premium Indian White Pepper is carefully processed from fully ripened pepper berries to deliver a clean appearance, smooth flavor, and strong aroma. It is widely used in premium food products, soups, sauces, and international cuisines where refined taste and appearance are essential.",
    origin: "India",
    category: "Whole Spices",
    heroColor: "#8B7355",
    grades: [
      { name: "Whole White Pepper" },
      { name: "FAQ White Pepper" },
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
    image: "/images/white-pepper.webp",
  },
  {
    slug: "red-chillies",
    name: "Red Chillies",
    headline: "Premium Indian Red Chillies",
    tagline: "Pure · Natural · Reliable",
    description:
      "Sarvanta Global is committed to delivering premium quality Indian Red Chillies with consistent quality, competitive pricing and timely supply. Our chillies are 100% natural and sun dried, machine cleaned and sorted, with no artificial color.",
    origin: "India",
    category: "Whole Spices",
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
    image: "/images/red-chillies.webp",
  },
  {
    slug: "turmeric-finger",
    name: "Turmeric Finger",
    headline: "Premium Indian Turmeric Finger",
    tagline: "High Curcumin · Vibrant Color · Natural Purity",
    description:
      "Sarvanta Global offers premium quality Indian Turmeric Fingers sourced from the finest growing regions. Our turmeric is carefully selected, polished, and graded for high curcumin content, vibrant golden-yellow color, and rich aroma. Widely used in food processing, spice blends, pharmaceuticals, and cosmetics.",
    origin: "India",
    category: "Whole Spices",
    heroColor: "#D4A017",
    grades: [
      { name: "Salem Turmeric Finger" },
      { name: "Nizamabad Turmeric Finger" },
      { name: "Erode Turmeric Finger" },
      { name: "Polished Turmeric Finger" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India",
      Form: "Whole Finger",
      Colour: "Natural Golden Yellow",
      "Curcumin Content": "≥ 3%",
      Moisture: "≤ 10%",
      "Total Ash": "≤ 7%",
      Cleaning: "Polished & Machine Cleaned",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "High Curcumin Content",
      "Polished & Cleaned",
      "Vibrant Yellow Color",
      "No Artificial Polishing",
      "Hygienically Packed",
      "Export Quality",
    ],
    applications: ["Spice Blends", "Pharmaceutical Industry", "Food Processing", "Cosmetics & Personal Care", "Retail Packaging", "Traditional Medicine"],
    image: "/images/turmeric-finger.webp",
  },
  {
    slug: "cumin-seeds",
    name: "Cumin Seeds (Jeera)",
    headline: "Premium Indian Cumin Seeds",
    tagline: "Pure · Aromatic · Naturally Processed",
    description:
      "Our Premium Indian Cumin Seeds are sourced from the finest growing regions of Rajasthan and Gujarat. Known for their strong aroma, distinctive flavor, and high volatile oil content, our cumin seeds are machine cleaned and carefully graded for export markets worldwide.",
    origin: "India",
    category: "Whole Spices",
    heroColor: "#8B7355",
    grades: [
      { name: "Singapore Quality" },
      { name: "Europe Quality" },
      { name: "FAQ (Fair Average Quality)" },
      { name: "Bold Cumin Seeds" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Jute Bags (Customized)"],
    specs: {
      Origin: "India (Rajasthan / Gujarat)",
      Colour: "Natural Brownish-Green",
      Moisture: "≤ 10%",
      Purity: "≥ 99%",
      "Foreign Matter": "≤ 1%",
      "Volatile Oil": "≥ 2.5%",
      Cleaning: "Machine Cleaned & Sorted",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Premium Grade Selection",
      "Machine Cleaned & Sorted",
      "High Volatile Oil Content",
      "Strong Aroma & Flavor",
      "Hygienically Packed",
      "Uniform Quality",
    ],
    applications: ["Spice Blends & Masalas", "Food Processing", "Seasonings", "Retail Packaging", "Hotels & Restaurants", "Pharmaceutical Use"],
    image: "/images/cumin-seeds.webp",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 2 — GROUND SPICE POWDERS
  // ═══════════════════════════════════════════════════════════
  {
    slug: "black-pepper-powder",
    name: "Black Pepper Powder",
    headline: "Premium Indian Black Pepper Powder",
    tagline: "Finely Ground · Rich Aroma · High Piperine",
    description:
      "Our Black Pepper Powder is finely ground from premium quality Indian black pepper berries, retaining its natural pungency, rich aroma, and high piperine content. Ideal for food processing, seasoning blends, and culinary applications worldwide.",
    origin: "India",
    category: "Ground Spice Powders",
    heroColor: "#2D2D2D",
    grades: [
      { name: "Fine Black Pepper Powder" },
      { name: "Coarse Black Pepper Powder" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Dark Grey to Black",
      Moisture: "≤ 10%",
      "Piperine Content": "≥ 4%",
      "Total Ash": "≤ 6%",
      "Particle Size": "60–100 Mesh",
      "Shelf Life": "18 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Freshly Ground",
      "High Piperine Content",
      "No Additives",
      "Rich Aroma",
      "Hygienically Processed",
      "Export Quality",
    ],
    applications: ["Seasoning Blends", "Food Processing", "Snack Industry", "Hotels & Restaurants", "Retail Packaging", "Ready-to-Eat Meals"],
    image: "/images/black-pepper-powder.webp",
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    headline: "Premium Indian Turmeric Powder",
    tagline: "High Curcumin · Vibrant Color · Pure & Natural",
    description:
      "Sarvanta Global offers premium quality Indian Turmeric Powder processed from carefully selected turmeric fingers. Our turmeric powder is known for its vibrant golden-yellow color, high curcumin content, and rich aroma. Widely used in food processing, health supplements, and cosmetics.",
    origin: "India",
    category: "Ground Spice Powders",
    heroColor: "#E6A817",
    grades: [
      { name: "Salem Turmeric Powder" },
      { name: "Nizamabad Turmeric Powder" },
      { name: "Alleppey Turmeric Powder" },
      { name: "Food Grade Turmeric Powder" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Bright Golden Yellow",
      "Curcumin Content": "≥ 3%",
      Moisture: "≤ 8%",
      "Total Ash": "≤ 7%",
      "Particle Size": "80–120 Mesh",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "High Curcumin Content",
      "No Artificial Color",
      "Vibrant Natural Color",
      "Finely Ground",
      "Hygienically Processed",
      "Lab Tested",
    ],
    applications: ["Spice Blends", "Food Processing", "Health Supplements", "Cosmetics & Skincare", "Pharmaceutical Industry", "Retail Packaging"],
    image: "/images/turmeric-powder.webp",
  },
  {
    slug: "red-chilli-powder",
    name: "Red Chilli Powder",
    headline: "Premium Indian Red Chilli Powder",
    tagline: "Bold Color · Rich Pungency · 100% Natural",
    description:
      "Our Red Chilli Powder is made from carefully selected, sun-dried Indian red chillies that are machine cleaned and hygienically ground. It retains the natural deep red color, bold pungency, and rich aroma — perfect for food processing, spice blends, and culinary applications.",
    origin: "India",
    category: "Ground Spice Powders",
    heroColor: "#C0392B",
    grades: [
      { name: "Teja Red Chilli Powder" },
      { name: "Byadgi Red Chilli Powder" },
      { name: "Kashmiri Red Chilli Powder" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Custom Packaging Available"],
    specs: {
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Bright Red to Deep Red",
      Moisture: "≤ 10%",
      "Total Ash": "≤ 8%",
      "SHU (Pungency)": "Varies by Grade",
      Additives: "No Artificial Color or Additives",
      "Shelf Life": "18 Months (Recommended Storage)",
    },
    qualityPoints: [
      "100% Natural & Pure",
      "No Artificial Color",
      "Rich Pungency & Aroma",
      "Finely Ground",
      "Hygienically Processed",
      "Export Quality",
    ],
    applications: ["Spice Blends & Masalas", "Food Processing", "Snack Industry", "Hotels & Restaurants", "Retail Packaging", "Ready-to-Eat Meals"],
    image: "/images/red-chilli-powder.webp",
  },
  {
    slug: "cumin-powder",
    name: "Cumin Powder",
    headline: "Premium Indian Cumin Powder",
    tagline: "Aromatic · Finely Ground · Pure & Natural",
    description:
      "Our Cumin Powder is finely ground from premium quality Indian cumin seeds, preserving the natural aromatic flavor, strong earthy notes, and high volatile oil content. Ideal for spice blends, food processing, and seasoning applications.",
    origin: "India",
    category: "Ground Spice Powders",
    heroColor: "#8B6914",
    grades: [
      { name: "Fine Cumin Powder" },
      { name: "Food Grade Cumin Powder" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India (Rajasthan / Gujarat)",
      Form: "Fine Powder",
      Colour: "Natural Brownish-Yellow",
      Moisture: "≤ 10%",
      "Volatile Oil": "≥ 2.5%",
      "Total Ash": "≤ 8%",
      "Particle Size": "60–100 Mesh",
      "Shelf Life": "18 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Freshly Ground",
      "High Volatile Oil Content",
      "Strong Aroma & Flavor",
      "No Additives",
      "Hygienically Processed",
      "Export Quality",
    ],
    applications: ["Spice Blends & Masalas", "Food Processing", "Seasonings", "Retail Packaging", "Hotels & Restaurants", "Ready-to-Eat Meals"],
    image: "/images/cumin-powder.webp",
  },
  {
    slug: "coriander-powder",
    name: "Coriander Powder",
    headline: "Premium Indian Coriander Powder",
    tagline: "Mild & Aromatic · Finely Ground · Pure Quality",
    description:
      "Sarvanta Global offers premium quality Coriander Powder made from carefully selected Indian coriander seeds. Our coriander powder is known for its mild, sweet aroma, warm flavor, and consistent quality — widely used in spice blends, food processing, and traditional Indian cuisine.",
    origin: "India",
    category: "Ground Spice Powders",
    heroColor: "#6B8E23",
    grades: [
      { name: "Eagle Quality Coriander Powder" },
      { name: "FAQ Coriander Powder" },
      { name: "Food Grade Coriander Powder" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India (Rajasthan / Madhya Pradesh)",
      Form: "Fine Powder",
      Colour: "Light Greenish-Brown",
      Moisture: "≤ 10%",
      "Volatile Oil": "≥ 0.3%",
      "Total Ash": "≤ 7%",
      "Particle Size": "60–100 Mesh",
      "Shelf Life": "18 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Freshly Ground",
      "Mild Sweet Aroma",
      "No Additives or Fillers",
      "Uniform Texture",
      "Hygienically Processed",
      "Consistent Quality",
    ],
    applications: ["Spice Blends & Masalas", "Food Processing", "Curry Preparations", "Retail Packaging", "Pickles & Chutneys", "Ready-to-Eat Meals"],
    image: "/images/coriander-powder.webp",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 3 — SUPERFOODS & NATURAL POWDERS
  // ═══════════════════════════════════════════════════════════
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    headline: "Premium Indian Moringa Powder",
    tagline: "Pure · Natural · Nutritious",
    description:
      "Our Moringa Powder is made from carefully selected Moringa oleifera leaves, shade-dried and finely milled to preserve its natural nutrients, vibrant color, and freshness. Known as the \"Miracle Tree\", it is widely used in health supplements, food & beverages, nutraceuticals, cosmetics, and functional food products.",
    origin: "India",
    category: "Superfoods & Natural Powders",
    heroColor: "#3A6B35",
    grades: [
      { name: "Moringa Leaf Powder (Fine Mesh)" },
      { name: "Moringa Leaf Powder (Standard)" },
      { name: "Organic Moringa Leaf Powder (Available on Request)" },
      { name: "Food Grade Moringa Powder" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    specs: {
      "Botanical Name": "Moringa oleifera",
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Natural Green",
      Moisture: "≤ 6%",
      Ash: "≤ 8%",
      Protein: "≥ 25%",
      "Particle Size": "80 – 120 Mesh",
      Solubility: "100% Water Soluble",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Carefully Selected Leaves",
      "Shade Dried",
      "Fine Powder",
      "No Additives or Preservatives",
      "Hygienically Processed",
      "Consistent Quality",
    ],
    applications: ["Health Supplements", "Functional Foods & Beverages", "Nutraceuticals", "Cosmetics & Personal Care", "Animal Feed", "Nutrition Bars & Snacks"],
    image: "/images/moringa-powder.webp",
  },
  {
    slug: "ashwagandha-powder",
    name: "Ashwagandha Powder",
    headline: "Premium Indian Ashwagandha Powder",
    tagline: "Adaptogenic · Natural · Ayurvedic Heritage",
    description:
      "Sarvanta Global offers premium quality Ashwagandha (Withania somnifera) root powder sourced from trusted Indian growers. Known as 'Indian Ginseng', our Ashwagandha powder is valued for its adaptogenic properties and is widely used in health supplements, nutraceuticals, functional foods, and traditional Ayurvedic preparations.",
    origin: "India",
    category: "Superfoods & Natural Powders",
    heroColor: "#8B6914",
    grades: [
      { name: "Ashwagandha Root Powder (Standard)" },
      { name: "Ashwagandha Root Powder (Fine Mesh)" },
      { name: "Organic Ashwagandha Powder (Available on Request)" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    specs: {
      "Botanical Name": "Withania somnifera",
      Origin: "India (Madhya Pradesh / Rajasthan)",
      Form: "Fine Powder",
      Colour: "Light Yellowish-Brown",
      Moisture: "≤ 8%",
      "Total Ash": "≤ 7%",
      Withanolides: "≥ 1.5%",
      "Particle Size": "80 – 120 Mesh",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Premium Root Powder",
      "High Withanolide Content",
      "No Additives or Fillers",
      "Shade Dried",
      "Hygienically Processed",
      "Lab Tested",
    ],
    applications: ["Health Supplements", "Nutraceuticals", "Functional Foods & Beverages", "Ayurvedic Preparations", "Cosmetics & Skincare", "Sports Nutrition"],
    image: "/images/ashwagandha-powder.webp",
  },
  {
    slug: "gooseberry-amla-powder",
    name: "Gooseberry (Amla) Powder",
    headline: "Premium Indian Amla Powder",
    tagline: "Vitamin C Rich · Natural · Ayurvedic Superfood",
    description:
      "Our Amla (Indian Gooseberry) Powder is made from carefully selected, sun-dried Indian gooseberries that are finely ground to retain maximum nutritional value. Rich in natural Vitamin C and antioxidants, Amla powder is widely used in health supplements, hair care products, and traditional Ayurvedic preparations.",
    origin: "India",
    category: "Superfoods & Natural Powders",
    heroColor: "#4A7C3F",
    grades: [
      { name: "Amla Powder (Standard)" },
      { name: "Amla Powder (Fine Mesh)" },
      { name: "Organic Amla Powder (Available on Request)" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    specs: {
      "Botanical Name": "Phyllanthus emblica",
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Light Greenish-Brown",
      Moisture: "≤ 8%",
      "Total Ash": "≤ 5%",
      "Vitamin C": "Naturally Rich",
      "Particle Size": "80 – 120 Mesh",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Rich in Natural Vitamin C",
      "No Additives or Preservatives",
      "Carefully Selected Fruits",
      "Sun Dried & Finely Ground",
      "Hygienically Processed",
      "Consistent Quality",
    ],
    applications: ["Health Supplements", "Hair Care Products", "Nutraceuticals", "Ayurvedic Preparations", "Cosmetics & Skincare", "Functional Foods"],
    image: "/images/amla-powder.webp",
  },
  {
    slug: "jaggery-powder",
    name: "Jaggery Powder",
    headline: "Premium Indian Jaggery Powder",
    tagline: "Pure · Natural · Wholesome",
    description:
      "Our Jaggery Powder is made from the finest quality sugarcane juice, traditionally prepared and processed to retain its natural minerals and rich taste. It is a healthy alternative to refined sugar and is widely used in food, beverages, confectionery, bakery, and healthcare products.",
    origin: "India",
    category: "Superfoods & Natural Powders",
    heroColor: "#8B5E3C",
    grades: [
      { name: "Jaggery Powder (Fine Mesh)" },
      { name: "Jaggery Powder (Standard)" },
      { name: "Organic Jaggery Powder (Available on Request)" },
      { name: "Food Grade Jaggery Powder" },
    ],
    packaging: ["1 KG Stand-up Pouch", "25 KG PP Bag", "Custom Packaging Available"],
    specs: {
      Source: "Sugarcane Juice",
      Origin: "India",
      Form: "Fine Powder",
      Colour: "Natural Golden Brown",
      Moisture: "≤ 5%",
      Sucrose: "≥ 70%",
      "Total Ash": "≤ 2%",
      pH: "6.0 – 7.0",
      "Particle Size": "80 – 100 Mesh",
      "Shelf Life": "12 Months (Recommended Storage)",
    },
    qualityPoints: [
      "Made from Pure Sugarcane Juice",
      "Rich in Minerals",
      "No Chemicals or Additives",
      "Traditionally Made",
      "Hygienically Processed",
      "Lab Tested",
    ],
    applications: ["Bakery & Confectionery", "Beverages", "Dairy Products", "Health & Wellness Products", "Traditional Sweets", "Food Processing"],
    image: "/images/jaggery.webp",
  },

  // ═══════════════════════════════════════════════════════════
  // CATEGORY 4 — DEHYDRATED VEGETABLE & FRUIT POWDERS
  // ═══════════════════════════════════════════════════════════
  {
    slug: "dehydrated-vegetable-powders",
    name: "Dehydrated Vegetable & Fruit Powders",
    headline: "Premium Dehydrated Vegetable & Fruit Powders",
    tagline: "Pure · Natural · Reliable",
    description:
      "Sarvanta Global offers a wide range of premium dehydrated vegetable and fruit powders sourced from the finest Indian farms. Each powder is carefully processed, hygienically packed, and free from artificial additives — ideal for food processing, seasoning blends, and nutraceutical applications worldwide.",
    origin: "India",
    category: "Dehydrated Vegetable & Fruit Powders",
    heroColor: "#4A7C3F",
    grades: [
      { name: "Tomato Powder" },
      { name: "Potato Powder" },
      { name: "Spinach Powder" },
      { name: "Beetroot Powder" },
      { name: "Arrowroot Powder" },
      { name: "Ginger Powder" },
      { name: "Garlic Powder" },
      { name: "Lemon Powder" },
      { name: "Mint Powder" },
      { name: "Carrot Powder" },
      { name: "Tamarind Powder" },
      { name: "Red Onion Powder" },
      { name: "White Onion Powder" },
      { name: "Banana Powder" },
    ],
    packaging: ["25 KG PP Bags", "50 KG PP Bags", "Customized Packaging Available"],
    specs: {
      Origin: "India",
      Processing: "Dehydrated & Spray Dried",
      Moisture: "≤ 5%",
      Colour: "Natural",
      Additives: "No Artificial Additives",
      "Shelf Life": "24 Months (Recommended Storage)",
    },
    qualityPoints: [
      "100% Natural",
      "No Artificial Additives",
      "Hygienically Processed",
      "Consistent Quality",
      "Wide Variety (14+ Powders)",
      "Export Ready",
    ],
    applications: ["Food Processing", "Seasoning Blends", "Soups & Sauces", "Nutraceuticals", "Retail Packaging", "Industrial Use"],
    image: "/images/powders.webp",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Get products filtered by category */
export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

/** Get all unique categories */
export function getCategories(): Product["category"][] {
  return [...new Set(products.map((p) => p.category))];
}
