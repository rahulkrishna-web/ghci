'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Who should attend GHCI?',
    a: "GHCI is designed for women and non-binary people in technology, including students, professionals, industry leaders, and researchers. Anyone looking to grow their career, network, and contribute to the tech community is welcome.",
  },
  {
    q: 'Are student tickets available?',
    a: 'Yes, we offer special discounted rates for students. You will need to provide a valid student ID during the registration process to qualify for these tickets.',
  },
  {
    q: 'Can I refund or transfer my ticket?',
    a: "Tickets are non-refundable. However, you can transfer your registration to another colleague or peer up to 15 days before the event. Please contact our support team for assistance.",
  },
  {
    q: 'What does the ticket include?',
    a: 'Your ticket provides full access to keynotes, technical sessions, workshops, networking lounges, and the career fair. Meals and coffee breaks during the event are also included.',
  },
  {
    q: 'Will there be a virtual option?',
    a: 'GHCI 2027 is planned as an in-person event to maximize networking and interaction. We will provide highlights and recorded sessions for selected tracks post-event.',
  },
  {
    q: 'Can I transfer or cancel my ticket?',
    a: 'Tickets are non-refundable. However, you can transfer your ticket to another person up to 2 weeks before the event. Please note that cancellations do not qualify for a refund.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-black text-white px-4 md:px-40">
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors rounded-none overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left group"
              >
                <span className="text-xl font-medium tracking-tight">
                  {faq.q}
                </span>
                <div className={`p-1 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <Plus className="w-6 h-6 text-white/60" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-7 pt-0">
                        <div className="h-[1px] w-full bg-white/10 mb-6" />
                        <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
