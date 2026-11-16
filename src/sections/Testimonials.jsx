import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const placeholderTestimonials = [
  {
    id: 1,
    quote:
      'Penyajian catering La Zarena untuk agenda tahunan perusahaan kami sangat memukau. Cita rasa makanannya autentik, pengantaran tepat waktu, dan kemasannya tampak sangat elegan di hadapan para tamu eksekutif.',
    client: 'Klien Perusahaan',
    role: 'Corporate Annual Meeting',
    tag: 'Corporate Catering',
  },
  {
    id: 2,
    quote:
      'Nasi box premium La Zarena menjadi bintang di acara tasyakuran keluarga kami. Semua tamu memuji kelezatan ayam bumbu rempah dan kebersihan sajiannya. Pasti akan memesan kembali untuk acara berikutnya.',
    client: 'Keluarga Ramadhan',
    role: 'Family Gathering & Tasyakuran',
    tag: 'Private Event',
  },
  {
    id: 3,
    quote:
      'Koordinasi pemesanan via WhatsApp sangat cepat dan ramah. Detail menu snack box dan lunch box seminar kami diatur dengan sangat teliti. Sangat kami rekomendasikan untuk event organizer.',
    client: 'Event Organizer Mitra',
    role: 'Seminar & Workshop Nasional',
    tag: 'Event Partner',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-champagne-gold" />
            <span className="text-champagne-gold text-xs tracking-widest uppercase font-body">
              TESTIMONIALS
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl text-deep-charcoal leading-tight mb-4"
          >
            What Our Clients Say.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-body text-deep-charcoal/60 text-base leading-relaxed"
          >
            Kepercayaan pelanggan adalah kebanggaan kami. Berikut adalah gambaran pengalaman bersantap bersama La Zarena.
          </motion.p>

          {/* Sample Data Disclaimer Badge */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 inline-block bg-champagne-gold/15 border border-champagne-gold/30 px-4 py-1.5 rounded-full text-xs text-deep-charcoal/70 font-body"
          >
            ℹ️ <em>Contoh format testimoni — Silakan perbarui dengan ulasan asli pelanggan Anda sebelum publikasi.</em>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {placeholderTestimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="relative bg-ivory border border-champagne-gold/25 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <Quote className="w-10 h-10 text-champagne-gold/35 mb-6" strokeWidth={1} />
                <p className="font-display italic text-deep-charcoal/85 text-lg leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-deep-charcoal/10">
                <span className="inline-block text-[10px] tracking-wider uppercase font-semibold text-champagne-gold bg-forest-olive px-2.5 py-1 mb-2">
                  {item.tag}
                </span>
                <h4 className="font-display text-base font-semibold text-deep-charcoal">
                  {item.client}
                </h4>
                <p className="font-body text-xs text-deep-charcoal/50">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

