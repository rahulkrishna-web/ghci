import Navbar from '@/components/eventivee/Navbar';
import Footer from '@/components/eventivee/Footer';

import AbiaHero from '@/components/eventivee/AbiaHero';
import AbiaWhatIs from '@/components/eventivee/AbiaWhatIs';
import AbiaCategories from '@/components/eventivee/AbiaCategories';
import AbiaRecipients from '@/components/eventivee/AbiaRecipients';
import AbiaWhoCan from '@/components/eventivee/AbiaWhoCan';
import AbiaProcess from '@/components/eventivee/AbiaProcess';
import AbiaDates from '@/components/eventivee/AbiaDates';
import AbiaCTA from '@/components/eventivee/AbiaCTA';
import AbiaWinners from '@/components/eventivee/AbiaWinners';

// Data loaders
import { getContentData } from '@/lib/content';

export const metadata = {
  title: "Anita Borg Impact Awards (ABIA) - GHCI 27",
  description: "Celebrating women creating impact through technology.",
};

export default function AbiaPage() {
  const abiaData = getContentData('abia');
  const footerData = getContentData('footer');

  if (!abiaData) {
    return (
      <div className="min-h-screen bg-[#070708] flex items-center justify-center text-white">
        <p className="text-xl">Content not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#070708] selection:bg-[#A32482] selection:text-white font-sans text-white overflow-x-hidden">
      <Navbar />
      
      <AbiaHero data={abiaData as any} />
      
      <AbiaWhatIs data={abiaData as any} />
      
      <AbiaCategories data={abiaData as any} />
      
      <AbiaRecipients data={abiaData as any} />
      
      <AbiaWhoCan data={abiaData as any} />
      
      <AbiaProcess data={abiaData as any} />
      
      <AbiaDates data={abiaData as any} />
      
      <AbiaCTA data={abiaData as any} />
      
      <AbiaWinners data={abiaData as any} />
      
      {footerData && <Footer data={footerData as any} />}
    </main>
  );
}
