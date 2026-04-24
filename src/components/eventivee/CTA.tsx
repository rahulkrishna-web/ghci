'use client';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-[#070708] text-white px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Get ready for ConfexPro
        </motion.h2>

        {/* Repeating date marquee */}
        <div className="overflow-hidden mb-10">
          <motion.div
            className="flex whitespace-nowrap gap-8 text-white/30 text-sm font-mono justify-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>October 15-17, 2027 — Live in Bengaluru, India</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3"
        >
          <a
            href="https://konfhub.com/ghci-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            <span className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold text-sm">
              Buy a ticket
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
