'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaProcessProps {
  data: any;
}

export default function AbiaProcess({ data }: AbiaProcessProps) {
  const { process } = data;

  return (
    <section 
      className="py-24 bg-[#070708] text-white px-4 md:px-13 relative border-t border-white/5 overflow-hidden"
      style={{
        backgroundImage: `url('/wequest/how_to_apply_bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background radial highlight */}
      <div className="absolute w-[50%] h-[50%] rounded-full bg-[#A32482]/5 blur-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-6xl tracking-tight font-medium pb-1 text-transparent bg-clip-text inline-block"
            style={{
              backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
              WebkitBackgroundClip: 'text'
            }}
          >
            {process.title}
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex flex-col">
            {process.list.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-stretch gap-5 md:gap-8 relative group"
              >
                {/* Left side: Circle and Line Segment */}
                <div className="flex flex-col items-center shrink-0 relative">
                  {/* Step Number Circle */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#A32482] text-white flex items-center justify-center font-bold text-base md:text-lg z-10 shadow-lg shadow-purple-950/20 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  {/* Line segment to next item */}
                  {index < process.list.length - 1 && (
                    <div 
                      className="w-[2px] bg-[#A32482]/30 pointer-events-none absolute top-10 md:top-12 bottom-0 left-1/2 -translate-x-1/2 z-0"
                      style={{
                        backgroundImage: 'linear-gradient(to bottom, #A32482 0%, #b02677 100%)'
                      }}
                    />
                  )}
                </div>

                {/* Step Description */}
                <div className={`pt-1.5 md:pt-2 ${index < process.list.length - 1 ? 'pb-8 md:pb-12' : ''}`}>
                  <h3 className="text-white font-bold text-lg md:text-[22px] mb-1 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-base md:text-lg font-normal leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
