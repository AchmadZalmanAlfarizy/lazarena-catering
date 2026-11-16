import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Services() {
  return (
    <section id="services" className="bg-cream">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="font-body text-champagne-gold text-xs tracking-widest uppercase mb-4"
          >
            WHAT WE OFFER
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-deep-charcoal leading-tight mb-6"
          >
            Catering for Every Occasion.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-deep-charcoal/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            From daily office meals to grand celebrations, our catering services are designed to exceed expectations.
          </motion.p>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col divide-y divide-deep-charcoal/10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
