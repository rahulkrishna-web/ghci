'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaCTAProps {
  data: any;
}

export default function AbiaCTA({ data }: AbiaCTAProps) {
  const { ctaBanner } = data;

  return (
    <section className="py-24 bg-[#070708] relative border-t border-white/5 overflow-hidden px-4 md:px-13">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-[#A32482]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#A32482]">
            {ctaBanner.title}
          </h2>
          
          <p className="text-lg md:text-xl text-white font-medium max-w-2xl">
            {ctaBanner.subtitle}
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mt-8"
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
                    className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-transparent bg-clip-text text-sm md:text-xl font-semibold tracking-[0.08em] uppercase pb-0.5"
                    style={{
                      backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
                      WebkitBackgroundClip: 'text'
                    }}
                  >
                    {ctaBanner.cta}
                  </div>
                  <div className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-white text-sm md:text-xl font-semibold tracking-[0.08em] uppercase pb-0.5">
                    {ctaBanner.cta}
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
