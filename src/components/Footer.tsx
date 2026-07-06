/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { PolicyType } from "./Policies";
import {
  Instagram,
  Twitter,
  Pin,
  ArrowUp,
  MapPin,
  ShieldCheck
} from "lucide-react";

interface FooterProps {
  onOpenPolicy: (policy: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="main-footer" className="bg-brand-bg-secondary border-t border-brand-border py-16 text-brand-text relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Top half: branding & social / columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-brand-border/60">
          
          {/* Col 1: Branding & Philosophy */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full bg-brand-text flex items-center justify-center text-brand-bg font-serif text-xs font-semibold">
                A
              </div>
              <span className="font-serif text-base font-semibold tracking-wide">
                AURA <span className="text-[10px] font-mono font-normal text-brand-cta">STUDIO</span>
              </span>
            </div>
            
            <p className="text-brand-muted text-xs leading-relaxed font-sans max-w-sm">
              We carve premium, ergonomic monitor risers and desk organizers from single batches of FSC-certified North American solid timber. Zero veneer. Zero MDF. Hand-polished in Portland, Oregon.
            </p>

            <div className="flex items-center space-x-3.5 pt-2">
              <a href="#" className="p-2 bg-brand-bg hover:bg-brand-border/60 border border-brand-border rounded-full text-brand-muted hover:text-brand-text transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 bg-brand-bg hover:bg-brand-border/60 border border-brand-border rounded-full text-brand-muted hover:text-brand-text transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-2 bg-brand-bg hover:bg-brand-border/60 border border-brand-border rounded-full text-brand-muted hover:text-brand-text transition-colors" aria-label="Pinterest">
                <Pin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-mono text-[10px] tracking-widest text-brand-muted uppercase font-bold">
              Shop Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#showcase" onClick={(e) => handleLinkClick(e, "showcase")} className="text-brand-muted hover:text-brand-cta transition-colors">
                  Product Selector
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleLinkClick(e, "features")} className="text-brand-muted hover:text-brand-cta transition-colors">
                  Workspace Features
                </a>
              </li>
              <li>
                <a href="#specs" onClick={(e) => handleLinkClick(e, "specs")} className="text-brand-muted hover:text-brand-cta transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, "faq")} className="text-brand-muted hover:text-brand-cta transition-colors">
                  Questions & Answers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Contact */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-mono text-[10px] tracking-widest text-brand-muted uppercase font-bold">
              Joinery Studio Address
            </h4>
            <div className="space-y-3 text-xs font-sans text-brand-muted">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-cta shrink-0 mt-0.5" />
                <span>
                  1942 NW Woodside Blvd, Suite C<br />
                  Portland, OR 97209
                </span>
              </p>
              <button
                id="footer-btn-contact"
                onClick={() => onOpenPolicy("contact")}
                className="bg-brand-bg hover:bg-brand-border border border-brand-border px-4 py-2.5 rounded text-[10px] font-mono uppercase tracking-wider text-brand-text block text-left cursor-pointer"
              >
                Open Support Desk
              </button>
            </div>
          </div>

        </div>

        {/* Bottom half: legal compliance & copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-2">
          
          {/* Policy list */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2.5 text-[10px] font-mono text-brand-muted uppercase tracking-wider">
            <button id="footer-btn-privacy" onClick={() => onOpenPolicy("privacy")} className="hover:text-brand-text cursor-pointer">Privacy Policy</button>
            <button id="footer-btn-terms" onClick={() => onOpenPolicy("terms")} className="hover:text-brand-text cursor-pointer">Terms & Conditions</button>
            <button id="footer-btn-shipping" onClick={() => onOpenPolicy("shipping")} className="hover:text-brand-text cursor-pointer">Shipping & Delivery</button>
            <button id="footer-btn-refund" onClick={() => onOpenPolicy("refund")} className="hover:text-brand-text cursor-pointer">Returns & Trial</button>
            <button id="footer-btn-cookie" onClick={() => onOpenPolicy("cookie")} className="hover:text-brand-text cursor-pointer">Cookie Settings</button>
            <button id="footer-btn-accessibility" onClick={() => onOpenPolicy("accessibility")} className="hover:text-brand-text cursor-pointer">Accessibility</button>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center space-x-4">
            <p className="text-[10px] font-mono text-brand-muted">
              © 2026 AURA STUDIO LLC. PORTLAND, OR. ALL RIGHTS RESERVED.
            </p>
            
            <button
              id="btn-scroll-top"
              onClick={handleScrollToTop}
              className="p-2.5 bg-brand-bg hover:bg-brand-border border border-brand-border rounded-full text-brand-muted hover:text-brand-text transition-colors shadow-xs focus:outline-none cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Compliance Footer Shield */}
        <div className="pt-2 text-center flex items-center justify-center space-x-1.5 text-[9px] font-mono text-brand-accent uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>FSC® Certified C149302 • SSL Secured Payments</span>
        </div>

      </div>
    </footer>
  );
};
