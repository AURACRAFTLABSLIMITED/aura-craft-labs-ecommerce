/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CartProvider, useCart } from "./context/CartContext";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductShowcase } from "./components/ProductShowcase";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Specifications } from "./components/Specifications";
import { ComparisonTable } from "./components/ComparisonTable";
import { Testimonials } from "./components/Testimonials";
import { BrandStory } from "./components/BrandStory";
import { VideoSection } from "./components/VideoSection";
import { FAQ } from "./components/FAQ";
import { Newsletter } from "./components/Newsletter";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { Policies, PolicyType } from "./components/Policies";
import { PRODUCT_DATA } from "./data";
import { Heart, Trash2, ShoppingBag, X, Info } from "lucide-react";

function StorefrontContent() {
  const { addToCart } = useCart();
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("aura_storefront_wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  const handleToggleWishlist = (variantId: string) => {
    let updated;
    if (wishlist.includes(variantId)) {
      updated = wishlist.filter((id) => id !== variantId);
    } else {
      updated = [...wishlist, variantId];
    }
    setWishlist(updated);
    try {
      localStorage.setItem("aura_storefront_wishlist", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const isInWishlist = (variantId: string) => wishlist.includes(variantId);

  const handleWishlistAddCart = (variantId: string) => {
    const variant = PRODUCT_DATA.variants.find((v) => v.id === variantId);
    if (variant) {
      addToCart(variant, 1, variant.timberType);
      setIsWishlistOpen(false);
    }
  };

  // Setup metadata details & structured data inside head
  useEffect(() => {
    // Document metadata title & SEO descriptions
    document.title = "Aura Desk Shelf — Premium Solid Wood Monitor Stand";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Elevate your monitor to ergonomic comfort. Carved from solid certified American Walnut, White Oak, and Ash wood. Handcrafted in Portland.");
    }

    // Google SEO JSON-LD Structured Schema (Organization, Product, Breadcrumbs)
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Aura Studio",
      "description": "Artisanal, premium workspace hardware handcrafted from solid timber.",
      "url": window.location.origin,
      "telephone": "+1-503-555-0143",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1942 NW Woodside Blvd, Suite C",
        "addressLocality": "Portland",
        "addressRegion": "OR",
        "postalCode": "97209",
        "addressCountry": "US"
      }
    };

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Aura Solid Wood Desk Shelf",
      "image": [
        window.location.origin + PRODUCT_DATA.variants[0].image
      ],
      "description": "Handcrafted solid hardwood monitor riser & organizer stand supporting dual monitors.",
      "brand": {
        "@type": "Brand",
        "name": "Aura Studio"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "139.00",
        "highPrice": "149.00",
        "offerCount": PRODUCT_DATA.variants.length.toString(),
        "offers": PRODUCT_DATA.variants.map(v => ({
          "@type": "Offer",
          "name": v.name,
          "price": v.price.toString(),
          "priceCurrency": "USD",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock"
        }))
      }
    };

    // Inject Script Tags
    const injectJsonLd = (id: string, schemaObj: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = id;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaObj);
    };

    injectJsonLd("org-jsonld-schema", orgSchema);
    injectJsonLd("product-jsonld-schema", productSchema);

    return () => {
      document.getElementById("org-jsonld-schema")?.remove();
      document.getElementById("product-jsonld-schema")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text relative overflow-x-hidden">
      
      {/* 1. Rotating Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Glass Navigation Header */}
      <Navbar
        onOpenPolicy={setActivePolicy}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      <main>
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Interactive Product Showcase Panel */}
        <ProductShowcase
          onToggleWishlist={handleToggleWishlist}
          isInWishlist={isInWishlist}
        />

        {/* 5. Minimal Features Grid */}
        <Features />

        {/* 6. Alternating Posture Benefits Timeline */}
        <Benefits />

        {/* 7. Product Specifications Interactive Table */}
        <Specifications />

        {/* 8. High-Contrast Competitor Comparison Table */}
        <ComparisonTable />

        {/* 9. Testimonials Responsive Grid & Counters */}
        <Testimonials />

        {/* 10. Luxury Joinery Brand Story */}
        <BrandStory />

        {/* 11. Cinematic Lazy Loaded Product Video */}
        <VideoSection />

        {/* 12. Accordion FAQ (with schema dynamic hooks) */}
        <FAQ />

        {/* 13. Double Validation Newsletter Subscriber */}
        <Newsletter />

        {/* 14. Luxury CTA Purchase Banner */}
        <CTA />
      </main>

      {/* 15. Footnotes & Legal Policies Links */}
      <Footer onOpenPolicy={setActivePolicy} />

      {/* Persistent slide-out Shopping Cart Drawer */}
      <CartDrawer />

      {/* Floating dynamic compliance Policy Modals */}
      <Policies activePolicy={activePolicy} onClose={() => setActivePolicy(null)} />

      {/* Wishlist Sidebar Drawer (CRO enhancement) */}
      <AnimatePresence>
        {isWishlistOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="wishlist-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWishlistOpen(false)}
              className="fixed inset-0 bg-brand-text/40 backdrop-blur-xs z-50"
            />

            {/* Panel */}
            <motion.div
              id="wishlist-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] bg-brand-bg border-l border-brand-border shadow-2xl z-55 flex flex-col justify-between overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-brand-border bg-brand-bg-secondary flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-brand-text flex items-center">
                  <Heart className="w-5 h-5 text-red-500 fill-current mr-2" />
                  Your Workspace Wishlist
                </span>
                <button
                  id="wishlist-close"
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-1 hover:text-brand-cta transition-colors focus:outline-none"
                  aria-label="Close wishlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {wishlist.length === 0 ? (
                  <div className="text-center py-24 space-y-4">
                    <Heart className="w-12 h-12 text-brand-accent mx-auto" />
                    <h4 className="font-serif text-base font-semibold text-brand-text">Your Wishlist is empty</h4>
                    <p className="text-brand-muted text-xs leading-relaxed max-w-[240px] mx-auto">
                      Review different wood grain finishes below and click the heart icon to save options to your workspace.
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-brand-border/60">
                    {wishlist.map((variantId) => {
                      const variant = PRODUCT_DATA.variants.find((v) => v.id === variantId);
                      if (!variant) return null;
                      return (
                        <div key={variant.id} className="py-4 flex space-x-4 first:pt-0 last:pb-0">
                          <img
                            src={variant.image}
                            alt={variant.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 object-cover border border-brand-border rounded bg-white shrink-0"
                          />
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-serif text-xs font-bold text-brand-text">
                                  {variant.name}
                                </h4>
                                <span className="font-mono text-[9px] text-brand-muted uppercase">
                                  {variant.timberType}
                                </span>
                              </div>
                              <button
                                id={`wishlist-remove-${variant.id}`}
                                onClick={() => handleToggleWishlist(variant.id)}
                                className="text-brand-accent hover:text-red-500 transition-colors p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-1 border-t border-brand-border/30">
                              <span className="font-mono text-xs font-bold text-brand-text">
                                ${variant.price.toFixed(2)}
                              </span>
                              
                              <button
                                id={`wishlist-add-cart-${variant.id}`}
                                onClick={() => handleWishlistAddCart(variant.id)}
                                className="bg-brand-text text-brand-bg hover:bg-brand-cta text-[10px] font-mono uppercase tracking-wider py-1.5 px-3 rounded flex items-center space-x-1 transition-colors cursor-pointer"
                              >
                                <ShoppingBag className="w-3 h-3" />
                                <span>Add to Cart</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer info banner */}
              <div className="p-4 bg-brand-bg-secondary border-t border-brand-border text-center text-[10px] font-mono text-brand-muted flex items-center justify-center gap-1">
                <Info className="w-3.5 h-3.5 text-brand-cta shrink-0" />
                <span>Items are saved locally in your active browser session</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <StorefrontContent />
    </CartProvider>
  );
}
