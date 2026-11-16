import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  clipReveal,
  slideInLeft,
  slideInRight,
} from '../utils/animations';

const IMG_FOOD =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop';
const IMG_KITCHEN =
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=800&fit=crop';

const values = [
  'Fresh Ingredients',
  'Crafted with Care',
  'Served with Heart',
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-cream overflow-hidden py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      {/* ── Watermark ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[9rem] md:text-[14rem] font-bold text-deep-charcoal/[0.03] leading-none tracking-widest text-center">
          LA ZARENA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Text Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Section label */}
            <motion.p
              className="font-body text-xs tracking-widest uppercase text-champagne-gold mb-5"
              variants={fadeInUp}
            >
              OUR STORY
            </motion.p>

            {/* Headline */}
            <motion.h2
              className="font-display font-medium text-4xl md:text-5xl text-deep-charcoal leading-tight mb-8"
              variants={fadeInUp}
            >
              More Than Just a Meal.
            </motion.h2>

            {/* Body */}
            <motion.p
              className="font-body text-deep-charcoal/70 text-base md:text-lg leading-relaxed mb-6"
              variants={fadeInUp}
            >
              At La Zarena, we believe that every meal carries a story. From
              everyday gatherings to special celebrations, we bring people
              together through thoughtfully prepared dishes, quality
              ingredients, and heartfelt service.
            </motion.p>

            <motion.p
              className="font-body text-deep-charcoal/70 text-base md:text-lg leading-relaxed mb-10"
              variants={fadeInUp}
            >
              Our kitchen is guided by a simple philosophy: cook with
              intention, serve with care. Every dish is prepared fresh, using
              carefully selected ingredients to ensure not just great taste,
              but a dining experience worth remembering.
            </motion.p>

            {/* Value Pills */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
            >
              {values.map((val) => (
                <motion.span
                  key={val}
                  className="inline-flex items-center gap-2 font-body text-sm text-deep-charcoal/80 border border-deep-charcoal/15 px-4 py-2 rounded-full"
                  variants={fadeInUp}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold flex-shrink-0" />
                  {val}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Image Grid ── */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Top image — wider, shorter */}
            <motion.div
              className="col-span-2 overflow-hidden rounded-sm"
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
            >
              <motion.img
                src={IMG_FOOD}
                alt="Beautifully plated food by La Zarena"
                className="w-full h-64 md:h-72 object-cover"
                variants={slideInRight}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              />
            </motion.div>

            {/* Bottom image — taller, offset */}
            <motion.div
              className="col-span-2 md:col-span-1 md:col-start-2 overflow-hidden rounded-sm"
              variants={clipReveal}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.45 }}
            >
              <motion.img
                src={IMG_KITCHEN}
                alt="La Zarena kitchen — fresh cooking in progress"
                className="w-full h-72 md:h-80 object-cover"
                variants={slideInLeft}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
