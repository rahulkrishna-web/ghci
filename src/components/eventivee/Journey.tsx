'use client';
import { motion } from 'framer-motion';

type JourneyProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    cards: { title: string; description: string }[];
    missionTitle: string;
    missionDescription: string;
  };
};

export default function Journey({ data }: JourneyProps) {
  return (
    <section id="journey" className="py-16 md:py-24 text-white px-4 md:px-14 bg-[#070708] relative overflow-hidden">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[60px] font-semibold mb-6 tracking-tight"
          >
            {data.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 md:p-10 rounded-2xl flex flex-col min-h-[300px] bg-white/[0.03] border border-white/5 hover:bg-[#A32482] hover:shadow-2xl hover:shadow-purple-900/20 hover:border-transparent transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white group-hover:text-white transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300 mt-auto">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full rounded-[30px] overflow-hidden p-10 md:p-20 text-center border border-white/5"
          style={{
            backgroundImage: 'url(/our-mission.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-semibold mb-6">
              {data.missionTitle}
            </h3>
            <p className="text-white/80 text-base md:text-xl leading-relaxed">
              {data.missionDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
