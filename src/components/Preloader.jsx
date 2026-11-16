import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      onComplete?.();
      return;
    }

    // Smooth counter from 0 to 100 over ~1.6s
    const startTime = performance.now();
    const duration = 1600; // ms

    let frameId;
    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out curve for natural deceleration
      const eased = Math.round((1 - Math.pow(1 - progress, 3)) * 100);
      setPercent(eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        // Hold at 100% for 300ms before triggering curtain lift
        const timer = setTimeout(() => {
          onComplete?.();
        }, 300);
        return () => clearTimeout(timer);
      }
    };

    frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-forest-olive px-6 text-center select-none"
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
      }}
    >
      {/* Decorative Top Accent Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="w-12 h-px bg-champagne-gold/40 mb-8"
      />

      {/* Brand Logo / Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="mb-3"
      >
        <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-champagne-gold tracking-[0.15em] leading-none">
          La Zarena
        </span>
      </motion.div>

      {/* Brand Identity Subtitle */}
      <motion.p
        className="font-body text-[11px] sm:text-xs tracking-[0.35em] uppercase text-ivory/75 font-medium mb-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
      >
        Catering &amp; Food Service
      </motion.p>

      {/* French-inspired Tagline */}
      <motion.p
        className="font-display italic text-xs sm:text-sm text-champagne-gold/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        A Taste Worth Remembering.
      </motion.p>

      {/* Luxury Progress Bar & Percentage Counter */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-44 sm:w-56 h-[2px] bg-champagne-gold/15 overflow-hidden rounded-full">
          <div
            className="h-full bg-champagne-gold transition-all duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <span className="font-body text-[11px] text-champagne-gold/60 font-medium tracking-widest tabular-nums">
          {percent}%
        </span>
      </div>
    </motion.div>
  );
}
