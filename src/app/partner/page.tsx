import AipNavbar from '@/components/eventivee/AipNavbar';
import PartnerWithUs from '@/components/eventivee/PartnerWithUs';
import TrustedBy from '@/components/eventivee/TrustedBy';
import Footer from '@/components/eventivee/Footer';
import { getContentData } from '@/lib/content';

export const metadata = {
  title: "Partner With Us - GHCI 27",
  description: "Partner with GHCI to access top tech talent, build brand visibility, and engage with a highly skilled and diverse community at scale.",
};

export default function PartnerPage() {
  const partnerData = getContentData('partner-with-us');
  const footerData = getContentData('footer');

  // Programmatically adjust relative footer links to work from the /partner subpage
  const partnerFriendlyFooterData = footerData
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

  if (!partnerData) {
    return (
      <div className="min-h-screen bg-[#070708] flex items-center justify-center text-white">
        <p className="text-xl">Content not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#070708] selection:bg-[#b02677] selection:text-white font-sans text-white overflow-x-hidden flex flex-col justify-between">
      <div>
        <AipNavbar />
        <PartnerWithUs data={partnerData as any} isPage={true} />
        <TrustedBy data={partnerData as any} />
      </div>
      {partnerFriendlyFooterData && <Footer data={partnerFriendlyFooterData as any} />}
    </main>
  );
}
