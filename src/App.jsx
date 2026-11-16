import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Gallery from './sections/Gallery';
import HowToOrder from './sections/HowToOrder';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-cream text-deep-charcoal selection:bg-champagne-gold selection:text-ivory">
      {/* Initial Page Preloader with smooth luxury pacing */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Website Structure */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <HowToOrder />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action */}
      <WhatsAppButton />
    </div>
  );
}
