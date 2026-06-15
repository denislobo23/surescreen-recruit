import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SureScreen Recruit — AI-Powered Candidate Screening",
  description:
    "Stop sifting through hundreds of unqualified applications. SureScreen Recruit uses AI hiring manager clones to interview, rank and shortlist candidates — so you only meet the best.",
  openGraph: {
    title: "SureScreen Recruit",
    description: "AI hiring manager clones that interview candidates 24/7.",
    url: "https://surescreen.com.au",
    siteName: "SureScreen Recruit",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
