'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: '"GHCI 2027 was a game-changer. The speakers brought real insights I could apply immediately, and the networking opportunities were priceless."',
    name: 'Johon Martinez',
    role: 'Product Designer',
    stars: 5,
  },
  {
    quote: '"From hands-on workshops to world-class keynotes, this event exceeded my expectations. It\'s the one event I\'ll never miss again."',
    name: 'Arif Rahman',
    role: 'Marketing Director',
    stars: 5,
  },
  {
    quote: '"I walked away with not just ideas, but actionable strategies. The energy, creativity, and collaboration made this event truly unforgettable."',
    name: 'David Chen',
    role: 'Founder of BrightEdge',
    stars: 5,
  },
  {
    quote: '"An incredible gathering of minds. The focus on future technologies and real-world applications was exactly what I needed."',
    name: 'Sarah Jenkins',
    role: 'Tech Lead @ Innovate',
    stars: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#070708] text-white px-6 relative overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#070708] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#070708] to-transparent pointer-events-none" />

      <div className="max-w-[100vw] mx-auto">
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: 'linear',
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[320px] md:w-[420px] p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between whitespace-normal"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#b02677] text-[#b02677]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1 italic">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#b02677]/20 flex items-center justify-center text-[#b02677] text-xs font-bold border border-[#b02677]/30">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
