import AipNavbar from '@/components/eventivee/AipNavbar';
import AipHero from '@/components/eventivee/AipHero';
import AipWhatIs from '@/components/eventivee/AipWhatIs';
import AipCategories from '@/components/eventivee/AipCategories';
import AipBenefits from '@/components/eventivee/AipBenefits';
import AipSplitSection from '@/components/eventivee/AipSplitSection';
import AipHowToApply from '@/components/eventivee/AipHowToApply';
import AipCTA from '@/components/eventivee/AipCTA';
import Footer from '@/components/eventivee/Footer';

// Data loaders
import { getContentData } from '@/lib/content';

export const metadata = {
  title: "Advancing Inclusion Program (AIP) - GHCI 27",
  description: "A Scholarship Designed to Expand Access. Attend GHCI 27. Fully Sponsored.",
};

export default function AipPage() {
  const aipData = getContentData('aip');
  const footerData = getContentData('footer');

  // Programmatically adjust relative footer links to work from the /aip subpage
  const aipFriendlyFooterData = footerData
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

  if (!aipData) {
    return (
      <div className="min-h-screen bg-[#070708] flex items-center justify-center text-white">
        <p className="text-xl">Content not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#070708] selection:bg-[#b02677] selection:text-white font-sans text-white overflow-x-hidden">
      <AipNavbar />
      
      <AipHero data={aipData as any} />
      
      <AipWhatIs data={aipData as any} />
      
      <AipCategories data={aipData as any} />
      
      <AipBenefits data={aipData as any} />
      
      <AipSplitSection data={aipData as any} />
      
      <AipHowToApply data={aipData as any} />
      
      <AipCTA data={aipData as any} />
      
      {aipFriendlyFooterData && <Footer data={aipFriendlyFooterData as any} />}
    </main>
  );
}
