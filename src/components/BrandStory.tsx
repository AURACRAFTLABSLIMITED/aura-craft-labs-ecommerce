/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export const BrandStory: React.FC = () => {
  return (
    <section id="brand-story" className="py-24 bg-brand-bg scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Elegant text narrative */}
          <div className="lg:col-span-6 space-y-8 text-left max-w-xl">
            <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase block">
              Hand-Cured in Portland, Oregon
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight leading-tight">
              Honoring Wood. <br />
              Refining Focus.
            </h2>

            <div className="space-y-4 font-sans text-sm text-brand-muted leading-relaxed font-light">
              <p>
                Aura was born out of a simple frustration: why does modern office hardware feel so synthetic? As engineers and creators spending over 10 hours a day at our screens, we realized our environments were dominated by cold plastics and chemical veneers.
              </p>
              <p>
                We retreated to a small, dusty joinery shop in the Pacific Northwest to build an antidote. We set out to design a singular workspace object that honors traditional timber joinery while resolving modern ergonomics.
              </p>
              <p>
                Every Aura Desk Shelf begins as a single raw slab of premium American Walnut or White Oak. We hand-bevel every chamfered edge to 45 degrees, sand each surface with ultra-fine grain five distinct times, and massage natural hardwax plant oils into the pores of the timber.
              </p>
            </div>

            {/* Signed note */}
            <div className="pt-4 border-t border-brand-border/60 flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-brand-bg-secondary flex items-center justify-center text-brand-cta text-xs">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div className="text-xs font-mono">
                <span className="text-brand-text font-bold block">The Aura Joinery Guild</span>
                <span className="text-brand-muted">Artisanal Workspace Design</span>
              </div>
            </div>
          </div>

          {/* RIGHT: High-End Macro Wood Photo */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-radial from-brand-accent/25 to-transparent blur-3xl rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square border border-brand-border rounded-xl overflow-hidden bg-brand-bg-secondary shadow-lg max-w-md mx-auto"
            >
              <img
                src="/src/assets/images/variant_grain_detail_1783256630579.jpg"
                alt="Aura Wood Crafting Process"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-brand-bg/90 backdrop-blur-md border border-brand-border/60 px-3 py-1.5 rounded text-[9px] font-mono uppercase tracking-widest text-brand-text">
                FSC Certified Walnut
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
