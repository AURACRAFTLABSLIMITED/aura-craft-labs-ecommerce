/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Inject JSON-LD FAQ Schema on mount for top-tier Google SEO
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_DATA.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    };

    const scriptId = "faq-jsonld-schema";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <section id="faq" className="py-24 bg-brand-bg scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase flex items-center justify-center">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            Clear answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed max-w-lg mx-auto">
            Everything you need to know about our solid hardwoods, loading parameters, workshop trial, and secure fast shipping.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-brand-border rounded-lg bg-brand-bg hover:border-brand-accent transition-colors"
              >
                <button
                  id={`faq-btn-${item.id}`}
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 py-4.5 flex justify-between items-center text-sm font-serif font-bold text-brand-text focus:outline-none select-none"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-cta shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-brand-border/40 bg-brand-bg-secondary/40"
                    >
                      <div className="px-5 py-4 text-xs font-sans text-brand-muted leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
