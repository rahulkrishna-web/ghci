'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AbiaWinnersProps {
  data: any;
}

export default function AbiaWinners({ data }: AbiaWinnersProps) {
  const { winners } = data;

  return (
    <section className="py-24 bg-[#070708] relative border-t border-white/5 px-4 md:px-13">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 flex flex-col gap-8"
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

          {/* Right Column: Grid of Winners */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {winners.list.map((winner: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[12px] overflow-hidden bg-white/5 border border-white/10 aspect-[3/4] flex items-end p-6"
              >
                {/* Image Background */}
                <img 
                  src={winner.image}
                  alt={winner.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col gap-1 w-full">
                  <h3 className="text-xl font-bold text-white">
                    {winner.name}
                  </h3>
                  <p className="text-sm text-white/70 whitespace-pre-line leading-snug">
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
