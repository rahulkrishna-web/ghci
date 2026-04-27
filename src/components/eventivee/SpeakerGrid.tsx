'use client';
import { motion } from 'framer-motion';

type SpeakerGridProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    lineupNote: string;
    speakers: { name: string; role: string; image: string }[];
  };
};

export default function SpeakerGrid({ data }: SpeakerGridProps) {
  return (
    <section id="speakers" className="py-24 relative overflow-hidden text-white" style={{
      backgroundImage: 'url(/speaker.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      
      <div className="w-full relative z-10 px-4 md:px-40">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          {/* Wavy Pattern Background Accent */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 opacity-20 pointer-events-none overflow-visible">
            <svg className="w-full h-full opacity-40 scale-150" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100C360 20 720 180 1080 100C1440 20 1800 180 2160 100" stroke="#A32482" strokeWidth="2" opacity="0.3" />
              <path d="M0 120C360 40 720 200 1080 120C1440 40 1800 200 2160 120" stroke="#A32482" strokeWidth="2" opacity="0.2" />
              <path d="M0 80C360 0 720 160 1080 80C1440 0 1800 160 2160 80" stroke="#A32482" strokeWidth="2" opacity="0.1" />
            </svg>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
          >
            {data.sectionTitle}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-white/60 text-lg leading-relaxed">
              {data.subtitle}
            </p>
            <p className="text-white font-bold text-lg">
              {data.lineupNote}
            </p>
          </motion.div>
        </div>

        {/* Speaker Grid / Slider */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {data.speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-[3/4.5] rounded-[10px] overflow-hidden bg-white/5 border border-white/5 transition-all duration-500 min-w-[75vw] md:min-w-0 snap-center"
            >
              {/* Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              {/* Speaker Info Overlay */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {speaker.name}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed max-w-[90%] line-clamp-2">
                  {speaker.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
