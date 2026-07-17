'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaDatesProps {
  data: any;
}

export default function AbiaDates({ data }: AbiaDatesProps) {
  const { dates } = data;

  return (
    <section className="py-24 bg-[#070708] relative border-t border-white/5 px-4 md:px-13">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {dates.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
          {dates.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-2 pb-6 border-b border-white/10"
            >
              <h3 className="text-white/60 text-sm uppercase tracking-wider font-semibold">
                {item.title}
              </h3>
              <p className="text-[#A32482] font-bold text-lg">
                {item.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
