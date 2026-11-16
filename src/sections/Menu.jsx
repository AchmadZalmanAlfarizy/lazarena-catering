import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { cateringPackages, menuCategories, menuItems } from '../data/menu';
import { fadeInUp, fadeIn, staggerContainer } from '../utils/animations';
import MenuCard from '../components/MenuCard';
import { openWhatsAppMenu, openWhatsAppPackage } from '../utils/whatsapp';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="bg-ivory py-24 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs tracking-widest text-champagne-gold uppercase mb-3 font-body font-semibold"
          >
            PAKET &amp; PILIHAN MENU LA ZARENA
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-deep-charcoal leading-tight"
          >
            Pilihan Paket Nasi Box &amp; Cita Rasa Autentik.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="font-body text-deep-charcoal/65 mt-4 text-base leading-relaxed"
          >
            Dari paket hemat konsumsi harian hingga paket spesial jamuan VIP — diolah dari bahan segar pilihan, halal, dan disajikan higienis untuk momen berharga Anda.
          </motion.p>
        </motion.div>

        {/* ── 1. PAKET CATERING NASI BOX (FEATURED PRICING TIERS) ── */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-deep-charcoal/10">
            <div>
              <span className="text-xs tracking-widest uppercase font-semibold text-champagne-gold font-body block mb-1">
                DAFTAR PAKET NASI BOX
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-deep-charcoal">
                Paket Catering Favorit La Zarena
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-body text-deep-charcoal/50 italic">
              *Tersedia opsi nasi putih atau nasi kuning
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-cream border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-sm hover:shadow-xl ${
                  pkg.popular
                    ? 'border-champagne-gold ring-1 ring-champagne-gold shadow-md -translate-y-1'
                    : 'border-deep-charcoal/10 hover:border-champagne-gold/60'
                }`}
              >
                {/* Popular / Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-sm ${
                        pkg.popular
                          ? 'bg-champagne-gold text-deep-charcoal font-bold'
                          : 'bg-forest-olive text-ivory'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Title & Price */}
                  <div className="mt-2 mb-4 pb-4 border-b border-deep-charcoal/10">
                    <h4 className="font-display text-2xl font-bold text-deep-charcoal mb-1">
                      {pkg.name}
                    </h4>
                    <div className="font-display text-3xl font-bold text-champagne-gold">
                      {pkg.price}
                    </div>
                    <p className="font-body text-xs text-deep-charcoal/60 mt-1">
                      per box / porsi
                    </p>
                  </div>

                  {/* Summary contents highlight */}
                  <div className="bg-ivory/80 p-3 rounded mb-5 border border-deep-charcoal/5">
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-champagne-gold block mb-1">
                      Komposisi Inti:
                    </span>
                    <p className="font-body text-xs text-deep-charcoal/80 font-medium leading-relaxed">
                      {pkg.contents}
                    </p>
                  </div>

                  {/* Detailed items checklist */}
                  <ul className="space-y-2 mb-6 text-xs font-body text-deep-charcoal/70">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-champagne-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <button
                  type="button"
                  onClick={() => openWhatsAppPackage(pkg)}
                  className={`w-full py-3 px-4 font-body font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 ${
                    pkg.popular
                      ? 'bg-champagne-gold text-deep-charcoal hover:brightness-110 shadow-md'
                      : 'bg-forest-olive text-ivory hover:bg-forest-olive/90'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Pesan Paket Ini
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. MENU SATUAN & PILIHAN LAUK KREASI ── */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-deep-charcoal/10">
            <div>
              <span className="text-xs tracking-widest uppercase font-semibold text-champagne-gold font-body block mb-1">
                PILIHAN LAUK &amp; MASAKAN
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-deep-charcoal">
                Koleksi Masakan Unggulan La Zarena
              </h3>
            </div>
            <p className="font-body text-xs text-deep-charcoal/60 max-w-md">
              Dapat dipesan secara a la carte, menu prasmanan, maupun dikombinasikan ke dalam paket box khusus Anda.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-10 overflow-hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-deep-charcoal/10">
              {menuCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative shrink-0 px-5 py-3 text-sm font-body font-medium tracking-wide transition-colors duration-200 whitespace-nowrap focus:outline-none ${
                      isActive
                        ? 'text-deep-charcoal font-semibold'
                        : 'text-deep-charcoal/50 hover:text-deep-charcoal'
                    }`}
                  >
                    {cat.label}
                    {isActive && (
                      <motion.span
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-champagne-gold"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onSelect={(selected) => setSelectedItem(selected)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Custom Menu Callout ── */}
        <div className="mt-20 p-8 sm:p-10 bg-forest-olive text-ivory flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-2 text-champagne-gold">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-semibold tracking-widest uppercase font-body">
                CUSTOM MENU SESUAI ANGGARAN
              </span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl text-ivory mb-2">
              Ingin Menyesuaikan Komposisi Lauk &amp; Budget?
            </h4>
            <p className="font-body text-sm text-ivory/70 max-w-xl leading-relaxed">
              Tim kuliner La Zarena siap memformulasikan kombinasi menu yang pas untuk kebutuhan arisan, syukuran, seminar kantor, maupun resepsi Anda.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 bg-champagne-gold text-deep-charcoal font-semibold font-body text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            Konsultasi Menu Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── Menu Detail Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-deep-charcoal/70 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-ivory shadow-2xl border border-champagne-gold/40 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Tutup modal"
                className="absolute top-4 right-4 z-20 p-2 bg-deep-charcoal/60 hover:bg-deep-charcoal text-ivory rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto">
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full bg-cream">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.imageAlt || selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedItem.badge && (
                    <span className="absolute bottom-4 left-4 bg-champagne-gold text-deep-charcoal text-xs font-semibold px-3 py-1 uppercase tracking-wider shadow">
                      {selectedItem.badge}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-deep-charcoal/10">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-champagne-gold font-body block mb-1 font-semibold">
                        LA ZARENA CATERING SELECTION
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-medium text-deep-charcoal">
                        {selectedItem.name}
                      </h3>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-body text-champagne-gold whitespace-nowrap">
                      {selectedItem.price}
                    </div>
                  </div>

                  <p className="font-body text-deep-charcoal/75 text-base leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  {/* Highlights */}
                  <div className="bg-cream/80 p-5 rounded-sm mb-6 border border-deep-charcoal/5">
                    <h5 className="font-display text-sm font-semibold text-deep-charcoal uppercase tracking-wider mb-3">
                      Standar Kualitas La Zarena:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-body text-deep-charcoal/70">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-champagne-gold shrink-0" />
                        <span>Dimasak fresh di hari H pengantaran</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-champagne-gold shrink-0" />
                        <span>Packaging higienis &amp; aman pangan</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-champagne-gold shrink-0" />
                        <span>100% bahan baku halal &amp; segar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-champagne-gold shrink-0" />
                        <span>Sendok, garpu, &amp; tisu terbungkus rapi</span>
                      </li>
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => openWhatsAppMenu(selectedItem)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest-olive text-ivory font-body font-semibold text-sm hover:bg-forest-olive/90 transition-colors uppercase tracking-wider"
                    >
                      <MessageCircle className="w-4 h-4 text-champagne-gold" />
                      Pesan Menu Ini via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(null)}
                      className="px-6 py-3.5 border border-deep-charcoal/20 text-deep-charcoal font-body text-sm hover:bg-deep-charcoal/5 transition-colors uppercase tracking-wider"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
