'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

type WayItem = {
  title: string;
  description: string;
  type: 'primary' | 'secondary';
  links?: { text: string; url: string; variant: 'solid' | 'outline' }[];
  badge?: string;
  badgeUrl?: string;
};

type WaysToInvolveProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    ways: WayItem[];
  };
};

export default function WaysToInvolve({ data }: WaysToInvolveProps) {
  const primaryWays = data.ways.filter(w => w.type === 'primary');
  const secondaryWays = data.ways.filter(w => w.type === 'secondary');

  const [aipDeadline, setAipDeadline] = useState("Aug 31, 2026");
  const [wequestDeadline, setWequestDeadline] = useState("Sep 30, 2026");

  useEffect(() => {
    const now = new Date();
    const deadlineDate1 = new Date("2026-08-03T23:59:59+05:30");
    const cutoffAug17 = new Date("2026-08-17T00:00:00+05:30");

    if (now >= cutoffAug17) {
      setAipDeadline("Aug 31, 2026");
      setWequestDeadline("Sep 30, 2026");
    } else if (now > deadlineDate1) {
      setAipDeadline("Aug 20, 2026");
    }
  }, []);

  const getTitleWithHighlight = (title: string) => {
    return (
      <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">
        {title}
      </span>
    );
  };

  return (
    <section id="get-involved" className="pt-12 pb-12 relative overflow-hidden text-white px-4 md:px-12" style={{
      background: 'linear-gradient(to bottom, #120110, #22021d)'
    }}>
      <div className="w-full relative z-10">
        
        {/* Header */}
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
            className="text-4xl md:text-6xl tracking-tight mb-6"
          >
            {data.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-2xl max-w-5xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Mobile Grid / Desktop Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-8">
          {data.ways.map((way, idx) => {
            const isLast = idx === data.ways.length - 1;
            const isPrimary = way.type === 'primary';
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`
                  ${isLast ? 'col-span-2 md:col-span-2' : isPrimary ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-2'}
                  bg-black/[0.2] border border-white/5 rounded-[10px] p-5 md:p-10 flex flex-col h-full hover:bg-white/[0.05] transition-all
                `}
              >
                <h3 className="text-xl md:text-[2.2rem] mb-4 md:mb-6 leading-tight">
                  {getTitleWithHighlight(way.title)}
                </h3>
                <p className="text-white text-xl md:text-2xl mb-6 md:mb-10 flex-grow leading-relaxed">
                  {way.description}
                </p>
                <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4 items-start md:items-center">
                  {way.links?.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      className={`h-8 md:h-12 inline-flex flex-col rounded-full text-xs md:text-xl font-semibold text-center transition-all overflow-hidden group/btn ${
                        link.variant === 'solid' 
                          ? 'bg-[#A32482] text-white hover:bg-[#8e1f7c] shadow-lg shadow-purple-900/20' 
                          : 'border border-[#A32482] text-[#A32482] hover:bg-[#A32482]/10'
                      }`}
                    >
                      <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover/btn:-translate-y-full">
                          <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                              {link.text}
                          </div>
                          <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                              {link.text}
                          </div>
                      </div>
                    </a>
                  ))}
                  {way.title === "WeQuest" && (
                    <span className="text-white/60 text-xs md:text-lg font-medium mt-1 md:mt-0">
                      Apply by {wequestDeadline}, 11:59 PM IST
                    </span>
                  )}


                  {way.badge && way.badgeUrl ? (
                    <a href={way.badgeUrl} className="inline-block px-4 py-2 rounded-full bg-[#A32482] text-white text-xs md:text-xl font-semibold w-fit shadow-lg shadow-purple-900/20 hover:opacity-90 transition-opacity">
                      {way.badge}
                    </a>
                  ) : way.badge ? (
                    <div className="inline-block px-4 py-2 rounded-full bg-[#A32482] text-white text-xs md:text-xl font-semibold w-fit shadow-lg shadow-purple-900/20">
                      {way.badge}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
