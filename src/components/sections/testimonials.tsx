"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Creative Business Owner",
    text: "Nexora transformed our online presence with a modern platform that looks premium and performs flawlessly.",
  },
  {
    name: "Daniel T.",
    role: "Startup Founder",
    text: "Fast communication, clean execution, and strong technical skills. The final product exceeded expectations.",
  },
  {
    name: "Michael A.",
    role: "Brand Consultant",
    text: "Working with Nexora was smooth from start to finish. They understand both design and business needs.",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-primary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Clients Say"
          subtitle="Businesses trust Nexora to deliver systems that perform, scale, and create impact."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card gradient-border rounded-2xl p-6 group flex flex-col gap-5 transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_0_30px_rgba(59,130,246,0.15),0_0_30px_rgba(139,92,246,0.1)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 flex items-center justify-center shrink-0">
                <Quote size={18} className="text-[--color-primary]" />
              </div>

              <p className="text-[--color-foreground]/80 leading-relaxed text-sm flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="h-px bg-gradient-to-r from-[--color-primary]/30 to-[--color-secondary]/30" />

              <div>
                <p className="font-bold text-white text-sm">{t.name}</p>
                <p className="text-xs text-[--color-muted] mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}