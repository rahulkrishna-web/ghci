'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaCategoriesProps {
  data: any;
}

export default function AbiaCategories({ data }: AbiaCategoriesProps) {
  const { categories } = data;

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {categories.title}
          </h2>
          <p className="text-white/60 max-w-2xl text-lg">
            {categories.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl border ${index === 0 ? 'bg-gradient-to-br from-[#A32482] to-[#22021d] border-[#A32482]/50' : 'bg-white/5 border-white/10'}`}
            >
              <div className={`text-4xl font-light mb-6 ${index === 0 ? 'text-white' : 'text-white/40'}`}>
                {item.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
