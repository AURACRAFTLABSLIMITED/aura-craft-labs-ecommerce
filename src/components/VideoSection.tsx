/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Play, RotateCcw, Video } from "lucide-react";

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-24 bg-brand-bg-secondary/20 border-t border-brand-border/60 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-cta font-bold uppercase flex items-center justify-center">
            <Video className="w-3.5 h-3.5 mr-1" />
            Vibe check the setup
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-text font-bold tracking-tight">
            Cinematic Desk Elevation
          </h2>
          <p className="text-brand-muted text-sm max-w-xl mx-auto">
            Experience the tactile qualities, heavy-weight structural resilience, and aesthetic integration of the Aura shelf in a live modern workspace environment.
          </p>
        </div>

        {/* Video Player Box with lazy loading / custom play button */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-border bg-black shadow-lg">
          {isPlaying ? (
            /* Real Video Frame (Lazy Loaded on Demand for Performance) */
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" // Placeholder minimal video
              title="Aura Minimal Workspace Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            /* Custom Play Overlay (extremely high performance, zero script loading impact) */
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/src/assets/images/hero_walnut_shelf_1783256576423.jpg"
                alt="Workspace Cinematic Video Preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[0.70] hover:scale-105 transition-transform duration-[4000ms]"
              />
              
              {/* Central Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  id="btn-video-play"
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-brand-bg text-brand-text hover:bg-brand-cta hover:text-brand-bg hover:scale-110 transition-all duration-300 flex items-center justify-center border border-brand-border shadow-2xl focus:outline-none cursor-pointer"
                  aria-label="Play cinematic product video"
                >
                  <Play className="w-6 h-6 ml-1 stroke-[2.5]" />
                </button>
              </div>

              {/* Bottom tag info */}
              <div className="absolute bottom-4 left-4 bg-black/45 backdrop-blur-xs px-3.5 py-1.5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-white/90">
                <span>Watch: 1-Minute Batch Showcase</span>
              </div>
            </div>
          )}
        </div>

        {/* Core video details */}
        <div className="flex flex-col sm:flex-row justify-around items-center pt-8 text-[11px] font-mono text-brand-muted uppercase tracking-wider gap-4">
          <span className="flex items-center">
            <RotateCcw className="w-3.5 h-3.5 text-brand-cta mr-1.5" />
            Filmed at Portland Workspace Studios
          </span>
          <span>•</span>
          <span>Satin American Walnut finish displayed</span>
          <span>•</span>
          <span>4K Ultra-High Fidelity</span>
        </div>

      </div>
    </section>
  );
};
