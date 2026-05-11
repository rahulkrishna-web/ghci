'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#attendees' },
  { label: 'Agenda', href: '#' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Tickets', href: '#ticketing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
          paddingTop: isScrolled ? '1rem' : '2rem',
          paddingBottom: isScrolled ? '1rem' : '2rem',
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-13"
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img 
              src="/ghci27-logo.png" 
              alt="GHCI 2027" 
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Links & CTA */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-white transition-opacity text-[1rem] tracking-tight"
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="#ticketing"
              className="h-10 inline-flex flex-col rounded-full bg-white text-black hover:bg-white/90 transition-all text-[1rem] active:scale-95 overflow-hidden group"
            >
              <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <div className="h-full w-full flex items-center justify-center px-6 shrink-0">
                      Register Now
                  </div>
                  <div className="h-full w-full flex items-center justify-center px-6 shrink-0">
                      Register Now
                  </div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden flex items-center justify-center p-4"
          >
            {/* Blurred Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm rounded-[30px] bg-[#070708]/90 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-8 flex flex-col">
                {/* Header inside popup */}
                <div className="flex items-center justify-between mb-10">
                  <img 
                    src="/ghci27-logo.png" 
                    alt="GHCI 2027" 
                    className="h-10 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-6 items-center justify-center mb-10">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-3xl font-medium tracking-tight hover:text-[#A32482] transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Footer inside popup */}
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 }}
                >
                  <a
                    href="#ticketing"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-5 rounded-full bg-white text-black font-bold text-xl text-center block active:scale-95 transition-transform"
                  >
                    Register Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
