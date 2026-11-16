import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route/hash change
  const handleNavClick = () => setMobileOpen(false);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  /* ---- derived style values ---- */
  const textColor = scrolled ? 'text-deep-charcoal' : 'text-ivory';
  const linkHover = scrolled
    ? 'hover:text-champagne-gold'
    : 'hover:text-champagne-gold';
  const logoSubColor = scrolled
    ? 'text-deep-charcoal/50'
    : 'text-ivory/50';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-deep-charcoal/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#home" onClick={handleNavClick} className="flex flex-col leading-none group">
          <span
            className={`font-display font-bold text-xl md:text-2xl tracking-wider transition-colors duration-200 ${textColor}`}
          >
            La Zarena
          </span>
          <span
            className={`font-body text-[9px] tracking-[0.25em] uppercase transition-colors duration-200 ${logoSubColor}`}
          >
            CATERING &amp; FOOD SERVICE
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`font-body text-sm font-medium transition-colors duration-200 ${textColor} ${linkHover}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          onClick={handleNavClick}
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-sm
            bg-champagne-gold text-deep-charcoal font-body text-sm font-semibold tracking-wide
            transition-all duration-200 hover:brightness-110 active:scale-95 shadow-sm"
        >
          Order Now
        </a>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded transition-colors duration-200 ${textColor}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-cream border-t border-deep-charcoal/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={handleNavClick}
                    className="block py-3 font-body text-sm font-medium text-deep-charcoal
                      hover:text-champagne-gold border-b border-deep-charcoal/5 transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-sm
                    bg-champagne-gold text-deep-charcoal font-semibold text-sm tracking-wide
                    hover:brightness-110 transition-all duration-200 active:scale-95"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
