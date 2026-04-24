'use client';
import { motion } from 'framer-motion';
import { Target, Users, ThumbsUp, Sparkles, Lightbulb, TrendingUp } from 'lucide-react';

const IconMap: Record<string, any> = {
  'target': Target,
  'users': Users,
  'thumbs-up': ThumbsUp,
  'sparkles': Sparkles,
  'lightbulb': Lightbulb,
  'trending-up': TrendingUp
};

type WhatYouGainProps = {
  data: {
    sectionTitle: string;
    cards: { description: string; image: string; icon: string }[];
  };
};

export default function WhatYouGain({ data }: WhatYouGainProps) {
  return (
    <section className="py-24 bg-black text-white px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-center"
        >
          {data.sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.cards.map((card, idx) => {
            const Icon = IconMap[card.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-[10px] aspect-[1/1.8] border border-white/5"
              >
                <img
                  src={card.image}
                  alt={card.description}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[#A32482]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="mb-4 text-white/90 group-hover:text-white transition-colors">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <p className="text-white/80 text-[13px] font-medium leading-[1.4] transition-all group-hover:text-white">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
