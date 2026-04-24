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
    <section className="py-24 bg-black text-white px-4 md:px-40">
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-center"
        >
          {data.sectionTitle}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[10px] bg-white/[0.03] border border-white/5 flex flex-col h-full hover:bg-white/[0.06] transition-all group"
            >
              <div className="mb-10">
                <Check className="w-5 h-5 text-[#A32482]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-8 leading-snug">
                {track.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mt-auto">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
