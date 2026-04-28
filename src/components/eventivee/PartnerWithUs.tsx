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
      case 'bolt': return <img src="/icons/access-technology.png" alt="Access Technology" className="w-10 h-10 object-contain" />;
      case 'sparkles': return <img src="/icons/strengthen.png" alt="Strengthen Brand" className="w-10 h-10 object-contain" />;
      case 'link': return <img src="/icons/link.png" alt="Link and Connect" className="w-10 h-10 object-contain" />;
      default: return <img src="/icons/access-technology.png" alt="Partner Icon" className="w-10 h-10 object-contain" />;
    }
  };

  return (
    <section id="partners" className="py-6 relative overflow-hidden text-white" style={{
      backgroundImage: 'url(/partner-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom center'
    }}>
     
      <div className="w-full relative z-10 px-4 md:px-12">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-6">
            <div className="max-w-5xl">
                <h4 className="text-white text-3xl md:text-4xl font-medium max-w-4xl mb-8 leading-tight tracking-relaxed">
                {data.title}
                </h4>
                <h2 className="text-4xl md:text-4xl text-white mb-4">
                {data.sectionName}
                </h2>
            </div>
            <div className="flex items-center group cursor-pointer z-10 transition-transform active:scale-95">
                <div className="w-16 h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#A32482] transition-colors z-10">
                    <UserPlus className="w-8 h-8 text-white" />
                </div>
                <a
                    href={data.ctaLink}
                    className="px-8 py-4 rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-colors text-white text-lg font-bold shadow-xl shadow-purple-900/20 whitespace-nowrap"
                >
                    {data.ctaText}
                </a>
            </div>
            </div>

            {/* Description */}
            <p className="text-white text-2xl max-w-4xl mb-8 leading-relaxed">
            {data.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 ">
            {data.benefits.map((benefit, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-4  ${idx !== 0 ? 'border-l border-white/10 ml-[-1px]' : 'pl-0'}`}
                >
                <div className="mb-6">
                    {getIcon(benefit.icon)}
                </div>
                <h3 className="text-3xl leading-tight max-w-[300px]">
                    {benefit.title}
                </h3>
                <p className="text-white text-2xl leading-tight">
                    {benefit.desc}
                </p>
                </motion.div>
            ))}
            </div>

            {/* Trusted By Section */}
            <div className="relative pt-12 border-t border-white/5 text-center">
                <span className="text-white/50 text-3xl font-medium tracking-wide mb-10 block">
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
