'use client';
import { useState, useEffect } from 'react';

export default function Marquee() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="relative w-full overflow-hidden bg-transparent min-h-[48px]"></div>;
  }

  const queryDate = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('testDate') : null;
  let now = new Date();
  if (queryDate) {
    const formatted = queryDate.includes('T') ? queryDate : `${queryDate}T00:00:00`;
    const withTimezone = formatted.includes('+') || formatted.endsWith('Z') ? formatted : `${formatted}+05:30`;
    now = new Date(withTimezone);
  }
  const isJuly1OrLater = now >= new Date('2026-07-01T00:00:00+05:30');

  const textVal = isJuly1OrLater 
    ? 'Registrations Now Open • Limited Spots' 
    : 'Super Early Bird Now Live • Limited Spots';

  const items = [textVal, textVal, textVal, textVal];
  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      <div 
        className="flex w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex whitespace-nowrap gap-6 animate-marquee">
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-dashed border-[#F2F2F2]/40 text-white text-[15px] md:text-lg shrink-0"
            >
              <span className="text-[#b02677] text-lg">✦</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
