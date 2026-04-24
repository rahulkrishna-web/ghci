'use client';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Speakers', value: '40+' },
  { label: 'Attendees', value: '5,000+' },
  { label: 'Workshops', value: '25+' },
  { label: 'Countries', value: '15+' },
];

export default function AboutStats() {
  return (
    <section className="py-32 bg-black text-white px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">
              Where future <br /> is built today.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed max-w-lg">
              GHCI is the premier event for women in technology in Asia, bringing together thousands of visionaries to shape the next decade of innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-white/10 rounded-2xl bg-white/5"
              >
                <div className="text-5xl font-black mb-2 italic">{stat.value}</div>
                <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
