"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Gradient line separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--color-primary]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Build"
          subtitle="End-to-end digital solutions engineered for performance, security, and scale"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-8 gradient-border group hover:translate-y-[-4px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15),0_0_60px_rgba(139,92,246,0.1)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon
                  size={24}
                  className="text-[--color-primary]"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-[--color-muted] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
