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
    <section className="py-0 text-white px-4 md:px-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 rounded-[10px] overflow-hidden border border-white/10 h-full"
          >
            <img 
              src="/what-to-expect.png" 
              alt="What to expect" 
              className="w-full h-full object-cover"
            />
          </motion.div>
 
          {/* Right Side: Info Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative rounded-[10px] p-10 md:p-14 overflow-hidden h-full flex flex-col justify-center"
            style={{
              backgroundImage: 'url(/what-to-expect-card-bg.png)',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center'
            }}
          >
            
            <div className="relative z-10">
              <h3 className="text-[2rem] text-[#A32482] mb-2">
                {data.sectionTitle}
              </h3>
              
              <ul>
                {data.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5 group-hover:bg-[#A32482] transition-colors" />
                    <span className="text-white/80 text-lg md:text-[1.5rem] font-medium border-b border-transparent group-hover:border-white/20 transition-all pb-1 leading-tight">
                        {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
    </section>
  );
}
