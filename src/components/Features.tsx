/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { TreePine, Hammer, Sparkles, Feather } from "lucide-react";

const FEATURES = [
  {
    icon: <TreePine className="w-5 h-5 text-brand-cta" />,
    title: "100% Certified Hardwood",
    description: "Carved entirely from sustainably sourced American Walnut, White Oak, and Ash trees. We never use cheap MDF veneers, plastic, or synthetic wood fillers."
  },
  {
    icon: <Hammer className="w-5 h-5 text-brand-cta" />,
    title: "Aerospace-Grade Legs",
    description: "CNC-milled solid anodized aluminum supporting legs offer extreme structural stability to hold up to 110 lbs without even a millimeter of bending."
  },
  {
    icon: <Sparkles className="w-5 h-5 text-brand-cta" />,
    title: "Organic Plant Oil Finish",
    description: "Sanded individually to 400-grit and finished with organic, solvent-free plant hardwax oils. Completely non-toxic, moisture-resistant, and silky-smooth."
  },
  {
    icon: <Feather className="w-5 h-5 text-brand-cta" />,
    title: "Pure Cork Protectors",
    description: "High-density natural Portuguese cork cushioning padding is custom fitted beneath the aluminum legs, ensuring your desk surface never receives scratches."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-bg-secondary/40 border-y border-brand-border/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase">
            Designed for Workspace Serenity
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            Indestructible Structural Integrity.
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed">
            Every feature of the Aura Desk Shelf is selected to serve structural longevity, physiological health, and minimal design aesthetics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-bg border border-brand-border p-6 rounded-xl hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-brand-bg-secondary flex items-center justify-center border border-brand-border group-hover:scale-105 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-text">
                  {feat.title}
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
