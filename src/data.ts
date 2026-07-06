/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Review, FAQItem, ComparisonRow } from "./types";

export const PRODUCT_DATA: Product = {
  id: "aura-desk-shelf",
  name: "Aura Desk Shelf",
  subtitle: "Solid Timber Monitor Stand & Desk Organizer",
  rating: 4.95,
  reviewCount: 382,
  variants: [
    {
      id: "var-walnut",
      name: "Aura Desk Shelf — American Walnut",
      finish: "Walnut",
      timberType: "American Walnut",
      price: 149.0,
      originalPrice: 180.0,
      image: "/src/assets/images/hero_walnut_shelf_1783256576423.jpg",
      stock: 8,
      badge: "Best Seller",
      description: "Hand-finished from premium certified American Walnut. Features rich chocolate undertones, hand-chamfered edges, and magnificent cathedral grain arches that develop a deeper patina over time."
    },
    {
      id: "var-oak",
      name: "Aura Desk Shelf — Natural Oak",
      finish: "Oak",
      timberType: "Natural White Oak",
      price: 139.0,
      originalPrice: 170.0,
      image: "/src/assets/images/variant_oak_shelf_1783256597104.jpg",
      stock: 14,
      badge: "Limited Release",
      description: "Meticulously selected Natural White Oak. Promotes a bright, serene, and organic atmosphere with natural honey-gold undertones, ideal for Scandinavian or modern minimalist desk setups."
    },
    {
      id: "var-ash",
      name: "Aura Desk Shelf — Charcoal Ash",
      finish: "Ash",
      timberType: "Charcoal Stained Ash",
      price: 144.0,
      originalPrice: 175.0,
      image: "/src/assets/images/variant_ash_shelf_1783256615026.jpg",
      stock: 4,
      badge: "Architect Edition",
      description: "Solid Ash stained in a rich charcoal black. The open-pore finish beautifully showcases the architectural wood grain structure while presenting a sleek, ultra-modern, high-contrast aesthetic."
    }
  ],
  highlights: [
    "100% Solid Certified Hardwood — Never MDF, veneer, or particleboard.",
    "Aerospace-grade matte anodized aluminum legs with soft protective cork bottoms.",
    "Elevates monitors by 4.3 inches to achieve ergonomic, eye-level comfort and relieve neck strain.",
    "Spacious 3.3-inch clearance beneath to tuck away keyboards, notebooks, and accessories.",
    "Satin organic hardwax oil coat provides spill, scratch, and moisture resistance."
  ],
  specifications: {
    "Dimensions": "46.0 in L x 9.0 in W x 4.3 in H (117 cm x 23 cm x 11 cm)",
    "Clearance Height": "3.3 in (8.4 cm) of clearance space underneath for keyboards, mice, and docks",
    "Material Wood": "100% Premium Solid Certified Timber (American Walnut, White Oak, or Ash)",
    "Leg Base": "CNC-machined CNC Aluminum legs with custom low-friction natural cork floor protectors",
    "Max Load Capacity": "110 lbs (50 kg) — easily supports heavy ultra-wide monitors, imacs, or dual-monitor configurations",
    "Wood Finish": "Individually hand-sanded with 400-grit paper, treated with natural non-toxic plant hardwax oils",
    "Weight": "11.4 lbs (5.2 kg) of solid, robust wooden base"
  }
};

export const GALLERY_IMAGES = [
  {
    url: "/src/assets/images/hero_walnut_shelf_1783256576423.jpg",
    title: "Flagship Walnut Finish",
    desc: "Seamlessly blends into modern workspaces"
  },
  {
    url: "/src/assets/images/variant_grain_detail_1783256630579.jpg",
    title: "Grain Detail Close-Up",
    desc: "Meticulous hand-finished chamfered edges and tight-grained solid Walnut timber"
  },
  {
    url: "/src/assets/images/variant_oak_shelf_1783256597104.jpg",
    title: "Scandinavian White Oak Finish",
    desc: "Bright, airy, and organically beautiful wood tones"
  },
  {
    url: "/src/assets/images/variant_ash_shelf_1783256615026.jpg",
    title: "Charcoal Ash Finish",
    desc: "A bold, dark architectural statement piece"
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Wood Material",
    aura: "100% Solid Premium Hardwood (Solid Walnut/Oak)",
    competitorA: "MDF Core with Paper Wood Veneer",
    competitorB: "Plastic or Hollow Pressed Bamboo"
  },
  {
    feature: "Surface Edge Finish",
    aura: "Meticulous, 45° Hand-Chamfered Ergonomic Slant",
    competitorA: "Rough Sharp 90° Edge banding (prone to peeling)",
    competitorB: "Molded round plastic edges"
  },
  {
    feature: "Base Support Legs",
    aura: "CNC Aerospace Aluminum + Pure Cork Pads",
    competitorA: "Thin Pressed Sheet Metal (scratches wood)",
    competitorB: "Hollow Plastic Clips"
  },
  {
    feature: "Weight capacity",
    aura: "Guaranteed 110 lbs (Supports heavy dual screens)",
    competitorA: "Max 35 lbs (Noticeable sag over time)",
    competitorB: "Max 25 lbs"
  },
  {
    feature: "Chemicals & Toxins",
    aura: "Zero VOC Natural Hardwax Oil Treatment",
    competitorA: "High Formaldehyde Formalin Glues & synthetic PU coating",
    competitorB: "Standard Acrylic Lacquers"
  },
  {
    feature: "Sustainable Origin",
    aura: "FSC® Certified Forestry & Handcrafted Locally",
    competitorA: "Mass-manufactured using unknown forest blends",
    competitorB: "Synthetic polymer derivatives"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Liam K.",
    location: "San Francisco, CA",
    rating: 5,
    date: "June 14, 2026",
    title: "Absolute masterpiece of wood craftsmanship",
    text: "The moment you unbox the Aura, you smell the walnut. The texture is unbelievably smooth, and the chamfered edges feel pleasant to touch. It easily holds my massive 49\" Ultrawide monitor without a millimeter of flex. My desk feels twice as big and infinitely cleaner.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&q=80"
  },
  {
    id: "rev-2",
    author: "Elena R.",
    location: "Zurich, Switzerland",
    rating: 5,
    date: "May 28, 2026",
    title: "Saves my neck and looks stunning",
    text: "Working 10 hours a day as a software designer, I had constant posture pain. The 4.3\" lift is ergonomically ideal. Best of all, it's like a piece of fine furniture on my desk. The oak color is warm and coordinates beautifully with my clean style.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=80"
  },
  {
    id: "rev-3",
    author: "Daisuke T.",
    location: "Tokyo, Japan",
    rating: 5,
    date: "April 11, 2026",
    title: "True Japandi minimalism",
    text: "Simple, beautiful, elegant. The matte aluminum bases have thick premium cork underneath, meaning zero slides or desk scratches. It tucks away my keyboard and trackpad when I need to review physical sketchbooks. True Zen design.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&q=80"
  },
  {
    id: "rev-4",
    author: "Chloe M.",
    location: "London, UK",
    rating: 5,
    date: "June 02, 2026",
    title: "Exceptional Charcoal Ash finish",
    text: "I bought the Charcoal variant, and it's breath-taking. It has this incredible deep black architectural vibe but you can still feel and see the gorgeous open pores of the solid wood ash. Absolute design perfection, worth every penny.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&q=80"
  },
  {
    id: "rev-5",
    author: "Marcus V.",
    location: "Copenhagen, Denmark",
    rating: 5,
    date: "March 20, 2026",
    title: "High structural integrity",
    text: "I was hesitant because of the price, but once you feel the weight of this solid wood, you understand why. It's solid. Not veneer, no hollow panels. This thing will outlive three generations of computers. Perfect workspace investment.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces&q=80"
  },
  {
    id: "rev-6",
    author: "Sophia L.",
    location: "Sydney, Australia",
    rating: 4.8,
    date: "June 25, 2026",
    title: "Flawless aesthetics and premium feeling",
    text: "Stunning addition to my production desk. Shipping was quick and the packaging was entirely recyclable cardboard and custom paper pulp molds — no plastics. The stand itself has made desk organizing an absolute delight.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces&q=80"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is this made of real 100% solid timber?",
    answer: "Yes, absolutely. We do not use any MDF, plywood, veneers, or cheap laminate overlays. The shelf is carved from single blocks of sustainably sourced (FSC-certified) North American Walnut, White Oak, or European Ash. Each piece displays its own unique natural grain patterns.",
    category: "Materials"
  },
  {
    id: "faq-2",
    question: "Will it support heavy monitors like an iMac or Ultrawide screen?",
    answer: "Yes. The combination of solid 1-inch thick timber and structural, aerospace-grade anodized aluminum bases allows the shelf to securely support up to 110 lbs (50 kg) without sagging or bowing. It works perfectly with heavy dual monitors, Apple Studio Displays, and heavy 49\" Ultrawide screens.",
    category: "Specifications"
  },
  {
    id: "faq-3",
    question: "How do the cork pads protect my desk surface?",
    answer: "The aluminum legs are integrated with soft, high-density natural Portuguese cork bases. This cushions the weight, prevents any desk sliding, and protects your desk (whether it is wood, veneer, metal, or glass) from any potential scratching or scuffing.",
    category: "Design"
  },
  {
    id: "faq-4",
    question: "Is any assembly required, and does it come with tools?",
    answer: "Minimal, tool-free assembly takes less than 2 minutes. The package contains instructions. You simply slide the two anodized aluminum legs into pre-installed, high-precision steel threaded mounting slots. No screws, bolts, or tools are needed.",
    category: "Assembly"
  },
  {
    id: "faq-5",
    question: "What is your return policy and warranty coverage?",
    answer: "We offer a 30-day risk-free home trial with free return shipping if you aren't completely in love with your setup. Each Aura Desk Shelf also includes a lifetime material warranty against wood cracking, warping, or leg defects. This is a workspace companion built to last a lifetime.",
    category: "Service"
  }
];
