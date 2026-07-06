/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { REVIEWS_DATA } from "../data";
import { Star, ShieldCheck, HeartPulse, Recycle, Globe } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-bg-secondary/30 border-y border-brand-border/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase">
            Workspace Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            Reviewed by Professionals
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed">
            See what software engineers, architects, designers, and creative directors are saying about upgrading their daily workspace ergonomics.
          </p>
        </div>

        {/* Animated Statistics Banner (CRO element) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-brand-bg border border-brand-border/60 p-6 rounded-xl text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
            <HeartPulse className="w-6 h-6 text-brand-cta mx-auto" />
            <h4 className="font-serif text-2xl font-bold text-brand-text">99.4%</h4>
            <p className="font-mono text-[10px] tracking-widest text-brand-muted uppercase">
              Posture Comfort Improvement
            </p>
          </div>
          <div className="bg-brand-bg border border-brand-border/60 p-6 rounded-xl text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
            <Globe className="w-6 h-6 text-brand-cta mx-auto" />
            <h4 className="font-serif text-2xl font-bold text-brand-text">12,500+</h4>
            <p className="font-mono text-[10px] tracking-widest text-brand-muted uppercase">
              Desk setups elevated worldwide
            </p>
          </div>
          <div className="bg-brand-bg border border-brand-border/60 p-6 rounded-xl text-center space-y-2 shadow-xs hover:shadow-md transition-shadow">
            <Recycle className="w-6 h-6 text-brand-cta mx-auto" />
            <h4 className="font-serif text-2xl font-bold text-brand-text">100%</h4>
            <p className="font-mono text-[10px] tracking-widest text-brand-muted uppercase">
              Zero-plastic recyclable packing
            </p>
          </div>
        </div>

        {/* Masonry-like Testimonials grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REVIEWS_DATA.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid bg-brand-bg border border-brand-border p-6 rounded-xl space-y-4 hover:shadow-md transition-shadow"
            >
              
              {/* Star Rating & Date */}
              <div className="flex justify-between items-center text-xs">
                <div className="flex text-amber-500 space-x-0.5">
                  {[...Array(Math.floor(rev.rating))].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  {rev.rating % 1 !== 0 && (
                    <Star className="w-3.5 h-3.5 fill-current opacity-55" />
                  )}
                </div>
                <span className="font-mono text-[10px] text-brand-muted uppercase">
                  {rev.date}
                </span>
              </div>

              {/* Title & Comment Text */}
              <div className="space-y-1.5 text-left">
                <h4 className="font-serif font-bold text-brand-text text-sm">
                  "{rev.title}"
                </h4>
                <p className="text-brand-text font-sans text-xs leading-relaxed font-light">
                  {rev.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-3 border-t border-brand-border/40">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-brand-border"
                />
                <div className="text-left">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-serif text-xs font-bold text-brand-text">{rev.author}</span>
                    {rev.verified && (
                      <span className="bg-brand-cta/20 text-brand-text border border-brand-cta/30 font-mono text-[8px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded flex items-center shrink-0">
                        <ShieldCheck className="w-2.5 h-2.5 text-brand-cta mr-0.5" />
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[9px] text-brand-muted tracking-wide uppercase">
                    {rev.location}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
