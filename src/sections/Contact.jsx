import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { openWhatsApp, WHATSAPP_NUMBER } from '../utils/whatsapp';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../utils/animations';

const contactItems = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+62 899-9268-988',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@zalmanalf_',
    href: 'https://instagram.com/zalmanalf_',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'azalmana27@gmail.com',
    href: 'mailto:azalmana27@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Website Demo',
    href: null,
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: 'Senin – Sabtu, 07.00 – 20.00 WIB',
    href: null,
  },
];

const cateringTypes = [
  'Nasi Box Harian',
  'Corporate Catering',
  'Event Catering',
  'Meeting & Seminar',
  'Lainnya',
];

const initialForm = {
  fullName: '',
  whatsappNumber: '',
  eventDate: '',
  cateringType: '',
  portions: '',
  eventLocation: '',
  additionalNotes: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Nama lengkap wajib diisi.';
    if (!form.whatsappNumber.trim()) newErrors.whatsappNumber = 'Nomor WhatsApp wajib diisi.';
    if (!form.eventDate) newErrors.eventDate = 'Tanggal acara wajib diisi.';
    if (!form.cateringType) newErrors.cateringType = 'Pilih jenis catering.';
    if (!form.portions || Number(form.portions) < 10)
      newErrors.portions = 'Jumlah porsi minimal 10.';
    if (!form.eventLocation.trim()) newErrors.eventLocation = 'Lokasi acara wajib diisi.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    openWhatsApp(form);
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const inputClass =
    'w-full bg-transparent border-b border-deep-charcoal/20 py-3 text-deep-charcoal font-body text-sm focus:border-champagne-gold focus:outline-none transition-colors duration-200 placeholder:text-deep-charcoal/30';
  const labelClass = 'block text-xs tracking-widest uppercase text-deep-charcoal/50 font-body mb-1';
  const errorClass = 'text-red-500 text-xs mt-1 font-body';

  return (
    <section id="contact" className="bg-ivory py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-champagne-gold tracking-widest text-xs uppercase mb-4 font-body"
            >
              HUBUNGI KAMI
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl text-deep-charcoal leading-tight mb-5"
            >
              Let's Make Your Event Special.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-body text-deep-charcoal/60 text-sm leading-relaxed mb-10 max-w-sm"
            >
              Ready to plan your next event? Reach out and let's create something memorable
              together.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-9 h-9 rounded-full bg-forest-olive/5 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-champagne-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-body tracking-widest uppercase text-deep-charcoal/40 mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-deep-charcoal/80">{item.value}</p>
                    </div>
                  </div>
                );
                return (
                  <motion.li key={item.label} variants={fadeInUp}>
                    {item.href && item.href !== '#' ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={slideInRight}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center py-20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-deep-charcoal mb-3">
                    Pesan Terkirim!
                  </h3>
                  <p className="font-body text-sm text-deep-charcoal/60 max-w-xs mx-auto">
                    Pesan Anda berhasil dikirim. Kami akan segera menghubungi Anda.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs font-body tracking-widest uppercase text-champagne-gold border-b border-champagne-gold/40 hover:border-champagne-gold transition-colors"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                {/* Full Name */}
                <div>
                  <label className={labelClass}>Nama Lengkap</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                    required
                  />
                  {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className={labelClass}>Nomor WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={form.whatsappNumber}
                    onChange={handleChange}
                    placeholder="08123456789"
                    className={inputClass}
                    required
                  />
                  {errors.whatsappNumber && (
                    <p className={errorClass}>{errors.whatsappNumber}</p>
                  )}
                </div>

                {/* Event Date */}
                <div>
                  <label className={labelClass}>Tanggal Acara</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                  {errors.eventDate && <p className={errorClass}>{errors.eventDate}</p>}
                </div>

                {/* Catering Type */}
                <div>
                  <label className={labelClass}>Jenis Catering</label>
                  <select
                    name="cateringType"
                    value={form.cateringType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                    required
                  >
                    <option value="">Pilih jenis catering...</option>
                    {cateringTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.cateringType && <p className={errorClass}>{errors.cateringType}</p>}
                </div>

                {/* Number of Portions */}
                <div>
                  <label className={labelClass}>Jumlah Porsi</label>
                  <input
                    type="number"
                    name="portions"
                    value={form.portions}
                    onChange={handleChange}
                    placeholder="Min. 10 porsi"
                    min={10}
                    className={inputClass}
                    required
                  />
                  {errors.portions && <p className={errorClass}>{errors.portions}</p>}
                </div>

                {/* Event Location */}
                <div>
                  <label className={labelClass}>Lokasi Acara</label>
                  <input
                    type="text"
                    name="eventLocation"
                    value={form.eventLocation}
                    onChange={handleChange}
                    placeholder="Jl. Contoh No. 1, Kota"
                    className={inputClass}
                    required
                  />
                  {errors.eventLocation && (
                    <p className={errorClass}>{errors.eventLocation}</p>
                  )}
                </div>

                {/* Additional Notes */}
                <div>
                  <label className={labelClass}>Catatan Tambahan (Opsional)</label>
                  <textarea
                    name="additionalNotes"
                    value={form.additionalNotes}
                    onChange={handleChange}
                    placeholder="Alergi makanan, preferensi khusus, dll."
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-forest-olive text-ivory px-8 py-4 font-body font-semibold tracking-wide hover:bg-forest-olive/90 transition-colors duration-200"
                >
                  Send via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

