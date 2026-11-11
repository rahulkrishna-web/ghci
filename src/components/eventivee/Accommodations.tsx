'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info } from 'lucide-react';

export type HotelProperty = {
  name: string;
  distance: string;
  rate: string;
  rateBasis: string;
  contact: string;
  note?: string;
};

export type HotelCategory = {
  title: string;
  properties: HotelProperty[];
};

export type AccommodationsData = {
  sectionTitle: string;
  subtitle: string;
  disclaimer: string;
  categories: HotelCategory[];
};

type AccommodationsProps = {
  data: AccommodationsData;
};

export default function Accommodations({ data }: AccommodationsProps) {
  // First category open by default as shown in the design mockup
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleCategory = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  const renderContact = (contact: string) => {
    if (!contact || contact === '—' || contact === '-') {
      return <span className="text-white/30">—</span>;
    }

    // Phone number format (+91 ...)
    if (contact.startsWith('+')) {
      const cleanPhone = contact.replace(/\s+/g, '');
      return (
        <a
          href={`tel:${cleanPhone}`}
          className="text-white/70 hover:text-white hover:underline transition-colors whitespace-nowrap"
        >
          {contact}
        </a>
      );
    }

    // Multiple URLs separated by '/'
    if (contact.includes('/')) {
      const parts = contact.split('/').map(p => p.trim());
      return (
        <span className="flex flex-wrap gap-x-1.5 items-center">
          {parts.map((part, pIdx) => {
            const isUrl = part.includes('.com') || part.includes('.in') || part.includes('.co');
            if (isUrl) {
              const href = part.startsWith('http') ? part : `https://${part}`;
              return (
                <span key={pIdx} className="inline-flex items-center">
                  {pIdx > 0 && <span className="text-white/30 mr-1.5">/</span>}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white hover:underline transition-colors"
                  >
                    {part}
                  </a>
                </span>
              );
            }
            return (
              <span key={pIdx} className="inline-flex items-center text-white/70">
                {pIdx > 0 && <span className="text-white/30 mr-1.5">/</span>}
                {part}
              </span>
            );
          })}
        </span>
      );
    }

    // Single domain link
    if (contact.includes('.com') || contact.includes('.in') || contact.includes('.co')) {
      const href = contact.startsWith('http') ? contact : `https://${contact}`;
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white hover:underline transition-colors"
        >
          {contact}
        </a>
      );
    }

    return <span className="text-white/70">{contact}</span>;
  };

  return (
    <section className="mt-16 md:mt-24">
      {/* Header */}
      <div className="mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white"
        >
          {data.sectionTitle}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-base md:text-xl font-normal max-w-4xl"
        >
          {data.subtitle}
        </motion.p>
      </div>

      {/* Disclaimer / Notice Box */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="bg-[#111114] border border-white/10 rounded-[10px] p-4 md:p-5 flex items-start gap-3.5 mb-8 text-white/70 text-xs md:text-sm leading-relaxed"
      >
        <Info className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold text-white/90">Please note:</span>{' '}
          {data.disclaimer.replace(/^Please note:\s*/i, '')}
        </p>
      </motion.div>

      {/* Accordion List */}
      <div className="space-y-3 md:space-y-4">
        {data.categories.map((category, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="border border-white/10 rounded-[10px] bg-[#111113] overflow-hidden transition-colors"
            >
              {/* Accordion Trigger */}
              <button
                type="button"
                onClick={() => toggleCategory(idx)}
                className="w-full px-5 md:px-8 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors cursor-pointer select-none group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-white font-semibold text-base md:text-lg group-hover:text-white/90">
                    {category.title}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-normal text-white/50 bg-white/[0.05] border border-white/10">
                    {category.properties.length} {category.properties.length === 1 ? 'property' : 'properties'}
                  </span>
                </div>

                <div className="ml-4 shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Accordion Expanded Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden border-t border-white/10"
                  >
                    <div className="px-5 md:px-8 pb-6 pt-3 overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[720px] md:min-w-full">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="py-3 text-[11px] md:text-xs font-semibold text-white/40 tracking-wider uppercase w-[30%]">
                              PROPERTY
                            </th>
                            <th className="py-3 text-[11px] md:text-xs font-semibold text-white/40 tracking-wider uppercase w-[15%]">
                              DISTANCE
                            </th>
                            <th className="py-3 text-[11px] md:text-xs font-semibold text-white/40 tracking-wider uppercase w-[18%]">
                              APPROX. RATE / NIGHT
                            </th>
                            <th className="py-3 text-[11px] md:text-xs font-semibold text-white/40 tracking-wider uppercase w-[15%]">
                              RATE BASIS
                            </th>
                            <th className="py-3 text-[11px] md:text-xs font-semibold text-white/40 tracking-wider uppercase w-[22%]">
                              CONTACT / BOOKING
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {category.properties.map((prop, pIdx) => (
                            <tr key={pIdx} className="hover:bg-white/[0.02] transition-colors">
                              <td className="py-4 pr-4 text-xs md:text-sm font-medium text-white">
                                <div>{prop.name}</div>
                                {prop.note && (
                                  <div className="text-[11px] text-white/40 font-normal mt-0.5">
                                    {prop.note}
                                  </div>
                                )}
                              </td>
                              <td className="py-4 pr-4 text-xs md:text-sm text-white/70 whitespace-nowrap">
                                {prop.distance}
                              </td>
                              <td className="py-4 pr-4 text-xs md:text-sm text-white/90 whitespace-nowrap">
                                {prop.rate}
                              </td>
                              <td className="py-4 pr-4 text-xs md:text-sm text-white/50 whitespace-nowrap">
                                {prop.rateBasis}
                              </td>
                              <td className="py-4 text-xs md:text-sm text-white/70">
                                {renderContact(prop.contact)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
