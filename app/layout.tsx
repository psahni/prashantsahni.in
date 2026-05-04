import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant Sahni — Engineering Leader & Developer",
  description:
    "Portfolio of Prashant Sahni — Engineering Leader and Full-Stack Developer specialising in scalable backend systems, cloud architecture, and engineering team leadership.",
  keywords: ["Prashant Sahni", "Engineering Leader", "Full Stack Developer", "Go", "Node.js", "React", "AWS", "System Design"],
  authors: [{ name: "Prashant Sahni", url: "https://www.linkedin.com/in/prashantsahni5/" }],
  openGraph: {
    title: "Prashant Sahni — Engineering Leader & Developer",
    description: "Portfolio of Prashant Sahni — Engineering Leader and Full-Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
