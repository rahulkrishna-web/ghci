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
          <h2 className="text-3xl md:text-4xl font-bold text-white">
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
              className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col gap-4 hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#A32482]/20 flex items-center justify-center text-[#A32482]">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
