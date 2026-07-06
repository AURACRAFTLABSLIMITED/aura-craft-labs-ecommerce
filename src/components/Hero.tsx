/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToShop = () => {
    const target = document.getElementById("showcase");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToStory = () => {
    const target = document.getElementById("brand-story");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:py-32 overflow-hidden bg-gradient-to-b from-brand-bg-secondary/70 via-brand-bg to-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Grid: Content Left, Floating Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Premium Typography & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-left max-w-2xl">
            
            {/* Social Proof Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-bg-secondary border border-brand-border px-3.5 py-1.5 rounded-full"
            >
              <div className="flex text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-mono text-[10px] tracking-widest text-brand-text uppercase font-semibold">
                ★ 4.95 RATING / 12,500+ WORKSPACES ELEVATED
              </span>
            </motion.div>

            {/* Core Message */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-text font-bold tracking-tight leading-[1.08]"
              >
                Ergonomic Form. <br />
                <span className="text-brand-cta font-medium italic">Solid Wood</span> Integrity.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-brand-muted text-base md:text-lg leading-relaxed font-sans font-light max-w-lg"
              >
                Handcrafted in Portland from solid sustainable timber. Designed to lift your monitor to the perfect physiological eye level while organizing your workflow with architectural beauty.
              </motion.p>
            </div>

            {/* Call to Actions (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                id="hero-primary-cta"
                onClick={scrollToShop}
                className="bg-brand-cta text-brand-bg hover:bg-brand-cta-hover hover:scale-[1.02] transition-all duration-300 px-8 py-4 text-xs font-mono uppercase tracking-widest rounded-full flex items-center justify-center space-x-2.5 shadow-md cursor-pointer"
              >
                <span>Elevate Your Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={scrollToStory}
                className="bg-transparent border border-brand-border text-brand-text hover:bg-brand-bg-secondary hover:border-brand-text transition-all duration-300 px-8 py-4 text-xs font-mono uppercase tracking-widest rounded-full flex items-center justify-center cursor-pointer"
              >
                <span>Our Joinery Story</span>
              </button>
            </motion.div>

            {/* Core Promises Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border/60 text-[10px] font-mono tracking-wider text-brand-muted uppercase"
            >
              <div className="flex items-center space-x-1.5">
                <Truck className="w-4 h-4 text-brand-cta shrink-0" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <RotateCcw className="w-4 h-4 text-brand-cta shrink-0" />
                <span>30-Day Workspace Trial</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-cta shrink-0" />
                <span>Lifetime Warranty</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: High-End Floating Product Media Display */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Subtle radial backdrop glow */}
            <div className="absolute inset-0 bg-radial from-brand-cta/15 to-transparent blur-3xl rounded-full" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden border border-brand-border bg-white shadow-2xl animate-float"
            >
              <img
                src="/src/assets/images/hero_walnut_shelf_1783256576423.jpg"
                alt="Aura American Walnut Desk Shelf"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Subtle glass sticker overlay */}
              <div className="absolute bottom-4 left-4 bg-brand-bg/85 backdrop-blur-md border border-brand-border/80 px-4 py-2.5 rounded shadow-sm text-[10px] font-mono tracking-widest uppercase">
                <span>Timber finish: American Walnut</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};
