'use client';
import { motion } from 'framer-motion';

type CriterionItem = {
  title: string;
  description: string;
  highlight?: boolean;
};

type WequestWhoCanApplyProps = {
  data: {
    whoCanApplyTitle: string;
    criteria: CriterionItem[];
  };
};

export default function WequestWhoCanApply({ data }: WequestWhoCanApplyProps) {
  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute w-[50%] h-[50%] rounded-full bg-[#A32482]/5 blur-[120px] left-10 bottom-0 pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Title */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-tight text-white font-medium"
          >
            {data.whoCanApplyTitle}
          </motion.h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 w-full overflow-x-auto md:overflow-x-hidden gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
          {data.criteria.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 md:p-10 rounded-[10px] flex flex-col justify-center min-h-[260px] md:min-h-[290px] transition-all duration-300 flex-shrink-0 w-[80%] sm:w-[60%] md:w-auto snap-start bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-gradient-to-b hover:from-[#A32482] hover:to-[#7f1863] hover:border-[#A32482]/50 hover:shadow-xl hover:shadow-purple-950/20 hover:scale-[1.02] group"
              >
                <div className="space-y-2">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium leading-tight text-white">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed text-white/60 group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
