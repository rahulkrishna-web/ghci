'use client';
import { motion } from 'framer-motion';

type WequestSelectionProps = {
  data: {
    selectionTitle: string;
    selectionSubtitle: string;
    selectionTags: string[];
  };
};

export default function WequestSelection({ data }: WequestSelectionProps) {
  // Highlights "Are Selected" with gradient
  const headingText = (
    <h2 className="text-4xl md:text-6xl tracking-tight font-medium mb-6 text-center">
      <span className="text-white">How Winners </span>
      <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">
        Are Selected
      </span>
    </h2>
  );

  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute w-[45%] h-[45%] rounded-full bg-[#A32482]/5 blur-[100px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          {headingText}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {data.selectionSubtitle}
        </motion.p>

        {/* Evaluation Card Container (matching figma plummy-eggplant tone) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 md:py-10 md:px-12 rounded-[15px] bg-gradient-to-b from-[#180512]/60 to-[#0e020a]/80 border border-[#A32482]/20 backdrop-blur-md w-full max-w-6xl mx-auto flex flex-col items-center justify-center"
        >
          <p className="text-white/70 text-sm md:text-base font-normal mb-8">
            Startups will be evaluated on:
          </p>

          <div className="flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-4 md:gap-0 w-full">
            {data.selectionTags.map((tag, idx) => (
              <div key={tag} className="flex flex-col md:flex-row items-center">
                <span className="text-white text-base md:text-lg font-medium whitespace-nowrap px-2 lg:px-4 py-2 hover:text-[#A32482] transition-colors duration-300">
                  {tag}
                </span>
                {idx < data.selectionTags.length - 1 && (
                  <div className="hidden md:block w-[1px] h-6 bg-white/20 mx-3 lg:mx-5 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
