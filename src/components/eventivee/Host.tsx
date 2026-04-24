'use client';
import { motion } from 'framer-motion';

export default function Host() {
  return (
    <section className="py-24 md:py-32 bg-[#070708] text-white px-6 relative overflow-hidden">
      {/* Background subtle logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="120" stroke="white" strokeWidth="2"/>
          <path d="M150 50 C200 100, 200 200, 150 250 C100 200, 100 100, 150 50Z" fill="white"/>
          <path d="M50 150 C100 100, 200 100, 250 150 C200 200, 100 200, 50 150Z" fill="white"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-purple-400 text-sm font-mono tracking-wider mb-4 block"
            >
              [Host]
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
            >
              Meet the Hosts Behind{' '}
              <span className="text-white/40">ConfexPro</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-white/50 text-lg leading-relaxed max-w-lg"
            >
              <p>
                Johnson has spent the last 12 years helping businesses scale their events into powerful growth engines.
              </p>
              <p>
                With a passion for storytelling and audience engagement, she&apos;s worked with global brands and startups alike to create impactful experiences that convert.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-5xl font-bold italic text-white/20 font-serif"
            >
              Jony
            </motion.div>
          </div>

          {/* Host Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:w-[480px] h-[500px] rounded-3xl overflow-hidden border border-white/10 relative"
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt="Host"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
