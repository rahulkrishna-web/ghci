'use client';
import { motion } from 'framer-motion';

type WayItem = {
  title: string;
  description: string;
  type: 'primary' | 'secondary';
  links?: { text: string; url: string; variant: 'solid' | 'outline' }[];
  badge?: string;
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

  const getTitleWithHighlight = (title: string) => {
    const parts = title.split(' ');
    if (parts.length < 2) return title;
    const lastWord = parts.pop();
    return (
      <>
        {parts.join(' ')}{' '}
        <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">
            {lastWord}
        </span>
      </>
    );
  };

  return (
    <section id="get-involved" className="py-24 relative overflow-hidden text-white px-4 md:px-12" style={{
      backgroundImage: 'url(/get-involved.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`
                  ${isLast ? 'col-span-2 md:col-span-2' : isPrimary ? 'col-span-1 md:col-span-3' : 'col-span-1 md:col-span-2'}
                  bg-white/[0.03] border border-white/5 rounded-[10px] p-5 md:p-10 flex flex-col h-full hover:bg-white/[0.05] transition-all
                `}
              >
                <h3 className="text-xl md:text-[2.2rem] mb-4 md:mb-6 leading-tight">
                  {getTitleWithHighlight(way.title)}
                </h3>
                <p className="text-white text-[13px] md:text-base mb-6 md:mb-10 flex-grow leading-relaxed">
                  {way.description}
                </p>
                <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-4">
                  {way.links?.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      className={`h-8 md:h-12 inline-flex flex-col rounded-full text-xs md:text-sm font-semibold text-center transition-all overflow-hidden group/btn ${
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
                  {way.badge && (
                    <div className="inline-block px-4 py-2 rounded-full bg-[#A32482] text-white text-[11px] md:text-[13px] font-semibold w-fit shadow-lg shadow-purple-900/20">
                      {way.badge}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
