'use client';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

type GainItem = {
  title: string;
  description: string;
};

type WequestGainsProps = {
  data: {
    gainsTitle: string;
    gains: GainItem[];
  };
};

export default function WequestGains({ data }: WequestGainsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    window.addEventListener('resize', checkScroll);
    return () => {
      if (currentRef) currentRef.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute w-[40%] h-[40%] rounded-full bg-[#A32482]/5 blur-[100px] right-10 top-1/4 pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Title */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight text-white font-medium"
          >
            {data.gainsTitle}
          </motion.h2>
        </div>

        {/* Card Container with Absolute Arrows */}
        <div className="relative group">
          {/* Left Arrow - Smart Visibility */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => scroll('left')}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group/btn cursor-pointer animate-in fade-in zoom-in duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
          )}

          {/* Right Arrow - Smart Visibility */}
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => scroll('right')}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group/btn cursor-pointer animate-in fade-in zoom-in duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          )}

          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto overflow-y-hidden gap-6 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 md:px-13 scroll-pl-4 md:scroll-pl-13 items-stretch"
          >
            {data.gains.map((gain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-10 rounded-[10px] bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between min-h-[260px] md:min-h-[290px] hover:bg-white/[0.05] hover:border-[#A32482]/30 transition-all duration-300 group flex-shrink-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[23.5%] snap-start"
              >
                {/* Checkmark icon in brand magenta */}
                <div className="mb-8 md:mb-12">
                  <Check className="w-6 h-6 text-[#A32482]" />
                </div>
                
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl text-white font-semibold leading-tight">
                    {gain.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {gain.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
