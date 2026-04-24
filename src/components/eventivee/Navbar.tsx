'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#attendees' },
  { label: 'Agenda', href: '#' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Tickets', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#070708]/80 backdrop-blur-md border-b border-white/[0.05] px-4 md:px-40 py-4"
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
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white transition-opacity text-sm font-medium tracking-tight"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="https://konfhub.com/ghci-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-all font-bold text-sm shadow-xl active:scale-95"
          >
            Register Now
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#070708] border-t border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://konfhub.com/ghci-2027"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-3 rounded-full bg-white text-black font-bold text-center inline-block"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
