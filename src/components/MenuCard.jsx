import { motion } from 'framer-motion';
import { scaleIn } from '../utils/animations';

export default function MenuCard({ item, onSelect }) {
  const { name, description, price, badge, image, imageAlt } = item;

  return (
    <motion.div
      variants={scaleIn}
      onClick={() => onSelect?.(item)}
      className="group bg-ivory rounded-none overflow-hidden border border-champagne-gold/20 hover:border-champagne-gold/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Section */}
      <div>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <img
            src={image}
            alt={imageAlt || name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {badge && (
            <span className="absolute top-3 left-3 bg-champagne-gold text-deep-charcoal text-xs px-2.5 py-1 tracking-wide font-medium rounded-sm shadow-sm">
              {badge}
            </span>
          )}
          <div className="absolute inset-0 bg-deep-charcoal/0 group-hover:bg-deep-charcoal/10 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-xl font-medium text-deep-charcoal leading-snug group-hover:text-champagne-gold transition-colors duration-200">
            {name}
          </h3>
          <p className="font-body text-sm text-deep-charcoal/65 mt-2 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Footer Row */}
      <div className="px-5 pb-5 pt-3 border-t border-deep-charcoal/5 flex items-center justify-between">
        <span className="text-champagne-gold font-semibold text-sm font-body">
          {price}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect?.(item);
          }}
          className="text-xs text-deep-charcoal/50 group-hover:text-champagne-gold font-body tracking-wider uppercase font-medium flex items-center gap-1 transition-colors duration-200"
        >
          View Details
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </motion.div>
  );
}
