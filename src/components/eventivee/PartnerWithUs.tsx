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
     
      <div className="w-full relative z-10 px-6 md:px-12">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-left md:text-left gap-4 md:gap-8 mb-6">
                <div className="max-w-5xl">
                    <h4 className="text-white text-base md:text-xl font-medium max-w-4xl mb-4 md:mb-8 leading-tight tracking-relaxed">
                        {data.title}
                    </h4>
                    <h2 className="text-3xl md:text-4xl text-white mb-4">
                        {data.sectionName}
                    </h2>
                </div>
            </div>

            {/* Description */}
            <p className="text-white text-base md:text-2xl max-w-4xl mx-0 md:mx-0 text-left md:text-left mb-8 leading-relaxed">
                {data.description}
            </p>

            {/* CTA Button */}
            <div className="flex justify-start md:justify-start items-center mb-16">
                <div className="flex items-center group cursor-pointer z-10 transition-transform active:scale-95">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#A32482] transition-colors z-10">
                        <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <a
                        href={data.ctaLink}
                        className="h-12 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white font-bold shadow-xl shadow-purple-900/20 whitespace-nowrap overflow-hidden"
                    >
                        <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                            <div className="h-full w-full flex items-center justify-center px-6 md:px-8 text-base md:text-lg shrink-0">
                                {data.ctaText}
                            </div>
                            <div className="h-full w-full flex items-center justify-center px-6 md:px-8 text-base md:text-lg shrink-0">
                                {data.ctaText}
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-0 mb-16">
            {data.benefits.map((benefit, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-2 md:p-4 text-left flex flex-col items-start ${idx !== 0 ? 'md:border-l md:border-white/10 md:ml-[-1px]' : 'pl-0'}`}
                >
                <div className="mb-4 md:mb-6">
                    <div className="scale-75 md:scale-100 origin-left">
                        {getIcon(benefit.icon)}
                    </div>
                </div>
                <h3 className="text-[13px] md:text-3xl font-bold leading-tight mb-2 md:mb-3">
                    {benefit.title}
                </h3>
                <p className="text-white/60 text-[10px] md:text-2xl leading-tight">
                    {benefit.desc}
                </p>
                </motion.div>
            ))}
            </div>

            {/* Trusted By Section */}
            <div className="relative pt-12 border-t border-white/5 text-center overflow-hidden">
                <span className="text-white/50 text-xl md:text-3xl font-medium tracking-wide mb-10 block">
                    {data.trustedByText}
                </span>

                <div className="relative flex overflow-hidden">
                    <motion.div 
                        animate={{
                            x: [0, "-50%"]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                        }}
                        className="flex items-center gap-12 md:gap-32 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700 whitespace-nowrap min-w-max"
                    >
                        {/* Original Logos */}
                        {data.logos.map((logo, idx) => (
                            <img key={idx} src={logo.src} alt={logo.name} className="h-8 md:h-12 w-auto object-contain max-w-[120px] md:max-w-[150px] inline-block" />
                        ))}
                        {/* Duplicate Logos for seamless loop */}
                        {data.logos.map((logo, idx) => (
                            <img key={`dup-${idx}`} src={logo.src} alt={logo.name} className="h-8 md:h-12 w-auto object-contain max-w-[120px] md:max-w-[150px] inline-block" />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
}
