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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col gap-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium leading-[1.15]">
              <span className="text-white block">What is</span>
              <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent block mt-1">
                ABIA?
              </span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mt-8"
            >
              <a
                href={whatIs.ctaLink}
                className="relative inline-flex rounded-full min-w-[200px] md:min-w-[280px] h-12 md:h-16 overflow-hidden group active:scale-98 cursor-pointer transition-all duration-300"
              >
                {/* Gradient Border Overlay */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid transparent',
                    background: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'destination-out',
                    maskComposite: 'exclude',
                  }}
                />
                
                {/* Sliding Content Container */}
                <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden group-hover:bg-[#A32482] transition-colors duration-300">
                  <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                    <div 
                      className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-transparent bg-clip-text text-sm md:text-xl font-semibold tracking-[0.08em] uppercase pb-0.5"
                      style={{
                        backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      {whatIs.cta}
                    </div>
                    <div className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-white text-sm md:text-xl font-semibold tracking-[0.08em] uppercase pb-0.5">
                      {whatIs.cta}
                    </div>
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
            className="md:col-span-7 text-left space-y-6 md:space-y-8"
          >
            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-bold max-w-4xl lg:max-w-5xl whitespace-pre-line">
              {whatIs.description}
            </p>
            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-normal max-w-4xl lg:max-w-5xl whitespace-pre-line">
              {whatIs.paragraph}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
