/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";
import { useScroll } from "../hooks/useScroll";
import { PolicyType } from "./Policies";
import { PRODUCT_DATA } from "../data";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  Compass,
  FileCheck,
  HelpCircle,
  Mail,
  ArrowRight
} from "lucide-react";

interface NavbarProps {
  onOpenPolicy: (policy: PolicyType) => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPolicy, wishlistCount, onOpenWishlist }) => {
  const { cartCount, setIsCartOpen } = useCart();
  const { isScrolled, scrollDirection } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = 64; // Approximated header height
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  // Close menus on scroll down
  useEffect(() => {
    if (scrollDirection === "down") {
      setIsMobileMenuOpen(false);
    }
  }, [scrollDirection]);

  // Handle Search matches
  const matchingVariants = PRODUCT_DATA.variants.filter(
    (variant) =>
      variant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      variant.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-brand-bg/85 backdrop-blur-md border-brand-border/80 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        } ${scrollDirection === "down" && isScrolled ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-brand-text flex items-center justify-center text-brand-bg font-serif text-sm font-semibold transition-transform duration-500 group-hover:rotate-180">
              A
            </div>
            <span className="font-serif text-lg font-semibold tracking-wide text-brand-text">
              AURA <span className="text-xs font-mono font-normal text-brand-cta">STUDIO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-widest uppercase">
            <a
              href="#showcase"
              onClick={(e) => handleLinkClick(e, "showcase")}
              className="text-brand-text hover:text-brand-cta transition-colors duration-200"
            >
              Shop
            </a>
            <a
              href="#features"
              onClick={(e) => handleLinkClick(e, "features")}
              className="text-brand-text hover:text-brand-cta transition-colors duration-200"
            >
              Benefits
            </a>
            <a
              href="#specs"
              onClick={(e) => handleLinkClick(e, "specs")}
              className="text-brand-text hover:text-brand-cta transition-colors duration-200"
            >
              Specifications
            </a>
            <a
              href="#faq"
              onClick={(e) => handleLinkClick(e, "faq")}
              className="text-brand-text hover:text-brand-cta transition-colors duration-200"
            >
              FAQ
            </a>
            <button
              onClick={() => onOpenPolicy("contact")}
              className="text-brand-text hover:text-brand-cta transition-colors duration-200 focus:outline-none uppercase tracking-widest cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Interactive Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <button
              id="nav-search-toggle"
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 text-brand-text hover:text-brand-cta transition-colors focus:outline-none relative"
              aria-label="Search site"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Button */}
            <button
              id="nav-wishlist-toggle"
              onClick={onOpenWishlist}
              className="p-1.5 text-brand-text hover:text-brand-cta transition-colors focus:outline-none relative"
              aria-label="View wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <motion.span
                  key={wishlistCount}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-brand-cta text-brand-bg rounded-full text-[9px] font-mono font-bold flex items-center justify-center shadow-sm"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </button>

            {/* Shopping Bag / Cart */}
            <button
              id="nav-cart-toggle"
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 text-brand-text hover:text-brand-cta transition-colors focus:outline-none relative"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-brand-text text-brand-bg rounded-full text-[9px] font-mono font-bold flex items-center justify-center shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Hamburger menu */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 lg:hidden text-brand-text hover:text-brand-cta transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-text/30 backdrop-blur-sm z-30 lg:hidden"
            />

            {/* Menu Drawer */}
            <motion.div
              id="mobile-nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-brand-bg border-l border-brand-border shadow-2xl z-35 p-6 flex flex-col justify-between lg:hidden pt-24"
            >
              <div className="space-y-8 font-sans">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted block border-b border-brand-border pb-2">
                  Navigation
                </span>
                <nav className="flex flex-col space-y-5 text-lg font-serif">
                  <a
                    href="#showcase"
                    onClick={(e) => handleLinkClick(e, "showcase")}
                    className="flex items-center justify-between text-brand-text hover:text-brand-cta group"
                  >
                    <span>The Showcase</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="#features"
                    onClick={(e) => handleLinkClick(e, "features")}
                    className="flex items-center justify-between text-brand-text hover:text-brand-cta group"
                  >
                    <span>Product Benefits</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="#specs"
                    onClick={(e) => handleLinkClick(e, "specs")}
                    className="flex items-center justify-between text-brand-text hover:text-brand-cta group"
                  >
                    <span>Specifications</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="#faq"
                    onClick={(e) => handleLinkClick(e, "faq")}
                    className="flex items-center justify-between text-brand-text hover:text-brand-cta group"
                  >
                    <span>Questions & Answers</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenPolicy("contact");
                    }}
                    className="flex items-center justify-between text-brand-text hover:text-brand-cta w-full text-left font-serif group cursor-pointer"
                  >
                    <span>Studio Support</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </nav>
              </div>

              {/* Mobile Footer Area */}
              <div className="space-y-4 pt-6 border-t border-brand-border">
                <div className="flex justify-around text-brand-muted text-xs">
                  <button onClick={() => { setIsMobileMenuOpen(false); onOpenPolicy("shipping"); }} className="hover:text-brand-text cursor-pointer">Shipping</button>
                  <span>•</span>
                  <button onClick={() => { setIsMobileMenuOpen(false); onOpenPolicy("refund"); }} className="hover:text-brand-text cursor-pointer">Returns</button>
                  <span>•</span>
                  <button onClick={() => { setIsMobileMenuOpen(false); onOpenPolicy("privacy"); }} className="hover:text-brand-text cursor-pointer">Privacy</button>
                </div>
                <p className="text-[10px] font-mono text-center text-brand-muted">
                  © 2026 AURA STUDIO. PORTLAND, OR.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full-Screen Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            id="nav-search-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-bg/95 backdrop-blur-md z-[60] flex flex-col px-4 md:px-8 py-6"
          >
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-start pt-16">
              {/* Close Row */}
              <div className="flex justify-between items-center mb-12">
                <span className="font-mono text-xs text-brand-muted uppercase tracking-widest">
                  Workspace Query
                </span>
                <button
                  id="nav-search-close"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-1 hover:text-brand-cta transition-colors focus:outline-none"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Input Area */}
              <div className="relative border-b border-brand-border pb-4 mb-8">
                <Search className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-muted" />
                <input
                  id="nav-search-input"
                  type="text"
                  autoFocus
                  placeholder="Type Walnut, Oak, or Ash..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent pl-10 pr-4 py-2 text-2xl md:text-3xl font-serif text-brand-text focus:outline-none placeholder-brand-muted/40"
                />
              </div>

              {/* Search Suggestions or Results */}
              <div className="flex-1 overflow-y-auto">
                {searchQuery === "" ? (
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                      Suggested Searches
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {["Walnut", "Oak", "Ash", "Specs", "Warranty", "Dimensions"].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="bg-brand-bg-secondary hover:bg-brand-border/60 transition-colors border border-brand-border px-3 py-1.5 text-xs font-mono text-brand-text rounded-full cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                      Search Results ({matchingVariants.length})
                    </span>
                    {matchingVariants.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {matchingVariants.map((item) => (
                          <div
                            key={item.id}
                            className="flex space-x-4 p-4 border border-brand-border/70 bg-brand-bg-secondary/50 rounded-lg group"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              referrerPolicy="no-referrer"
                              className="w-16 h-16 object-cover rounded border border-brand-border bg-white"
                            />
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="font-serif text-sm font-semibold text-brand-text group-hover:text-brand-cta transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-brand-muted line-clamp-1">{item.description}</p>
                              </div>
                              <div className="flex items-center justify-between mt-2">
                                <span className="font-mono text-xs font-bold text-brand-text">
                                  ${item.price.toFixed(2)}
                                </span>
                                <a
                                  href="#showcase"
                                  onClick={(e) => {
                                    setIsSearchOpen(false);
                                    handleLinkClick(e, "showcase");
                                  }}
                                  className="text-xs font-mono uppercase text-brand-cta font-medium flex items-center space-x-1 hover:underline"
                                >
                                  <span>View Details</span>
                                  <ArrowRight className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-brand-muted">
                        No products found matching "{searchQuery}". Try searching for standard finishes like "Walnut".
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
