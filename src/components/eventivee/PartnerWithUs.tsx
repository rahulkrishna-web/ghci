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
            {/* Header / Intro (Centralized) */}
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 md:mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl text-white tracking-tight font-normal mb-6"
                >
                    {data.sectionName}
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white text-lg md:text-3xl font-medium leading-relaxed mb-6"
                >
                    {data.title}
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-white/70 text-base md:text-xl leading-relaxed mb-10 max-w-3xl"
                >
                    {data.description}
                </motion.p>

                {/* CTA Button (Centralized) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center group cursor-pointer z-10 transition-transform active:scale-95"
                >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#A32482] transition-colors z-10">
                        <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <a
                        href={data.ctaLink}
                        className="h-12 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white font-semibold shadow-xl shadow-purple-900/20 whitespace-nowrap overflow-hidden"
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
                </motion.div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-0 mb-12 md:mb-16">
            {data.benefits.map((benefit, idx) => (
                <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-2 md:py-10 text-left flex flex-col items-start relative 
                    ${idx === 0 ? 'md:pl-24 md:pr-24' : ''} 
                    ${idx === 1 ? 'md:pl-24 md:pr-24' : ''} 
                    ${idx === 2 ? 'md:pl-24 md:pr-24' : ''}
                    ${idx !== 0 ? 'md:before:content-[""] md:before:absolute md:before:left-0 md:before:top-1/4 md:before:h-1/2 md:before:w-[1px] md:before:bg-white/10' : ''}`}
                >
                <div className="mb-4 md:mb-8">
                    <div className="scale-90 md:scale-100 origin-left">
                        {getIcon(benefit.icon)}
                    </div>
                </div>
                <h3 className="text-xl md:text-[34px] font-semibold leading-[1.1] mb-3 md:mb-6 max-w-[280px]">
                    {benefit.title}
                </h3>
                <p className="text-white/70 text-sm md:text-[20px] leading-snug font-medium max-w-[340px]">
                    {benefit.desc}
                </p>
                </motion.div>
            ))}
            </div>

            {/* Trusted By Section */}
            <div className="relative border-t border-white/5 text-center overflow-hidden">
                <span className="text-white text-xl md:text-3xl font-medium tracking-wide mb-10 block">
                    {data.trustedByText}
                </span>

                <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    <motion.div 
                        animate={{
                            x: [0, "-50%"]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                        }}
                        className="flex items-center gap-12 md:gap-32 whitespace-nowrap min-w-max brightness-0 invert py-4"
                    >
                        {/* Repeat logos multiple times to ensure seamless flow and fill container */}
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12 md:gap-32">
                                {data.logos.map((logo, idx) => (
                                    <img 
                                        key={`${i}-${idx}`} 
                                        src={logo.src} 
                                        alt={logo.name} 
                                        className="h-8 md:h-12 w-auto object-contain max-w-[120px] md:max-w-[150px] opacity-80 hover:opacity-100 transition-opacity" 
                                    />
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
}
