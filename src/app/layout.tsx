import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova/Proxima Nova Extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
});

export const metadata: Metadata = {
  title: "GHCI 2027 Microsite",
  description: "Official microsite for Grace Hopper Celebration India 2027",
};

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
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
