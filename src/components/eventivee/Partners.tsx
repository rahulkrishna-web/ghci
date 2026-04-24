'use client';
import { motion } from 'framer-motion';

type PartnersProps = {
  data?: {
    sectionTitle: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    stats: { label: string; value: string }[];
  }
};

export default function Partners({ data }: PartnersProps) {
  if (!data) return null;

  return (
    <section className="py-24 bg-[#070708] text-white px-6 border-t border-white/[0.05] relative overflow-hidden">
      {/* Topographical Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/topography.png')] mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {data.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16 border-y border-white/10 py-10">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#b02677] mb-2">{stat.value}</div>
              <div className="text-white/50 text-sm tracking-wider uppercase font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href={data.buttonLink}
                className="inline-block px-10 py-4 rounded-full bg-[#b02677] hover:bg-[#c42c86] transition-all text-white font-bold text-lg shadow-[0_0_40px_rgba(176,38,119,0.3)] active:scale-95"
            >
                {data.buttonText}
            </motion.a>
        </div>

        {/* Faux Logos Marquee representation could go here if needed, but the current layout shows mostly stats and buttons. */}
      </div>
    </section>
  );
}
