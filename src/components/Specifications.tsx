/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCT_DATA } from "../data";
import {
  Maximize2,
  Sliders,
  Scale,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Info
} from "lucide-react";

interface SpecDetail {
  title: string;
  value: string;
  icon: React.ReactNode;
  expandedInfo: string;
}

const SPEC_DETAILS: SpecDetail[] = [
  {
    title: "Dimensions",
    value: "46.0\" L x 9.0\" W x 4.3\" H",
    icon: <Maximize2 className="w-4 h-4 text-brand-cta" />,
    expandedInfo: "Perfect dimensions to elevate dual-monitors side by side, or heavy single wide-displays. Spans 46 inches, leaving massive desktop areas underneath for storage."
  },
  {
    title: "Clearance Space Underneath",
    value: "3.3\" vertical height clearance",
    icon: <Sliders className="w-4 h-4 text-brand-cta" />,
    expandedInfo: "Designed with standard mechanical keyboard and laptop docking heights in mind. Fits standard keyboards, mice, sound cards, and dual chargers comfortably."
  },
  {
    title: "Timber Materials",
    value: "100% Solid Certified Timber",
    icon: <Info className="w-4 h-4 text-brand-cta" />,
    expandedInfo: "Sustainably-logged premium hardwoods, certified under Forest Stewardship Council (FSC) guidelines. Carefully dried to prevent structural warping."
  },
  {
    title: "Load Capacity",
    value: "Holds up to 110 lbs (50 kg)",
    icon: <Scale className="w-4 h-4 text-brand-cta" />,
    expandedInfo: "Thick, ultra-sturdy wood blocks that easily support iMacs, massive dual studio screens, heavy dual monitor arm mounts, and mechanical gear."
  },
  {
    title: "Base & Protectors",
    value: "Aerospace Aluminum + Solid Cork",
    icon: <ShieldCheck className="w-4 h-4 text-brand-cta" />,
    expandedInfo: "Anodized space-grade aluminum feet paired with durable natural Portuguese cork bottoms. Zero slipping, zero surface scuffing on delicate tables."
  }
];

export const Specifications: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const toggleRow = (title: string) => {
    if (expandedRow === title) {
      setExpandedRow(null);
    } else {
      setExpandedRow(title);
    }
  };

  return (
    <section id="specs" className="py-24 bg-brand-bg-secondary/30 border-y border-brand-border/60 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase">
            Architectural Precision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            Technical Specifications
          </h2>
          <p className="text-brand-muted text-sm max-w-xl mx-auto">
            We operate with millimeter precision. Here is the dimensional and physical composition breakdown of our premier monitor shelf stand.
          </p>
        </div>

        {/* Elegant Interactive Table */}
        <div className="border border-brand-border bg-brand-bg rounded-xl overflow-hidden shadow-sm">
          <div className="divide-y divide-brand-border">
            
            {/* Table Header Row */}
            <div className="bg-brand-bg-secondary/60 px-6 py-4 grid grid-cols-12 text-xs font-mono text-brand-muted uppercase tracking-widest font-bold">
              <div className="col-span-6 sm:col-span-5">Feature Property</div>
              <div className="col-span-5 sm:col-span-6">Specification Detail</div>
              <div className="col-span-1 text-right">Details</div>
            </div>

            {/* Expandable Rows */}
            {SPEC_DETAILS.map((spec) => {
              const isExpanded = expandedRow === spec.title;
              return (
                <div key={spec.title} className="hover:bg-brand-bg-secondary/20 transition-colors">
                  <button
                    id={`spec-btn-${spec.title.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => toggleRow(spec.title)}
                    className="w-full text-left px-6 py-5 grid grid-cols-12 text-sm text-brand-text items-center focus:outline-none select-none"
                  >
                    <div className="col-span-6 sm:col-span-5 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-md bg-brand-bg-secondary flex items-center justify-center border border-brand-border shrink-0">
                        {spec.icon}
                      </div>
                      <span className="font-serif font-bold text-brand-text">{spec.title}</span>
                    </div>

                    <div className="col-span-5 sm:col-span-6 font-mono text-xs text-brand-muted">
                      {spec.value}
                    </div>

                    <div className="col-span-1 text-right flex justify-end text-brand-accent">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-brand-cta" />
                      ) : (
                        <ChevronDown className="w-4 h-4 hover:text-brand-cta transition-colors" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`spec-panel-${spec.title.toLowerCase().replace(/\s+/g, '-')}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-brand-bg-secondary/40 border-t border-brand-border/40"
                      >
                        <div className="px-6 py-4 text-xs text-brand-muted leading-relaxed font-sans pl-14">
                          <p>{spec.expandedInfo}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* CAD Schematic visual text details */}
        <div className="mt-8 bg-brand-bg border border-brand-border rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between shadow-xs">
          <div className="space-y-1">
            <h4 className="font-serif text-sm font-bold text-brand-text">Need custom dimensions or lengths?</h4>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              We frequently collaborate with interior designers, architects, and companies on custom workspace orders.
            </p>
          </div>
          <a
            href="#footer"
            className="shrink-0 bg-brand-bg-secondary hover:bg-brand-border border border-brand-border text-brand-text text-xs font-mono uppercase tracking-wider py-2.5 px-5 rounded transition-colors"
          >
            Request Custom Cut
          </a>
        </div>

      </div>
    </section>
  );
};
