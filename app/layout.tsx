import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant K. Sahni — AI-Accelerated Product Engineering",
  description:
    "I help founders and teams turn ideas into working software using AI-accelerated development — and help existing products become faster, more reliable and ready to scale.",
  keywords: ["Prashant K. Sahni", "Product Engineer", "AI-Accelerated Development", "Full Stack Developer", "Next.js", "React", "Python", "Go", "AWS"],
  authors: [{ name: "Prashant K. Sahni", url: "https://www.linkedin.com/in/prashantsahni5/" }],
  openGraph: {
    title: "Prashant K. Sahni — AI-Accelerated Product Engineering",
    description: "I help founders and teams turn ideas into working software using AI-accelerated development — and help existing products become faster, more reliable and ready to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}


