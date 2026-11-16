import { motion } from 'framer-motion';
import { Utensils, Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const reasons = [
  {
    icon: Utensils,
    number: '01',
    title: 'Freshly Prepared Meals',
    description:
      'Setiap hidangan dimasak segar menjelang waktu pengantaran untuk menjaga kehangatan, tekstur, dan cita rasa autentik terbaik.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'Quality Ingredients',
    description:
      'Kami memilih bahan baku premium, sayuran segar terkurasi, dan rempah alami tanpa kompromi demi standar mutu rasa tinggi.',
  },
  {
    icon: HeartHandshake,
    number: '03',
    title: 'Professional Service',
    description:
      'Didukung tim kuliner dan operasional berdedikasi yang memastikan ketepatan waktu pengiriman dan komunikasi yang responsif.',
  },
  {
    icon: Award,
    number: '04',
    title: 'Flexible Catering Packages',
    description:
      'Mulai dari konsumsi rapat puluhan porsi hingga perhelatan akbar ratusan tamu, paket kami dapat disesuaikan dengan kebutuhan Anda.',
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'Carefully Presented Meals',
    description:
      'Bukan sekadar kemasan, melainkan representasi kehangatan tuan rumah dengan packaging higienis, rapi, dan estetis bernuansa premium.',
  },
];

const stats = [
  { value: '100%', label: 'Bahan Segar Pilihan', sublabel: 'Dipilih & diproses setiap hari' },
  { value: '5+', label: 'Kategori Layanan', sublabel: 'Dari Nasi Box hingga Event' },
  { value: '20+', label: 'Kreasi Menu Kurasi', sublabel: 'Variasi Nusantara & Modern' },
  { value: '1', label: 'Komitmen Utama', sublabel: 'Pengalaman rasa tak terlupakan' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-forest-olive py-24 md:py-32 overflow-hidden text-ivory">
      {/* Subtle Background Glow/Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-champagne-gold text-xs tracking-widest uppercase font-body mb-4"
          >
            WHY LA ZARENA
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-ivory leading-tight mb-6"
          >
            Quality in Every Detail.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-ivory/70 text-base md:text-lg leading-relaxed"
          >
            Dedikasi kami tertuang dalam setiap detail — mulai dari pemilihan rempah, ketelitian proses masak, hingga kehangatan penyajian pada meja Anda.
          </motion.p>
        </motion.div>

        {/* 5 Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={`group relative bg-deep-charcoal/40 border border-champagne-gold/20 hover:border-champagne-gold/60 p-8 transition-all duration-300 hover:-translate-y-1 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-champagne-gold/10 border border-champagne-gold/30 flex items-center justify-center text-champagne-gold group-hover:bg-champagne-gold group-hover:text-deep-charcoal transition-colors duration-300">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-2xl font-light text-champagne-gold/30 group-hover:text-champagne-gold/60 transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-ivory mb-3 font-medium">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-ivory/65 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Brand Stats / Counter Highlights */}
        <div className="pt-12 border-t border-champagne-gold/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="font-display text-4xl md:text-5xl font-bold text-champagne-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm font-medium text-ivory uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="font-body text-xs text-ivory/50">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

