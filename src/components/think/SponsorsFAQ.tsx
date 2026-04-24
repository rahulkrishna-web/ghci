'use client';
import { motion } from 'framer-motion';

const sponsors = [
  'Google', 'Microsoft', 'NVIDIA', 'Intel', 'IBM', 'Oracle', 'Cisco', 'Salesforce'
];

const faqs = [
  {
    q: 'Will there be remote access?',
    a: 'Yes, we have a limited number of digital passes available for live streaming keynotes.'
  },
  {
    q: 'Is there a code of conduct?',
    a: 'Absolutely. We pride ourselves on creating a safe, inclusive space for everyone.'
  },
  {
    q: 'Can I volunteer?',
    a: 'Applications for volunteers will open 3 months before the summit. Stay tuned!'
  }
];

export default function SponsorsFAQ() {
  return (
    <section className="py-32 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-2xl font-bold uppercase tracking-widest mb-16 opacity-40 italic">Proudly Partnered With</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             {sponsors.map((s, i) => (
               <div key={i} className="text-4xl font-black tracking-tighter select-none">{s}</div>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-8">FAQ</h2>
            <p className="text-xl opacity-40 max-w-sm">Common questions about the summit and participation.</p>
          </div>
          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4 italic uppercase tracking-tight">{faq.q}</h3>
                <p className="text-xl opacity-60 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
