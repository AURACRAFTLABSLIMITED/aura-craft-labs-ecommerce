/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";
import { PRODUCT_DATA, GALLERY_IMAGES } from "../data";
import { ProductVariant } from "../types";
import {
  Heart,
  ShoppingBag,
  Rotate3d,
  ZoomIn,
  Truck,
  Check,
  Award,
  Flame,
  Calendar,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface ProductShowcaseProps {
  onToggleWishlist: (variantId: string) => void;
  isInWishlist: (variantId: string) => boolean;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onToggleWishlist, isInWishlist }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(PRODUCT_DATA.variants[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [is360Mode, setIs360Mode] = useState(false);
  const [rotationIndex, setRotationIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Sync selected variant with image index when changed
  useEffect(() => {
    // If Walnut selected, show index 0. If Oak, show index 2. If Ash, show index 3.
    if (selectedVariant.finish === "Walnut") {
      setActiveImageIndex(0);
    } else if (selectedVariant.finish === "Oak") {
      setActiveImageIndex(2);
    } else if (selectedVariant.finish === "Ash") {
      setActiveImageIndex(3);
    }
  }, [selectedVariant]);

  // Emulate 360 viewer (cross-fading angles/colors dynamically)
  const rotationImages = [
    "/src/assets/images/hero_walnut_shelf_1783256576423.jpg",
    "/src/assets/images/variant_grain_detail_1783256630579.jpg",
    "/src/assets/images/variant_oak_shelf_1783256597104.jpg",
    "/src/assets/images/variant_ash_shelf_1783256615026.jpg",
  ];

  const handleMouseMoveZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleAddToCart = () => {
    addToCart(selectedVariant, quantity, selectedVariant.timberType);
  };

  const getShippingEstimate = () => {
    const today = new Date();
    // Delivery in 3 days
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 3);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    return deliveryDate.toLocaleDateString('en-US', options);
  };

  return (
    <section id="showcase" className="py-20 bg-brand-bg scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Media & Interactive Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative border border-brand-border rounded-xl overflow-hidden bg-brand-bg-secondary group select-none">
              
              {/* Special Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {selectedVariant.badge && (
                  <span className="bg-brand-text text-brand-bg font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded shadow-sm">
                    {selectedVariant.badge}
                  </span>
                )}
                {selectedVariant.stock <= 5 && (
                  <span className="bg-amber-100 text-amber-800 border border-amber-200 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded flex items-center gap-1 font-bold">
                    <Flame className="w-3.5 h-3.5 animate-pulse text-amber-600" />
                    Only {selectedVariant.stock} Left
                  </span>
                )}
              </div>

              {/* View mode toggle triggers */}
              <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                <button
                  id="btn-360-toggle"
                  onClick={() => setIs360Mode(!is360Mode)}
                  className={`p-2.5 rounded-full border shadow-md flex items-center justify-center transition-all focus:outline-none ${
                    is360Mode
                      ? "bg-brand-text text-brand-bg border-brand-text"
                      : "bg-brand-bg text-brand-text border-brand-border hover:bg-brand-bg-secondary"
                  }`}
                  title="Toggle 360° view"
                >
                  <Rotate3d className="w-4 h-4" />
                </button>
                <button
                  id="btn-zoom-toggle"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`p-2.5 rounded-full border shadow-md hidden sm:flex items-center justify-center transition-all focus:outline-none ${
                    isZoomed
                      ? "bg-brand-text text-brand-bg border-brand-text"
                      : "bg-brand-bg text-brand-text border-brand-border hover:bg-brand-bg-secondary"
                  }`}
                  title="Toggle hover zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Central Display */}
              <div
                ref={containerRef}
                onMouseMove={isZoomed ? handleMouseMoveZoom : undefined}
                onMouseEnter={isZoomed ? () => {} : undefined}
                onMouseLeave={() => setIsZoomed(false)}
                className="w-full aspect-[4/3] relative overflow-hidden cursor-crosshair flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {is360Mode ? (
                    /* 360 Degree Rotation Emulation View */
                    <motion.div
                      key="360-view"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full flex flex-col justify-between p-6 items-center"
                    >
                      <div className="w-full flex-1 flex items-center justify-center relative">
                        <img
                          src={rotationImages[rotationIndex]}
                          alt="360 rotation angle"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain pointer-events-none"
                        />
                      </div>
                      
                      {/* Controller Bar */}
                      <div className="w-full max-w-xs flex items-center justify-between bg-brand-bg/80 backdrop-blur-xs border border-brand-border px-4 py-2 rounded-full mt-2">
                        <button
                          id="360-prev"
                          onClick={() => setRotationIndex((prev) => (prev - 1 + rotationImages.length) % rotationImages.length)}
                          className="p-1 text-brand-text hover:text-brand-cta transition-colors focus:outline-none"
                          aria-label="Previous angle"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase flex items-center">
                          <Rotate3d className="w-3.5 h-3.5 mr-1 text-brand-cta" />
                          Rotate Stand (Angle {rotationIndex + 1}/4)
                        </span>
                        <button
                          id="360-next"
                          onClick={() => setRotationIndex((prev) => (prev + 1) % rotationImages.length)}
                          className="p-1 text-brand-text hover:text-brand-cta transition-colors focus:outline-none"
                          aria-label="Next angle"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* Normal or Magnified View */
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <img
                        src={GALLERY_IMAGES[activeImageIndex].url}
                        alt={GALLERY_IMAGES[activeImageIndex].title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover transition-transform duration-200 ${
                          isZoomed ? "scale-220" : "scale-100"
                        }`}
                        style={
                          isZoomed
                            ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` }
                            : undefined
                        }
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-4">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  id={`btn-thumbnail-${i}`}
                  onClick={() => {
                    setIs360Mode(false);
                    setActiveImageIndex(i);
                  }}
                  className={`relative aspect-square border overflow-hidden rounded-lg transition-all focus:outline-none ${
                    !is360Mode && activeImageIndex === i
                      ? "border-brand-text ring-1 ring-brand-text shadow-sm"
                      : "border-brand-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Aesthetic quote */}
            <p className="text-[11px] font-mono text-center text-brand-muted tracking-wide italic">
              "Every wood cut is unique. The shelf you receive has its own exclusive fiber architecture."
            </p>
          </div>

          {/* RIGHT SIDE: Dynamic Sticky Purchase Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 lg:pb-8">
            
            {/* Header info */}
            <div>
              <div className="flex items-center space-x-2 text-brand-cta mb-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase">
                  Single-Batch Artisan Release
                </span>
                <span>•</span>
                <span className="text-xs font-mono font-bold flex items-center">
                  ★ {PRODUCT_DATA.rating} ({PRODUCT_DATA.reviewCount} reviews)
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-brand-text font-bold mb-1">
                {PRODUCT_DATA.name}
              </h1>
              <p className="text-brand-muted text-sm italic">{PRODUCT_DATA.subtitle}</p>
            </div>

            {/* Pricing Details */}
            <div className="flex items-baseline space-x-3 border-b border-brand-border/60 pb-5">
              <span className="font-serif text-3xl font-bold text-brand-text">
                ${selectedVariant.price.toFixed(2)}
              </span>
              <span className="font-mono text-sm text-brand-muted line-through">
                ${selectedVariant.originalPrice.toFixed(2)}
              </span>
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                SAVE ${(selectedVariant.originalPrice - selectedVariant.price).toFixed(0)}
              </span>
            </div>

            {/* Wood Finish Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="uppercase tracking-widest text-brand-muted">
                  Wood Finish: <strong className="text-brand-text font-semibold">{selectedVariant.finish}</strong>
                </span>
                <span className="text-brand-cta">{selectedVariant.timberType}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_DATA.variants.map((variant) => (
                  <button
                    key={variant.id}
                    id={`btn-variant-${variant.id}`}
                    onClick={() => setSelectedVariant(variant)}
                    className={`border p-3.5 rounded-lg text-left transition-all flex flex-col justify-between focus:outline-none relative overflow-hidden group ${
                      selectedVariant.id === variant.id
                        ? "border-brand-text bg-brand-bg-secondary shadow-xs ring-1 ring-brand-text"
                        : "border-brand-border hover:border-brand-accent bg-transparent"
                    }`}
                  >
                    <span className="font-serif text-xs font-bold text-brand-text">
                      {variant.finish}
                    </span>
                    <span className="font-mono text-[10px] text-brand-muted mt-1">
                      ${variant.price.toFixed(2)}
                    </span>
                    {selectedVariant.id === variant.id && (
                      <span className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-brand-text text-brand-bg flex items-center justify-center">
                        <Check className="w-2 h-2" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-brand-muted leading-relaxed font-sans mt-2">
                {selectedVariant.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2.5 pt-2">
              <span className="block text-xs font-mono uppercase tracking-widest text-brand-muted">
                Select Quantity
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-brand-border bg-brand-bg-secondary rounded h-11 overflow-hidden shrink-0">
                  <button
                    id="qty-decrement"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 hover:bg-brand-border/40 text-brand-muted hover:text-brand-text h-full transition-colors focus:outline-none text-sm"
                  >
                    -
                  </button>
                  <span className="px-5 font-mono text-xs font-bold text-brand-text">
                    {quantity}
                  </span>
                  <button
                    id="qty-increment"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 hover:bg-brand-border/40 text-brand-muted hover:text-brand-text h-full transition-colors focus:outline-none text-sm"
                  >
                    +
                  </button>
                </div>

                <div className="text-xs text-brand-muted font-mono leading-tight">
                  <span className="text-brand-text font-bold block">Free Shipping Included</span>
                  Your subtotal exceeds our $100.00 threshold
                </div>
              </div>
            </div>

            {/* CTA Buy & Wishlist Button Row */}
            <div className="flex gap-4 pt-4">
              <button
                id="btn-add-to-cart"
                onClick={handleAddToCart}
                className="flex-1 bg-brand-cta text-brand-bg hover:bg-brand-cta-hover hover:scale-[1.01] transition-all duration-300 h-14 font-mono text-xs uppercase tracking-widest rounded-full flex items-center justify-center space-x-3 shadow-md select-none cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add {quantity > 1 ? `(${quantity})` : ""} to Workspace</span>
              </button>

              <button
                id={`btn-wishlist-${selectedVariant.id}`}
                onClick={() => onToggleWishlist(selectedVariant.id)}
                className={`w-14 h-14 border rounded-full flex items-center justify-center transition-colors focus:outline-none shrink-0 ${
                  isInWishlist(selectedVariant.id)
                    ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
                    : "border-brand-border text-brand-text hover:bg-brand-bg-secondary"
                }`}
                title={isInWishlist(selectedVariant.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={`w-5 h-5 ${isInWishlist(selectedVariant.id) ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Trust and Delivery Promises */}
            <div className="space-y-3.5 bg-brand-bg-secondary border border-brand-border/60 p-4 rounded-xl text-xs font-mono text-brand-text">
              <div className="flex items-center space-x-2.5">
                <Truck className="w-4 h-4 text-brand-cta shrink-0" />
                <span>
                  Delivering by <strong className="text-brand-text font-semibold">{getShippingEstimate()}</strong> (FedEx Express)
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Calendar className="w-4 h-4 text-brand-cta shrink-0" />
                <span>
                  Order in the next <strong className="text-brand-text font-semibold">2 hours, 14 min</strong> to ship today.
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-cta shrink-0" />
                <span>
                  Includes Lifetime Warranty & 30-Day Workspace Trial
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Award className="w-4 h-4 text-brand-cta shrink-0" />
                <span>
                  Sustainably Sourced Wood — FSC® Certified batch 924
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
