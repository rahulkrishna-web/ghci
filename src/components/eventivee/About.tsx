'use client';
import { motion } from 'framer-motion';

type AboutProps = {
  data: {
    sectionTitle: string;
    stats: { label: string; value: string }[];
    gallery: string[];
    content: string;
  };
};

export default function About({ data }: AboutProps) {
  const gallery = data.gallery || [];
  const mainImage = gallery[0] || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80";
  const leftImage = gallery[1] || "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80";
  const rightImage = gallery[2] || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80";

  return (
    <section id="experience" className="py-24 bg-black text-white px-4 md:px-40 relative overflow-hidden">
      <div className="w-full relative z-10">
        
        {/* Floating Gallery */}
        <div className="relative h-[400px] md:h-[500px] mb-20">
            {/* Small Floating Image Left */}
            <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute left-0 bottom-10 w-24 md:w-40 aspect-video rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={leftImage} alt="Experience 1" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>

            {/* Main Large Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 md:w-3/5 h-full rounded-[10px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
            >
                <img src={mainImage} alt="Main Experience" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Small Floating Image Right */}
            <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute right-4 top-1/4 w-20 md:w-32 aspect-[3/4] rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={rightImage} alt="Experience 2" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>
        </div>

        {/* Section Content */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-20"
          >
            {data.sectionTitle}
          </motion.h2>

          {/* Redesigned Stats Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row justify-center items-stretch gap-0 max-w-4xl mx-auto"
          >
            {data.stats.map((stat, idx) => (
              <div key={idx} className={`flex-1 px-8 py-4 md:py-0 text-center flex flex-col items-center justify-center ${idx !== 0 ? 'md:border-l border-white/10' : ''}`}>
                <div className="text-[#A32482] text-4xl md:text-5xl font-bold mb-4">{stat.value}</div>
                <p className="text-white/40 text-sm md:text-[15px] font-medium leading-relaxed max-w-[200px]">
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
