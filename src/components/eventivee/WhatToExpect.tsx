'use client';
import { motion } from 'framer-motion';

type WhatToExpectProps = {
  data: {
    sectionTitle: string;
    imageUrl: string;
    points: string[];
  };
};

export default function WhatToExpect({ data }: WhatToExpectProps) {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[10px] overflow-hidden aspect-video border border-white/10"
          >
            <img 
              src={data.imageUrl} 
              alt="What to expect" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side: Info Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] border border-white/5 rounded-[10px] p-10 md:p-14 relative overflow-hidden h-full flex flex-col justify-center"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
            
            <div className="relative z-10">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#A32482] mb-10">
                {data.sectionTitle}
              </h3>
              
              <ul className="space-y-6">
                {data.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 group-hover:bg-[#A32482] transition-colors" />
                    <span className="text-white/80 text-lg md:text-xl font-medium border-b border-transparent group-hover:border-white/20 transition-all pb-1 leading-tight">
                        {point}
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
