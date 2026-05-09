'use client';

const items = [
  'Super Early Bird Now Live • Limited Spots',
  'Super Early Bird Now Live • Limited Spots',
  'Super Early Bird Now Live • Limited Spots',
  'Super Early Bird Now Live • Limited Spots',
];

export default function Marquee() {
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
