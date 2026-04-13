"use client";

import { Rocket, Users, Globe, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: Rocket,
    title: "Mission-Driven",
    description:
      "We build for impact — every line of code solves a real business problem.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your goals drive our architecture decisions. We build what your business needs.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We serve clients worldwide, from local startups to international brands.",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    description:
      "React, Node.js, TypeScript, PostgreSQL — we use the tools that perform.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Nexora"
          subtitle="A modern digital agency solving real business problems"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - text */}
          <div className="space-y-6">
            <p className="text-lg text-[--color-muted] leading-relaxed">
              Nexora is a digital agency that builds scalable web applications
              and backend systems for startups, businesses, and entrepreneurs.
              We don&apos;t build templates — we engineer custom solutions
              tailored to each client&apos;s unique challenges.
            </p>
            <p className="text-lg text-[--color-muted] leading-relaxed">
              From responsive frontends to robust API architectures, we handle
              every layer of the stack. Our focus is on performance, security,
              and clean design that drives real business results.
            </p>
            <p className="text-lg text-[--color-muted] leading-relaxed">
              Based on a philosophy of quality over quantity, we take on select
              projects and deliver systems that are production-ready from day
              one — built to grow with your business.
            </p>
          </div>

          {/* Right column - 2x2 grid */}
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
