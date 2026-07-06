/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValid(true);

    // Simple robust email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsValid(false);
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury workshop sub
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
    }, 1800);
  };

  return (
    <section id="newsletter" className="py-24 bg-brand-bg-secondary/40 border-y border-brand-border/60 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase flex items-center justify-center">
            <Mail className="w-4 h-4 mr-1.5" />
            The Studio Dispatch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            Subtle Updates, Zero Spam.
          </h2>
          <p className="text-brand-muted text-sm max-w-md mx-auto leading-relaxed">
            Join our private mailing list to receive notifications about small-batch timber selections, custom artisan releases, and physical workspace guides.
          </p>
        </div>

        {/* Dynamic Interactive Box */}
        <div className="max-w-md mx-auto bg-brand-bg border border-brand-border p-6 rounded-xl shadow-xs">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              /* Success prompt */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3 py-4"
              >
                <div className="w-12 h-12 bg-brand-cta/20 text-brand-cta rounded-full flex items-center justify-center mx-auto border border-brand-cta/35">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-text">You're on the list.</h4>
                <p className="text-brand-muted text-xs leading-relaxed">
                  Thank you for subscribing. We will send you a workshop tour dispatch soon. Check your inbox for a <strong>10% welcome coupon</strong>!
                </p>
              </motion.div>
            ) : (
              /* Email Input form */
              <form key="form" onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValid(true);
                    }}
                    className={`flex-1 bg-brand-bg-secondary border text-sm px-5 py-3 rounded-full focus:outline-none font-sans ${
                      isValid
                        ? "border-brand-border focus:border-brand-cta"
                        : "border-red-400 focus:border-red-500 bg-red-50/10"
                    }`}
                  />
                  
                  <button
                    id="newsletter-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-cta text-brand-bg hover:bg-brand-cta-hover disabled:bg-brand-muted transition-all duration-300 px-8 py-3.5 text-xs font-mono uppercase tracking-widest rounded-full flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </button>
                </div>

                {!isValid && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-left text-[11px] font-mono text-red-500"
                  >
                    Please enter a valid, fully formatted email address.
                  </motion.p>
                )}

                <p className="text-[10px] font-mono text-brand-muted text-left">
                  🔒 We respect your privacy. Opt-out at any time.
                </p>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
