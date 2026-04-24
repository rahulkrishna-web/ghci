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
        <span className="bg-gradient-to-br from-white via-white to-[#A32482] bg-clip-text text-transparent opacity-90">
            {lastWord}
        </span>
      </>
    );
  };

  return (
    <section id="get-involved" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            {data.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-3xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Primary Row (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {primaryWays.map((way, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/5 rounded-[10px] p-10 flex flex-col h-full hover:bg-white/[0.05] transition-all"
            >
              <h3 className="text-3xl font-bold mb-6">
                {getTitleWithHighlight(way.title)}
              </h3>
              <p className="text-white/50 text-lg mb-10 flex-grow leading-relaxed">
                {way.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {way.links?.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    className={`px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      link.variant === 'solid' 
                        ? 'bg-[#A32482] text-white hover:bg-[#8e1f7c] shadow-lg shadow-purple-900/20' 
                        : 'border border-[#A32482] text-[#A32482] hover:bg-[#A32482]/10'
                    }`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Row (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          {/* First Secondary Card (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white/[0.03] border border-white/5 rounded-[10px] p-10 flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-6 leading-tight">
                {getTitleWithHighlight(secondaryWays[0].title)}
            </h3>
            <p className="text-white/50 mb-10 flex-grow leading-relaxed">
              {secondaryWays[0].description}
            </p>
            <div className="flex gap-4">
              {secondaryWays[0].links?.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#A32482] text-white hover:bg-[#8e1f7c] shadow-lg shadow-purple-900/20 transition-all font-bold"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Other Secondary Cards */}
          <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryWays.slice(1).map((way, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.03] border border-white/5 rounded-[10px] p-8 flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold mb-6">
                    {way.title}
                </h3>
                <p className="text-white/50 text-sm mb-10 flex-grow leading-relaxed">
                  {way.description}
                </p>
                {way.badge && (
                  <div className="inline-block px-5 py-2.5 rounded-full bg-[#A32482] text-white text-[11px] font-black uppercase tracking-[0.2em] w-fit shadow-lg shadow-purple-900/20">
                    {way.badge}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
