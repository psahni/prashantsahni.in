import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant K. Sahni — AI-Accelerated Product Engineering",
  description:
    "I help founders and teams turn ideas into working software — and help existing products become faster, more reliable and ready to scale.",
  keywords: ["Prashant K. Sahni", "Product Engineer", "AI-Accelerated Development", "Full Stack Developer", "Next.js", "React", "Python", "Go", "AWS"],
  authors: [{ name: "Prashant K. Sahni", url: "https://www.linkedin.com/in/prashantsahni5/" }],
  openGraph: {
    title: "Prashant K. Sahni — AI-Accelerated Product Engineering",
    description: "I help founders and teams turn ideas into working software — and help existing products become faster, more reliable and ready to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

