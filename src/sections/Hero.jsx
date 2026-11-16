import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeIn, fadeInUp, staggerContainer } from '../utils/animations';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1600';

// Individual word reveal variant
const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const headline = 'Every Gathering Deserves Something Special.';
const headlineWords = headline.split(' ');

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background Image (Optimized, GPU-accelerated) ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="La Zarena catering — beautifully presented food"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 z-10 bg-deep-charcoal/60" />

      {/* ── Decorative Elements (Pure CSS, no JS loop) ── */}
      <div className="absolute top-24 right-16 z-20 w-16 h-16 rounded-full border border-champagne-gold/30 hidden md:block opacity-60" />
      <div className="absolute top-1/2 right-10 z-20 w-4 h-4 rounded-full bg-champagne-gold/25 hidden md:block" />
      <div className="absolute bottom-32 left-8 z-20 w-20 h-px bg-champagne-gold/40 hidden lg:block" />

      {/* ── Main Content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-0">
        <div className="max-w-4xl">

          {/* Brand signature */}
          <motion.p
            className="font-body text-xs tracking-widest uppercase text-champagne-gold mb-6 font-semibold"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            LA ZARENA — CATERING &amp; FOOD SERVICE
          </motion.p>

          {/* Headline — word by word reveal */}
          <motion.h1
            className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-tight mb-6"
            variants={wordContainer}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em] last:mr-0">
                <motion.span
                  className="inline-block"
                  variants={wordReveal}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="font-body text-ivory/85 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
          >
            Thoughtfully prepared meals, crafted with care and served to make
            every moment memorable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center bg-champagne-gold text-deep-charcoal font-body font-semibold text-sm tracking-wide px-8 py-4 transition-all duration-200 hover:brightness-110 active:scale-95 shadow-md"
            >
              Explore Our Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-ivory/60 text-ivory font-body font-medium text-sm tracking-wide px-8 py-4 transition-all duration-200 hover:bg-ivory/10 active:scale-95"
            >
              Order Your Catering
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-70">
        <span className="font-body text-[10px] tracking-widest uppercase text-champagne-gold">
          Scroll
        </span>
        <ChevronDown className="text-champagne-gold w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
