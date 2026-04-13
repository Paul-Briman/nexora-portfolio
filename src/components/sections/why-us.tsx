"use client";

import { whyUsItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-primary]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Nexora"
          subtitle="We don't just write code — we engineer systems built to last"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsItems.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-6 gradient-border group transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1),0_0_30px_rgba(139,92,246,0.1)] hover:translate-y-[-4px] h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon
                  size={24}
                  className="text-[--color-primary] group-hover:text-[--color-secondary] transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
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
