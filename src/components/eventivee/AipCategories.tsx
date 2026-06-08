'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { BookOpen, Briefcase, GraduationCap, Users } from 'lucide-react';

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'book': BookOpen,
  'briefcase': Briefcase,
  'graduation-cap': GraduationCap,
  'users': Users
};

type AipCategoriesProps = {
  data: {
    categoriesTitle: string;
    categories: { title: string; description: string; icon: string }[];
  };
};

export default function AipCategories({ data }: AipCategoriesProps) {
  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white relative overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4 md:px-13">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight text-white font-medium"
          >
            {data.categoriesTitle}
          </motion.h2>
        </div>

        {/* Slider on mobile, 2x2 Grid on desktop */}
        <div className="flex w-full overflow-x-auto overflow-y-hidden gap-4 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 md:px-13 scroll-pl-4 md:scroll-pl-13 items-stretch md:grid md:grid-cols-2">
          {data.categories.map((category, idx) => {
            const IconComponent = IconMap[category.icon];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 md:p-10 rounded-[10px] flex flex-col justify-between min-h-[220px] md:min-h-[240px] min-w-[65%] md:min-w-0 snap-start cursor-pointer bg-white/[0.03] border border-white/5 hover:bg-[#A32482] hover:border-transparent hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-4 md:mb-6 transition-colors duration-300 opacity-40 group-hover:opacity-100 text-white">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 md:w-12 md:h-12 stroke-[1.5]" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[16px] md:text-lg leading-relaxed transition-colors duration-300 text-white/70 group-hover:text-white/95">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
