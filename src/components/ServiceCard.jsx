import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from '../utils/animations';

export default function ServiceCard({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      {/* Image Side */}
      <motion.div
        className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-cream ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        }`}
        variants={fadeIn}
      >
        <img
          src={service.image}
          alt={service.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-deep-charcoal/10" />
      </motion.div>

      {/* Content Side */}
      <motion.div
        className={`relative flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20 bg-cream ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        }`}
        variants={fadeInUp}
      >
        {/* Decorative number */}
        <span className="font-display text-7xl font-bold text-champagne-gold/20 leading-none select-none absolute top-8 right-10 lg:top-12 lg:right-12 pointer-events-none">
          0{index + 1}
        </span>

        {/* Subtitle / Category label */}
        <p className="font-body text-champagne-gold text-xs tracking-widest uppercase mb-3">
          {service.subtitle}
        </p>

        {/* Title */}
        <h3 className="font-display text-3xl md:text-4xl text-deep-charcoal leading-tight mb-5">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="w-12 h-px bg-champagne-gold mb-6" />

        {/* Description */}
        <p className="font-body text-deep-charcoal/70 text-base leading-relaxed mb-8 max-w-md">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-10">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 font-body text-sm text-deep-charcoal/70">
              <span className="text-champagne-gold font-medium text-base leading-none">—</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div>
          <button className="font-body text-champagne-gold text-sm tracking-wider font-medium group flex items-center gap-2 hover:gap-3 transition-all duration-300">
            Learn More
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
