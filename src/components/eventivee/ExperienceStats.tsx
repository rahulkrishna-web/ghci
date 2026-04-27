'use client';
import { motion } from 'framer-motion';

type ExperienceStatsProps = {
  data: {
    sectionTitle: string;
    stats: { label: string; value: string }[];
  };
};

export default function ExperienceStats({ data }: ExperienceStatsProps) {
  return (
    <section id="experience-stats" className="py-12 relative overflow-hidden bg-black text-white px-4 md:px-12">
        {/* Background Graphic Layer */}
        <div 
            className="absolute inset-0 pointer-events-none"
        />
        {/* Dark overlay for consistent cinematic look */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        
      <div className="w-full relative z-10">
        {/* Section Content */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl tracking-tight mb-40"
          >
            {data.sectionTitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row justify-center items-stretch gap-0 max-w-8xl mx-auto"
          >
            {data.stats.map((stat, idx) => (
              <div key={idx} className={`flex-1 px-20 py-4 md:py-0 text-center flex flex-col items-center justify-start ${idx !== 0 ? 'md:border-l border-white/10' : ''}`}>
                <div className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent text-4xl md:text-6xl font-medium mb-4">{stat.value}</div>
                <p className="text-white text-sm md:text-[28px] leading-relaxed max-w-[400px]">
                    {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
