'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const IconMap: Record<string, string> = {
  'book': '/icons/who-should-attend/book-open.png',
  'briefcase': '/icons/who-should-attend/professionals.png',
  'user': '/icons/who-should-attend/user-circle.png',
  'graduation-cap': '/icons/who-should-attend/academic-cap.png',
  'users': '/icons/who-should-attend/users.png'
};

type WhoShouldAttendProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    blocks: { title: string; points: string[]; icon: string; highlight?: boolean }[];
  };
};

export default function WhoShouldAttend({ data }: WhoShouldAttendProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="attendees" className="py-4 bg-black text-white px-4 md:px-14">
      <div className="w-full">
        
        {/* Header */}
        <div className="text-center mb-15">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight"
          >
            {data.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-lg max-w-4xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Grid / Slider Container */}
        <div className="flex items-stretch overflow-x-auto md:overflow-visible py-4 -my-4 overflow-y-hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {data.blocks.map((block, idx) => {
                const iconPath = IconMap[block.icon];
                const isCenteredOnDesktop = idx >= 3;
                const isSelected = idx === selectedIndex;

                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setSelectedIndex(idx)}
                        className={`group py-8 px-8 rounded-[10px] flex flex-col min-h-[235px] md:min-h-[285px] min-w-[80%] md:min-w-0 snap-center cursor-pointer transition-all duration-300 ${
                            isSelected 
                            ? 'bg-[#A32482] shadow-2xl shadow-purple-900/20' 
                            : 'bg-white/[0.03] border border-white/5 hover:bg-[#A32482] hover:shadow-2xl hover:shadow-purple-900/20 hover:border-transparent'
                        } ${isCenteredOnDesktop ? 'lg:translate-x-1/2' : ''}`}
                    >
                        <div className={`mb-3 transition-colors duration-300 ${isSelected ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                            {iconPath && <img src={iconPath} alt={block.title} className="w-10 h-10 object-contain" />}
                        </div>
                        <h3 className="text-2xl leading-tight">
                            {block.title}
                        </h3>
                        <ul className="space-y-4 flex-1">
                            {block.points.map((point, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-4 text-sm leading-relaxed mb-0">
                                    <span className={`w-1 h-1 rounded-full mt-2.5 shrink-0 transition-colors duration-300 ${isSelected ? 'bg-white/60' : 'bg-white/80 group-hover:bg-white/60'}`} />
                                    <span className={`text-xl transition-colors duration-300 ${isSelected ? 'text-white/90' : 'text-white/80'}`}>
                                        <span className={isSelected ? '' : 'group-hover:text-white/90'}>
                                            {point}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
