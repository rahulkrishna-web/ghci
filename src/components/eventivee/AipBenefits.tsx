'use client';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

type AipBenefitsProps = {
  data: {
    benefitsTitle: string;
    benefits: { title: string; description: string }[];
  };
};

export default function AipBenefits({ data }: AipBenefitsProps) {
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
    <section className="py-16 md:py-24 text-white relative overflow-hidden bg-[#070708]">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/aip/scholarship-benefits-mobile.png" 
          alt="" 
          className="w-full h-full object-cover block md:hidden" 
        />
        <img 
          src="/aip/scholarship-benefits-desktop.png" 
          alt="" 
          className="w-full h-full object-cover hidden md:block" 
        />
      </div>

      <div className="w-full relative z-10">
        {/* Centered Section Title */}
        <div className="px-4 md:px-16 lg:px-20 mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight text-white font-medium"
          >
            {data.benefitsTitle}
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
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group/btn cursor-pointer"
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
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group/btn cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          )}

          <div 
            ref={scrollRef}
            className="flex w-full overflow-x-auto overflow-y-hidden gap-4 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 md:px-13 scroll-pl-4 md:scroll-pl-13 items-stretch"
          >
            {data.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-10 rounded-[10px] bg-[#D9D9D9]/20 backdrop-blur-md border border-white/10 flex flex-col min-h-[265px] md:min-h-[290px] hover:bg-white/[0.08] transition-all group flex-shrink-0 w-[85%] md:w-[46%] lg:w-[23.5%] snap-start"
              >
                {/* Checkmark icon in brand color */}
                <div className="mb-8 md:mb-12">
                  <Check className="w-8 h-8 text-[#A32482]" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-[26px] text-white mb-4 leading-tight font-medium">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/60 text-[16px] md:text-lg leading-relaxed mt-auto font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
