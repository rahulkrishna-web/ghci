'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AbiaWhoCanProps {
  data: any;
}

export default function AbiaWhoCan({ data }: AbiaWhoCanProps) {
  const { whoCan } = data;

  return (
    <section className="py-24 bg-[#070708] relative px-4 md:px-13">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-stretch">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] lg:h-auto w-full lg:rounded-l-2xl overflow-hidden"
          >
            <Image 
              src="/abia/who-can-be-nominated.png"
              alt="Who can be nominated audience"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#22021d]/40 backdrop-blur-sm border border-white/10 lg:rounded-r-2xl p-8 lg:p-12 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold text-[#A32482] mb-8 pb-6 border-b border-white/10">
              {whoCan.title}
            </h2>
            
            <ul className="space-y-6">
              {whoCan.list.map((item: string, index: number) => (
                <li key={index} className="flex gap-4 items-start text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A32482] mt-2 shrink-0" />
                  <span className="leading-relaxed text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
