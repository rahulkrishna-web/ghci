'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const IconMap: Record<string, string> = {
  'book': '/icons/who-should-attend/book-open.png',
  'briefcase': '/icons/who-should-attend/professionals.png',
  'graduation-cap': '/icons/who-should-attend/academic-cap.png',
  'users': '/icons/who-should-attend/users.png'
};

type AipCategoriesProps = {
  data: {
    categoriesTitle: string;
    categories: { title: string; description: string; icon: string }[];
  };
};

export default function AipCategories({ data }: AipCategoriesProps) {
  // Select the first category ("Students in STEM") by default
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight text-white font-medium"
          >
            {data.categoriesTitle}
          </motion.h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.categories.map((category, idx) => {
            const iconPath = IconMap[category.icon];
            const isSelected = idx === selectedIndex;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedIndex(idx)}
                className={`group p-8 md:p-10 rounded-[10px] flex flex-col justify-between min-h-[220px] md:min-h-[240px] cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#A32482] shadow-2xl shadow-purple-900/20 border-transparent'
                    : 'bg-white/[0.03] border border-white/5 hover:bg-[#A32482]/85 hover:border-transparent hover:shadow-2xl hover:shadow-purple-900/20'
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className={`mb-6 transition-colors duration-300 ${isSelected ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                    {iconPath && (
                      <img 
                        src={iconPath} 
                        alt={category.title} 
                        className="w-12 h-12 object-contain brightness-0 invert" 
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`text-[16px] md:text-lg leading-relaxed transition-colors duration-300 ${
                  isSelected ? 'text-white/95' : 'text-white/70 group-hover:text-white/95'
                }`}>
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
