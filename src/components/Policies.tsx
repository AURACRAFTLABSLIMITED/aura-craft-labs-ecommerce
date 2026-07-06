/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, FileText, Send, Mail, MapPin, Phone } from "lucide-react";

export type PolicyType = "privacy" | "terms" | "shipping" | "refund" | "cookie" | "accessibility" | "contact" | null;

interface PoliciesProps {
  activePolicy: PolicyType;
  onClose: () => void;
}

export const Policies: React.FC<PoliciesProps> = ({ activePolicy, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  if (!activePolicy) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message && name) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        onClose();
      }, 2500);
    }
  };

  const renderContent = () => {
    switch (activePolicy) {
      case "privacy":
        return (
          <div className="space-y-6 text-sm text-brand-text leading-relaxed font-sans">
            <h3 className="font-serif text-2xl mb-4 text-brand-text">Privacy Policy</h3>
            <p className="font-mono text-xs text-brand-muted">Last Updated: July 5, 2026</p>
            <p>
              At Aura Studio, we value your trust and are committed to protecting your personal data. This Privacy Policy describes how we collect, use, and share your personal information when you visit or make a purchase from our store.
            </p>
            <h4 className="font-serif text-lg font-medium">1. Information We Collect</h4>
            <p>
              When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number.
            </p>
            <h4 className="font-serif text-lg font-medium">2. How We Use Your Personal Information</h4>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to communicate with you and screen our orders for potential risk or fraud.
            </p>
            <h4 className="font-serif text-lg font-medium">3. Sharing Your Personal Information</h4>
            <p>
              We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site.
            </p>
            <h4 className="font-serif text-lg font-medium">4. Your Rights</h4>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>
          </div>
        );
      case "terms":
        return (
          <div className="space-y-6 text-sm text-brand-text leading-relaxed font-sans">
            <h3 className="font-serif text-2xl mb-4 text-brand-text">Terms & Conditions</h3>
            <p className="font-mono text-xs text-brand-muted">Last Updated: July 5, 2026</p>
            <p>
              Welcome to Aura Studio. These Terms & Conditions govern your use of our website and purchase of our handcrafted single-product offerings. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <h4 className="font-serif text-lg font-medium">1. Product Quality & Variations</h4>
            <p>
              Each Aura Desk Shelf is individually crafted from natural solid timber (American Walnut, Natural White Oak, or European Ash). Because wood is an organic material, there will be variations in wood grain, color shading, knot structures, and natural markings. These unique traits are not defects, but signatures of authentic craftsmanship.
            </p>
            <h4 className="font-serif text-lg font-medium">2. Intellectual Property</h4>
            <p>
              All designs, photographs, graphics, texts, logos, and digital properties are owned exclusively by Aura Studio. Any unauthorized reproduction, commercial exploitation, or distribution of our trademarked designs is strictly prohibited.
            </p>
            <h4 className="font-serif text-lg font-medium">3. Limitation of Liability</h4>
            <p>
              To the maximum extent permitted by law, Aura Studio shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our products, including but not limited to electronic monitors, desks, or personal devices placed on the shelf.
            </p>
          </div>
        );
      case "shipping":
        return (
          <div className="space-y-6 text-sm text-brand-text leading-relaxed font-sans">
            <h3 className="font-serif text-2xl mb-4 text-brand-text">Shipping & Fulfillment</h3>
            <p>
              We take immense pride in our shipping process, ensuring your handcrafted desk shelf arrives in pristine condition. Our packaging is 100% plastic-free, recyclable, and designed to protect the structural integrity of the timber.
            </p>
            <h4 className="font-serif text-lg font-medium">1. Processing Times</h4>
            <p>
              Since each timber slab is hand-finished, polished, and treated in small batches, orders are generally prepared and dispatched within 1 to 2 business days. During limited release campaigns, processing may take up to 4 business days.
            </p>
            <h4 className="font-serif text-lg font-medium">2. Standard & Express Costs</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Orders Over $100</strong>: Free Ground Shipping (3–5 business days).</li>
              <li><strong>Orders Under $100</strong>: $10 Standard Shipping.</li>
              <li><strong>Express Delivery (All Orders)</strong>: $25 (1–2 business days, fully tracked).</li>
            </ul>
            <h4 className="font-serif text-lg font-medium">3. Customs, Duties & Taxes</h4>
            <p>
              For international shipments outside of North America and Europe, local import taxes, customs, or duties may apply at destination. These are determined by your regional post office and are the responsibility of the recipient.
            </p>
          </div>
        );
      case "refund":
        return (
          <div className="space-y-6 text-sm text-brand-text leading-relaxed font-sans">
            <h3 className="font-serif text-2xl mb-4 text-brand-text">Returns & Refunds</h3>
            <p>
              We want you to feel complete confidence in placing an Aura Desk Shelf on your workspace. We encourage a 30-day trial period to test the ergonomics, aesthetic pairing, and space enhancements.
            </p>
            <h4 className="font-serif text-lg font-medium">1. 30-Day Risk-Free Trial</h4>
            <p>
              If the product does not meet your expectations, you may return it within 30 days of receipt. We will provide a pre-paid shipping label. The product must be repackaged in its original cardboard boxing to prevent wood damage during return transport.
            </p>
            <h4 className="font-serif text-lg font-medium">2. Condition & Restocking</h4>
            <p>
              Returned products must be in original condition without severe liquid spills, scratches, or hardware damage. Once the item is inspected at our workshop, a full refund will be processed directly back to your original payment method within 5 business days.
            </p>
            <h4 className="font-serif text-lg font-medium">3. Damage in Transit</h4>
            <p>
              If your shelf arrives with wood cracks, scratches, or leg damage caused by shipping couriers, please email photo evidence immediately. We will ship a replacement unit within 24 hours at no extra charge.
            </p>
          </div>
        );
      case "cookie":
        return (
          <div className="space-y-6 text-sm text-brand-text leading-relaxed font-sans">
            <h3 className="font-serif text-2xl mb-4 text-brand-text">Cookie Policy</h3>
            <p>
              This website uses essential cookies to ensure standard shopping cart operations, remember variant choices, and track local shipping zip codes.
            </p>
            <h4 className="font-serif text-lg font-medium">1. Necessary Cookies</h4>
            <p>
              These are technically required to store items in your Shopping Cart, hold secure checkout tokens, and maintain interface preferences. They cannot be disabled.
            </p>
            <h4 className="font-serif text-lg font-medium">2. Performance & Analytics Cookies</h4>
            <p>
              With your consent, we use anonymized Google Analytics cookies to monitor traffic flows and see which sections of the landing page perform best, enabling continuous user experience updates.
            </p>
          </div>
        );
      case "accessibility":
        return (
          <div className="space-y-6 text-sm text-brand-text leading-relaxed font-sans">
            <h3 className="font-serif text-2xl mb-4 text-brand-text">Accessibility Statement</h3>
            <p>
              Aura Studio is dedicated to ensuring digital accessibility for people of all abilities. We continuously update our web systems to meet the Web Content Accessibility Guidelines (WCAG 2.2 AA) standards.
            </p>
            <h4 className="font-serif text-lg font-medium">1. Accessibility Features</h4>
            <p>
              Our storefront includes fully compliant keyboard tab navigation, visible highlight rings, ARIA semantic tags, clear contrast ratios (exceeding 4.5:1), image alt tags for screen readers, and full mobile zoom stability.
            </p>
            <h4 className="font-serif text-lg font-medium">2. Feedback & Assistance</h4>
            <p>
              Should you encounter any visual barriers, button reading issues, or keyboard locks while ordering, please contact our digital support team via email so we can instantly resolve the issue.
            </p>
          </div>
        );
      case "contact":
        return (
          <div className="space-y-6 text-sm text-brand-text leading-relaxed font-sans">
            <h3 className="font-serif text-2xl mb-2 text-brand-text">Contact Our Studio</h3>
            <p className="text-brand-muted">
              We operate from our small joinery workshop in Portland, Oregon. Please drop us a line with any pre-sales questions or custom order requests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 text-xs font-mono">
              <div className="flex items-center space-x-2 text-brand-text">
                <Mail className="w-4 h-4 text-brand-cta shrink-0" />
                <span>support@aurastudio.com</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-text">
                <Phone className="w-4 h-4 text-brand-cta shrink-0" />
                <span>+1 (503) 555-0143</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-text">
                <MapPin className="w-4 h-4 text-brand-cta shrink-0" />
                <span>Portland, OR, USA</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-brand-cta/10 border border-brand-cta/30 p-6 rounded-lg text-center space-y-3"
                >
                  <ShieldCheck className="w-12 h-12 text-brand-cta mx-auto" />
                  <h4 className="font-serif text-lg font-medium">Message Received</h4>
                  <p className="text-brand-muted text-xs">
                    Thank you for reaching out. A studio associate will review your query and respond via email within 12 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 pt-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-brand-muted mb-1">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Jonathan Ives"
                      className="w-full bg-brand-bg-secondary border border-brand-border px-4 py-3 text-sm rounded focus:outline-none focus:border-brand-cta font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-brand-muted mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., jony@apple.com"
                      className="w-full bg-brand-bg-secondary border border-brand-border px-4 py-3 text-sm rounded focus:outline-none focus:border-brand-cta font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-brand-muted mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask us about the timber grain, custom lengths, bulk orders..."
                      className="w-full bg-brand-bg-secondary border border-brand-border px-4 py-3 text-sm rounded focus:outline-none focus:border-brand-cta font-sans resize-none"
                    ></textarea>
                  </div>
                  <button
                    id="contact-submit"
                    type="submit"
                    className="w-full bg-brand-text text-brand-bg hover:bg-brand-cta transition-all duration-300 py-3 text-xs font-mono uppercase tracking-widest rounded flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          id="policy-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-text/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          id="policy-modal"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-2xl bg-brand-bg border border-brand-border shadow-2xl rounded-lg overflow-hidden z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-bg-secondary">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted flex items-center">
              <ShieldCheck className="w-4 h-4 text-brand-cta mr-1.5" />
              Secure Studio Policy
            </span>
            <button
              id="policy-close"
              onClick={onClose}
              className="p-1 hover:text-brand-cta transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto flex-1">
            {renderContent()}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
