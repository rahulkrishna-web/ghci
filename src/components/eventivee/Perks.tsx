'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

type PerksProps = {
  data: {
    sectionTitle: string;
    perks: { title: string }[];
  };
};

export default function Perks({ data }: PerksProps) {
  return (
    <section className="py-24 bg-[#070708] relative flex justify-center border-t border-white/[0.05]">
      {/* Background glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg h-[200px] bg-[#b02677]/20 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a24] to-[#0d0d12] border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {data.sectionTitle.split(' ').map((word, i, arr) => (
                <span key={i} className={i >= arr.length - 2 ? "text-[#b02677]" : ""}>
                   {word}{' '}
                </span>
              ))}
            </h2>
          </div>
          
          <div className="md:w-2/3 flex flex-col gap-4">
            {data.perks.map((perk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-[#b02677] shrink-0 mt-0.5" />
                <p className="text-white/80 md:text-lg font-medium">{perk.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
