'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Image from 'next/image';

interface AbiaHeroProps {
  data: any;
}

export default function AbiaHero({ data }: AbiaHeroProps) {
  const { hero } = data;

  return (
    <section className="relative w-full min-h-[90vh] bg-[#070708] pt-32 pb-20 flex items-center justify-center overflow-hidden px-4 md:px-13">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A32482]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#223852]/30 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image 
              src="/abia/lead_section.png"
              alt="Anita Borg Impact Awards Stage"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
              <Clock className="w-4 h-4" />
              <span>{hero.deadline}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-lg leading-relaxed">
              {hero.subtitle}
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mt-6"
            >
              <a
                href={hero.ctaLink}
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
                      {hero.cta}
                    </div>
                    <div className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-white text-sm md:text-xl font-semibold tracking-[0.08em] uppercase pb-0.5">
                      {hero.cta}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
