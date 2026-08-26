'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

type SponsorScholarProps = {
  data: {
    sectionTitle: string;
    content: string;
    buttonText: string;
    buttonLink: string;
  };
};

export default function SponsorScholar({ data }: SponsorScholarProps) {
  return (
    <section id="sponsor-scholar" className="py-12 md:py-16 px-4 md:px-14 relative z-10 overflow-hidden flex justify-center bg-gradient-to-b from-[#22021d] to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#1b101c]/80 border border-white/10 rounded-[20px] p-8 md:p-16 flex flex-col items-center text-center shadow-2xl backdrop-blur-md"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          {data.sectionTitle}
        </h2>
        
        <div className="text-white/90 mb-10 max-w-4xl mx-auto whitespace-pre-line leading-relaxed text-center">
          {data.content.split('\n').filter(Boolean).map((line, i) => {
            if (line.includes('learning, ')) {
              const parts = line.split('learning, ');
              return (
                <span key={i} className="block mt-2 text-base md:text-lg">
                  {parts[0]}learning, <span className="font-bold text-lg md:text-xl">{parts[1]}</span>
                </span>
              );
            }
            return (
              <span key={i} className="block text-base md:text-lg">
                {line}
              </span>
            );
          })}
        </div>
        
        <Link href={data.buttonLink} className="group h-12 md:h-14 inline-flex flex-col rounded-full bg-[#A32482] hover:bg-[#8e1f7c] transition-all text-white text-lg font-medium active:scale-95 whitespace-nowrap overflow-hidden cursor-pointer">
          <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
            <div className="h-full w-full flex items-center justify-center px-8 shrink-0">
              {data.buttonText}
            </div>
            <div className="h-full w-full flex items-center justify-center px-8 shrink-0">
              {data.buttonText}
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
