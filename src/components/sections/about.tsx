"use client";

import { Award, Zap, Target, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end application development from responsive frontends to scalable backend architectures.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description:
      "Turning complex business requirements into clean, efficient, and maintainable code.",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description:
      "Building fast, optimized applications with a focus on user experience and Core Web Vitals.",
  },
  {
    icon: Award,
    title: "Certified Developer",
    description:
      "Responsive Web Design & JavaScript Algorithms and Data Structures certified.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Building the future of the web, one application at a time"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-[--color-muted] leading-relaxed">
              I&apos;m a full-stack developer passionate about building
              real-world, scalable web applications that solve genuine problems.
              My approach combines clean architecture with performance-first
              development to deliver products that users love.
            </p>
            <p className="text-lg text-[--color-muted] leading-relaxed">
              From designing responsive interfaces with React and Tailwind CSS
              to architecting robust backend systems with Node.js and
              PostgreSQL, I bring ideas to life with code that&apos;s both
              elegant and efficient.
            </p>
            <p className="text-lg text-[--color-muted] leading-relaxed">
              Certified in Responsive Web Design and JavaScript Algorithms &
              Data Structures, I&apos;m committed to continuous learning and
              staying ahead in the ever-evolving tech landscape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-5 gradient-border group hover:translate-y-[-2px] transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-[--color-primary]" />
                </div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-[--color-muted]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
