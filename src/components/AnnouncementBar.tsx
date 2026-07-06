/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";

const ANNOUNCEMENTS = [
  {
    text: "FREE EXPRESS SHIPPING ON ORDERS OVER $100",
    icon: <Truck className="w-3.5 h-3.5 mr-1.5" />,
  },
  {
    text: "30-DAY RISK-FREE WORKSPACE TRIAL",
    icon: <RotateCcw className="w-3.5 h-3.5 mr-1.5" />,
  },
  {
    text: "LIFETIME TIMBER & STRUCTURAL WARRANTY",
    icon: <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />,
  },
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
      }, 4000);
    }
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [isPlaying]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div
      id="announcement-bar"
      className="bg-brand-cta text-brand-bg py-2 px-4 relative overflow-hidden z-50 text-xs font-mono select-none border-b border-brand-border/40"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Navigation buttons - visible on hover or desktop */}
        <button
          id="announcement-prev"
          onClick={handlePrev}
          className="p-1 hover:text-brand-accent transition-colors duration-200 focus:outline-none"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Dynamic sliding text */}
        <div className="flex-1 flex justify-center items-center h-4 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center text-center tracking-widest font-medium cursor-pointer"
            >
              {ANNOUNCEMENTS[index].icon}
              <span>{ANNOUNCEMENTS[index].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          id="announcement-next"
          onClick={handleNext}
          className="p-1 hover:text-brand-accent transition-colors duration-200 focus:outline-none"
          aria-label="Next announcement"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
