'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaWinnersProps {
  data: any;
}

export default function AbiaWinners({ data }: AbiaWinnersProps) {
  const { winners } = data;

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    initial: { filter: 'grayscale(100%)' },
    animate: { filter: 'grayscale(100%)' },
    hover: { filter: 'grayscale(0%)' }
  };

  return (
    <section className="py-24 bg-[#070708] relative border-t border-white/5 px-4 md:px-13 overflow-hidden">
      <div className="w-full">
        <div className="space-y-10 lg:space-y-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-32 max-w-6xl mx-auto">
          
          {/* Left Column (Title) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 shrink-0 text-center lg:text-left"
          >
            <h2 
              className="text-4xl md:text-6xl tracking-tight font-medium pb-1 text-transparent bg-clip-text inline-block leading-tight"
              style={{
                backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
                WebkitBackgroundClip: 'text'
              }}
            >
              Meet Our<br />Past Winners
            </h2>
          </motion.div>

          {/* Right Column (Cards) */}
          <div className="w-full flex overflow-x-auto md:overflow-visible py-4 -my-4 snap-x snap-mandatory pb-6 -mx-4 px-6 scroll-pl-6 lg:w-auto lg:mx-0 lg:px-0 lg:pb-0 lg:flex-row lg:justify-center gap-6 scrollbar-hide">
            {winners.list.map((winner: any, index: number) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[10px] overflow-hidden w-[326px] max-w-[85%] lg:max-w-none h-[450px] flex-shrink-0 cursor-pointer shadow-xl snap-start"
                style={{
                  background: 'linear-gradient(225deg, #A3A3A3 0%, #494949 100%)'
                }}
              >
                {/* Image aligned to top, grayscale by default, colored on hover via Framer Motion variant */}
                <motion.img 
                  src={winner.image}
                  alt={winner.name}
                  variants={imageVariants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-auto object-contain object-top"
                />
                
                {/* Gradient Overlay at the bottom covering empty space */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-[60%] z-10"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)'
                  }}
                />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col gap-1.5">
                  <h3 className="text-[28px] font-semibold text-white leading-tight">
                    {winner.name}
                  </h3>
                  <p className="text-base text-white/85 leading-snug font-normal">
                    {winner.title}
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
