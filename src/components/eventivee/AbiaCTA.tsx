'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaCTAProps {
  data: any;
}

export default function AbiaCTA({ data }: AbiaCTAProps) {
  const { ctaBanner } = data;

  return (
    <section className="py-20 md:py-32 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute w-[50%] h-[50%] rounded-full bg-[#A32482]/10 blur-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-medium tracking-tight mb-6 text-transparent bg-clip-text pb-1"
          style={{
            backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
            WebkitBackgroundClip: 'text'
          }}
        >
          {ctaBanner.title}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed font-normal whitespace-pre-line"
        >
          {ctaBanner.subtitle}
        </motion.p>

        {/* Premium Button Cluster (Apply Cluster) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-row items-center justify-center group gap-0"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#8e1f7c] transition-all z-10">
            <img src="/icons/Ticket.png" alt="Ticket" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
          </div>
          <a
            href={ctaBanner.ctaLink}
            className="h-12 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white text-[15px] md:text-lg font-semibold shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden cursor-pointer"
          >
            <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
              <div className="h-full w-full flex items-center justify-center px-6 md:px-10 shrink-0">
                {ctaBanner.cta}
              </div>
              <div className="h-full w-full flex items-center justify-center px-6 md:px-10 shrink-0">
                {ctaBanner.cta}
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
