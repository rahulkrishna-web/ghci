'use client';
import { motion } from 'framer-motion';

type AipWhatIsProps = {
  data: {
    whatIsTitle: string;
    whatIsText: string;
  };
};

export default function AipWhatIs({ data }: AipWhatIsProps) {
  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 text-center md:text-left"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium leading-none text-transparent bg-clip-text md:whitespace-nowrap pb-1"
              style={{
                backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
                WebkitBackgroundClip: 'text'
              }}
            >
              {data.whatIsTitle}
            </h2>
          </motion.div>

          {/* Right Column: Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-7 text-center md:text-left"
          >
            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-normal">
              {data.whatIsText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
