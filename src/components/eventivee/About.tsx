'use client';
import { motion } from 'framer-motion';

import ScrollReveal from '../ui/ScrollReveal';

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
  const centerImage = gallery[0];
  const topLeftImage = gallery[1];
  const topRightImage = gallery[2];
  const bottomLeftImage = gallery[3];
  const bottomRightImage = gallery[4];

  return (
    <section id="experience" className="py-24 bg-black text-white px-4 md:px-40 relative overflow-hidden">
      <div className="w-full relative z-10">
        
        {/* Floating Gallery */}
        <div className="relative h-[550px] md:h-[700px] mb-20">
            {/* Top Left Floating Image */}
            <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute left-0 lg:left-[2%] top-[5%] w-20 md:w-40 aspect-[3/4] rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={topLeftImage} alt="Experience 1" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>

            {/* Top Right Floating Image */}
            <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute right-0 lg:right-[2%] top-[10%] w-24 md:w-44 aspect-video rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={topRightImage} alt="Experience 2" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>

            {/* Main Center Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full md:w-[55%] aspect-video rounded-[10px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
            >
                <img src={centerImage} alt="Main Experience" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Bottom Left Floating Image */}
            <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute left-0 lg:left-[4%] bottom-[10%] w-24 md:w-48 aspect-video rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={bottomLeftImage} alt="Experience 3" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>

            {/* Bottom Right Floating Image */}
            <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="absolute right-0 lg:right-[4%] bottom-[5%] w-20 md:w-36 aspect-[3/4] rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={bottomRightImage} alt="Experience 4" className="w-full h-full object-cover grayscale brightness-75" />
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

        {/* Scroll Reveal Content */}
        <div className="max-w-4xl mx-auto pb-20">
            <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                blurStrength={10}
                textClassName="text-white/80 text-2xl md:text-4xl font-medium leading-tight text-center"
            >
                {data.content}
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
