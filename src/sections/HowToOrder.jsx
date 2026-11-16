import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';
import { fadeInUp, staggerContainer } from '../utils/animations';

const steps = [
  {
    number: '01',
    title: 'Choose Your Menu',
    description:
      'Browse our menu and select the packages that suit your event and budget.',
  },
  {
    number: '02',
    title: 'Tell Us Your Details',
    description:
      'Fill in your event details — date, location, number of guests, and any special requests.',
  },
  {
    number: '03',
    title: 'Confirm Your Order',
    description:
      "We'll confirm availability and provide you with a detailed quote. Easy and transparent.",
  },
  {
    number: '04',
    title: 'Enjoy Your Moment',
    description:
      'Sit back and enjoy. Our team handles everything so you can focus on what matters most.',
  },
];

export default function HowToOrder() {
  const handleOrderClick = () => {
    const message = encodeURIComponent('Halo La Zarena, saya ingin memesan catering.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="how-to-order" className="bg-forest-olive py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-champagne-gold tracking-widest text-xs uppercase mb-4 font-body"
          >
            CARA PEMESANAN
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-ivory leading-tight"
          >
            Simple Steps to Your Perfect Meal.
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative flex flex-col lg:flex-row gap-10 lg:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          {/* Connecting dashed line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px border-t border-dashed border-champagne-gold/20 z-0 mx-[12.5%]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex-1 flex flex-col items-start lg:items-center lg:text-center px-0 lg:px-6 z-10"
            >
              {/* Large number */}
              <span className="font-display text-7xl font-bold text-champagne-gold/30 leading-none select-none mb-3">
                {step.number}
              </span>

              {/* Dot marker */}
              <div className="hidden lg:block w-3 h-3 rounded-full bg-champagne-gold/50 mb-4 -mt-1" />

              {/* Title */}
              <h3 className="font-display text-xl text-ivory mb-2">{step.title}</h3>

              {/* Description */}
              <p className="font-body text-sm text-ivory/60 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={handleOrderClick}
            className="bg-champagne-gold text-deep-charcoal px-8 py-4 font-semibold font-body tracking-wide hover:bg-champagne-gold/90 transition-colors duration-200"
          >
            Order via WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}

