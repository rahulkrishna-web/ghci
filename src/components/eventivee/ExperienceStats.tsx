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
    <section id="experience-stats" className="py-6 relative overflow-hidden bg-black text-white px-4 md:px-12">
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
            className="text-4xl md:text-6xl tracking-tight mb-10 md:mb-22"
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
              <div key={idx} className={`flex-1 px-4 md:px-18 py-6 md:py-0 text-center flex flex-col items-center justify-start ${idx !== 0 ? 'md:border-l border-white/10' : ''}`}>
                <div className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent text-[40px] md:text-5xl font-semibold mb-2">{stat.value}</div>
                <p className="text-white text-base md:text-[24px] leading-tight max-w-[200px]">
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
