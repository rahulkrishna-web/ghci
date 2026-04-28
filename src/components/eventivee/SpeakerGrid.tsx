'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type SpeakerGridProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    lineupNote: string;
    speakers: { name: string; role: string; image: string }[];
  };
};

export default function SpeakerGrid({ data }: SpeakerGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Show only 4 speakers on mobile initially
  const visibleSpeakers = isExpanded ? data.speakers : data.speakers.slice(0, 4);

  // Avoid hydration mismatch by rendering all speakers on the server/initial client pass
  const speakersToRender = isMounted && typeof window !== 'undefined' && window.innerWidth < 768 
    ? visibleSpeakers 
    : data.speakers;

  return (
    <section id="speakers" className="py-24 relative overflow-hidden text-white" style={{
      backgroundImage: 'url(/speaker.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Dark overlay for readability */}
    
      {/* <div className="absolute inset-0 bg-black/60 pointer-events-none" /> */}
      
      <div className="w-full relative z-10 px-4 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          {/* Wavy Pattern Background Accent */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 opacity-20 pointer-events-none overflow-visible">
            <svg className="w-full h-full opacity-40 scale-150" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100C360 20 720 180 1080 100C1440 20 1800 180 2160 100" stroke="#A32482" strokeWidth="2" opacity="0.3" />
              <path d="M0 120C360 40 720 200 1080 120C1440 40 1800 200 2160 120" stroke="#A32482" strokeWidth="2" opacity="0.2" />
              <path d="M0 80C360 0 720 160 1080 80C1440 0 1800 160 2160 80" stroke="#A32482" strokeWidth="2" opacity="0.1" />
            </svg>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight mb-8"
          >
            {data.sectionTitle}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-white text-lg md:text-2xl leading-relaxed">
              {data.subtitle}
            </p>
            <p className="text-white font-semibold text-lg md:text-2xl">
              {data.lineupNote}
            </p>
          </motion.div>
        </div>

        {/* Speaker Grid / Slider */}
        <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {speakersToRender.map((speaker, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.5,
                    delay: isExpanded && idx >= 4 ? (idx - 4) * 0.05 : 0 
                }}
                className="group relative aspect-[3/4] rounded-[10px] overflow-hidden bg-[#D1D5DB] border border-white/10 transition-all duration-500"
                >
                {/* Image */}
                <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover saturate-0 brightness-90 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Animated Noise Overlay - Prominent Version */}
                <motion.div 
                    className="absolute inset-[-150%] opacity-[0.25] mix-blend-overlay pointer-events-none z-10"
                    animate={{
                        x: ['0%', '-10%', '-20%', '15%', '-5%', '20%', '-15%', '10%'],
                        y: ['0%', '5%', '-15%', '10%', '-20%', '15%', '-5%', '18%']
                    }}
                    transition={{
                        duration: 0.15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '250px 250px'
                    }}
                />
                
                {/* Overlay Gradient (inverted for light background) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                
                {/* Speaker Info Overlay */}
                <div className="absolute bottom-0 left-0 p-3 md:p-6 w-full">
                    <h3 className="text-sm md:text-xl font-semibold text-white mb-1 md:mb-2 leading-tight">
                    {speaker.name}
                    </h3>
                    <p className="text-white/80 text-[10px] md:text-xs leading-relaxed max-w-[95%] line-clamp-2">
                    {speaker.role}
                    </p>
                </div>
                </motion.div>
            ))}
            </div>

            {/* Cinematic Fade Overlay & CTA (Mobile Only, Collapsed Only) */}
            {!isExpanded && isMounted && typeof window !== 'undefined' && window.innerWidth < 768 && (
                <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black/90 to-transparent flex items-end justify-center pb-12 z-20 pointer-events-none">
                    {/* The button itself needs pointer events */}
                    <button 
                        onClick={() => setIsExpanded(true)}
                        className="text-[12px] font-semibold uppercase tracking-[0.25em] text-white pointer-events-auto drop-shadow-lg"
                    >
                        CLICK TO KNOW MORE +
                    </button>
                </div>
            )}
        </div>

        {/* Show Less Button (Mobile Only, Expanded Only) */}
        {isExpanded && isMounted && typeof window !== 'undefined' && window.innerWidth < 768 && (
            <div className="text-center mt-8">
                <button 
                    onClick={() => setIsExpanded(false)}
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                >
                    SHOW LESS -
                </button>
            </div>
        )}
      </div>
    </section>
  );
}
