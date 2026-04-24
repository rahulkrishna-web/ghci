'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "GHC was a turning point in my career. The networking opportunities and insights were unparalleled.",
    author: "Elena Rodriguez",
    role: "Senior Dev at Meta"
  },
  {
    quote: "I found my mentor and my next job here. It's not just a conference, it's a movement.",
    author: "Anjali Rao",
    role: "Fullstack Engineer"
  },
  {
    quote: "The energy and passion for technology here are infectious. A must-attend for every woman in tech.",
    author: "Karen Smith",
    role: "Lead Architect at Google"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-32 bg-white text-black px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <Quote className="w-16 h-16 mb-12 opacity-10" />
        <div className="relative h-[200px] md:h-[150px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0"
            >
              <p className="text-3xl md:text-4xl font-bold tracking-tight italic leading-snug">
                "{testimonials[current].quote}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-12">
          <div className="text-xl font-bold">{testimonials[current].author}</div>
          <div className="text-black/40 font-medium uppercase tracking-widest text-xs mt-1">
            {testimonials[current].role}
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? 'bg-black w-8' : 'bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
