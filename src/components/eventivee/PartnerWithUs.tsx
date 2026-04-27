'use client';
import { motion } from 'framer-motion';
import { Bolt, Sparkles, Link as LinkIcon, UserPlus } from 'lucide-react';

type PartnerWithUsProps = {
  data: {
    title: string;
    sectionName: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    benefits: { title: string; desc: string; icon: string }[];
    trustedByText: string;
    logos: { name: string; src: string }[];
  };
};

export default function PartnerWithUs({ data }: PartnerWithUsProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'bolt': return <Bolt className="w-6 h-6 text-[#A3238E]" />;
      case 'sparkles': return <Sparkles className="w-6 h-6 text-[#A3238E]" />;
      case 'link': return <LinkIcon className="w-6 h-6 text-[#A3238E]" />;
      default: return <Bolt className="w-6 h-6 text-[#A3238E]" />;
    }
  };

  return (
    <section id="partners" className="py-24 relative overflow-hidden text-white" style={{
      backgroundImage: 'url(/partner-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom center'
    }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="w-full relative z-10 px-4 md:px-40">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-6">
            <div className="max-w-2xl">
                <h4 className="text-white/70 text-xl font-medium mb-4 leading-tight">
                {data.title}
                </h4>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                {data.sectionName}
                </h2>
            </div>
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={data.ctaLink}
                className="flex items-center gap-3 bg-[#A3238E] hover:bg-[#8e1f7c] px-6 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-purple-900/20"
            >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center -ml-2">
                    <UserPlus className="w-4 h-4 text-white" />
                </div>
                {data.ctaText}
            </motion.a>
            </div>

            {/* Description */}
            <p className="text-white/50 text-lg max-w-3xl mb-16 leading-relaxed">
            {data.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24">
            {data.benefits.map((benefit, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 ${idx !== 0 ? 'border-l border-white/10 ml-[-1px]' : 'pl-0'}`}
                >
                <div className="mb-6">
                    {getIcon(benefit.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {benefit.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                    {benefit.desc}
                </p>
                </motion.div>
            ))}
            </div>

            {/* Trusted By Section */}
            <div className="relative pt-12 border-t border-white/5 text-center">
                <span className="text-white/50 text-sm font-medium tracking-wide mb-10 block">
                    {data.trustedByText}
                </span>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700">
                    {data.logos.map((logo, idx) => (
                        <img key={idx} src={logo.src} alt={logo.name} className="h-12 w-auto object-contain max-w-[150px]" />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
