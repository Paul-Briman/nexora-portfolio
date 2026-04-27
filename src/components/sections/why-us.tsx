"use client";

import { useEffect, useRef, useState } from "react";
import { whyUsItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const STATS = [
  { end: 50, suffix: "+", label: "Projects Delivered" },
  { end: 99.9, suffix: "%", label: "Uptime Solutions", decimal: true },
  { end: 10, suffix: "+", label: "Technologies Mastered" },
  { end: 24, suffix: "hr", label: "Avg Response Time" },
] as const;

function useCountUp(
  end: number,
  duration: number,
  active: boolean,
  decimal?: boolean
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let raf: number;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * end);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return decimal ? value.toFixed(1) : String(Math.floor(value));
}

function StatCard({
  end,
  suffix,
  label,
  decimal,
  active,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  decimal?: boolean;
  active: boolean;
  delay: number;
}) {
  const [delayedActive, setDelayedActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setDelayedActive(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  const display = useCountUp(end, 1800, delayedActive, decimal);

  return (
    <div
      className={`glass-card gradient-border rounded-2xl p-6 text-center group transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_0_40px_rgba(59,130,246,0.2),0_0_40px_rgba(139,92,246,0.15)] ${
        active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-3 tabular-nums leading-tight">
        {display}
        {suffix}
      </div>
      <div className="text-xs text-[--color-muted] font-semibold uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  const [cardsActive, setCardsActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardsRef.current) obs.observe(cardsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-primary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Nexora"
          subtitle="We combine modern engineering, thoughtful design, and real-world execution to build systems that perform."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              {...stat}
              active={statsActive}
              delay={i * 120}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[--color-border]" />
          <span className="text-[--color-muted] text-sm font-semibold uppercase tracking-widest px-2">
            What You Get
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[--color-border]" />
        </div>

        {/* Benefit Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsItems.map((item, i) => (
            <div
              key={item.title}
              className={`glass-card rounded-2xl p-7 gradient-border group transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.12),0_0_30px_rgba(139,92,246,0.1)] hover:translate-y-[-4px] h-full ${
                cardsActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                <item.icon
                  size={24}
                  className="text-[--color-primary] group-hover:text-[--color-secondary] transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}