'use client';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

type ExploreTracksProps = {
  data: {
    sectionTitle: string;
    tracks: { title: string; description: string }[];
  };
};

export default function ExploreTracks({ data }: ExploreTracksProps) {
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
    <section className="py-4 md:py-12 text-white relative overflow-hidden">
      <div className="w-full">
        {/* Centered Section Title */}
        <div className="px-4 md:px-16 lg:px-20 mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight"
          >
            {data.sectionTitle}
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
              className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group/btn"
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
              className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group/btn"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          )}

          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto md:overflow-visible py-4 -my-4 overflow-y-hidden gap-4 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 md:px-16 lg:px-20 scroll-pl-4 md:scroll-pl-16 lg:scroll-pl-14 items-stretch"
          >
            {data.tracks.map((track, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-8 rounded-[10px] bg-[#D9D9D9]/20 backdrop-blur-md border border-white/10 flex flex-col min-h-[265px] md:min-h-[280px] hover:bg-white/[0.08] transition-all group flex-shrink-0 w-[85%] md:w-[46%] lg:w-[23.5%] snap-start"
              >
                <div className="mb-12">
                  <Check className="w-8 h-8 text-[#A32482]" />
                </div>
                <h3 className="text-2xl md:text-[28px] text-white mb-4 leading-tight font-medium">
                  {track.title}
                </h3>
                <p className="text-[#A3A3A3] text-lg md:text-[1.15rem] leading-relaxed mt-auto">
                  {track.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
