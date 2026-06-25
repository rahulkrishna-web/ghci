'use client';
import { motion } from 'framer-motion';

type DateItem = {
  name: string;
  date: string;
};

type WequestDatesProps = {
  data: {
    datesTitle: string;
    dates: DateItem[];
  };
};

export default function WequestDates({ data }: WequestDatesProps) {
  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute w-[40%] h-[40%] rounded-full bg-[#A32482]/5 blur-[100px] right-10 top-1/3 pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight text-white font-medium"
          >
            {data.datesTitle}
          </motion.h2>
        </div>

        {/* Dates Grid with Transparent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-transparent">
          {data.dates.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-transparent border border-white/10 rounded-[12px] p-8 md:p-10 flex flex-col justify-center min-h-[140px] md:min-h-[160px] hover:bg-white/[0.02] transition-colors duration-300 w-full"
              >
                {/* Bold Title Case Label matching Figma */}
                <span className="text-white text-lg md:text-[22px] font-bold mb-2">
                  {item.name}
                </span>
                {/* Brand magenta gradient date value */}
                <span
                  className="text-base md:text-lg font-bold leading-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(258.31deg, #A32478 44%, #FFFFFF 90.99%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {item.date}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
