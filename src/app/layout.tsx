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
  title: "Briman Paul | Full Stack Developer — Nexora",
  description:
    "Full Stack Developer building scalable, high-performance web applications. Specializing in React, TypeScript, Node.js, and modern web technologies.",
  keywords: [
    "Briman Paul",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Briman Paul" }],
  openGraph: {
    title: "Briman Paul | Full Stack Developer — Nexora",
    description:
      "Full Stack Developer building scalable, high-performance web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briman Paul | Full Stack Developer",
    description:
      "Full Stack Developer building scalable, high-performance web applications.",
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
