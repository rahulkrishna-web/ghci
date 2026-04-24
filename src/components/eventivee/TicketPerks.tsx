'use client';
import { motion } from 'framer-motion';

type TicketPerksProps = {
  data: {
    sectionTitle: string;
    perks: string[];
  };
};

export default function TicketPerks({ data }: TicketPerksProps) {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Title */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="md:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {data.sectionTitle}
          </h2>
        </motion.div>

        {/* Right Side: Ticket Card */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative md:w-2/3 w-full"
        >
          {/* Ticket Body */}
          <div className="relative bg-gradient-to-br from-[#4a1052] via-[#2d1b5a] to-[#070708] rounded-3xl p-8 md:p-12 min-h-[300px] flex items-center overflow-hidden">
            
            {/* Left Notch */}
            <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-black rounded-full z-10" />
            
            {/* Dotted Line Perforation */}
            <div className="absolute right-12 md:right-20 top-0 bottom-0 border-l border-white/20 border-dashed" />

            {/* Content List */}
            <ul className="space-y-5 relative z-10 pr-20 md:pr-32">
              {data.perks.map((perk, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2.5 shrink-0" />
                  <span className="text-lg md:text-xl text-white/80 font-medium tracking-tight leading-snug">
                    {perk}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
