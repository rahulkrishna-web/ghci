'use client';
import { motion } from 'framer-motion';

const items = [
  'Limited Tickets Available',
  'Limited Tickets Available',
  'Limited Tickets Available',
  'Limited Tickets Available',
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-[#070708] py-8">
      {/* Side Fades */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#070708] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#070708] to-transparent pointer-events-none" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-dashed border-white/20 text-white/60 text-sm font-medium"
            >
              <span className="text-[#b02677] text-lg">✦</span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
