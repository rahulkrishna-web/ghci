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
    <section className="py-24 bg-[#070708] relative border-t border-white/5 px-4 md:px-13">
      <div className="w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipients.list.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-[10px] bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between min-h-[260px] md:min-h-[290px] hover:bg-white/[0.05] hover:border-[#A32482]/30 transition-all duration-300 group"
            >
              {/* Checkmark icon in brand magenta */}
              <div className="mb-8 md:mb-12">
                <Check className="w-6 h-6 text-[#A32482]" />
              </div>
              
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-xl md:text-2xl text-white font-semibold leading-tight">
                  {item.title}
                </h3>
                
                {/* Description */}
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
