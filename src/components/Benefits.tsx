/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowDown, Activity, Layers, HeartPulse } from "lucide-react";

const BENEFITS = [
  {
    number: "01",
    tag: "ERGONOMIC COMFORT",
    title: "Perfect Cervical Spine Alignment",
    description: "Lifting your display to a precise 4.3-inch physiological elevation encourages an upright sitting posture. This relieves pressure from your cervical vertebrae and shoulder muscles, eliminating chronic workspace stiffness and posture-induced neck aches.",
    icon: <HeartPulse className="w-5 h-5 text-brand-cta" />,
    image: "/src/assets/images/hero_walnut_shelf_1783256576423.jpg",
    fact: "Lifts monitors by 4.3\" to align with eye height"
  },
  {
    number: "02",
    tag: "DESK AREA MULTIPLIER",
    title: "Reclaim 50% More Physical Workspace",
    description: "By elevating your monitor, you immediately unlock a premium 3.3-inch clean clearance space beneath the solid wood board. Effortlessly slide full-size mechanical keyboards, mouse accessories, docks, and physical notebooks away to clear desk space for physical ideation.",
    icon: <Layers className="w-5 h-5 text-brand-cta" />,
    image: "/src/assets/images/variant_grain_detail_1783256630579.jpg",
    fact: "Generous 3.3\" vertical storage space"
  },
  {
    number: "03",
    tag: "COGNITIVE FOCUS",
    title: "An Aesthetic Anchor for Deep Work",
    description: "A cluttered workspace creates constant, subtle cognitive visual noise. The pure minimalist geometry of the solid timber shelf acts as an visual anchor. Keeping your monitor centered on high-end organic materials helps ground your mind and fosters longer, calm deep-focus sessions.",
    icon: <Activity className="w-5 h-5 text-brand-cta" />,
    image: "/src/assets/images/variant_ash_shelf_1783256615026.jpg",
    fact: "Organically treated timber reduces mental fatigue"
  }
];

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-brand-bg relative scroll-mt-16">
      
      {/* Decorative vertical center line for timeline vibe */}
      <div className="absolute top-48 bottom-20 left-1/2 -translate-x-1/2 w-[1px] bg-brand-border/40 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Designed For Physical & Mental Harmony
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            How Aura Reconfigures Your Workspace.
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed">
            From the biomechanics of spinal safety to the cognitive psychology of workspace order, we build with medical ergonomics and design simplicity in mind.
          </p>
        </div>

        {/* Timeline Alternating Blocks */}
        <div className="space-y-24 lg:space-y-36">
          {BENEFITS.map((ben, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={ben.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Media Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative border border-brand-border rounded-xl overflow-hidden bg-brand-bg-secondary shadow-lg group">
                    <img
                      src={ben.image}
                      alt={ben.title}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                    {/* Tiny stats overlay */}
                    <div className="absolute bottom-4 right-4 bg-brand-bg/90 backdrop-blur-md border border-brand-border px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-widest text-brand-text">
                      {ben.fact}
                    </div>
                  </div>
                </motion.div>

                {/* Text Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-3xl font-bold text-brand-accent/50">
                      {ben.number}
                    </span>
                    <span className="h-[1px] w-8 bg-brand-border" />
                    <span className="font-mono text-[10px] tracking-widest font-bold text-brand-cta uppercase">
                      {ben.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-text leading-tight">
                    {ben.title}
                  </h3>

                  <p className="text-brand-muted text-sm leading-relaxed font-sans">
                    {ben.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-brand-bg-secondary border border-brand-border/60 px-3 py-1.5 rounded-lg text-xs font-mono text-brand-text">
                    {ben.icon}
                    <span>Scientifically-backed posture design</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
