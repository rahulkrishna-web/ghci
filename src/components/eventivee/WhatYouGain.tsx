'use client';
import { motion } from 'framer-motion';
import { Users, ThumbsUp, TrendingUp } from 'lucide-react';
import { CursorArrowRaysIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const TargetIcon = () => <img src="/icons/gain/1.svg" alt="Target" className="w-8 h-8 md:w-10 md:h-10 object-contain" />;

const IconMap: Record<string, any> = {
  'target': TargetIcon,
  'users': Users,
  'thumbs-up': ThumbsUp,
  'sparkles': CursorArrowRaysIcon,
  'lightbulb': LightBulbIcon,
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
    <section className="py-4 bg-black text-white px-4 md:px-12">
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tight mb-12 text-center"
        >
          {data.sectionTitle}
        </motion.h2>

        <div className="flex overflow-x-auto overflow-y-hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-1 snap-x snap-mandatory pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {data.cards.map((card, idx) => {
            const Icon = IconMap[card.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-[10px] aspect-[1/1.6] md:aspect-[1/1.7] border border-white/5 min-w-[45%] md:min-w-0 snap-center"
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
                <div className="absolute inset-0 p-3 pb-12 flex flex-col justify-end">
                  <div className="mb-3 text-white/90 group-hover:text-white transition-colors">
                    {Icon && <Icon className="w-8 h-8 md:w-8 md:h-8" />}
                  </div>
                  <p className="text-white text-sm md:text-xl leading-[1.3] transition-all group-hover:text-white">
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
