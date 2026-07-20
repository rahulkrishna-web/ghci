'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface AbiaRecipientsProps {
  data: any;
}

export default function AbiaRecipients({ data }: AbiaRecipientsProps) {
  const { recipients } = data;

  return (
    <section className="py-16 md:py-24 text-white relative overflow-hidden bg-[#070708] px-4 md:px-13">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/aip/scholarship-benefits-mobile.png" 
          alt="" 
          className="w-full h-full object-cover block md:hidden" 
        />
        <img 
          src="/aip/scholarship-benefits-desktop.png" 
          alt="" 
          className="w-full h-full object-cover hidden md:block" 
        />
      </div>

      <div className="w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl tracking-tight text-white font-medium">
            {recipients.title}
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto md:overflow-visible py-4 -my-4 snap-x snap-mandatory pb-6 -mx-4 px-6 scroll-pl-6 md:mx-0 md:px-0 md:scroll-pl-0 md:pb-0 md:grid md:grid-cols-3 gap-6 scrollbar-hide">
          {recipients.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-[10px] bg-[#D9D9D9]/20 backdrop-blur-md border border-white/10 flex flex-col min-h-[265px] md:min-h-[290px] hover:bg-white/[0.08] transition-all group flex-shrink-0 w-[85%] md:w-auto snap-start"
            >
              {/* Checkmark icon in brand color */}
              <div className="mb-8 md:mb-12">
                <Check className="w-8 h-8 text-[#A32482]" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl md:text-[26px] text-white mb-4 leading-tight font-medium">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/60 text-[16px] md:text-lg leading-relaxed mt-auto font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
