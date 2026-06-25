'use client';
import { motion } from 'framer-motion';

type WequestWhatIsProps = {
  data: {
    whatIsTitle: string;
    whatIsText: string;
  };
};

export default function WequestWhatIs({ data }: WequestWhatIsProps) {
  // Split paragraphs by double newlines
  const paragraphs = data.whatIsText.split('\n\n');

  const headingText = (
    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium leading-[1.15]">
      <span className="text-white block">What is</span>
      <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent block mt-1">
        WeQuest?
      </span>
    </h2>
  );

  return (
    <section id="wequest-about" className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Container brought inside and widened */}
      <div className="max-w-[1140px] mx-auto w-full px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 text-left"
          >
            {headingText}
          </motion.div>

          {/* Right Column: Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-8 text-left space-y-6 md:space-y-8"
          >
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-white/70 text-base md:text-[18px] lg:text-[20px] leading-relaxed font-normal">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
