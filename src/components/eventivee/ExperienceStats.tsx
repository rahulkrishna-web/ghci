'use client';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type ExperienceStatsProps = {
  data: {
    sectionTitle: string;
    stats: { label: string; value: string }[];
  };
};

function Counter({ value, trigger }: { value: string; trigger: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  // Extract number and suffix
  const numericPart = value.replace(/[^0-9]/g, '');
  const numericValue = parseInt(numericPart, 10) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (trigger && nodeRef.current) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(latest).toLocaleString() + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [trigger, numericValue, suffix]);

  return (
    <span 
      ref={nodeRef} 
      className="tabular-nums inline-block min-w-[1.2ch]"
    >
      0{suffix}
    </span>
  );
}

export default function ExperienceStats({ data }: ExperienceStatsProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience-stats" className="py-4 relative overflow-hidden bg-black text-white px-4 md:px-12">
        {/* Dark overlay for consistent cinematic look */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        
      <div className="w-full relative z-10" ref={containerRef}>
        {/* Section Content */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight mb-8 md:mb-22"
          >
            {data.sectionTitle}
          </motion.h2>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-0 max-w-8xl mx-auto"
          >
            {data.stats.map((stat, idx) => (
              <div key={idx} className={`flex-1 px-4 md:px-18 py-4 md:py-0 text-center flex flex-col items-center justify-start ${idx !== 0 ? 'md:border-l border-white/10' : ''}`}>
                <div className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent text-5xl md:text-7xl font-semibold mb-3">
                  <Counter value={stat.value} trigger={isInView} />
                </div>
                <p className="text-white text-xl md:text-2xl leading-tight max-w-[220px]">
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
