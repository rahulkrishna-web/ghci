'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AbiaWhoCanProps {
  data: any;
}

export default function AbiaWhoCan({ data }: AbiaWhoCanProps) {
  const { whoCan } = data;

  const getTitleWithHighlight = (title: string) => {
    const parts = title.split(' ');
    if (parts.length < 2) return title;
    const lastWord = parts.pop();
    return (
      <>
        {parts.join(' ')}{' '}
        <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">
          {lastWord}
        </span>
      </>
    );
  };

  return (
    <section 
      className="py-24 bg-[#070708] relative px-4 md:px-13 overflow-hidden"
      style={{
        backgroundImage: `url('/wequest/why_apply_bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 rounded-[10px] overflow-hidden border border-white/10 h-[300px] md:h-auto min-h-[300px] relative"
          >
            <Image 
              src="/abia/who-can-be-nominated.png"
              alt="Who can be nominated audience"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right: Content Box with Homepage Card Background */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 relative rounded-[10px] p-10 md:p-14 overflow-hidden h-full flex flex-col justify-center"
            style={{
              backgroundImage: 'url(/what-to-expect-card-bg.png)',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative z-10">
              <h3 className="text-[2.2rem] text-white mb-6 font-semibold">
                {getTitleWithHighlight(whoCan.title)}
              </h3>
              
              <ul className="space-y-4">
                {whoCan.list.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-4 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 group-hover:bg-[#A32482] transition-colors shrink-0" />
                    <span className="text-white/80 text-base md:text-[1.25rem] font-medium border-b border-transparent group-hover:border-white/20 transition-all pb-1 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
