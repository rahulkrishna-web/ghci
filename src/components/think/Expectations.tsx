'use client';
import { motion } from 'framer-motion';

const expectations = [
  {
    id: '01',
    title: 'Insightful Keynotes',
    description: 'Hear from industry leaders about the future of tech, ethics in AI, and more.'
  },
  {
    id: '02',
    title: 'Interactive Labs',
    description: 'Get hands-on experience with emerging technologies in our curated workshops.'
  },
  {
    id: '03',
    title: 'Elite Networking',
    description: 'Build lasting connections with peers and mentors from top global organizations.'
  }
];

export default function Expectations() {
  return (
    <section className="py-32 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold tracking-tighter mb-20 text-center uppercase">What to expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="group p-10 border border-black/10 rounded-3xl hover:bg-black hover:text-white transition-all duration-500"
            >
              <div className="text-7xl font-black mb-10 opacity-10 group-hover:opacity-100 transition-opacity italic">
                {item.id}
              </div>
              <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
              <p className="text-xl opacity-60 group-hover:opacity-100 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
