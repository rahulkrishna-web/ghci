'use client';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

import ScrollReveal from '../ui/ScrollReveal';

type AboutProps = {
  data: {
    sectionTitle: string;
    stats: { label: string; value: string }[];
    gallery: string[];
    content: string;
  };
};

export default function About({ data }: AboutProps) {
  const gallery = data.gallery || [];
  const centerImage = gallery[0];
  const topLeftImage = gallery[1];
  const topRightImage = gallery[2];
  const bottomLeftImage = gallery[3];
  const bottomRightImage = gallery[4];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="experience" className="py-6 relative overflow-hidden bg-black text-white px-4 md:px-15">
        {/* Background Graphic Layer */}
        <div 
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: 'url(/2nd-section-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        />
        {/* Dark overlay for consistent cinematic look */}
      <div className="w-full relative z-10">
        
        {/* Floating Gallery */}
        <div className="relative h-[300px] md:h-[700px] mb-0 md:mb-20">
            {/* Top Left Floating Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden md:block absolute left-0 lg:left-[1%] top-0 w-20 md:w-40 aspect-[3/4] rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={topLeftImage} alt="Experience 1" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>

            {/* Top Right Floating Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden md:block absolute right-0 top-[1%] w-24 md:w-44 aspect-video rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={topRightImage} alt="Experience 2" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>

            {/* Main Center Video */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full md:w-[68%] aspect-video rounded-[10px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
            >
                <video 
                    ref={videoRef}
                    autoPlay 
                    loop 
                    muted={isMuted}
                    playsInline 
                    poster="https://res.cloudinary.com/dzzh2uxoj/video/upload/v1781075317/GHIC_V6_7April_FINAL_720p_eeyl3h_zj0c3a.jpg"
                    className="w-full h-full object-cover"
                >
                    {/* Progressive loading: 1080p for desktop, 720p for others */}
                    <source 
                        src="https://res.cloudinary.com/dzzh2uxoj/video/upload/v1781075345/GHIC_V6_7April_FINAL_f0khnn_evrnei.mp4" 
                        type="video/mp4" 
                        media="(min-width: 1024px)"
                    />
                    <source 
                        src="https://res.cloudinary.com/dzzh2uxoj/video/upload/v1781075317/GHIC_V6_7April_FINAL_720p_eeyl3h_zj0c3a.mp4" 
                        type="video/mp4" 
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                
                {/* Video Controls Toggle Cluster */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                    {/* Play/Pause Toggle Button */}
                    <button 
                      onClick={togglePlay}
                      className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white/70 group-hover:text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white group-hover:text-white" />
                      )}
                    </button>

                    {/* Unmute Toggle Button */}
                    <button 
                      onClick={toggleMute}
                      className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#A32482] transition-all group"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white/70 group-hover:text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white group-hover:text-white" />
                      )}
                    </button>
                </div>
            </motion.div>

            {/* Bottom Left Floating Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden md:block absolute left-0 lg:left-0 bottom-0 w-24 md:w-48 aspect-video rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={bottomLeftImage} alt="Experience 3" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>

            {/* Bottom Right Floating Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden md:block absolute right-0  bottom-[2%] w-20 md:w-36 aspect-[3/4] rounded-[10px] overflow-hidden border border-white/10 shadow-2xl z-20"
            >
                <img src={bottomRightImage} alt="Experience 4" className="w-full h-full object-cover grayscale brightness-75" />
            </motion.div>
        </div>

      </div>
    </section>
  );
}
