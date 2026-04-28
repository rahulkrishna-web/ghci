'use client';
import { motion } from 'framer-motion';
import { Calendar, Ticket } from 'lucide-react';
import Marquee from './Marquee';

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
    <section className="relative min-h-screen md:min-h-[80vh] flex flex-col gap-8 items-center justify-center overflow-hidden bg-black text-white" style={{
        backgroundImage: 'url(/lead-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        {/* Dark overlay for text readability */}
        
        {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

      <div className="relative z-10 w-full px-6 md:px-40 mt-24 md:mt-24 text-center">
        {/* Date Cluster */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6 md:mb-8 text-white"
        >
            <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-base md:text-2xl lg:text-[1.2rem] font-medium tracking-wide">{data.date}</span>
        </motion.div>

        {/* Main Title with Glass Effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="text-[40px] leading-[1.1] md:text-10xl lg:text-[7.5rem] md:leading-[7rem] font-semibold text-white/50 tracking-[-0.02em] mb-6 md:mb-2 max-w-6xl md:max-w-8xl  mx-auto flex flex-col items-center mix-blend-plus-lighter"
        >
          <span className="block">Grace Hopper</span>
          <span className="block md:whitespace-nowrap">
            <span className="block md:inline">Celebration</span>{' '}
            <span className="block md:inline">India 2027</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white text-xl md:text-2xl max-w-[320px] md:max-w-4xl mx-auto mb-10 leading-relaxed px-4"
        >
          {data.subtitle}
        </motion.p>
        
        {/* Button Clusters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-row items-center justify-center gap-2 md:gap-6"
        >
            {/* Register Cluster */}
            <div className="flex items-center group gap-0 justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#A32482] transition-all z-10">
                    <img src="/icons/Ticket.png" alt="Ticket" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                </div>
                <a
                    href={data.primaryButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] hover:bg-[#8e1f7c] transition-all text-white text-[15px] md:text-lg font-semibold shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden"
                >
                    <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.primaryButtonText}
                        </div>
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.primaryButtonText}
                        </div>
                    </div>
                </a>
            </div>

            {/* Agenda Cluster */}
            <div className="flex items-center group gap-0 justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all z-10">
                    <img src="/icons/calender.png" alt="Calendar" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                </div>
                <a
                    href="#"
                    className="h-10 md:h-16 inline-flex flex-col rounded-full bg-white text-[#A32482] hover:bg-neutral-200 transition-all text-[15px] md:text-lg font-semibold shadow-xl active:scale-95 whitespace-nowrap z-0 overflow-hidden"
                >
                    <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.secondaryButtonText}
                        </div>
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.secondaryButtonText}
                        </div>
                    </div>
                </a>
            </div>
        </motion.div>
      </div>

      {/* Marquee Integrated into Hero */}
      <div className="relative  w-full">
        <Marquee />
      </div>
    </section>
  );
}
