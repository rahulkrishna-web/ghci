import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Semibold.woff2",
      weight: "500 600",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
});

export const metadata: Metadata = {
  title: "GHCI 27 - AnitaB.org India",
  description: "Official microsite for Grace Hopper Celebration India 2027",
  icons: {
    icon: "/favicon.png",
  },
};

import ControlPanel from "@/components/eventivee/ControlPanel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${proximaNova.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRFZ6J6W');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRFZ6J6W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <ControlPanel />
      </body>
    </html>
  );
}

