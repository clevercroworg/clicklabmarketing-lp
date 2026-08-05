import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClickLab Marketing | Healthcare & Addiction Treatment Marketing Agency",
  description:
    "Generate more qualified calls, higher admissions, and sustainable growth for treatment centers and healthcare providers with ClickLab Marketing.",
  keywords: [
    "Healthcare Marketing",
    "Addiction Treatment Center Marketing",
    "Rehab Lead Generation",
    "Medical SEO",
    "Google Ads for Rehab",
    "Patient Admissions Growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
