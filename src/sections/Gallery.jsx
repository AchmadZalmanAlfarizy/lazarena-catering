import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=75&w=500', alt: 'Premium nasi box' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=75&w=500', alt: 'Beef rendang close-up' },
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=75&w=500', alt: 'Event catering spread' },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=75&w=500', alt: 'Fresh salad bowl' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=75&w=500', alt: 'Pancakes stack' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=75&w=500', alt: 'Catering table setup' },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=75&w=500', alt: 'Grilled dish overhead' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=75&w=500', alt: 'Salmon dish' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=75&w=500', alt: 'Pastry selection' },
  { src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=75&w=500', alt: 'Dessert table' },
  { src: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=75&w=500', alt: 'Indonesian cuisine' },
  { src: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&q=75&w=500', alt: 'Nasi goreng special' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="text-champagne-gold tracking-widest text-xs font-body uppercase block mb-3 font-semibold"
          >
            OUR GALLERY
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-deep-charcoal leading-tight"
          >
            A Feast for the Eyes.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-deep-charcoal/65 mt-4 max-w-xl mx-auto text-base"
          >
            Setiap hidangan memiliki kisahnya sendiri — berikut cuplikan dedikasi kami dalam setiap penyajian.
          </motion.p>
        </motion.div>

        {/* Masonry grid using CSS columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="columns-2 md:columns-3 lg:columns-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="mb-4 rounded-sm overflow-hidden group cursor-pointer bg-cream"
              style={{ breakInside: 'avoid' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
