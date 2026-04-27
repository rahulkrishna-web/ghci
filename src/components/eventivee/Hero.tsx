'use client';
import { motion } from 'framer-motion';
import { Calendar, Ticket } from 'lucide-react';

type HeroProps = {
  data: {
    title: string;
    date: string;
    location: string;
    subtitle: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
  };
};

export default function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white" style={{
        backgroundImage: 'url(/lead-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 w-full px-4 md:px-40 text-center">
        {/* Date Cluster */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-10 text-white/70"
        >
            <Calendar className="w-5 h-5" />
            <span className="text-lg font-medium tracking-wide">{data.date}</span>
        </motion.div>

        {/* Main Title with Glass Effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-semibold text-white/50 tracking-[-0.02em] mb-6 max-w-6xl mx-auto flex flex-col items-center mix-blend-plus-lighter"
        >
          <span className="block">Grace Hopper</span>
          <span className="block whitespace-nowrap">Celebration India 2027</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white text-xl md:text-2xl max-w-6xl mx-auto mb-16 leading-relaxed"
        >
          {data.subtitle}
        </motion.p>
        
        {/* Button Clusters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
            {/* Register Cluster */}
            <div className="flex items-center group">
                <div className="w-14 h-14 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#A32482] transition-all">
                    <Ticket className="w-6 h-6 text-white" />
                </div>
                <a
                    href={data.primaryButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 rounded-full bg-[#A32482] hover:bg-[#8e1f7c] transition-all text-white text-lg shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap"
                >
                    {data.primaryButtonText}
                </a>
            </div>

            {/* Agenda Cluster */}
            <div className="flex items-center group">
                <div className="w-14 h-14 rounded-full bg-white border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                    <Calendar className="w-6 h-6 text-[#A32482]" />
                </div>
                <a
                    href="#"
                    className="px-10 py-4 rounded-full bg-white text-[#A32482] hover:bg-neutral-200 transition-all text-lg shadow-xl active:scale-95 whitespace-nowrap"
                >
                    {data.secondaryButtonText}
                </a>
            </div>
        </motion.div>
      </div>

      {/* Atmospheric Particles/Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
    </section>
  );
}
