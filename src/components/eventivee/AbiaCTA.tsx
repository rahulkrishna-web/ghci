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

        {/* Outer outlined pill CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block"
        >
          <a
            href={ctaBanner.ctaLink}
            className="inline-flex rounded-full p-[2px] min-w-[200px] md:min-w-[280px] h-12 md:h-16 overflow-hidden group active:scale-98 cursor-pointer transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)'
            }}
          >
            <div className="w-full h-full bg-[#070708] rounded-full flex items-center justify-center relative overflow-hidden group-hover:bg-[#A32482] transition-colors duration-300">
              <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                <div 
                  className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-transparent bg-clip-text text-sm md:text-2xl font-semibold tracking-[0.08em] uppercase pb-0.5"
                  style={{
                    backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
                    WebkitBackgroundClip: 'text'
                  }}
                >
                  {ctaBanner.cta}
                </div>
                <div className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-white text-sm md:text-2xl font-semibold tracking-[0.08em] uppercase pb-0.5">
                  {ctaBanner.cta}
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
