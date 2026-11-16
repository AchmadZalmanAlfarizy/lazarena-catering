import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const contactDetails = [
  {
    icon: Phone,
    text: '+62 899-9268-988',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    text: 'azalmana27@gmail.com',
    href: 'mailto:azalmana27@gmail.com',
  },
  {
    icon: MapPin,
    text: 'Website Demo',
    href: null,
  },
  {
    icon: Clock,
    text: 'Senin – Sabtu, 07.00 – 20.00 WIB',
    href: null,
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Main 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
          {/* Column 1 — Brand */}
          <div>
            <p className="font-display text-2xl text-champagne-gold tracking-wide leading-none font-semibold">
              La Zarena
            </p>
            <p className="tracking-widest text-xs text-champagne-gold/60 font-body mt-1 uppercase">
              Catering &amp; Food Service
            </p>
            <p className="text-ivory/50 text-sm font-body mt-3 leading-relaxed">
              A Taste Worth Remembering.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/zalmanalf_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @zalmanalf_"
                className="text-ivory/40 hover:text-champagne-gold transition-colors duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ivory/40 hover:text-champagne-gold transition-colors duration-200"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="text-ivory/40 text-xs tracking-widest uppercase font-body mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ivory/60 hover:text-champagne-gold text-sm font-body transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="text-ivory/40 text-xs tracking-widest uppercase font-body mb-5">
              Get in Touch
            </p>
            <ul className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-3">
                    <Icon
                      className="w-4 h-4 text-champagne-gold/60 mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-ivory/50 text-sm font-body leading-snug">
                      {item.text}
                    </span>
                  </div>
                );
                return (
                  <li key={item.text}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ivory/30 text-xs font-body">
            © 2026 La Zarena Catering &amp; Food Service. All Rights Reserved.
          </p>
          <p className="text-champagne-gold/50 text-xs font-body sm:text-right">
            Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}

