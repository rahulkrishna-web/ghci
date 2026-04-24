"use client";

import { motion } from "framer-motion";

const agendaItems = [
  { time: "09:00 AM", title: "Registration & Networking", description: "Collect your badges and meet other visionaries." },
  { time: "10:30 AM", title: "Opening Keynote", description: "The convergence of AI and human curiosity." },
  { time: "12:00 PM", title: "Interactive Workshop", description: "Designing for the spatial computing era." },
  { time: "02:00 PM", title: "Panel Discussion", description: "Ethics in the age of generative intelligence." },
  { time: "04:30 PM", title: "Closing Remarks", description: "Summarizing the vision for 2028." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as any } },
};

export default function Agenda() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-inter font-bold tracking-tighter text-black mb-4">Agenda</h2>
          <div className="w-20 h-2 bg-think-accent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {agendaItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-8 pb-12 border-b border-black/5 last:border-0"
            >
              <div className="w-32 shrink-0">
                <span className="text-black/40 font-inter font-bold tracking-widest text-sm uppercase">
                  {item.time}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-inter font-bold text-black mb-3">{item.title}</h3>
                <p className="text-black/60 text-lg font-inter leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
