import AipNavbar from '@/components/eventivee/AipNavbar';
import WequestHero from '@/components/eventivee/WequestHero';
import WequestWhatIs from '@/components/eventivee/WequestWhatIs';
import WequestGains from '@/components/eventivee/WequestGains';
import WequestWhoCanApply from '@/components/eventivee/WequestWhoCanApply';
import WequestWhyApply from '@/components/eventivee/WequestWhyApply';
import WequestProcess from '@/components/eventivee/WequestProcess';
import WequestSelection from '@/components/eventivee/WequestSelection';
import WequestDates from '@/components/eventivee/WequestDates';
import WequestCTA from '@/components/eventivee/WequestCTA';
import Footer from '@/components/eventivee/Footer';

// Data loaders
import { getContentData } from '@/lib/content';

export const metadata = {
  title: "WeQuest - GHCI 27",
  description: "Pitch. Connect. Grow. WeQuest is the GHCI platform for early-stage tech startups to showcase their innovations and solutions.",
};

export default function WequestPage() {
  const wequestData = getContentData('wequest');
  const footerData = getContentData('footer');

  // Programmatically adjust relative footer links to work from the /wequest subpage
  const wequestFriendlyFooterData = footerData
    ? {
        ...footerData,
        columns: (footerData as any).columns?.map((col: any) => ({
          ...col,
          links: col.links?.map((link: any) => ({
            ...link,
            href: link.href?.startsWith('#') ? `/${link.href}` : link.href,
          })),
        })),
      }
    : null;

  if (!wequestData) {
    return (
      <div className="min-h-screen bg-[#070708] flex items-center justify-center text-white">
        <p className="text-xl">Content not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#070708] selection:bg-[#b02677] selection:text-white font-sans text-white overflow-x-hidden">
      <AipNavbar />
      
      <WequestHero data={wequestData as any} />
      
      <WequestWhatIs data={wequestData as any} />
      
      <WequestGains data={wequestData as any} />
      
      <WequestWhoCanApply data={wequestData as any} />
      
      <WequestWhyApply data={wequestData as any} />
      
      <WequestProcess data={wequestData as any} />
      
      <WequestSelection data={wequestData as any} />
      
      <WequestDates data={wequestData as any} />
      
      <WequestCTA data={wequestData as any} />
      
      {wequestFriendlyFooterData && <Footer data={wequestFriendlyFooterData as any} />}
    </main>
  );
}
