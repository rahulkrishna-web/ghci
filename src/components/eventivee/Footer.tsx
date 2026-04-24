'use client';
import { motion } from 'framer-motion';

type FooterProps = {
  data?: {
    copyright: string;
    designedBy: string;
    socialLinks: { icon: string; link: string }[];
    columns: { title: string; links: { label: string; href: string }[] }[];
  }
};

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

export default function Footer({ data }: FooterProps) {
  if (!data) return null;

  return (
    <footer className="pt-24 pb-0 bg-black text-white px-6 relative overflow-hidden flex flex-col min-h-[600px] justify-between">
        {/* Atmospheric Mesh Gradients */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,#4B1061_0%,transparent_70%)] opacity-40 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-[20%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,#A3238E_0%,transparent_70%)] opacity-30 blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,#4338CA_0%,transparent_70%)] opacity-10 blur-[130px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 pb-20">
                
                {/* Brand & Socials */}
                <div className="flex flex-col gap-12">
                    <img 
                      src="/ghci27-logo.png" 
                      alt="GHCI 2027" 
                      className="h-16 w-auto"
                    />
                    
                    <div className="flex flex-col gap-4">
                        <span className="text-white/40 text-[13px] tracking-[0.2em] uppercase font-medium">Social</span>
                        <div className="flex items-center gap-6 text-white/80">
                            {data.socialLinks.map((social, idx) => (
                                <a key={idx} href={social.link} className="hover:text-white transition-opacity hover:opacity-100 opacity-70">
                                    {social.icon === 'instagram' && <InstagramIcon />}
                                    {social.icon === 'linkedin' && <LinkedInIcon />}
                                    {social.icon === 'twitter' && <TwitterIcon />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Columns */}
                <div className="flex gap-20 md:gap-32">
                    {data.columns.map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-8">
                            <h4 className="text-white text-lg font-semibold tracking-wide">{col.title}</h4>
                            <ul className="flex flex-col gap-5">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href={link.href} className="text-white/50 hover:text-white transition-colors text-[15px] font-medium tracking-tight">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Large watermark text */}
        <div className="relative w-full overflow-hidden select-none pointer-events-none mt-auto">
            <h2 className="text-[28vw] font-bold text-transparent leading-none tracking-tighter text-center translate-y-[20%] uppercase border-outline-text">
                GHCI
            </h2>
            <style jsx>{`
                .border-outline-text {
                    background: linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                }
            `}</style>
        </div>
    </footer>
  );
}
