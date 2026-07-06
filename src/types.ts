/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductVariant {
  id: string;
  name: string;
  finish: string; // walnut, oak, ash
  timberType: string;
  price: number;
  originalPrice: number;
  image: string;
  stock: number; // e.g. 14 items left
  badge?: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  variants: ProductVariant[];
  specifications: { [key: string]: string };
  highlights: string[];
}

export interface CartItem {
  id: string; // unique cart item id (variantId)
  variantId: string;
  variantName: string;
  finish: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
  timberType: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  verified: boolean;
  avatar: string;
  photo?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ComparisonRow {
  feature: string;
  aura: string | boolean;
  competitorA: string | boolean;
  competitorB: string | boolean;
}
