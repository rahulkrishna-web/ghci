'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AbiaProcessProps {
  data: any;
}

export default function AbiaProcess({ data }: AbiaProcessProps) {
  const { process } = data;

  return (
    <section className="py-24 bg-[#070708] relative border-t border-white/5 px-4 md:px-13">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#A32482]">
            {process.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {process.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 md:gap-8"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#A32482] flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(163,36,130,0.4)]">
                {item.step}
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
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
