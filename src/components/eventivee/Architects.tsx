'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type ArchitectsProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    image: string;
    content: string;
  };
};

export default function Architects({ data }: ArchitectsProps) {
  return (
    <section id="architects" className="py-16 md:py-24 text-white px-4 md:px-14 relative overflow-hidden">
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            {data.sectionTitle}
          </h2>
          <p className="text-white text-lg md:text-xl mb-8">
            {data.subtitle}
          </p>
          
          <div className="text-white/80 text-base md:text-[19px] space-y-6 mb-10 whitespace-pre-line leading-relaxed">
            {data.content}
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
        
        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={data.image} 
              alt={data.sectionTitle}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
