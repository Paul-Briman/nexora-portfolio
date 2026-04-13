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
  title: "Nexora — Scalable Digital Systems for Modern Businesses",
  description:
    "Nexora is a digital agency that designs and develops high-performance web applications, backend systems, and business automation for startups and enterprises worldwide.",
  keywords: [
    "Nexora",
    "digital agency",
    "web development",
    "full-stack applications",
    "API development",
    "business automation",
    "React",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Nexora" }],
  openGraph: {
    title: "Nexora — Scalable Digital Systems for Modern Businesses",
    description:
      "We design and develop high-performance web applications for startups, businesses, and entrepreneurs worldwide.",
    type: "website",
    siteName: "Nexora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora — Scalable Digital Systems",
    description:
      "High-performance web applications, backend systems, and business automation for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
