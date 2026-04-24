'use client';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    className: 'w-48 h-80 -rotate-6',
  },
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
    className: 'w-56 h-64 rotate-2 mt-20',
  },
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    className: 'w-64 h-96 -rotate-3',
  },
  {
    src: 'https://images.unsplash.com/photo-1559223607-180d0c16a6fc?w=600&q=80',
    className: 'w-40 h-56 rotate-4 mt-16',
  },
  {
    src: 'https://images.unsplash.com/photo-1591115765373-5f9cf1da241c?w=600&q=80',
    className: 'w-48 h-72 -rotate-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    className: 'w-44 h-60 rotate-3 mt-10',
  },
  {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    className: 'w-52 h-80 -rotate-4',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
    className: 'w-48 h-64 rotate-2 mt-12',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-[#070708] text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-mono tracking-wider mb-4 block">[Our gallery]</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            A glimpse from previous{' '}
            <span className="text-white/40">ConfexPro events.</span>
          </h2>
        </motion.div>

        {/* Tilted overlapping gallery items */}
        <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.6 }}
              className={`rounded-2xl overflow-hidden border border-white/10 shrink-0 ${img.className}`}
            >
              <img
                src={img.src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
