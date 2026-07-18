'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaWhatIsProps {
  data: any;
}

export default function AbiaWhatIs({ data }: AbiaWhatIsProps) {
  const { whatIs } = data;

  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white relative border-t border-white/5 px-4 md:px-13 overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32 max-w-6xl mx-auto">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 shrink-0 w-full lg:w-auto max-w-md items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium leading-[1.15]">
              <span className="text-white">What is </span>
              <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">
                ABIA?
              </span>
            </h2>
            
            {/* Premium Button Cluster (Apply Cluster) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-row items-center group gap-0"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#8e1f7c] transition-all z-10">
                <img src="/icons/Ticket.png" alt="Ticket" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
              </div>
              <a
                href={whatIs.ctaLink}
                className="h-12 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white text-[15px] md:text-lg font-semibold shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden cursor-pointer"
              >
                <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <div className="h-full w-full flex items-center justify-center px-6 md:px-10 shrink-0">
                    {whatIs.cta}
                  </div>
                  <div className="h-full w-full flex items-center justify-center px-6 md:px-10 shrink-0">
                    {whatIs.cta}
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl"
          >
            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-bold whitespace-pre-line text-center lg:text-justify">
              {whatIs.description}
            </p>
            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-normal whitespace-pre-line text-center lg:text-justify">
              {whatIs.paragraph}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
