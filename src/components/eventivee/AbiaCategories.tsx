'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AbiaCategoriesProps {
  data: any;
}

export default function AbiaCategories({ data }: AbiaCategoriesProps) {
  const { categories } = data;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#070708] relative border-t border-white/5 overflow-hidden px-4 md:px-13">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#A32482]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl tracking-tight text-white font-medium mb-4">
            {categories.title}
          </h2>
          <p className="text-white text-lg">
            {categories.subtitle}
          </p>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-6 scroll-pl-6 md:mx-0 md:px-0 md:scroll-pl-0 md:pb-0 md:grid md:grid-cols-3 gap-6 scrollbar-hide">
          {categories.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-8 rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col min-h-[265px] md:min-h-[290px] flex-shrink-0 w-[85%] md:w-auto snap-start ${
                hoveredIndex === index ? 'border-[#D837AD] -translate-y-1 shadow-lg shadow-[#A32482]/10' : 'bg-white/5 border-white/10'
              }`}
            >
              {/* Hover Gradient Overlay */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(225deg, #AA1F88 0%, #27021D 50%, #27273F 100%)',
                  zIndex: 0
                }}
              />
              
              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full">
                <div className={`text-5xl md:text-6xl font-medium mb-6 transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-white' : 'text-white/40'
                }`}>
                  {item.number}
                </div>
                <h3 className="text-2xl md:text-[26px] text-white mb-4 leading-tight font-medium">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[16px] md:text-lg leading-relaxed font-medium mt-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
