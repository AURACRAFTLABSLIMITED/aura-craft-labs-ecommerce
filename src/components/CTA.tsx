/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA: React.FC = () => {
  const handleScrollToShop = () => {
    const target = document.getElementById("showcase");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="cta-banner" className="py-24 bg-brand-bg relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Curved premium bento container */}
        <div className="relative rounded-2xl overflow-hidden bg-brand-text text-brand-bg py-16 px-6 md:px-12 text-center space-y-8 border border-brand-text shadow-xl">
          
          {/* Subtle warm ambient backdrop glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-cta/25 via-transparent to-brand-accent/25 opacity-40 pointer-events-none" />

          {/* Core Text Content */}
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase flex items-center justify-center">
              <Sparkles className="w-4 h-4 mr-1.5" />
              Reframe Your Modern Workspace
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-bg font-bold tracking-tight leading-tight">
              Invest in Ergonomic Integrity today.
            </h2>
            
            <p className="text-brand-accent/80 text-sm md:text-base leading-relaxed font-sans font-light">
              Elevate your screen to healthy anatomical sightlines, tidy up physical visual noise, and ground your workspace in certified natural solid timber.
            </p>
          </div>

          {/* Magnetic-vibe buy button */}
          <div className="relative z-10 flex justify-center pt-2">
            <button
              id="cta-buy-now"
              onClick={handleScrollToShop}
              className="bg-brand-bg text-brand-text hover:bg-brand-cta hover:text-brand-bg hover:scale-[1.02] transition-all duration-300 px-10 py-5 font-mono text-xs uppercase tracking-widest rounded-full flex items-center justify-center space-x-3.5 shadow-2xl cursor-pointer"
            >
              <span>Elevate Your Space</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Subtext promises */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[10px] font-mono uppercase tracking-wider text-brand-accent/60 pt-4 relative z-10">
            <span>✓ Lifetime material warranty</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ 30-day home workspace trial</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ FedEx express shipping</span>
          </div>

        </div>

      </div>
    </section>
  );
};
