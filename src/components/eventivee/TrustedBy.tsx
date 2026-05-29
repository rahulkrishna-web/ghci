'use client';
import { motion } from 'framer-motion';

type TrustedByProps = {
  data: {
    trustedByText: string;
    logos: { name: string; src: string }[];
  };
};

export default function TrustedBy({ data }: TrustedByProps) {
  return (
    <section className="p-12 md:p-24 relative overflow-hidden text-white bg-[#22021d]">
      <div className="w-full relative z-10 px-4 md:px-12">
        <div className="relative text-center overflow-hidden">
            <span className="text-white text-xl md:text-3xl font-medium tracking-wide mb-10 block">
                {data.trustedByText}
            </span>

            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <div className="flex items-center gap-12 md:gap-32 whitespace-nowrap min-w-max brightness-0 invert py-4 animate-marquee">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 md:gap-32">
                            {data.logos.map((logo, idx) => (
                                <img 
                                    key={`${i}-${idx}`} 
                                    src={logo.src} 
                                    alt={logo.name} 
                                    className="h-7 md:h-9 w-auto object-contain max-w-[160px] md:max-w-[220px] opacity-80 hover:opacity-100 transition-opacity" 
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
