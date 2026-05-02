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
    <section className="py-20 text-white relative overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-20 mb-12 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight text-center md:text-left"
          >
            {data.sectionTitle}
          </motion.h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border border-white/10 transition-all ${
                canScrollLeft 
                  ? 'bg-white/5 hover:bg-[#A32482] text-white' 
                  : 'bg-white/2 opacity-20 cursor-not-allowed text-white/50'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border border-white/10 transition-all ${
                canScrollRight 
                  ? 'bg-white/5 hover:bg-[#A32482] text-white' 
                  : 'bg-white/2 opacity-20 cursor-not-allowed text-white/50'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex w-full overflow-x-auto overflow-y-hidden gap-4 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 md:px-16 lg:px-20 scroll-pl-4 md:scroll-pl-16 lg:scroll-pl-14 items-stretch"
        >
          {data.tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
    </section>
  );
}
