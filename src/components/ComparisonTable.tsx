/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { COMPARISON_DATA } from "../data";
import { Check, X, ArrowDown } from "lucide-react";

export const ComparisonTable: React.FC = () => {
  return (
    <section id="compare" className="py-24 bg-brand-bg scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase">
            Sincere Engineering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            How Aura Differs From the Rest
          </h2>
          <p className="text-brand-muted text-sm max-w-xl mx-auto">
            We reject hollow woods, cheap plastic binders, and chemical coatings. See how we stand against mass-market alternatives.
          </p>
        </div>

        {/* Desktop responsive comparison grid */}
        <div className="border border-brand-border bg-brand-bg rounded-xl overflow-hidden shadow-md">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-brand-bg-secondary border-b border-brand-border text-xs font-mono uppercase tracking-widest text-brand-muted">
                <th className="py-5 px-6 font-bold">Workspace Standard</th>
                <th className="py-5 px-6 font-bold text-brand-text bg-brand-cta/10">Aura Desk Shelf</th>
                <th className="py-5 px-6 font-bold">Standard Veneer Stand</th>
                <th className="py-5 px-6 font-bold">Plastic Riser</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/60 text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-bg-secondary/10 transition-colors">
                  <td className="py-5 px-6 font-serif font-bold text-brand-text">
                    {row.feature}
                  </td>
                  
                  {/* Aura Column */}
                  <td className="py-5 px-6 font-medium text-brand-text bg-brand-cta/5 border-x border-brand-border">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 rounded-full bg-brand-cta/20 text-brand-cta flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs font-semibold">{row.aura}</span>
                    </div>
                  </td>

                  {/* Competitor A Column */}
                  <td className="py-5 px-6 text-brand-muted text-xs">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span>{row.competitorA}</span>
                    </div>
                  </td>

                  {/* Competitor B Column */}
                  <td className="py-5 px-6 text-brand-muted text-xs">
                    <div className="flex items-start space-x-2">
                      <div className="w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5" />
                      </div>
                      <span>{row.competitorB}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Trust Quote */}
        <p className="text-[10px] font-mono text-center text-brand-muted mt-6 tracking-widest uppercase">
          🛡️ Built to survive generations of desktop upgrades
        </p>

      </div>
    </section>
  );
};
