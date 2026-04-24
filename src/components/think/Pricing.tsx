'use client';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Day Pass',
    price: '$149',
    description: 'Perfect for a quick deep dive into the highlights.',
  },
  {
    name: 'Golden Ticket',
    price: '$399',
    description: 'Our most popular choice for full immersive experience.',
    tag: 'Popular'
  },
  {
    name: 'Student Pass',
    price: '$99',
    description: 'Discounted access for the next generation of leaders.',
  }
];

export default function Pricing() {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-6xl font-bold tracking-tighter uppercase mb-6 italic">Tickets</h2>
          <div className="text-think-accent text-xl font-bold">Offer ends in 12 days</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-12 border border-white/10 rounded-[2.5rem] bg-white/5 relative group hover:border-think-accent transition-all duration-500"
            >
              {plan.tag && (
                <div className="absolute -top-4 right-8 bg-think-accent text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {plan.tag}
                </div>
              )}
              <h3 className="text-4xl font-black mb-4 italic uppercase tracking-tighter">{plan.name}</h3>
              <div className="text-6xl font-black mb-8">{plan.price}</div>
              <p className="text-white/40 mb-12 text-lg leading-relaxed">{plan.description}</p>
              <a
                href="https://konfhub.com/ghci-2027"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 rounded-2xl bg-white text-black text-center font-bold hover:bg-think-accent transition-colors"
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
