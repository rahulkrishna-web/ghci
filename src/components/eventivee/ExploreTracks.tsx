'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

type ExploreTracksProps = {
  data: {
    sectionTitle: string;
    tracks: { title: string; description: string }[];
  };
};

export default function ExploreTracks({ data }: ExploreTracksProps) {
  return (
    <section className="py-20 text-white">
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl tracking-tight mb-20 text-center"
        >
          {data.sectionTitle}
        </motion.h2>

        <div className="flex w-full overflow-x-auto gap-4 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide px-4 md:px-16 lg:px-20 scroll-pl-4 md:scroll-pl-16 lg:scroll-pl-14 items-stretch">
          {data.tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-8 rounded-[10px] bg-[#D9D9D9]/20 backdrop-blur-md border border-white/10 flex flex-col min-h-[265px] md:min-h-[280px] hover:bg-white/[0.08] transition-all group flex-shrink-0 w-[85%] md:w-[46%] lg:w-[23.5%] snap-start"
            >
              <div className="mb-12">
                <Check className="w-8 h-8 text-[#A32482]" />
              </div>
              <h3 className="text-2xl md:text-[28px] text-white mb-4 leading-tight font-medium">
                {track.title}
              </h3>
              <p className="text-[#A3A3A3] text-lg md:text-[1.15rem] leading-relaxed mt-auto">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
