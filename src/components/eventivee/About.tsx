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
    <section id="experience" className="py-24 relative overflow-hidden bg-black text-white px-4 md:px-40">
        {/* Background Graphic Layer */}
        <div 
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'url(/2nd-section-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        />
        {/* Dark overlay for consistent cinematic look */}
        <div className="absolute inset-0 bg-black/60 z-0" />
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

      </div>
    </section>
  );
}
